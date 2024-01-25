<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	export let img: string;
	export let alt: string;
</script>

<img
	src={img}
	loading="lazy"
	{alt}
	class="card flex w-40 items-center justify-center rounded-3xl"
	transition:fade={{ duration: 500, easing: cubicOut }}
/>
