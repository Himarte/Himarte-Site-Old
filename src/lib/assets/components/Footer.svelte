<script>
	import LogoRodape from '$lib/assets/img/logos/logo-nome.png';
	import { Footer, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
	import { Facebook, Instagram, Linkedin } from 'lucide-svelte';
</script>

<Footer class="flex h-full w-full flex-col border-t border-primary-500/30">
	<div class="w-full items-center px-5 pb-5 md:flex">
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
		<div class="text-end md:w-1/3">
			<h2 class="py-3 text-sm font-semibold uppercase text-white">Links Uteis</h2>
			<FooterLinkGroup>
				<FooterLink liClass="" href="/">GitHub</FooterLink>
				<FooterLink liClass="" href="/">Discord</FooterLink>
			</FooterLinkGroup>
		</div>
	</div>
	<div class="flex items-center justify-center gap-16 p-5">
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
