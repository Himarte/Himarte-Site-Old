<script lang="ts">
	import astroColorido from '$lib/assets/img/extras/astro-costas.jpg';
	import appStore from '$lib/assets/img/logos/appleStore.png';
	import googlePlay from '$lib/assets/img/logos/googleStore.png';
	import mobileFrame from '$lib/assets/img/extras/mobile.png';
	import instagramIcon from '$lib/assets/img/extras/instaIcon.png';
	import facebookIcon from '$lib/assets/img/extras/facebookIcone.png';
	import linkedinIcon from '$lib/assets/img/extras/linkedinIcon.png';
	import whatsappIcon from '$lib/assets/img/extras/whatsIcon.png';
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
			class=" absolute object-cover h-full w-full mix-blend-difference !rounded-3xl aspect-auto blur-[3px]"
		/>
		<nav
			class="flex flex-col justify-center absolute items-center z-30 w-full h-full !bg-transparent gap-5"
		>
			<div class="w-5/6 flex items-center justify-center gap-3 mb-10">
				<a href="Qualquer" class="w-1/2 card-hover"><img src={appStore} alt="Apple Store" /></a>
				<a href="qualquer" class="w-1/2 card-hover"><img src={googlePlay} alt="Google Play" /></a>
			</div>
			<div class="w-2/5 gap-10 flex justify-center items-center mb-5">
				<a href="qualquer" class="w-1/2 card-hover"><img src={facebookIcon} alt="Facebook" /></a>
				<a href="qualquer" class="w-1/2 card-hover"><img src={instagramIcon} alt="Instagram" /></a>
			</div>
			<div class="w-2/5 gap-10 flex justify-center items-center">
				<a href="qualquer" class="w-1/2 card-hover"><img src={linkedinIcon} alt="Linkedin" /></a>
				<a href="qualquer" class="w-1/2 card-hover"><img src={whatsappIcon} alt="Whatsapp" /></a>
			</div>
		</nav>
	</div>
</div>
