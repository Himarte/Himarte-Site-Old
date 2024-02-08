<script lang="ts">
	import LogoPrincipal from '$lib/assets/img/logos/logo-nome.webp';
	import { page } from '$app/stores';
	import { AppBar } from '@skeletonlabs/skeleton';

	const links = [
		{ href: '/', text: 'Home' },
		{ href: '/sobre-nos', text: 'Sobre' },
		{ href: '/trabalhe-conosco', text: 'Trabalhe Conosco' }
	];
</script>

<AppBar class="px-10 md:px-28" slotDefault="flex justify-center gap-5" background="bg-surface-700">
	<svelte:fragment slot="lead">
		<a href="/" target="_self">
			<img src={LogoPrincipal} class="h-8 sm:h-10" alt="Logo da Himarte" />
		</a>
	</svelte:fragment>
	<svelte:fragment>
		<nav aria-label="Menu principal">
			<ul class="hidden md:flex" role="navigation">
				{#each links as link (link.href)}
					<a
						class="btn md:text-xl hover:variant-soft-primary"
						href={link.href}
						target="_self"
						class:active={$page.url.pathname === link.href}>{link.text}</a
					>
				{/each}
			</ul>
		</nav>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a
			href="https://himarte.portal.7az.com.br/login"
			target="_blank"
			class="flex btn-sm rounded-full md:btn variant-ghost-primary hover:variant-filled-primary font-semibold"
			aria-label="Acessar a área do cliente">Area do Cliente</a
		>
	</svelte:fragment>
</AppBar>

<style>
	.active {
		font-weight: 600;
		color: rgb(var(--color-primary-500));
	}

	.active:hover {
		color: rgb(var(--color-primary-600));
	}
</style>
