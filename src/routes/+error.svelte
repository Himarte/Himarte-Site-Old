<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    // Redireciona para a raiz ("/") quando a página é carregada
    $: goto("/");
</script>

<h1>{$page.status}: {$page.error?.message}</h1>
