<script lang="ts">
	import PrecoVenus from '$lib/assets/components/CardPrecos/PrecoVenus.svelte';
	import PrecoUrano from '$lib/assets/components/CardPrecos/PrecoUrano.svelte';
	import PrecoMarte from '$lib/assets/components/CardPrecos/PrecoMarte.svelte';
	import PrecoJupiter from '$lib/assets/components/CardPrecos/PrecoJupiter.svelte';
	import PrecoSaturno from '$lib/assets/components/CardPrecos/PrecoSaturno.svelte';
	import PrecoPlutao from '$lib/assets/components/CardPrecos/PrecoPlutao.svelte';
	import ParceiroUnimed from '$lib/assets/components/CardParceiros/CardUnimed.svelte';
	import ParceiroRbs from '$lib/assets/components/CardParceiros/CardRbs.svelte';
	import ParceiroSicred from '$lib/assets/components/CardParceiros/CardSicred.svelte';
	import ParceiroMedlife from '$lib/assets/components/CardParceiros/CardMedlife.svelte';

	import MainImg from '$lib/assets/img/extras/hi-astronauta-main.png';
	import Wave1t from '$lib/assets/img/extras/wave1t.svg';

	import { onMount } from 'svelte';
	import { P } from 'flowbite-svelte';

	export let y: number;
	let visible: boolean;

	onMount(() => {
		const handleScroll = () => {
			y = window.scrollY;
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
	let frase = 'O FUTURO É AQUI';
	let fraseDigitada = '';
	let i = 0;
	let typewriter: any;

	const typeChar = () => {
		if (i < frase.length) {
			fraseDigitada += frase[i];
			i += 1;
		} else {
			clearInterval(typewriter);
		}
	};

	const digitando = () => (typewriter = setInterval(typeChar, 130));

	digitando();
</script>

<svelte:window bind:scrollY={y} />

<picture
	class="flex h-screen items-end justify-center bg-cover bg-center bg-no-repeat pb-40"
	style="background-image: url({MainImg}) "
>
	<p class="fontSpace text-center text-2xl font-bold md:text-6xl">
		{fraseDigitada}
	</p>
</picture>

<img src={Wave1t} alt="Wave1" class="w-full content-evenly" />
<section class="flex flex-col items-center justify-center gap-10 p-10">
	<div class="flex flex-col gap-10 lg:flex-row">
		<PrecoVenus />
		<PrecoUrano />
		<PrecoMarte />
	</div>
	<div class="flex flex-col gap-10 lg:flex-row">
		<PrecoSaturno />
		<PrecoPlutao />
		<PrecoJupiter />
	</div>
</section>

<section class=" flex flex-col gap-10 py-16">
	<h2 class="fontSpace flex items-center justify-center text-center text-2xl lg:text-4xl">
		Nossos clientes
	</h2>
	<div class="flex justify-center gap-5">
		<enhanced:img
			src="/src/lib/assets/img/parceiros/logo-medlife.svg"
			alt="Logo Medlife"
			class="flex w-40 items-center justify-center rounded-3xl bg-tertiary-500"
		/>
		<enhanced:img
			src="/src/lib/assets/img/parceiros/logo-sicredi.svg"
			alt="Logo Sicredi"
			class="flex w-40 items-center justify-center rounded-3xl bg-tertiary-500"
		/>
		<enhanced:img
			src="/src/lib/assets/img/parceiros/logo-rbs.svg"
			alt="Logo RBS"
			class="flex w-40 items-center justify-center rounded-3xl bg-tertiary-500 p-3"
		/>
		<enhanced:img
			src="/src/lib/assets/img/parceiros/logo-unimed.svg"
			alt="Logo unimed"
			class="flex w-40 items-center justify-center rounded-3xl bg-tertiary-500"
		/>
	</div>
</section>
<section class=" flex h-[30rem] px-10 lg:h-[55rem] lg:justify-around">
	<enhanced:img
		src="/src/lib/assets/img/extras/mini-astro.png"
		alt="mini astro"
		class="hidden lg:flex lg:w-[35rem]"
	/>

	<div class="flex w-[55rem] flex-col items-center justify-center gap-5 lg:gap-10">
		<h1
			class="variant-glass-surface fontSpace flex items-center justify-center rounded-xl px-5 pt-2 text-center text-2xl lg:text-4xl"
		>
			Quem somos?
		</h1>
		<p class="text-md p-5 text-justify lg:text-2xl">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor aut, tempora possimus
			dignissimos quae eligendi atque quos dolorum reprehenderit totam quis debitis quibusdam fugit
			quod animi eius nam illum cum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
			nam excepturi amet aut repudiandae aliquam, nobis quas facilis perspiciatis voluptatem nemo
			doloribus, tempore porro cupiditate placeat rem voluptatum quis deleniti.
		</p>
	</div>
</section>

<style>
	.fontSpace {
		font-family: 'Xspace Regular';
		src: url('/src/lib/fonts/Xspace.otf') format('otf');
	}

	@font-face {
		font-family: 'Xspace Regular';
		src: url('/src/lib/fonts/Xspace.otf') format('truetype');
	}
</style>
