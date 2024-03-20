<script lang="ts">
	import Plus from 'lucide-svelte/icons/plus';

	export let nome: string;
	export let imagem: any;
	export let megas: string;
	export let blipClient: any;
	export let ipFixo: boolean;

	const openChat = () => {
		blipClient.toogleChat();
		blipClient.sendMessage({
			type: 'text/plain',
			content:
				'Olá, gostaria de saber mais sobre o plano do planeta <strong>' +
				nome +
				'</strong> profissional, no caso seria <strong>' +
				megas +
				'</strong> megas com valor de <strong>'
		});
	};
</script>

<div
	class="relative h-[20rem] flex w-[18rem] flex-col justify-between gap-4 rounded-3xl border border-primary-500/60 bg-transparent p-6 hover:border-primary-600"
>
	<img
		src={imagem}
		alt={`Planeta ${nome}`}
		class="absolute bottom-[73%] left-[75%] w-28 rotate-12 rotate"
		loading="lazy"
	/>

	<div>
		<h5 class="text-4xl font-bold text-primary-600 mb-3">
			{nome}
			<span class="text-sm border-2 rounded-2xl px-2 border-primary-700 text-gray-300">PRO</span>
		</h5>
		<div class="flex flex-col items-baseline text-white">
			<span class="text-5xl font-extrabold tracking-tight mb-2">
				{megas} <span class="text-3xl font-extrabold tracking-tight">MEGAS</span>
			</span>
			<span class="flex uppercase"><Plus color="#EF562F" />Assistência dedicada</span>

			<span class="flex uppercase"><Plus color="#EF562F" /> Router Board</span>
			<span class="uppercase {ipFixo ? 'flex' : 'hidden'}"><Plus color="#EF562F" />IP FIXO</span>
		</div>
	</div>
	<div class="flex flex-col">
		<button
			on:click={openChat}
			class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary"
		>
			Saber mais
		</button>
	</div>
</div>

<style>
	@keyframes rotate {
		from {
			transform: rotate(3deg);
		}
		to {
			transform: rotate(-2deg);
		}
	}

	.rotate {
		animation: rotate 1s infinite alternate;
	}
</style>
