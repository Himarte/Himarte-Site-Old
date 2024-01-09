<script lang="ts">
    import { FileDropzone } from "@skeletonlabs/skeleton";
    import { FileUp } from "lucide-svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<section class="px-10 pt-10 space-y-5">
    <h1 class="h1 text-center font-bold gradient-heading fontSpace">Trabalhe Conosco</h1>
</section>

<form
    action="?/enviarEmail"
    method="post"
    class="card flex flex-col rounded-3xl px-5 md:px-10 py-5 mx-2 my-5 gap-5 md:mx-28"
>
    <div class="md:flex w-full gap-5">
        <div class="flex flex-col gap-3 md:w-1/2">
            <label class="label space-y-2">
                <span class="md:h4 text-primary-500 card-header">Nome Completo:</span>
                <input class="px-3 input" type="text" name="nome" placeholder="ex. John da Silva" />
            </label>

            <label class="label space-y-2">
                <span class="md:h4 text-primary-500 card-header">Telefone:</span>
                <input
                    class="px-3 input"
                    title="Input (tel)"
                    type="tel"
                    name="telefone"
                    placeholder="ex. (51) 1234-5678"
                />
            </label>
        </div>
        <div class="flex flex-col gap-3 md:w-1/2">
            <label class="label space-y-2">
                <span class="md:h4 text-primary-500 card-header">Email:</span>
                <input
                    class="px-3 input"
                    type="email"
                    placeholder="john@himarte.com.br"
                    autocomplete="email"
                    name="emailRemetente"
                />
            </label>
            <label class="label space-y-2">
                <span class="md:h4 text-primary-500 card-header">Vaga desejada:</span>
                <input
                    class="px-3 input"
                    type="text"
                    name="vagaDesejada"
                    placeholder="ex. Suporte Técnico"
                />
            </label>
        </div>
    </div>
    <label class="label space-y-2">
        <span class="md:h4 text-primary-500 card-header">Mensagem/Corpo do E-mail:</span>
        <textarea
            class="textarea"
            rows="8"
            name="mensagem"
            placeholder="Conte-nos um pouco sobre você, suas experiências e por que essa vaga seria perfeita para você!"
        />
    </label>
    <FileDropzone
        name="files"
        class="input md:h-36"
        type="file"
        enctype="multipart/form-data"
        accept="application/pdf"
    >
        <svelte:fragment slot="lead"
            ><span class="flex justify-center"><FileUp size={40} /></span></svelte:fragment
        >
        <svelte:fragment slot="message"
            ><span class="font-semibold">Carregue o arquivo</span> ou arraste e solte-o</svelte:fragment
        >
        <svelte:fragment slot="meta">Apenas PDF</svelte:fragment>
    </FileDropzone>
    <div class="flex w-full flex-col md:flex-row gap-5 md:justify-center">
        <button
            type="reset"
            class="btn variant-ghost-primary font-semibold uppercase hover:variant-filled-primary w-[95%] md:w-1/5 self-center"
            >Limpar campos</button
        >
        <button
            type="submit"
            class="btn variant-ghost-primary font-semibold uppercase hover:variant-filled-primary w-[95%] md:w-1/5 self-center"
        >
            Enviar Currículo
        </button>
    </div>
</form>
