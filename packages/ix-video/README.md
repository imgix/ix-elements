<p align="center">
  <h1 align="center">&lt;ix-video/&gt;</h1>
  <a href="https://npmcharts.com/compare/@imgix/ix-video?interval=30"><img src="https://img.shields.io/npm/dm/@imgix/ix-video.svg?sanitize=true" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/@imgix/ix-video"><img src="https://img.shields.io/npm/v/@imgix/ix-video.svg?sanitize=true" alt="Version"></a>
    <a href="https://www.npmjs.com/package/@imgix/ix-video"><img src="https://img.shields.io/npm/l/@imgix/ix-video.svg?sanitize=true" alt="License"></a>
</p>

# Introduction

`<ix-video></ix-video>` is a imgix-flavored HTML5 video element.

If you are familiar with using `<video />` + [Hls.js](https://github.com/video-dev/hls.js) in your application, then you'll feel right at home with this web component.

# Installation

If you're using `npm` or `yarn`, install that way:

## Package manager

```
yarn add @imgix/ix-video
```

or

```
npm i @imgix/ix-video
```

Then, import the library into your application with either `import` or `require`:

```js
import '@imgix/ix-video';
```

or

```js
require('@imgix/ix-video');
```

## CDN option

Alternatively, use the CDN hosted version of this package:

```html
<script src="https://cdn.jsdelivr.net/npm/@imgix/ix-video@0"></script>
```

If you are using ECMAScript modules, you can also load the `ix-video.mjs` file with `type=module`:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@imgix/ix-video@0/dist/ix-video.mjs"></script>
```

## Features and benefits

Without `<ix-video>` if you want to use the browser built-in HTML5 video element for playback you would have to wire up [Hls.js](https://github.com/video-dev/hls.js) yourself.

`<ix-video>` will automatically handle recoverable errors that happen during video playback. This is particularly handy for live streams that may experience disconnects.

`<ix-video>` will use the optimial Hls.js settings for imgix Video so you don't have to worry about that. `<ix-video>` will also periodically test new versions of Hls.js and upgrade to known stable versions so you don't have to worry about upgrading to a new version of Hls.js yourself.

## Usage

Loading this library in the browser will register a [custom web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) for `<ix-video>`.

Now you are free to use this web component in your HTML, just as you would with the HTML5 `<video>` element.

```html
<body>
  <ix-video
    playback-id="DS00Spx1CV902MCtPj5WknGlR102V5HFkDe"
    metadata-video-title="Big Buck Bunny"
    metadata-viewer-user-id="user-id-1234"
    stream-type="on-demand"
    controls
  ></ix-video>
</body>
```

Attributes:
- `start-time: number (seconds)`: Set this to start playback of your media at some time other than 0.

All the other attributes that you would use on a `<video>` element like `poster`, `controls`, `muted` and `autoplay` are available and will work the same as they do with the HTML5 video element.

### Advanced: prefer-playback

By default `<ix-video>` will try to use native playback via the underlying `<video>` tag whenever possible.
However, it can also instead use an in-code player when the browser browser supports [Media Source Extension](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API).
This includes MSE in Mac OS Safari.

If you prefer to use the in-code MSE-based engine (currently hls.js) whenever possible, then set the `prefer-playback` attribute to `mse`.

```html
<ix-video
  playback-id="DS00Spx1CV902MCtPj5WknGlR102V5HFkDe"
  metadata-video-title="Big Buck Bunny"
  metadata-viewer-user-id="user-id-1234"
  prefer-playback="mse"
  controls
>
</ix-video>
```

### Advanced: type

By default `<ix-video>` will try to figure out the type of media you're trying to play (for example, an HLS/m3u8 media source, an mp4, etc.) based the extension of the file from the `src` attribute's url. This allows `<ix-video>` to determine whether it can/should use an in-code player or native playback. By way of example, the code below has an identifiable "mp4" extension, so `<ix-video>` will rely on native plyaback via the underlying `<video/>` tag.

```html
<ix-video
  src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"
  prefer-playback="mse"
  controls
>
</ix-video>
```

Sometimes, however, your `src` URL may not have an identifiable extension. In these cases, we recommend relying on the `type` attribute, similar to the `<source/>` tag's [type attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-type). Below is an example of explicitly declaring the MIME type for an HLS/m3u8 media source:

```html
<ix-video
  src="https://stream.notmux.com/path/to/an/hls/source/playlist"
  type="application/vnd.apple.mpegurl"
  prefer-playback="mse"
  controls
>
</ix-video>
```

Or, for convenience, we also support the shorthand `type="hls`:

```html
<ix-video
  src="https://stream.notmux.com/path/to/an/hls/source/playlist"
  type="hls"
  prefer-playback="mse"
  controls
>
</ix-video>
```

### Advanced: Use with React+TypeScript

Even though we don't (yet!) have our own `React` version of `<ix-video>`, you can still use it in your `React` app. However, if you're also using TypeScript, make sure you add the following TypeScript definitions, since custom elements (like as `<ix-video>`) will not be recognized as [Intrinsic Elements](https://www.typescriptlang.org/docs/handbook/jsx.html#intrinsic-elements):

```typescript
interface IxVideoHTMLAttributes<T> extends React.VideoHTMLAttributes<T> {
  debug?: boolean;
  autoplay?: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ix-video': React.DetailedHTMLProps<IxVideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
    }
  }
}
```

# FAQ

### If I'm using imgix, do I have to use this library?

No, you do not. The way imgix delivers HLS video is compliant with the HLS spec. Any video player that supports HLS will work with imgix Video.

### If I'm not using imgix Video API, can I still use this library?

You sure can! Pass in `src=""` with an HLS url.