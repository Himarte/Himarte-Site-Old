<script lang="ts">
	import '../app.pcss';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import SpeedDial from '$lib/assets/components/SpeedDial.svelte';

	let y: number;
</script>

<svelte:window bind:scrollY={y} />

<div class="app">
	<Header {y} />

	<main>
		<slot {y} />
		<SpeedDial {y} />
	</main>
</div>
<Footer />
