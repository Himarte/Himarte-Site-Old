<script lang="ts">
	import LocationCard from '$lib/assets/components/Filiais/LocationCard.svelte';
	import { listaFiliais } from '$lib/assets/components/Filiais/listaFiliais';
</script>

<section class="px-10 pt-10 flex flex-col gap-5">
	<h1 class="md:h1 h2 text-center font-bold gradient-heading fontSpace">Bem vindo!</h1>
	<h3 class="font-bold gradient-heading fontSpace text-base md:text-2xl">
		Um pouco sobre a nós...
	</h3>

	<p class="text-sm md:text-xl text-justify mb-5">
		A Himarte Net, anteriormente conhecida como Infotec, é uma empresa pioneira e bem-sucedida que
		teve suas raízes em Candelária, onde foi fundada em 2002 pelos visionários Márcia Martin e Hiuri
		Ilha. Especializada inicialmente em serviços de informática, a empresa rapidamente se destacou
		ao se tornar a primeira a fornecer internet via rádio em diversas localidades, marcando o início
		de uma jornada que a levaria a se posicionar como líder no setor de telecomunicações.
	</p>

	<h3 class="text-base md:text-2xl font-bold gradient-heading fontSpace">Nossa história...</h3>
	<p class="text-sm md:text-xl text-justify mb-5">
		Ao longo dos anos, a Himarte Net evoluiu continuamente, incorporando inovações tecnológicas como
		a adoção da tecnologia 5.8 em 2010 e a transição para fibra óptica em 2017. Essas mudanças não
		apenas revolucionaram o mercado, mas também possibilitaram à empresa expandir sua presença para
		diferentes municípios. Atualmente, com uma equipe de 57 colaboradores, a Himarte Net oferece uma
		variedade de planos residenciais e empresariais, juntamente com serviços de transporte de dados,
		destacando-se como uma referência confiável no fornecimento de internet de alta qualidade.
	</p>

	<h3 class="text-base md:text-2xl font-bold gradient-heading fontSpace">
		Missão, Visão e Valores...
	</h3>
	<ul class="text-sm md:text-xl text-justify flex flex-col gap-3 mb-5">
		<li>
			<span class=" font-bold text-sm md:text-xl text-justify underline-offset-2 underline"
				>Missão:</span
			> Prover conexões de alta qualidade, conectando comunidades e facilitando o acesso à informação.
		</li>
		<li>
			<span class="font-bold text-sm md:text-xl text-justify underline-offset-2 underline"
				>Visão:</span
			> Consolidar-se como líder regional em serviços de internet, expandindo para novas localidades
			e proporcionando inovações tecnológicas aos clientes.
		</li>
		<li>
			<span class="font-bold text-sm md:text-xl text-justify underline-offset-2 underline"
				>Valores:</span
			> Compromisso com a excelência no atendimento, transparência e integridade em todas as operações,
			inovação constante para superar as expectativas dos clientes, respeito pela comunidade e foco no
			crescimento sustentável.
		</li>
	</ul>
</section>
<section class="px-10 py-10 space-y-5">
	<h2 class="h4 text-sm pb-10 md:text-3xl text-center font-bold gradient-heading fontSpace">
		Encontre a himarte mais proxima de você!
	</h2>
	<div class="flex flex-col gap-5 items-center w-full">
		<div class="flex flex-col md:flex-row md:flex-wrap w-full gap-5 md:gap-0">
			{#each listaFiliais as location}
				<LocationCard {location} />
			{/each}
		</div>
	</div>
</section>
