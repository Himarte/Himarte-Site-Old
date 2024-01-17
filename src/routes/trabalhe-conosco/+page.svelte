<script lang="ts">
    import { FileButton, FileDropzone, focusTrap, getToastStore } from "@skeletonlabs/skeleton";
    import { FileUp } from "lucide-svelte";
    import type { ActionData, PageData } from "./$types";
    import { enhance } from "$app/forms";

    export let data: PageData;
    export let form: ActionData;
    let requiredFields: string[] = [
        "nome",
        "telefone",
        "emailRemetente",
        "vagaDesejada",
        "mensagem",
    ];
    const errorMessages: any = {
        nome: "Nome inválido",
        telefone: "Telefone inválido",
        Email: "E-mail inválido",
        vagaDesejada: "Vaga desejada inválida",
        mensagem: "Mensagem inválida",
    };
    const toastStore = getToastStore();
</script>

<section class="px-10 pt-10 space-y-5">
    <h1 class="h1 text-center font-bold gradient-heading fontSpace">Trabalhe Conosco</h1>
</section>

<form
    use:focusTrap={true}
    action="?/enviarEmail"
    method="POST"
    enctype="multipart/form-data"
    class="card flex flex-col rounded-3xl px-5 md:px-10 py-5 mx-2 my-5 gap-5 md:mx-28"
    use:enhance={({ formData, cancel }) => {
        const invalidFields = requiredFields.filter(
            (field) => formData.get(field) === " " || formData.get(field) === null
        );

        if (invalidFields.length > 0) {
            invalidFields.forEach((field) => {
                const errorMessage = errorMessages[field] || "Campo inválido";
                toastStore.trigger({
                    message: errorMessage,
                    timeout: 3500,
                    background: "variant-filled-error",
                });
            });

            cancel();
        } else if (invalidFields.length === 0) {
            toastStore.trigger({
                message: "Enviado com sucesso!",
                timeout: 3500,
                background: "variant-filled-success",
            });
        }
    }}
>
    <div class="md:flex w-full gap-5">
        <div class="flex flex-col gap-3 md:w-1/2">
            <label class="label space-y-2">
                <span class="md:h4 text-primary-500 card-header">Nome Completo:</span>
                <input
                    required
                    class="px-3 input"
                    type="text"
                    name="nome"
                    placeholder="ex. John da Silva"
                />
            </label>

            <label class="label space-y-2">
                <span class="md:h4 text-primary-500 card-header">Telefone:</span>
                <input
                    required
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
                    required
                    class="px-3 input"
                    type="Email"
                    placeholder="john@himarte.com.br"
                    autocomplete="email"
                    name="emailRemetente"
                />
            </label>
            <label class="label space-y-2">
                <span class="md:h4 text-primary-500 card-header">Vaga desejada:</span>
                <input
                    required
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
            required
            class="textarea"
            rows="8"
            name="mensagem"
            placeholder="Conte-nos um pouco sobre você, suas experiências e por que essa vaga seria perfeita para você!"
        />
    </label>
    <input type="file" name="curriculo" class="input" accept="application/pdf" required />

    <div class="flex w-full flex-col md:flex-row gap-5 md:justify-center md:py-5">
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
