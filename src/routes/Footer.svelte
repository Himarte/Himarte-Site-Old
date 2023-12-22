<script>
	import LogoRodape from '$lib/assets/img/logos/logo-nome.png';
	import iconeFacebook from '$lib/assets/img/icons/facebook.svg';
	import iconeInstagram from '$lib/assets/img/icons/instagram.svg';
	import iconeLinkedin from '$lib/assets/img/icons/linkedin.svg';
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon
	} from 'flowbite-svelte';
	import { Facebook, Instagram, Linkedin } from 'lucide-svelte';
</script>

<Footer class="flex h-full w-full flex-col border-t border-primary-500/30">
	<div class="w-full items-center justify-between px-5 pb-5 md:flex">
		<div>
			<h2 class="border-opacity-20 py-3 text-sm font-semibold uppercase text-white">Localização</h2>
			<FooterLinkGroup>
				<FooterLink liClass="" href="/">R. Manoel Antônio de Barros, 290</FooterLink>
				<FooterLink liClass="" href="/">Centro, Santa Cruz do Sul</FooterLink>
			</FooterLinkGroup>
		</div>
		<div class="hidden justify-center md:flex">
			<FooterBrand imgClass="w-36" href="/" src={LogoRodape} alt="Logo HiMarte" />
		</div>
		<div>
			<h2 class="py-3 text-sm font-semibold uppercase text-white">Links Uteis</h2>
			<FooterLinkGroup>
				<FooterLink liClass="" href="/">GitHub</FooterLink>
				<FooterLink liClass="" href="/">Discord</FooterLink>
			</FooterLinkGroup>
		</div>
	</div>
	<hr class="border-primary-500/30" />
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
