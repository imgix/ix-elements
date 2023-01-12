<p align="center">
  <h1 align="center">&lt;ix-video/&gt;</h1>
  <a href="https://npmcharts.com/compare/@imgix/ix-video-react?interval=30"><img src="https://img.shields.io/npm/dm/@imgix/ix-video-react.svg?sanitize=true" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/@imgix/ix-video-react"><img src="https://img.shields.io/npm/v/@imgix/ix-video-react.svg?sanitize=true" alt="Version"></a>
    <a href="https://www.npmjs.com/package/@imgix/ix-video-react"><img src="https://img.shields.io/npm/l/@imgix/ix-video-react.svg?sanitize=true" alt="License"></a>
</p>

# Introduction

`<IxVideo/>` is a imgix-flavored React video component.

If you are familiar with using `<video />` + [Hls.js](https://github.com/video-dev/hls.js) in your application, then you'll feel right at home with this React component.

# Installation

If you're using `npm` or `yarn`, install that way:

## Package manager

```
yarn add @imgix/ix-video-react
```

or

```
npm i @imgix/ix-video-react
```

Then, import the library into your application with either `import` or `require`:

```js
import IxVideo from '@imgix/ix-video-react';
```

or

```js
const IxVideo = require('@imgix/ix-video-react');
```

## Features and benefits

Without `<IxVideo/>`, if you want to use the browser built-in HTML5 video element for playback you would have to wire up [Hls.js](https://github.com/video-dev/hls.js) yourself.

`<IxVideo/>` will automatically handle recoverable errors that happen during video playback. This is particularly handy for live streams that may experience disconnects.

`<IxVideo/>` will use the optimal Hls.js settings for Mux Video so you don't have to worry about that. `<IxVideo/>` will also periodically test new versions of Hls.js and upgrade to known stable versions so you don't have to worry about upgrading to a new version of Hls.js yourself.

## Usage

Loading this library in the browser will register a [custom web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) for `<mux-video>`.

Now you are free to use this web component in your HTML, just as you would with the HTML5 `<video>` element.

```jsx
const IxVideoExample = () => {
  return (
    <div>
      <h1>Simple IxVideo Example</h1>
      <IxVideo
        style={{ height: '100%', maxWidth: '100%' }}
        src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=mp4"
        controls
        autoPlay
        muted
      />
    </div>
  );
};
```

### Primary Props:
  - `video_title: string`: Title of the video player (e.g.: 'Awesome Show: Pilot')
`<IxVideo/>` can make optimizations based on the type of stream.
- `startTime: number (seconds)`: Set this to start playback of your media at some time other than 0.
- `gif-preview: boolean`: Set this to show a GIF whenever the mouse hovers over the player.

In addition, any props that you would use on a `<video>` element like `poster`, `controls`, `muted` and `autoPlay` are available and should work the same as they do when using a video element in react.

### Advanced: preferPlayback

By default `<IxVideo/>` will try to use native playback via the underlying `<video/>` tag whenever possible. However, it can also instead use an in-code player as long as the browser supports [Media Source Extensions](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API). This includes MSE in Mac OS Safari.

If you prefer to use the in-code MSE-based engine (currently hls.js) whenever possible, then simply set the `preferPlayback` prop to `mse`.

```jsx
<IxVideo
  style={{ height: '100%', maxWidth: '100%' }}
  src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=mp4"
  preferPlayback="mse"
  controls
/>
```

### Advanced: type

By default `<IxVideo/>` will try to figure out the type of media you're trying to play (for example, an HLS/m3u8 media source, an mp4, etc.) based the extension of the file from the `src` attribute's url. This allows `<IxVideo/>` to determine whether it can/should use an in-code player or native playback. By way of example, the code below has an identifiable "mp4" extension, so `<IxVideo/>` will rely on native playback via the underlying `<video/>` tag.

```jsx
<IxVideo
  src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.mp4"
  controls
/>
```

Sometimes, however, your `src` URL may not have an identifiable extension. In these cases, we recommend relying on the `type` attribute, similar to the `<source/>` tag's [type attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-type). Below is an example of explicitly declaring the MIME type for an HLS/m3u8 media source:

```jsx
<IxVideo
  style={{ height: '100%', maxWidth: '100%' }}
  src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=hls"
  type="hls"
  controls
/>
```

Or, for convenience, we also support the shorthand `type="hls`:

```jsx
<IxVideo
  src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=mp4"
  type="hls"
  controls
/>
```

# FAQ

### Can I use `<IxVideo/>` with `TypeScript`?

Yes! In fact, `@imgix-element/ix-video-react` is written entirely in `TypeScript` and provides a definitions file automatically (no additional installs needed).

### If I'm using imgix, do I have to use this library?

No, you do not. The way imgix delivers HLS video is compliant with the HLS spec. Any video player that supports HLS will work with IxVideo.

### If I'm not using IxVideo, can I still use this library?

You sure can! Pass in `src=""` with an HLS url.
