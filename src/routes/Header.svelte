<script lang="ts">
	import LogoPrincipal from '$lib/assets/img/logos/logo-nome.png';
	import { page } from '$app/stores';
	export let y: number;
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
	let activeClass = 'text-primary-600 hover:text-primary-500';
	let nonActiveClass = 'text-white hover:text-gray-300';
</script>

<Navbar let:NavContainer>
	<NavContainer
		fluid
		class="fixed start-0 top-0 z-20 bg-tertiary-500 px-5 sm:px-[4.4rem]  {y < 100
			? 'border-b border-primary-700'
			: ' '} sm:flex sm:items-center sm:justify-between"
	>
		<NavHamburger />

		<NavBrand href="/">
			<img src={LogoPrincipal} class="h-8 sm:h-10" alt="Himarte Logo" />
		</NavBrand>
		<Button
			href="https://portal.himarte.com.br/auth/facilita"
			target="_blank"
			pill
			class=" flex h-8 text-base font-bold md:order-2 md:h-10 md:text-lg">Area do cliente</Button
		>
		<NavUl
			class="order-1"
			divClass="w-full md:block md:w-auto "
			{activeUrl}
			{activeClass}
			{nonActiveClass}
		>
			<NavLi class="text-base md:text-2xl" href="/">Home</NavLi>
			<NavLi class="text-base md:text-2xl" href="/sobre">Sobre</NavLi>
			<NavLi class="text-base md:text-2xl" href="/contato">Contato</NavLi>
		</NavUl>
	</NavContainer>
</Navbar>
