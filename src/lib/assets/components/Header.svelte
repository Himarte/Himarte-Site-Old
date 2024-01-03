<script lang="ts">
	import LogoPrincipal from '$lib/assets/img/logos/logo-nome.png';
	import { page } from '$app/stores';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar class="px-10" slotDefault="flex justify-center gap-5" background="bg-surface-700">
	<svelte:fragment slot="lead">
		<a href="/"><img src={LogoPrincipal} class="h-8 sm:h-10" alt="Himarte Logo" /></a>
	</svelte:fragment>
	<svelte:fragment>
		<a class=" md:text-2xl" href="/" class:active={$page.url.pathname === '/'}>Home</a>
		<a class=" md:text-2xl" href="/sobre" class:active={$page.url.pathname === '/sobre'}>Sobre</a>
		<a
			class=" md:text-2xl"
			href="/trabalhe-conosco"
			class:active={$page.url.pathname === '/trabalhe-conosco'}>Trabalhe Conosco</a
		>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<button class="btn variant-ghost-primary font-semibold">Area do Cliente</button>
	</svelte:fragment>
</AppBar>

<style>
	.active {
		font-weight: 600; /* Equivalente a font-semibold no Tailwind */
		color: rgb(var(--color-primary-500)); /* Utilizando a cor primary-500 */
	}

	.active:hover {
		color: rgb(var(--color-primary-600)); /* Mudança de cor no hover para primary-600 */
	}
</style>
