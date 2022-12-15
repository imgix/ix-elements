<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	// this prevents the custom elements from being redefined when the REPL is updated and reloads, which throws an error
	// this means that any changes to the custom element won't be picked up without saving and refreshing the REPL
	// const oldRegister = customElements.define;
	// customElements.define = function(name, constructor, options) {
	// 	if (!customElements.get(name)) {
	// 		oldRegister(name, constructor, options);
	// 	}
	// }
	// import { page } from '$app/stores';
	import { onMount } from 'svelte';
	onMount(async () => {
		await import('@imgix/ix-video');
	});
</script>

<svelte:head>
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
</svelte:head>

<ix-video
	src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=hls"
	type="hls"
	gif-preview
	thumbnail-params="video-thumbnail-time=2&mark-align=top,right&mark64=aHR0cHM6Ly9hc3NldHMuaW1naXgubmV0L3ByZXNza2l0L2ltZ2l4LXByZXNza2l0LnBkZj93PTE2MCZmbT1wbmcmcGFnZT00"
></ix-video>

<a data-sveltekit-prefetch href="/">Browse Elements</a>
