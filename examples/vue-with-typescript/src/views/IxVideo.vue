<script setup lang="ts">
import "@imgix/ix-video";
</script>

<style>
ix-video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin: 1rem 0 2rem;
}
</style>

<template>
  <ix-video
    src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=hls"
    type="hls"
    controls
    muted
  ></ix-video>

  <RouterLink to="/">Browse Elements</RouterLink>
</template>
