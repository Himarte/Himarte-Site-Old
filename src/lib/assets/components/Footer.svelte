<script lang="ts">
	// Importações
	import LogoRodape from '$lib/assets/img/logos/logo-nome.webp';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Facebook from 'lucide-svelte/icons/facebook';
	import Instagram from 'lucide-svelte/icons/instagram';
	import type { ComponentType } from 'svelte';
	import type { Icon } from 'lucide-svelte';

	type SocialLink = {
		href: string;
		component: ComponentType<Icon>;
		label: string;
	};

	const socialLinks: SocialLink[] = [
		{ href: 'https://www.facebook.com/himarte.net/', component: Facebook, label: 'Facebook' },
		{
			href: 'https://www.instagram.com/himarte_net/',
			component: Instagram,
			label: 'Instagram'
		},
		{
			href: 'https://www.linkedin.com/company/himarte-net/',
			component: Linkedin,
			label: 'Linkedin'
		}
	];
	const currentYear = new Date().getFullYear();
</script>

<footer class="flex flex-col justify-between md:h-36">
	<div class="flex flex-col md:flex-row md:px-32">
		<div class="flex flex-col items-center md:items-start md:w-1/3">
			<img src={LogoRodape} alt="Logo Himarte" class="w-32 md:w-36 h-8 md:h-10 mb-3" />
			<p class="hidden md:flex px-5 md:px-0 text-sm md:text-lg fontSpace">O futuro é aqui</p>
		</div>

		<ul class="flex items-center p-8 md:p-0 gap-10 md:w-1/3 justify-center">
			{#each socialLinks as { href, component: SocialIcon, label }}
				<a {href} aria-label={label}>
					<SocialIcon size={34} target="_blank" />
				</a>
			{/each}
		</ul>

		<ul class="hidden md:flex flex-col gap-3 md:w-1/3 md:items-end">
			<!-- Links adicionais -->
			<a href="/sobre-nos" class="text-primary-500 hover:text-primary-600">Sobre</a>
			<a href="/trabalhe-conosco" class="text-primary-500 hover:text-primary-600"
				>Trabalhe conosco</a
			>
			<a href="/sobre-nos" class="text-primary-500 hover:text-primary-600">Filiais</a>
		</ul>
	</div>
	<p class="text-center text-sm">&copy;{currentYear} Quiliao</p>
</footer>
