<script>
	import { Card, Button } from 'flowbite-svelte';
	import { CheckCircle, Plus } from 'lucide-svelte';

	import planetaJupiter from '$lib/assets/img/panetas/jupiter.svg';
</script>

<Card
	class="relative flex w-[18rem] flex-col justify-between gap-4  rounded-3xl border !border-primary-500/60 !bg-transparent p-6 hover:!border-primary-600"
>
	<img
		src={planetaJupiter}
		alt="Planeta Jupiter"
		class="absolute bottom-[73%] left-[75%] w-28 rotate-12 hover:rotate-6"
	/>
	<div>
		<h5 class=" text-4xl font-bold text-primary-600">Jupiter</h5>
		<div class="flex flex-col items-baseline text-white">
			<span class="text-5xl font-extrabold tracking-tight"
				>700 <span class="text-3xl font-extrabold tracking-tight">MEGAS</span>
			</span>
			<span class="flex"><Plus color="#EF562F" /> ROTEADOR</span>
		</div>
	</div>
	<!-- List -->

	<!-- <ul class=" flex flex-col gap-3 rounded-3xl py-7 leading-tight">
		<li
			class="flex items-center justify-start gap-3 uppercase text-white hover:font-semibold hover:text-gray-200"
		>
			<CheckCircle color="#EF562F" size={20} /> Mumo
		</li>
		<li
			class="flex items-center justify-start gap-3 uppercase text-white hover:font-semibold hover:text-gray-200"
		>
			<CheckCircle color="#EF562F" size={20} /> Toca Livros
		</li>
		<li
			class="flex items-center justify-start gap-3 uppercase text-white hover:font-semibold hover:text-gray-200"
		>
			<CheckCircle color="#EF562F" size={20} /> Sistema Exa
		</li>
		<li
			class="flex items-center justify-start gap-3 uppercase text-white hover:font-semibold hover:text-gray-200"
		>
			<CheckCircle color="#EF562F" size={20} /> Quilifica
		</li>
	</ul> -->

	<div class="flex flex-col">
		<span class="flex items-baseline justify-center text-white">
			<span class="text-2xl font-semibold text-primary-600">R$</span>
			<span class="text-4xl font-extrabold tracking-tight">159</span>
			<span class="text-2xl font-extrabold tracking-tight text-primary-600">,</span>
			<span class="text-2xl font-extrabold tracking-tight">90</span>
			<span class="ms-1 text-xl font-normal text-gray-400">/Mes</span>
		</span>
		<Button
			pill
			class="mt-1 w-full !border !border-primary-500/50 !bg-tertiary-600/50 font-semibold uppercase text-primary-600 hover:!border-tertiary-600 hover:!bg-primary-700 hover:!text-white "
			>Saber mais</Button
		>
	</div>
</Card>
