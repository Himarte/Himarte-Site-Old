<script lang="ts">
	import '../app.pcss';
	import Header from '$lib/assets/components/Header.svelte';
	import Footer from '$lib/assets/components/Footer.svelte';
	import './styles.css';
	import SpeedDial from '$lib/assets/components/SpeedDial.svelte';

	let y: number;
</script>

<svelte:window bind:scrollY={y} />

<Header {y} />

<main class="flex h-full w-full flex-col">
	<slot />
	<SpeedDial {y} />
</main>
<Footer />
