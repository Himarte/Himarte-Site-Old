<script lang="ts">
	import { onMount } from 'svelte';

	// imagens dos planetas
	import planetaVenus from '$lib/assets/img/planetas/venus.webp';
	import planetaUrano from '$lib/assets/img/planetas/urano.webp';
	import planetaSaturno from '$lib/assets/img/planetas/saturno.webp';
	import planetaJupiter from '$lib/assets/img/planetas/jupiter.webp';
	import planetaMarte from '$lib/assets/img/planetas/marte.webp';
	import planetaPlutao from '$lib/assets/img/planetas/plutao.webp';

	// componentes dos planetas e preços
	import PlanetaCard from '$lib/assets/components/PlanetaCard.svelte';
	import PlanetaCardProfissional from '$lib/assets/components/PlanetaCardProfissional.svelte';

	// images extras
	import MiniAstro from '$lib/assets/img/extras/mini-astro.webp';
	import Wave1t from '$lib/assets/img/extras/wave1t 2.webp';
	import seta from '$lib/assets/img/extras/seta2.webp';
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import PlanetaCardFibraDedicada from '$lib/assets/components/PlanetaCardFibraDedicada.svelte';
	import UsersRound from 'lucide-svelte/icons/users-round';
	import Building2 from 'lucide-svelte/icons/building-2';

	// Interaçao do texto DIGITANDO...
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
	onMount(digitando);
	// ---------------------------------------------

	let BlipChat: any;
	let blipClient: any;

	onMount(async () => {
		const module = await import('blip-chat-widget');
		BlipChat = module.BlipChat;

		blipClient = new BlipChat()
			.withAppKey(import.meta.env.VITE_CHAVE_API_BLIP_CHAT)
			.withButton({ color: '#EB4F27', icon: '' })
			.withCustomCommonUrl(import.meta.env.VITE_LINK_BLIP_CHAT);
		blipClient.build();
	});

	let tabSet: number = 0;
</script>

<picture
	class="flex h-screen items-end justify-center bg-cover bg-center bg-no-repeat pb-40 mainImgBg"
>
	<p class="fontSpace text-center text-2xl font-bold md:text-6xl">
		{fraseDigitada}
	</p>
</picture>

<img src={Wave1t} alt="Degrade de cores" class="flex w-full opacity-30" />

