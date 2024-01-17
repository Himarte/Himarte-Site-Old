import { c as create_ssr_component, j as compute_rest_props, e as escape, k as spread, l as escape_attribute_value, n as escape_object, d as compute_slots, v as validate_component } from "../../../chunks/ssr.js";
import { g as getToastStore } from "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import "../../../chunks/client.js";
import { I as Icon } from "../../../chunks/Icon.js";
const cBase = "textarea relative flex justify-center items-center";
const cInput = "w-full absolute top-0 left-0 right-0 bottom-0 z-[1] opacity-0 disabled:!opacity-0 cursor-pointer";
const cInterface = "flex justify-center items-center text-center";
const FileDropzone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesInput;
  let classesInterface;
  let $$restProps = compute_rest_props($$props, [
    "files",
    "fileInput",
    "name",
    "border",
    "padding",
    "rounded",
    "regionInterface",
    "regionInterfaceText",
    "slotLead",
    "slotMessage",
    "slotMeta"
  ]);
  let $$slots = compute_slots(slots);
  let { files = void 0 } = $$props;
  let { fileInput = void 0 } = $$props;
  let { name } = $$props;
  let { border = "border-2 border-dashed" } = $$props;
  let { padding = "p-4 py-8" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { regionInterface = "" } = $$props;
  let { regionInterfaceText = "" } = $$props;
  let { slotLead = "mb-4" } = $$props;
  let { slotMessage = "" } = $$props;
  let { slotMeta = "opacity-75" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.fileInput === void 0 && $$bindings.fileInput && fileInput !== void 0)
    $$bindings.fileInput(fileInput);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.regionInterface === void 0 && $$bindings.regionInterface && regionInterface !== void 0)
    $$bindings.regionInterface(regionInterface);
  if ($$props.regionInterfaceText === void 0 && $$bindings.regionInterfaceText && regionInterfaceText !== void 0)
    $$bindings.regionInterfaceText(regionInterfaceText);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotMessage === void 0 && $$bindings.slotMessage && slotMessage !== void 0)
    $$bindings.slotMessage(slotMessage);
  if ($$props.slotMeta === void 0 && $$bindings.slotMeta && slotMeta !== void 0)
    $$bindings.slotMeta(slotMeta);
  classesBase = `${cBase} ${border} ${padding} ${rounded} ${$$props.class ?? ""}`;
  classesInput = `${cInput}`;
  classesInterface = `${cInterface}`;
  return `<div class="${[
    "dropzone " + escape(classesBase, true),
    $$restProps.disabled ? "opacity-50" : ""
  ].join(" ").trim()}" data-testid="file-dropzone">  <input${spread(
    [
      { type: "file" },
      { name: escape_attribute_value(name) },
      {
        class: "dropzone-input " + escape(classesInput, true)
      },
      escape_object(prunedRestProps())
    ],
    {}
  )}>  <div class="${"dropzone-interface " + escape(classesInterface, true) + " " + escape(regionInterface, true)}"><div class="${"dropzone-interface-text " + escape(regionInterfaceText, true)}"> ${$$slots.lead ? `<div class="${"dropzone-lead " + escape(slotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"dropzone-message " + escape(slotMessage, true)}">${slots.message ? slots.message({}) : `<strong data-svelte-h="svelte-13uz6lq">Upload a file</strong> or drag and drop`}</div>  ${$$slots.meta ? `<small class="${"dropzone-meta " + escape(slotMeta, true)}">${slots.meta ? slots.meta({}) : ``}</small>` : ``}</div></div></div>`;
});
const File_up = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
      }
    ],
    ["polyline", { "points": "14 2 14 8 20 8" }],
    ["path", { "d": "M12 12v6" }],
    ["path", { "d": "m15 15-3-3-3 3" }]
  ];
  return `  ${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "file-up" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const FileUp = File_up;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  getToastStore();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<section class="px-10 pt-10 space-y-5" data-svelte-h="svelte-1vdw09t"><h1 class="h1 text-center font-bold gradient-heading fontSpace">Trabalhe Conosco</h1></section> <form action="?/enviarEmail" method="POST" enctype="multipart/form-data" class="card flex flex-col rounded-3xl px-5 md:px-10 py-5 mx-2 my-5 gap-5 md:mx-28"><div class="md:flex w-full gap-5" data-svelte-h="svelte-1g451pu"><div class="flex flex-col gap-3 md:w-1/2"><label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Nome Completo:</span> <input required class="px-3 input" type="text" name="nome" placeholder="ex. John da Silva"></label> <label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Telefone:</span> <input required class="px-3 input" title="Input (tel)" type="tel" name="telefone" placeholder="ex. (51) 1234-5678"></label></div> <div class="flex flex-col gap-3 md:w-1/2"><label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Email:</span> <input required class="px-3 input" type="Email" placeholder="john@himarte.com.br" autocomplete="email" name="emailRemetente"></label> <label class="label space-y-2"><span class="md:h4 text-primary-500 card-header">Vaga desejada:</span> <input required class="px-3 input" type="text" name="vagaDesejada" placeholder="ex. Suporte Técnico"></label></div></div> <label class="label space-y-2" data-svelte-h="svelte-1nbe9nt"><span class="md:h4 text-primary-500 card-header">Mensagem/Corpo do E-mail:</span> <textarea required class="textarea" rows="8" name="mensagem" placeholder="Conte-nos um pouco sobre você, suas experiências e por que essa vaga seria perfeita para você!"></textarea></label> ${validate_component(FileDropzone, "FileDropzone").$$render(
    $$result,
    {
      name: "curriculo",
      class: "input md:h-32",
      accept: "application/pdf",
      required: true
    },
    {},
    {
      meta: () => {
        return `Apenas PDF`;
      },
      message: () => {
        return `<span class="font-semibold" data-svelte-h="svelte-ee2aw0">Carregue o arquivo</span> ou arraste e solte-o`;
      },
      lead: () => {
        return `<span class="flex justify-center">${validate_component(FileUp, "FileUp").$$render($$result, { size: 40 }, {}, {})}</span>`;
      }
    }
  )} <div class="flex w-full flex-col md:flex-row gap-5 md:justify-center" data-svelte-h="svelte-o98rqf"><button type="reset" class="btn variant-ghost-primary font-semibold uppercase hover:variant-filled-primary w-[95%] md:w-1/5 self-center">Limpar campos</button> <button type="submit" class="btn variant-ghost-primary font-semibold uppercase hover:variant-filled-primary w-[95%] md:w-1/5 self-center">Enviar Currículo</button></div></form>`;
});
export {
  Page as default
};
