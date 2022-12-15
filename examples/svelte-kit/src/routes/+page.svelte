<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Browse Mux Elements</title>
</svelte:head>

<nav>
	<ul>
		<li><a data-sveltekit-prefetch href="./mux-video" class="video">&lt;mux-video&gt;</a></li>
		<li><a data-sveltekit-prefetch href="./mux-audio" class="audio">&lt;mux-audio&gt;</a></li>
		<li><a data-sveltekit-prefetch href="./ix-video" class="player">&lt;ix-video&gt;</a></li>
	</ul>
</nav>
