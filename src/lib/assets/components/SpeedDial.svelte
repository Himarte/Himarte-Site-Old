<script lang="ts">
	import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
	import { ShareNodesSolid, PrintSolid, DownloadSolid, FileCopySolid } from 'flowbite-svelte-icons';
	import { fade } from 'svelte/transition';

	export let y: number;
	$: console.log(y);
</script>

{#if y < 2100}
	<div in:fade out:fade>
		<SpeedDial defaultClass="fixed end-6 bottom-5" class="">
			<SpeedDialButton name="Share">
				<ShareNodesSolid class="h-3 w-3" />
			</SpeedDialButton>
		</SpeedDial>
	</div>
{/if}