<TabGroup justify="justify-center gap-5">
	<Tab
		bind:group={tabSet}
		name="tab1"
		value={0}
		hover="hover:text-gray-300"
		active="border-b border-primary-600"
	>
		<span class="flex flex-col items-center">
			<UsersRound />
			Pessoa Fisica</span
		>
	</Tab>
	<Tab
		bind:group={tabSet}
		name="tab2"
		value={1}
		hover="hover:text-gray-300"
		active="border-b border-primary-600 "
	>
		<span class="flex flex-col items-center">
			<Building2 />
			<span>CNPJ</span>
		</span></Tab
	>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		<section class="flex flex-col items-center justify-center gap-10 p-10 md:pt-20">
			{#if tabSet === 0}
				<!-- CARD DOS PREÇOS CPF -->

				<div class="flex flex-col gap-10 md:flex-row">
					<!-- =========================================================== -->
					<div class="relative">
						<figure
							class="absolute -left-[5.5rem] -top-[3.5rem] hidden w-52 -rotate-[20deg] sm:flex vibate"
						>
							<img src={seta} alt="Seta indicando o melhor preço" class="w-16 -rotate-6" />
							<figcaption
								class="absolute right-[1.3rem] bg-primary-800/40 -top-[0.9rem] rounded-xl border-2 px-2 text-xl font-bold text-white shadow-[0_0px_2rem_0.1rem] shadow-primary-700 hover:border-2 hover:border-white vibrate"
							>
								Melhor Preço
							</figcaption>
						</figure>
						<PlanetaCard
							{blipClient}
							imagem={planetaSaturno}
							nome="Saturno"
							megas="400"
							preco="99"
						/>
					</div>
					<PlanetaCard
						{blipClient}
						imagem={planetaJupiter}
						nome="Jupiter"
						megas="700"
						preco="149"
					/>
					<PlanetaCard {blipClient} imagem={planetaMarte} nome="Marte" megas="1000" preco="199" />
				</div>
				<div class="flex flex-col gap-10 md:flex-row">
					<PlanetaCard {blipClient} imagem={planetaVenus} nome="Venus" megas="90" preco="79" />
					<PlanetaCard {blipClient} imagem={planetaUrano} nome="Urano" megas="120" preco="89" />
					<PlanetaCard {blipClient} imagem={planetaPlutao} nome="Plutão" megas="60" preco="59" />
				</div>
			{:else if tabSet === 1}
				<!-- CARD DOS PREÇOS CNPJ -->
				<div class="flex flex-col gap-10 md:flex-row">
					<!-- =========================================================== -->

					<PlanetaCardProfissional
						{blipClient}
						imagem={planetaVenus}
						nome="Venus"
						megas="300"
						preco="350"
						ipFixo={true}
					/>

					<PlanetaCardProfissional
						{blipClient}
						imagem={planetaMarte}
						nome="Marte"
						megas="500"
						preco="550"
						ipFixo={true}
					/>
					<PlanetaCardProfissional
						{blipClient}
						imagem={planetaJupiter}
						nome="Jupiter"
						megas="1000"
						preco="1100"
						ipFixo={true}
					/>
				</div>
				<div class="flex flex-col gap-10 md:flex-row">
					<PlanetaCardProfissional
						{blipClient}
						imagem={planetaUrano}
						nome="Urano"
						megas="300"
						preco="200"
						ipFixo={false}
					/>
					<PlanetaCardProfissional
						{blipClient}
						imagem={planetaPlutao}
						nome="Plutão"
						megas="200"
						preco="150"
						ipFixo={false}
					/>

					<PlanetaCardFibraDedicada
						{blipClient}
						imagem={planetaSaturno}
						nome="Fibra Dedicada"
						ipFixo={true}
					/>
				</div>
			{/if}
		</section>
	</svelte:fragment>
</TabGroup>

<!-- <ClienteList {clientes} /> -->

<section class="flex h-[36rem] px-5 md:px-10 md:h-[50rem] md:justify-around">
	<img src={MiniAstro} alt="Mini astronauta" class="hidden md:flex md:w-[35rem]" />

	<article class="flex w-[55rem] flex-col items-center justify-center gap-5 md:gap-10">
		<h1 class="fontSpace flex items-center justify-center text-center text-2xl md:text-4xl">
			Quem somos?
		</h1>
		<p class="text-md p-5 text-justify md:text-2xl">
			Bem-vindo à Himarte, sua porta de entrada para o futuro digital! Somos mais do que um provedor
			de internet, somos pioneiros em conectividade. Na Himarte, a experiência do cliente é nossa
			prioridade, e nosso compromisso com a mais alta qualidade reflete-se em cada byte que
			entregamos. Exploramos novos horizontes no universo digital, não apenas oferecemos internet
			confiável, mas convidamos você a "Dizer Hi para o futuro".
		</p>
		<p class="text-md p-5 text-justify md:text-2xl">
			Na Himarte, <span class="uppercase underline decoration-primary-600"> o futuro é aqui</span>!
		</p>
	</article>
</section>

<style>
	@keyframes vibate {
		0% {
			box-shadow: 0 0px 2rem 0.1rem #eb4f27/50;
		}
		25% {
			box-shadow: 0 0px 2rem 0.1rem #eb4f27;
		}

		50% {
			box-shadow: 0 0px 2rem 0.1rem #eb4f27/80;
		}
		75% {
			box-shadow: 0 0px 2rem 0.1rem #eb4f27;
		}
		100% {
			box-shadow: 0 0px 2rem 0.1rem #eb4f27/50;
		}
	}

	.vibrate {
		animation: vibate 3s ease-in-out infinite;
	}
	.mainImgBg {
		background-image: url('$lib/assets/img/extras/hi-astronauta-main.webp');
	}
</style>
