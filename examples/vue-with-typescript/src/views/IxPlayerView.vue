<script setup lang="ts">
import "@imgix/ix-player";
</script>

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

<template>
  <ix-player
    src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=hls"
    type="hls"
    gif-preview
    poster-params="video-thumbnail-time=2&mark-align=top,right&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L3ByZXNza2l0L2ltZ2l4LXByZXNza2l0LnBkZj93PTE2MCZmbT1wbmcmcGFnZT00"
  ></ix-player>

  <RouterLink to="/">Browse Elements</RouterLink>
</template>
