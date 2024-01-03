<script>
	import { CheckCircle, Plus } from 'lucide-svelte';
	import MelhorPreco from '$lib/assets/components/CardPrecos/MelhorPreco.svelte';

	import planetaSaturno from '$lib/assets/img/panetas/saturno.svg';
</script>

<div
	class="relative flex w-[18rem] flex-col justify-between gap-4 rounded-3xl border !border-primary-500/50 !bg-transparent p-6 shadow-[0_0px_50px_-20px] shadow-primary-600 hover:!border-primary-600"
>
	<MelhorPreco />
	<img
		src={planetaSaturno}
		alt="Planeta Saturno"
		class="absolute -right-9 -top-9 w-32 rotate-12 hover:rotate-6"
	/>
	<div>
		<h5 class=" text-4xl font-bold text-primary-600">Saturno</h5>
		<div class="flex flex-col items-baseline text-white">
			<span class="text-ter text-5xl font-extrabold tracking-tight"
				>400 <span class="text-3xl font-extrabold tracking-tight">MEGAS</span>
			</span>
			<span class="flex"><Plus color="#EF562F" /> ROTEADOR</span>
		</div>
	</div>

	<div class="flex flex-col">
		<span class="flex items-baseline justify-center text-white">
			<span class="text-2xl font-semibold text-primary-600">R$</span>
			<span class="text-4xl font-extrabold tracking-tight">109</span>
			<span class="text-2xl font-extrabold tracking-tight text-primary-600">,</span>
			<span class="text-2xl font-extrabold tracking-tight">90</span>
			<span class="ms-1 text-xl font-normal text-gray-400">/Mes</span>
		</span>
		<button
			class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary"
			>Saber mais</button
		>
	</div>
</div>
