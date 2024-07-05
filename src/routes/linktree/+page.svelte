<script lang="ts">
	import astroColorido from '$lib/assets/img/extras/astro-costas.webp';
	import appStore from '$lib/assets/img/logos/appleStore.webp';
	import googlePlay from '$lib/assets/img/logos/googleStore.webp';
	import mobileFrame from '$lib/assets/img/extras/mobile.webp';
	import instagramIcon from '$lib/assets/img/extras/instaIcon.webp';
	import facebookIcon from '$lib/assets/img/extras/facebookIcone.webp';
	import linkedinIcon from '$lib/assets/img/extras/linkedinIcon.webp';
	import whatsappIcon from '$lib/assets/img/extras/whatsIcon.webp';
	import logoNomeComepleto from '$lib/assets/img/logos/logo-nome.webp';
</script>

<div
	class="flex w-full h-full justify-center items-center md:bg-blend-saturation bg-gradient-to-r from-[#0f1829] to-[#0A101B] relative"
>
	<img
		src={mobileFrame}
		alt="Frame de um iphone"
		class="absolute h-full w-[27%] z-20 hidden md:flex aspect-auto"
	/>
	<div class="flex w-full md:w-1/4 h-full md:h-[93%] relative">
		<img
			src={astroColorido}
			alt="Astronauta"
			class="absolute object-cover h-full w-full mix-blend-difference !rounded-3xl aspect-auto blur-[3px]"
		/>
		<nav
			class="flex flex-col justify-center absolute items-center z-30 w-full h-full !bg-transparent gap-5"
		>
			<a
				target="_blank"
				href="https://himarte.com.br/"
				class="w-full absolute z-40 top-16 md:top-14 flex justify-center items-center"
			>
				<img src={logoNomeComepleto} alt="Logo Himarte" class="w-1/2" />
			</a>

			<div class="w-5/6 flex items-center justify-center gap-3 mb-10">
				<a
					target="_blank"
					href="https://apps.apple.com/ro/app/himarte-net/id6448640271"
					class="w-1/2 card-hover"
				>
					<img src={appStore} alt="Apple Store" />
				</a>
				<a
					href="https://play.google.com/store/apps/details?id=br.com.portal.himarte&hl=pt_BR&gl=US&pli=1"
					class="w-1/2 card-hover"
				>
					<img src={googlePlay} alt="Google Play" />
				</a>
			</div>
			<div class="w-2/5 gap-10 flex justify-center items-center mb-5">
				<a target="_blank" href="https://www.facebook.com/himarte.net/" class="w-1/2 card-hover">
					<img src={facebookIcon} alt="Facebook" />
				</a>
				<a target="_blank" href="https://www.instagram.com/himarte_net/" class="w-1/2 card-hover">
					<img src={instagramIcon} alt="Instagram" />
				</a>
			</div>
			<div class="w-2/5 gap-10 flex justify-center items-center">
				<a
					target="_blank"
					href="https://www.linkedin.com/company/himartenet/"
					class="w-1/2 card-hover"
				>
					<img src={linkedinIcon} alt="Linkedin" />
				</a>
				<a
					target="_blank"
					href="https://wa.me/555130568251?text=Ola!%20Tudo%20bem?"
					class="w-1/2 card-hover"
				>
					<img src={whatsappIcon} alt="Whatsapp" />
				</a>
			</div>
		</nav>
	</div>
</div>
