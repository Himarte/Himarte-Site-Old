<script lang="ts">
    import ClienteItem from "./ClienteItem.svelte";
    export let clientes: any;
</script>

<section class="flex flex-col gap-10 py-16">
    <h3 class="fontSpace flex items-center justify-center text-center text-2xl md:text-4xl">
        Nossos clientes
    </h3>
    <div class="flex flex-wrap items-center justify-center gap-4">
        {#each clientes as cliente}
            <ClienteItem img={cliente.img} alt={cliente.alt} />
        {/each}
    </div>
</section>
