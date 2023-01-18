<p align="center">
  <a href="https://imgix.com/">
    <img src="https://avatars.githubusercontent.com/u/2793044?s=200&v=4" alt="imgix Logo">
    <h1 align="center">&lt;IxPlayer/&gt;</h1>
  </a>
  <a href="https://npmcharts.com/compare/@imgix/ix-player-react?interval=30"><img src="https://img.shields.io/npm/dm/@imgix/ix-player-react.svg?sanitize=true" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/@imgix/ix-player-react"><img src="https://img.shields.io/npm/v/@imgix/ix-player-react.svg?sanitize=true" alt="Version"></a>
    <a href="https://www.npmjs.com/package/@imgix/ix-player-react"><img src="https://img.shields.io/npm/l/@imgix/ix-player-react.svg?sanitize=true" alt="License"></a>
</p>

# Introduction

`<IxPlayer />` is the official imgix React video player component, built on top of our [ix-player web component](../ix-player) and [Media Chrome](https://media-chrome.org).

# Installation

```shell
npm install @imgix/ix-player-react
```

or

```shell
yarn add @imgix/ix-player-react
```

# Usage

```jsx
import IxPlayer from '@imgix/ix-player-react';

<IxPlayer
  src="my.domain.imgix.video/my-video.mp4?fm=hls"
  type="hls"
/>;
```

### Lazy-loading

Defer loading of IxPlayer by importing from `@imgix/ix-player-react/lazy`.

```jsx
import IxPlayer from '@imgix/ix-player-react/lazy';

<IxPlayer
  loading="viewport"
  src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=hls"
  type="hls"
  gifPreview
  posterParams="video-thumbnail-time=2"
/>;
```

If you are generating your pages with a Node.js server (for example, [Next.js](https://nextjs.org/docs/basic-features/data-fetching/)), consider using `@imgix/ix-player-react/lazy` with a blurhash library and imgix Video API's `video-generate` parameter to generate a placeholder to display during loading.

# Docs

API reference lives [on Github](./REFERENCE.md).
