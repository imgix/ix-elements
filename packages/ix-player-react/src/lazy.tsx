import React, { useEffect, useState } from 'react';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import ConditionalSuspense from './ConditionalSuspense';
import useIsBrowser from './useIsBrowser';
import useIsIntersecting from './useIsIntersecting';

import type { IxPlayerProps, IxPlayerRefAttributes } from './index';

interface IxPlayerElement extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  nohotkeys?: boolean | undefined;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'ix-player': IxPlayerElement;
    }
  }
}

const IxPlayerIndex = React.lazy(() => import('./index'));

interface FallbackProps extends IxPlayerProps {
  onIntersection?: () => void;
}
const Fallback = (props: FallbackProps) => {
  const { style, className, onIntersection, placeholder } = props;

  const intersectionRef = React.useRef<HTMLElement>(null);
  const isIntersecting = useIsIntersecting(intersectionRef);

  useEffect(() => {
    if (isIntersecting && onIntersection) {
      onIntersection();
    }
  }, [isIntersecting, onIntersection]);

  return (
    /* 
    Why do we have a ix-player element before the ix-player bundle is even loaded?
    Before the bundle is loaded, this ix-player element just acts like a div.
    However, by calling this placeholder "ix-player",
    it now gets the same CSS applied to it that the eventual "real" ix-player element will. 
    */
    <>
      <ix-player
        ref={intersectionRef}
        data-ix-player-react-lazy-placeholder
        placeholder={placeholder}
        style={
          {
            '--ix-player-react-lazy-placeholder': placeholder ? `url(${placeholder});` : '',
            ...style,
          } as React.CSSProperties
        }
        className={className || ''}
        // since there's a possibility that the bundle loads before Suspense clears this placeholder,
        // we need to make sure that the placeholder isn't interactive and its player chrome in doesn't get rendered
        nohotkeys
        aria-hidden
        tabIndex={-1}
      >
        <div data-ix-player-react-lazy-placeholder-overlay />
      </ix-player>
      <style>{
        /* css */ `
        ix-player[data-ix-player-react-lazy-placeholder] {
          aspect-ratio: 16/9;
          display: block;
          background-color: var(--media-background-color, #000);
          width: 100%;
          position: relative;
          background-image: var(--ix-player-react-lazy-placeholder);
          background-repeat: no-repeat;
          background-size: var(--media-object-fit, contain);
          background-position: var(--media-object-position, 50% 50%);
          --controls: none;
          --controls-backdrop-color: rgba(0, 0, 0, 0.6);
        }
        ix-player [data-ix-player-react-lazy-placeholder-overlay] {
          position: absolute;
          inset: 0;
          background-color: var(--controls-backdrop-color);
        }
      `
      }</style>
    </>
  );
};

interface IxPlayerLazyProps extends IxPlayerProps {
  loading?: 'page' | 'viewport';
}
const IxPlayer = React.forwardRef<IxPlayerRefAttributes, IxPlayerLazyProps>((props, ref) => {
  const { loading = 'viewport', ...playerProps } = props;

  // We load ix-player once two conditions are met:
  // 1. We're in a browser (react.lazy doesn't work on the server in react 17)
  const isBrowser = useIsBrowser();
  // 2. The player has entered the viewport, according to the fallback (if enabled).
  const [isIntersecting, setIsIntersecting] = useState(() => (loading === 'viewport' ? false : true));

  return (
    <ConditionalSuspense
      condition={isBrowser && isIntersecting}
      fallback={
        <Fallback
          style={playerProps.style}
          className={playerProps.className}
          placeholder={playerProps.placeholder}
          onIntersection={() => setIsIntersecting(true)}
        />
      }
    >
      <IxPlayerIndex {...playerProps} ref={ref} />
    </ConditionalSuspense>
  );
});

export default IxPlayer;
