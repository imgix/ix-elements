<script setup lang="ts">
import "@imgix/ix-video";
</script>

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

<template>
  <ix-video
    src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=hls"
    type="hls"
    gif-preview
    thumbnail-params="video-thumbnail-time=2&mark-align=top,right&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L3ByZXNza2l0L2ltZ2l4LXByZXNza2l0LnBkZj93PTE2MCZmbT1wbmcmcGFnZT00"
  ></ix-video>

  <RouterLink to="/">Browse Elements</RouterLink>
</template>
