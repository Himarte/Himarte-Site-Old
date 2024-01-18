import { c as create_ssr_component } from "../../../chunks/ssr.js";
import { g as getToastStore } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  getToastStore();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<section class="px-10 pt-10 space-y-5" data-svelte-h="svelte-1vdw09t"><h1 class="h1 text-center font-bold gradient-heading fontSpace">Trabalhe Conosco</h1></section> <form action="?/enviarEmail" method="POST" enctype="multipart/form-data" class="card flex flex-col rounded-3xl px-5 md:px-10 py-5 mx-2 my-5 gap-5 md:mx-28" data-svelte-h="svelte-1ym20pc"><div class="md:flex w-full gap-5"><div class="flex flex-col gap-3 md:w-1/2"><label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Nome Completo:</span> <input required class="px-3 input" type="text" name="nome" placeholder="ex. John da Silva"></label> <label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Telefone:</span> <input required class="px-3 input" title="Input (tel)" type="tel" name="telefone" placeholder="ex. (51) 1234-5678"></label></div> <div class="flex flex-col gap-3 md:w-1/2"><label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Email:</span> <input required class="px-3 input" type="Email" placeholder="john@himarte.com.br" autocomplete="email" name="emailRemetente"></label> <label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Vaga desejada:</span> <input required class="px-3 input" type="text" name="vagaDesejada" placeholder="ex. Suporte Técnico"></label></div></div> <label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Mensagem/Corpo do E-mail:</span> <textarea required class="textarea" rows="8" name="mensagem" placeholder="Conte-nos um pouco sobre você, suas experiências e por que essa vaga seria perfeita para você!"></textarea></label> <input type="file" name="curriculo" class="input" accept="application/pdf" required> <div class="flex w-full flex-col md:flex-row gap-5 md:justify-center md:py-2"><button type="reset" class="btn variant-ghost-primary font-semibold uppercase hover:variant-filled-primary w-[95%] md:w-1/5 self-center">Limpar campos</button> <button type="submit" class="btn variant-ghost-primary font-semibold uppercase hover:variant-filled-primary w-[95%] md:w-1/5 self-center">Enviar Currículo</button></div></form>`;
});
export {
  Page as default
};
