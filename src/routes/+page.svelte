<script lang="ts">
	import PrecoVenus from '$lib/assets/components/CardPrecos/PrecoVenus.svelte';
	import PrecoSaturno from '$lib/assets/components/CardPrecos/PrecoSaturno.svelte';
	import PrecoMarte from '$lib/assets/components/CardPrecos/PrecoMarte.svelte';
	import PrecoJupiter from '$lib/assets/components/CardPrecos/PrecoJupiter.svelte';
	import PrecoUrano from '$lib/assets/components/CardPrecos/PrecoUrano.svelte';
	import PrecoPlutao from '$lib/assets/components/CardPrecos/PrecoPlutao.svelte';

	import MainImg from '$lib/assets/img/extras/hi-astronauta-main.png';
	import Wave1t from '$lib/assets/img/extras/wave1t.svg';

	import funtoPrecos from '$lib/assets/img/extras/fundo-planos.jpeg';
	import { onMount } from 'svelte';

	import { Tabs, TabItem } from 'flowbite-svelte';
	import { Briefcase, Building2, Home } from 'lucide-svelte';

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

<div class=" fundoPrecos flex flex-col items-center justify-center">
	<Tabs
		style="underline"
		defaultClass="flex justify-center items-center gap-10 pb-10"
		contentClass="flex  justify-center items-center "
	>
		<TabItem open>
			<div slot="title" class="flex items-center gap-2 text-lg">
				<Home />
				<span class="hidden sm:flex">Residenciais</span>
			</div>
			<div class="">
				<section class="flex flex-col items-center justify-center gap-10 p-10">
					<div class="flex flex-col gap-10 lg:flex-row">
						<PrecoSaturno />

						<PrecoJupiter />
						<PrecoMarte />
					</div>
					<div class="flex flex-col gap-10 lg:flex-row">
						<PrecoUrano />
						<PrecoVenus />

						<PrecoPlutao />
					</div>
				</section>
			</div>
		</TabItem>
		<TabItem>
			<div slot="title" class="flex items-center gap-2 text-lg">
				<Briefcase />
				<span class="hidden sm:flex">Profissionais</span>
			</div>
			<section class="flex flex-col items-center justify-center gap-10 p-10">
				<div class="flex flex-col gap-10 lg:flex-row">
					<PrecoVenus />
					<PrecoSaturno />

					<PrecoMarte />
				</div>
			</section>
		</TabItem>
		<TabItem>
			<div slot="title" class="flex items-center gap-2 text-lg">
				<Building2 />
				<span class="hidden sm:flex">Empresariais</span>
			</div>
			<section class="flex flex-col items-center justify-center gap-10 p-10">
				<div class="flex flex-col gap-10 lg:flex-row">
					<PrecoVenus />
					<PrecoSaturno />
					<PrecoMarte />
					<PrecoPlutao />
					<PrecoUrano />
					<PrecoJupiter />
				</div>
			</section>
		</TabItem>
	</Tabs>
</div>

<section class=" flex flex-col gap-10 py-16">
	<h2 class="fontSpace flex items-center justify-center text-center text-2xl lg:text-4xl">
		Nossos clientes
	</h2>
	<div class="flex flex-wrap items-center justify-center gap-2">
		<enhanced:img
			src="/src/lib/assets/img/parceiros/logo-medlife.svg"
			alt="Logo Medlife"
			class="  flex w-40 items-center justify-center rounded-3xl bg-tertiary-500"
		/>
		<enhanced:img
			src="/src/lib/assets/img/parceiros/logo-sicredi.svg"
			alt="Logo Sicredi"
			class="  flex w-40 items-center justify-center rounded-3xl bg-tertiary-500 bg-cover bg-center bg-no-repeat"
		/>
		<enhanced:img
			src="/src/lib/assets/img/parceiros/logo-rbs.svg"
			alt="Logo RBS"
			class="  flex w-40 items-center justify-center rounded-3xl bg-tertiary-500 p-3"
		/>
		<enhanced:img
			src="/src/lib/assets/img/parceiros/logo-unimed.svg"
			alt="Logo unimed"
			class="  flex w-40 items-center justify-center rounded-3xl bg-tertiary-500"
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
			Bem-vindo à Himarte, sua porta de entrada para o futuro digital! Somos mais do que um provedor
			de internet, somos pioneiros em conectividade. Na Himarte, a experiência do cliente é nossa
			prioridade, e nosso compromisso com a mais alta qualidade reflete-se em cada byte que
			entregamos. Exploramos novos horizontes no universo digital, não apenas oferecemos internet
			confiável, mas convidamos você a "Dizer Hi para o futuro".
		</p>
		<p class="text-md p-5 text-justify md:text-2xl">
			Na Himarte, <span class="uppercase underline decoration-primary-600"> o futuro é aqui</span>!
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

	.fundoPrecos {
		background-image: opacity(0.5);

		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
