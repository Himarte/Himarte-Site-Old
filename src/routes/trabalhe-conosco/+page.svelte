<script>
  let nome = "";
  let emailRemetente = "";
  let vagaDesejada = "";
  let corpoEmail = "";
  let anexos = [];

  async function enviarEmail() {
    const destinatario = "trabalheconosco@himarte.com.br";

    // Adicione a vaga desejada ao assunto
    const assunto = `Currículo para Trabalhe Conosco - ${vagaDesejada}`;

    const emailData = {
      destinatario,
      assunto,
      corpoEmail,
      anexos
    };

    console.log("E-mail enviado para:", destinatario);
    console.log("Assunto:", assunto);
    console.log("Corpo do e-mail:", corpoEmail);
    console.log("Anexos:", anexos);

    // Lógica para enviar o e-mail usando uma API ou serviço de e-mail
    const resposta = await enviarEmailAPI(emailData);
    console.log("Resposta da API de envio de e-mail:", resposta);
  }

  function adicionarAnexo(event) {
    const arquivo = event.target.files[0];
    anexos.push(arquivo);
  }

  // Função fictícia para simular o envio de e-mail
  async function enviarEmailAPI(emailData) {
    // Implemente a lógica real de envio de e-mail aqui
    // Substitua este retorno por chamadas a uma API real ou serviço de e-mail
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("E-mail enviado com sucesso!");
      }, 2000);
    });
  }
</script>

<div class="flex w-[18rem] flex-col justify-normal gap-2 rounded-3xl border !border-primary-500/60 !bg-transparent p-5 hover:!border-primary-600"
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

  <button class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary"on:click={enviarEmail}
    >Enviar Currículo</button>
</div>

<style>
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
</style>
