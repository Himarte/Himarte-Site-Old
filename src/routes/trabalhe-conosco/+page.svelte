<script>
  let email = "";

  function enviarEmail() {
    // Lógica para enviar e-mail (pode ser chamada uma função ou API)
    console.log("E-mail enviado para:", email);
  }
</script>

<div class="email-container">
  <h1>Enviar E-mail</h1>
  <label for="email">Endereço de E-mail:</label>
  <input type="email" id="email" bind:value={email} />

  <button on:click={enviarEmail}>Enviar</button>
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

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
</style>
