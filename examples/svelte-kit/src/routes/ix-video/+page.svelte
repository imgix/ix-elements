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
			aspect-ratio: 16 / 9;
			margin: 1rem 0 2rem;
		}
	</style>
</svelte:head>

<ix-video
	src="https://assets.imgix.video/videos/alexa_ski_big_bear_mountain.MOV?fm=hls"
	type="hls"
	controls
	muted
></ix-video>

<a data-sveltekit-prefetch href="/">Browse Elements</a>
