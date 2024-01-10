<script lang="ts">
    import type { PageData } from "./$types";
    import Matriz_Santa_Cruz from "$lib/assets/components/Filiais/MatrizSantaCruzDoSul.svelte";
    import Filial_Encruzilhada from "$lib/assets/components/Filiais/FilialEncruzilhada.svelte";
    import Filial_Agudo from "$lib/assets/components/Filiais/FilialAgudo.svelte";
    import Filial_VeraCruz from "$lib/assets/components/Filiais/FilialVeraCruz.svelte";
    import Filial_Candelaria from "$lib/assets/components/Filiais/FilialCandelaria.svelte";
    import Filial_Rio_Pardo from "$lib/assets/components/Filiais/FilialRioPardo.svelte";

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
    <h2 class="h4 md:h2 font-semibold gradient-heading">
        Encontre a HIMARTE mais proxima de você!
    </h2>
    <div class="flex flex-col gap-5 items-center w-full">
        <div class="flex flex-col md:flex-row w-full md:justify-center gap-5">
            <Matriz_Santa_Cruz />
            <Filial_VeraCruz />
        </div>
        <div class="flex flex-col md:flex-row w-full md:justify-center gap-5">
            <Filial_Rio_Pardo />
            <Filial_Candelaria />
        </div>
        <div class="flex flex-col md:flex-row w-full md:justify-center gap-5">
            <Filial_Agudo />
            <Filial_Encruzilhada />
        </div>
    </div>
</section>
