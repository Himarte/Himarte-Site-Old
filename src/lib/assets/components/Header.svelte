<script lang="ts">
	import LogoPrincipal from '$lib/assets/img/logos/logo-nome.webp';
	import { page } from '$app/stores';
	import { AppBar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import Phone from 'lucide-svelte/icons/phone';
	import PhoneIncoming from 'lucide-svelte/icons/phone-incoming';
	const links = [
		{ href: '/', text: 'Home' },
		{ href: '/sobre-nos', text: 'Sobre' },
		{ href: '/trabalhe-conosco', text: 'Trabalhe Conosco' }
	];
	const popupFeatured: PopupSettings = {
		event: 'click',
		target: 'popupFeatured',
		placement: 'bottom'
	};

	import { Clock8 } from 'lucide-svelte';

	let innerWidth: number;
</script>

<AppBar class="px-5 md:px-28" slotDefault="flex justify-center" background="bg-surface-600">
	<svelte:fragment slot="lead">
		<a href="/" target="_self">
			<img src={LogoPrincipal} class="h-6 sm:h-12 lg:min-w-36" alt="Logo da Himarte" />
		</a>
	</svelte:fragment>
	<svelte:fragment>
		<nav aria-label="Menu principal">
			<ul class="hidden md:flex gap-5" role="navigation">
				{#each links as link (link.href)}
					<a
						class="btn md:text-xl font-semibold hover:variant-soft-primary"
						href={link.href}
						target="_self"
						class:active={$page.url.pathname === link.href}>{link.text}</a
					>
				{/each}
			</ul>
		</nav>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="flex w-full h-9 gap-5 justify-center items-center">
			<a
				href="https://himarte.portal.7az.com.br/login"
				target="_blank"
				class="flex btn-sm h-10 rounded-full text-base md:text-xl md:btn variant-ghost-primary hover:variant-filled-primary font-semibold"
				aria-label="Acessar a área do cliente">Area do Cliente</a
			>

			{#if innerWidth <= 768}
				<a
					class="flex btn-icon variant-ghost-primary justify-center h-10 w-10 p-1 rounded-full"
					href="tel:5130568251"
				>
					<Phone />
				</a>
			{:else}
				<button
					class="btn-icon variant-ghost-primary hover:variant-filled-primary h-10 w-10 p-1 rounded-full"
					use:popup={popupFeatured}><Phone /></button
				>
			{/if}

			<div
				class="bg-[#111B2D] rounded-xl p-3 w-72 shadow-xl justify-center items-center border-[0.3px] border-opacity-65 border-surface-900"
				data-popup="popupFeatured"
			>
				<div class="flex justify-center gap-3 mb-1">
					<Clock8 />

					<span class="font-semibold">Horários de Atendimento</span>
				</div>
				<div class="flex justify-center">
					<span class="font-semibold">Segunda a Sabado</span>
				</div>
				<div class="flex justify-center mb-2">
					<span class="">08:30 - 12:00 | 13:00 - 22:00</span>
				</div>
				<div class="flex justify-center">
					<span class="font-semibold">Domingo</span>
				</div>
				<div class="flex justify-center mb-2">
					<span class="">08:00 - 12:00 | 13:00 - 17:00</span>
				</div>
				<div class="flex justify-center">
					<span class="font-semibold">Feriados</span>
				</div>
				<div class="flex justify-center">
					<span class=""> 13:00 - 17:00</span>
				</div>

				<div class="flex justify-center border-t mt-3 pt-3">
					<div class="flex gap-3 justify-center">
						<PhoneIncoming />

						<a
							href="https://wa.me/555130568251?text=Ola!%20Tudo%20bem?"
							target="_blank"
							class="hover:text-primary-500">(51) 3056-8251</a
						>
					</div>
				</div>
				<div
					class="arrow bg-surface-100-800-token border-[0.3px] border-l border-t border-opacity-65 border-surface-500"
				/>
			</div>
		</div>
	</svelte:fragment>
</AppBar>

<style>
	.active {
		font-weight: 600;
		color: rgb(var(--color-primary-500));
	}
</style>
