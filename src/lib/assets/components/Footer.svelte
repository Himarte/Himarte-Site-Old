<script>
	import LogoRodape from '$lib/assets/img/logos/logo-nome.png';
	import { Footer, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
	import { Facebook, Instagram, Linkedin } from 'lucide-svelte';
</script>

<Footer class="flex w-full border-t border-primary-500/30 md:flex-col">
	<div
		class="flex w-[80%] flex-col justify-evenly pb-5 pl-5 md:flex md:w-full md:flex-row md:items-center md:px-5"
	>
		<div class="md:w-1/3">
			<h2 class="border-opacity-20 py-3 text-sm font-semibold uppercase text-white">Matriz</h2>
			<FooterLinkGroup>
				<FooterLink liClass="" href="/">R. Manoel Antônio de Barros, 290</FooterLink>
				<FooterLink liClass="" href="/">Centro, Santa Cruz do Sul</FooterLink>
			</FooterLinkGroup>
		</div>
		<div class="hidden justify-center md:flex md:w-1/3">
			<FooterBrand imgClass="w-36" href="/" src={LogoRodape} alt="Logo HiMarte" />
		</div>
		<div class="md:w-1/3 md:text-end">
			<h2 class="py-3 text-sm font-semibold uppercase text-white">Links Uteis</h2>
			<FooterLinkGroup>
				<FooterLink liClass="" href="/sobre">Nossas Filiais</FooterLink>
				<FooterLink liClass="" href="/">Trabalhe conosco</FooterLink>
			</FooterLinkGroup>
		</div>
	</div>
	<div
		class="flex w-[20%] flex-col items-center justify-center gap-16 py-5 md:w-full md:flex-row md:p-5"
	>
		<FooterIcon href="/">
			<Facebook class="h-9 w-9  text-gray-500 hover:text-white" />
		</FooterIcon>
		<FooterIcon href="/">
			<Linkedin class="h-9 w-9  text-gray-500 hover:text-white" />
		</FooterIcon>
		<FooterIcon href="/">
			<Instagram class="h-9 w-9  text-gray-500 hover:text-white" />
		</FooterIcon>
	</div>
</Footer>
