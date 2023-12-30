<script lang="ts">
	import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
	import { ShareNodesSolid, PrintSolid, DownloadSolid, FileCopySolid } from 'flowbite-svelte-icons';
	import { fade } from 'svelte/transition';

	export let y: number;
</script>

{#if y < 2380}
	<div in:fade out:fade>
		<SpeedDial defaultClass="fixed end-8 bottom-6">
			<SpeedDialButton name="Share">
				<ShareNodesSolid class="h-5 w-5" />
			</SpeedDialButton>
			<SpeedDialButton name="Print">
				<PrintSolid class="h-5 w-5" />
			</SpeedDialButton>
			<SpeedDialButton name="Download">
				<DownloadSolid class="h-5 w-5" />
			</SpeedDialButton>
			<SpeedDialButton name="Copy">
				<FileCopySolid class="h-5 w-5" />
			</SpeedDialButton>
		</SpeedDial>
	</div>
{/if}
