<p align="center">
  <h1 align="center">&lt;IxVideo/&gt;</h1>
  <a href="https://npmcharts.com/compare/@imgix/ix-video-react?interval=30"><img src="https://img.shields.io/npm/dm/@imgix/ix-video-react.svg?sanitize=true" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/@imgix/ix-video-react"><img src="https://img.shields.io/npm/v/@imgix/ix-video-react.svg?sanitize=true" alt="Version"></a>
    <a href="https://www.npmjs.com/package/@imgix/ix-video-react"><img src="https://img.shields.io/npm/l/@imgix/ix-video-react.svg?sanitize=true" alt="License"></a>
</p>

# Introduction

`<IxVideo />` is an imgix-flavored React video player component, built on top of our [ix-video web component](../ix-video) and [Media Chrome](https://media-chrome.org).

# Installation

```shell
npm install @imgix/ix-video-react
```

or

```shell
yarn add @imgix/ix-video-react
```

# Usage

```jsx
import IxVideo from '@imgix/ix-video-react';

<IxVideo
  src="my.domain.imgix.video/my-video.mp4?fm=hls"
  type="hls"
/>;
```

### Lazy-loading

Defer loading of Mux Player by importing from `@imgix/ix-video-react/lazy`.

```jsx
import IxVideo from '@imgix/ix-video-react/lazy';

<IxVideo
  loading="viewport"
  src="my.domain.imgix.video/my-video.mp4?fm=hls"
  type="hls"
/>;
```

If you are generating your pages with a Node.js server (for example, [Next.js](https://nextjs.org/docs/basic-features/data-fetching/)), consider using `@imgix/ix-video-react/lazy` with [`@mux/blurhash`](https://github.com/muxinc/blurhash) to generate a placeholder to display during loading.

# Docs

API reference lives [on Github](./REFERENCE.md).
