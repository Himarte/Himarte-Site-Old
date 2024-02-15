<script lang="ts">
	import LocationCard from '$lib/assets/components/Filiais/LocationCard.svelte';
	import { listaFiliais } from '$lib/assets/components/Filiais/listaFiliais';
</script>

<section class="px-10 pt-10 space-y-5">
	<h1 class="h1 text-center font-bold gradient-heading fontSpace">Bem vindo!</h1>
	<h3 class="h1 font-bold gradient-heading fontSpace" style="font-size: 22px;">Um pouco sobre a nós...</h3>

	<p style="font-size:20px">
		A Himarte Net, anteriormente conhecida como Infotec, é uma empresa pioneira e bem-sucedida que
		teve suas raízes em Candelária, onde foi fundada em 2002 pelos visionários Márcia Martin e Hiuri
		Ilha. Especializada inicialmente em serviços de informática, a empresa rapidamente se destacou
		ao se tornar a primeira a fornecer internet via rádio em diversas localidades, marcando o início
		de uma jornada que a levaria a se posicionar como líder no setor de telecomunicações.
	</p>

	<h3 class="h1 font-bold gradient-heading fontSpace" style="font-size: 22px;">Nossa história...</h3>
	<p style="font-size:20px">
		Ao longo dos anos, a Himarte Net evoluiu continuamente, incorporando inovações tecnológicas como
		a adoção da tecnologia 5.8 em 2010 e a transição para fibra óptica em 2017. Essas mudanças não
		apenas revolucionaram o mercado, mas também possibilitaram à empresa expandir sua presença para
		diferentes municípios. Atualmente, com uma equipe de 57 colaboradores, a Himarte Net oferece uma
		variedade de planos residenciais e empresariais, juntamente com serviços de transporte de dados,
		destacando-se como uma referência confiável no fornecimento de internet de alta qualidade.
	</p>

	<h3 class="h1 font-bold gradient-heading fontSpace" style="font-size: 22px;">Missão, Visão e Valores...</h3>
	<ul style="font-size:20px">
		<li style="margin-bottom: 10px">
			<strong>Missão:</strong> Prover conexões de alta qualidade, conectando comunidades e facilitando
			o acesso à informação.
		</li>
		<li style="margin-bottom: 10px">
			<strong>Visão:</strong> Consolidar-se como líder regional em serviços de internet, expandindo para
			novas localidades e proporcionando inovações tecnológicas aos clientes.
		</li>
		<li style="margin-bottom: 10px">
			<strong>Valores:</strong> Compromisso com a excelência no atendimento, transparência e integridade
			em todas as operações, inovação constante para superar as expectativas dos clientes, respeito pela
			comunidade e foco no crescimento sustentável.
		</li>
	</ul>
</section>
<section class="px-10 py-10 space-y-5">
	<h2 class="h1 font-bold gradient-heading fontSpace" style="font-size: 34px;">Encontre a HIMARTE mais proxima de você!</h2>
	<div class="flex flex-col gap-5 items-center w-full">
		<div class="flex flex-col md:flex-row md:flex-wrap w-full gap-5 md:gap-0">
			{#each listaFiliais as location}
				<LocationCard {location} />
			{/each}
		</div>
	</div>
</section>
