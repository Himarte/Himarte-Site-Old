<script>
	import { Card, Button, Toggle } from 'flowbite-svelte';
	let hCard = false;
</script>

<div>
	<Card img="/images/image-1.webp" href="/" horizontal reverse={hCard} class="mb-4">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
	</Card>
	<Toggle bind:checked={hCard} class="italic dark:text-gray-500">Reverse</Toggle>
</div>
