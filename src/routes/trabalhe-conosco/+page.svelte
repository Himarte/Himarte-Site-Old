<script lang="ts">
    import { FileDropzone } from "@skeletonlabs/skeleton";
    import { FileUp } from "lucide-svelte";

    let nome: string = "";
    let emailRemetente: string = "";
    let vagaDesejada: string = "";
    let corpoEmail: string = "";
    let anexos: any[] = [];

    async function enviarEmail(): Promise<void> {
        const destinatario: string = "trabalheconosco@himarte.com.br";

        // Adicione a vaga desejada ao assunto
        const assunto: string = `Currículo para Trabalhe Conosco - ${vagaDesejada}`;

        const emailData: any = {
            destinatario,
            assunto,
            corpoEmail,
            anexos,
        };

        console.log("E-mail enviado para:", destinatario);
        console.log("Assunto:", assunto);
        console.log("Corpo do e-mail:", corpoEmail);
        console.log("Anexos:", anexos);

        // Lógica para enviar o e-mail usando uma API ou serviço de e-mail
        const resposta: string = await enviarEmailAPI(emailData);
        console.log("Resposta da API de envio de e-mail:", resposta);
    }

    function adicionarAnexo(event: any): void {
        const arquivo: File = event.target.files[0];
        anexos.push(arquivo);
    }

    // Função fictícia para simular o envio de e-mail
    async function enviarEmailAPI(emailData: any): Promise<string> {
        // Implemente a lógica real de envio de e-mail aqui
        // Substitua este retorno por chamadas a uma API real ou serviço de e-mail
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("E-mail enviado com sucesso!");
            }, 2000);
        });
    }
</script>

<section class="px-10 pt-10 space-y-5">
    <h1 class="h1 text-center font-bold gradient-heading fontSpace">Trabalhe Conosco</h1>

</section>

<form class="card flex flex-col rounded-3xl px-5 md:px-10 py-5 mx-2 my-5 gap-5 md:mx-28">
    <div class="md:flex w-full gap-5">
        <div class="flex flex-col gap-3 md:w-1/2">
            <label class="label space-y-2">
                <span class="md:h4 text-primary-500 card-header">Nome Completo:</span>
                <input
                    class="px-3 input"
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="ex. John da Silva"
                    bind:value={nome}
                />
            </label>

            <label class="label space-y-2">
                <span class="md:h4 text-primary-500 card-header">Telefone:</span>
                <input
                    class="px-3 input"
                    title="Input (tel)"
                    type="tel"
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
                    id="emailRemetente"
                    name="emailRemetente"
                    bind:value={emailRemetente}
                />
            </label>
            <label class="label space-y-2">
                <span class="md:h4 text-primary-500 card-header">Vaga desejada:</span>
                <input
                    class="px-3 input"
                    type="text"
                    id="vagaDesejada"
                    name="vagaDesejada"
                    placeholder="ex. Suporte Técnico"
                    bind:value={vagaDesejada}
                />
            </label>
        </div>
    </div>
    <label class="label space-y-2">
        <span class="md:h4 text-primary-500 card-header">Mensagem/Corpo do E-mail:</span>
        <textarea
            class="textarea"
            rows="8"
            placeholder="Conte-nos um pouco sobre você, suas experiências e por que essa vaga seria perfeita para você!"
        />
    </label>
    <FileDropzone
        name="files"
        class="input md:h-36"
        type="file"
        id="anexos"
        on:change={adicionarAnexo}
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
            class="btn variant-ghost-primary font-semibold uppercase hover:variant-filled-primary w-[95%] md:w-1/5 self-center"
            >Limpar campos</button
        >
        <button
            class="btn variant-ghost-primary font-semibold uppercase hover:variant-filled-primary w-[95%] md:w-1/5 self-center"
            on:click={enviarEmail}>Enviar Currículo</button
        >
    </div>
</form>

<!-- -------------------------- EU SO COMENTEI TEU CODIGO ANTIGO -------------------- -->
<!-- <div
    class="flex w-[18rem] flex-col justify-normal gap-2 rounded-3xl border !border-primary-500/60 !bg-transparent p-5 hover:!border-primary-600"
>
    <h1>Enviar Currículo</h1>

    <label for="nome">Seu Nome:</label>
    <input type="text" id="nome" bind:value={nome} />

    <label for="emailRemetente">Seu E-mail:</label>
    <input type="email" id="emailRemetente" bind:value={emailRemetente} />

    <label for="vagaDesejada">Vaga Desejada:</label>
    <input type="text" id="vagaDesejada" bind:value={vagaDesejada} />

    <label for="corpoEmail">Mensagem/Corpo do E-mail:</label>
    <textarea id="corpoEmail" bind:value={corpoEmail}></textarea>

    <label for="anexos">Anexos (Currículo, Carta de Apresentação, etc.):</label>
    <input type="file" id="anexos" on:change={adicionarAnexo} multiple />

    <button
        class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary"
        on:click={enviarEmail}>Enviar Currículo</button
    >
</div> -->

<!-- <style>
  /* Estilize conforme necessário */
  .email-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  input,
  textarea,
  button {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
</style> -->
