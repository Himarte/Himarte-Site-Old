<script lang="ts">
	import '../app.postcss';
	import { AppShell, Toast, type PopupSettings } from '@skeletonlabs/skeleton';
	import Header from '$lib/assets/components/Header.svelte';
	import Footer from '$lib/assets/components/Footer.svelte';
	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import { page } from '$app/stores';
	// Skeleton Stores
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let linktree = $page.url.pathname === '/linktree' ? false : true;
</script>

<Toast />

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		{#if linktree}
			<Header />
		{/if}
	</svelte:fragment>
	<!-- Page Route Content -->
	<main class="relative flex flex-col w-full h-full">
		<slot />
	</main>
	<svelte:fragment slot="pageFooter">
		{#if linktree}
			<Footer />
		{/if}
	</svelte:fragment>
</AppShell>
