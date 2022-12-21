<p align="center">
  <a href="https://imgix.com/">
    <img src="https://avatars.githubusercontent.com/u/2793044?s=200&v=4" alt="imgix Logo">
    <h1 align="center">&lt;ix-video/&gt;</h1>
  </a>
  <a href="https://npmcharts.com/compare/@imgix/ix-video?interval=30"><img src="https://img.shields.io/npm/dm/@imgix/ix-video.svg?sanitize=true" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/@imgix/ix-video"><img src="https://img.shields.io/npm/v/@imgix/ix-video.svg?sanitize=true" alt="Version"></a>
    <a href="https://www.npmjs.com/package/@imgix/ix-video"><img src="https://img.shields.io/npm/l/@imgix/ix-video.svg?sanitize=true" alt="License"></a>
</p>

# Introduction

`<ix-video>` is the official imgix video player web component that works anywhere.

The player UI is built on [Media Chrome](https://media-chrome.org) and [`<mux-video>`](../mux-video) drives the core video logic used to play videos.

# Installation

```shell
npm install @imgix/ix-video
```

or

```shell
yarn add @imgix/ix-video
```

# Usage

```html
<style>
  ix-video {
    display: block;
    width: 100%;
    margin: 1rem 0 2rem;
    background-color: #000;
    line-height: 0;
  }

  ix-video:not([audio]) {
    aspect-ratio: 16 / 9;
  }
</style>

<ix-video
  src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=hls"
  type="hls"
  gif-preview
  poster-params="video-thumbnail-time=2"
></ix-video>
```

# Docs

API reference lives [on Github](./REFERENCE.md).
