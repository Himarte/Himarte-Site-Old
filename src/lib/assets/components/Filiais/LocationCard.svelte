<script lang="ts">
	import Spinning from './Spinning.svelte';
	interface Location {
		url: string;
		title: string;
		city: string;
		schedule: string;
		days: string;
		schedule2: string;
		days2: string;
		link: string;
	}

	export let location: Location;
	let loading = true;
</script>

<div class="flex md:w-1/2 md:p-4 w-full justify-center">
	<a
		class="card md:flex card-hover md:w-full overflow-hidden border border-primary-800"
		href={location.link}
		aria-label={location.title}
		target="_blank"
	>
		<header class="relative">
			{#if loading}
				<Spinning />
			{/if}
			<iframe
				class="w-full h-72 md:w-96 md:h-[250px]"
				src={location.url}
				allowfullscreen={true}
				loading="lazy"
				referrerpolicy="no-referrer"
				title={location.title}
				on:load={() => (loading = false)}
			></iframe>
		</header>
		<div
			class="flex flex-col w-full py-20 md:py-0 justify-center items-center space-y-2 whitespace-nowrap"
		>
			<h3 class="h4 text-primary-500">{location.city}</h3>
			<h6 class="h7">{location.days}</h6>
			<h6 class="h7">{location.schedule}</h6>
			<h6 class="h7">{location.days2}</h6>
			<h6 class="h7">{location.schedule2}</h6>
		</div>
	</a>
</div>
