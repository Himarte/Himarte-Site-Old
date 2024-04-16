<script lang="ts">
	import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';

	// Redireciona para a raiz ("/") quando da algum erro ou a pagina nao existe
	throw redirect(300, '/');
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
