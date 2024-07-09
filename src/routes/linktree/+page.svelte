<script lang="ts">
	import astroColorido from '$lib/assets/img/extras/astro-costas.webp';
	import appStore from '$lib/assets/img/logos/appleBottao.webp';
	import googlePlay from '$lib/assets/img/logos/googleMaior.webp';
	import mobileFrame from '$lib/assets/img/extras/mobile.webp';
	import instagramIcon from '$lib/assets/img/extras/instaIcon.webp';
	import facebookIcon from '$lib/assets/img/extras/facebookIcone.webp';
	import linkedinIcon from '$lib/assets/img/extras/linkedinIcon.webp';
	import whatsappIcon from '$lib/assets/img/extras/whatsIcon.webp';
	import logoNomeComepleto from '$lib/assets/img/logos/logo-nome-quliadade2.png';
</script>

<svelte:head>
	<title>HIMARTE - Sua Conexão com o Futuro</title>
	<meta
		name="description"
		content="Conecte-se com a Himarte através das redes sociais e baixe nosso app na Apple Store e Google Play."
	/>
	<meta
		name="keywords"
		content="Himarte, redes sociais, Apple Store, Google Play, Facebook, Instagram, Linkedin, Whatsapp"
	/>
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content="HIMARTE - Sua Conexão com o Futuro" />
	<meta
		property="og:description"
		content="Conecte-se com a Himarte através das redes sociais e baixe nosso app na Apple Store e Google Play."
	/>
	<meta property="og:image" content={astroColorido} />
	<meta property="og:url" content="https://himarte.com.br/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="HIMARTE - Sua Conexão com o Futuro" />
	<meta
		name="twitter:description"
		content="Conecte-se com a Himarte através das redes sociais e baixe nosso app na Apple Store e Google Play."
	/>
	<meta name="twitter:image" content={astroColorido} />
</svelte:head>

<div
	class="flex w-full h-full justify-center items-center md:bg-blend-saturation bg-gradient-to-r from-[#0f1829] to-[#0A101B] relative"
>
	<img
		src={mobileFrame}
		alt="Frame de um iPhone exibindo o aplicativo Himarte"
		class="absolute h-full w-[27%] z-20 hidden md:flex aspect-auto"
	/>
	<div class="flex w-full md:w-1/4 h-full md:h-[93%] relative">
		<img
			src={astroColorido}
			alt="Imagem colorida de um astronauta"
			class="absolute object-cover h-full w-full mix-blend-difference !rounded-3xl aspect-auto blur-[3px]"
		/>
		<nav
			class="flex flex-col justify-center absolute items-center z-30 w-full h-full !bg-transparent gap-10"
		>
			<a
				target="_blank"
				href="https://himarte.com.br/"
				class="w-full absolute z-40 top-16 md:top-14 flex justify-center items-center"
			>
				<img src={logoNomeComepleto} alt="Logotipo completo da Himarte" class="w-3/4" />
			</a>

			<div class="flex flex-col justify-center items-center gap-5">
				<div class="w-2/6 gap-5 flex justify-center items-center">
					<a target="_blank" href="https://www.facebook.com/himarte.net/" class="w-1/2 card-hover">
						<img src={facebookIcon} alt="Ícone do Facebook" />
					</a>
					<a target="_blank" href="https://www.instagram.com/himarte_net/" class="w-1/2 card-hover">
						<img src={instagramIcon} alt="Ícone do Instagram" />
					</a>
				</div>
				<div class="w-2/6 gap-5 flex justify-center items-center">
					<a
						target="_blank"
						href="https://www.linkedin.com/company/himartenet/"
						class="w-1/2 card-hover"
					>
						<img src={linkedinIcon} alt="Ícone do LinkedIn" />
					</a>
					<a
						target="_blank"
						href="https://wa.me/555130568251?text=Ola!%20Tudo%20bem?"
						class="w-1/2 card-hover"
					>
						<img src={whatsappIcon} alt="Ícone do WhatsApp" />
					</a>
				</div>
			</div>

			<div class="w-5/6 flex flex-col items-center justify-center gap-3">
				<a
					target="_blank"
					href="https://apps.apple.com/ro/app/himarte-net/id6448640271"
					class="w-2/3 card-hover"
				>
					<img src={appStore} alt="Botão para download na Apple Store" />
				</a>
				<a
					href="https://play.google.com/store/apps/details?id=br.com.portal.himarte&hl=pt_BR&gl=US&pli=1"
					class="w-2/3 card-hover"
				>
					<img src={googlePlay} alt="Botão para download na Google Play Store" />
				</a>
			</div>
		</nav>
	</div>
</div>
