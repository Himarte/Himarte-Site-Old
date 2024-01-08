<script lang="ts">
    import type { PageData } from "./$types";
    import Filial_1 from "$lib/assets/components/Filiais/Filial-1.svelte";
    import Filial_2 from "$lib/assets/components/Filiais/Filial-2.svelte";
    import Filial_3 from "$lib/assets/components/Filiais/Filial-3.svelte";
    import Filial_4 from "$lib/assets/components/Filiais/Filial-4.svelte";

    export let data: PageData;
</script>

<section class="px-10 pt-10 space-y-5">
    <h1 class="h1 text-center font-bold gradient-heading fontSpace">Bem vindo!</h1>
    <h3 class="h3">Um pouco sobre a nossa historia...</h3>

    <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui quam dolorem
        aspernatur? Ab, voluptatibus ratione? Facere omnis iusto pariatur recusandae dolor cumque
        accusamus explicabo consectetur officiis magni! Cupiditate, dolor! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Earum tempora ut at, id
    </article>

    <h3 class="h3">E foi assim que nos...</h3>

    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui quam dolorem
        aspernatur? Ab, voluptatibus ratione? Facere omnis iusto pariatur recusandae dolor cumque
        accusamus explicabo consectetur officiis magni! Cupiditate, dolor! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Earum tempora ut at, id repellat rem odio iste esse
        nostrum inventore a, illum deserunt. Accusantium at necessitatibus temporibus reprehenderit
        totam quasi?
    </p>
</section>
<section class="px-10 py-10 space-y-5">
    <h2 class="h4 md:m2 font-semibold gradient-heading">Encontre a filial mais proxima de você!</h2>
    <div class="flex flex-col gap-5 items-center w-full">
        <div class="flex flex-col md:flex-row w-full md:justify-center gap-5">
            <Filial_1 />
            <Filial_2 />
        </div>
        <div class="flex flex-col md:flex-row w-full md:justify-center gap-5">
            <Filial_3 />
            <Filial_4 />
        </div>
    </div>
</section>
