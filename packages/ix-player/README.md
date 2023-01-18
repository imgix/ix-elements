<p align="center">
  <a href="https://imgix.com/">
    <img src="https://avatars.githubusercontent.com/u/2793044?s=200&v=4" alt="imgix Logo">
    <h1 align="center">&lt;ix-player/&gt;</h1>
  </a>
  <a href="https://npmcharts.com/compare/@imgix/ix-player?interval=30"><img src="https://img.shields.io/npm/dm/@imgix/ix-player.svg?sanitize=true" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/@imgix/ix-player"><img src="https://img.shields.io/npm/v/@imgix/ix-player.svg?sanitize=true" alt="Version"></a>
    <a href="https://www.npmjs.com/package/@imgix/ix-video"><img src="https://img.shields.io/npm/l/@imgix/ix-video.svg?sanitize=true" alt="License"></a>
</p>

# Introduction

`<ix-player>` is the official imgix video player web component that works anywhere.

The player UI is built on [Media Chrome](https://media-chrome.org) and [`<ix-video>`](../ix-video) drives the core video logic used to play videos.

# Installation

```shell
npm install @imgix/ix-player
```

or

```shell
yarn add @imgix/ix-player
```

# Usage

```html
<style>
  ix-player {
    display: block;
    width: 100%;
    margin: 1rem 0 2rem;
    background-color: #000;
    line-height: 0;
  }

  ix-player:not([audio]) {
    aspect-ratio: 16 / 9;
  }
</style>

<ix-player
  src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=hls"
  type="hls"
  gif-preview
  poster-params="video-thumbnail-time=2"
></ix-player>
```

# Docs

API reference lives [on Github](./REFERENCE.md).
