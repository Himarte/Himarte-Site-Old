import { c as create_ssr_component, j as compute_rest_props, k as spread, l as escape_object, o as escape_attribute_value, p as each, v as validate_component, a as add_attribute, e as escape } from "../../chunks/ssr.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
/**
 * @license lucide-svelte v0.303.0 - ISC

This source code is licensed under the ISC license.
See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const defaultAttributes$1 = defaultAttributes;
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0)
    $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `  <svg${spread(
    [
      escape_object(defaultAttributes$1),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(`lucide-icon lucide lucide-${name} ${$$props.class ?? ""}`)
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const Plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
  return `  ${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "plus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Plus$1 = Plus;
const planetaVenus = "/_app/immutable/assets/venus.LgamJeNX.svg";
const PrecoVenus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex w-[18rem] flex-col justify-between gap-4 rounded-3xl border !border-primary-500/60 !bg-transparent p-6 hover:!border-primary-600"><img${add_attribute("src", planetaVenus, 0)} alt="Planeta Venus" class="absolute bottom-[73%] left-[75%] w-28 rotate-12 hover:rotate-6"> <div><h5 class="text-4xl font-bold text-primary-600" data-svelte-h="svelte-9wsmia">Venus</h5> <div class="flex flex-col items-baseline text-white"><span class="text-5xl font-extrabold tracking-tight" data-svelte-h="svelte-1tmar6o">90 <span class="text-3xl font-extrabold tracking-tight">MEGAS</span></span> <span class="flex">${validate_component(Plus$1, "Plus").$$render($$result, { color: "#EF562F" }, {}, {})} ROTEADOR</span></div></div> <div class="flex flex-col" data-svelte-h="svelte-10e4we3"><span class="flex items-baseline justify-center text-white"><span class="text-2xl font-semibold text-primary-600">R$</span> <span class="text-4xl font-extrabold tracking-tight">89</span> <span class="text-2xl font-extrabold tracking-tight text-primary-600">,</span> <span class="text-2xl font-extrabold tracking-tight">90</span> <span class="ms-1 text-xl font-normal text-gray-400">/Mes</span></span> <button class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary">Saber mais</button></div></div>`;
});
const seta = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABQCAYAAABbAybgAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEdmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIzLTEyLTI5PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmE3NDRhMmZiLTRmZmUtNDQ0MC05ZjEwLTg1YWUzYjYwMjc2MDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5EZXNpZ24gc2VtIG5vbWUgLSAxPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlv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";
const MelhorPreco = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="absolute -left-[6rem] -top-[3.5rem] hidden w-52 -rotate-[20deg] sm:flex" data-svelte-h="svelte-plz1lh"><span class="relative flex"><img${add_attribute("src", seta, 0)} alt="Seta para o melhor preco" class="w-16 -rotate-6"> <span class="absolute -right-[7.5rem] -top-3 rounded-xl border-2 bg-primary-800/40 px-2 text-xl font-bold text-white shadow-[0_0px_2rem_0.1rem] shadow-primary-700 hover:border-2 hover:border-white">Melhor Preço</span></span></div>`;
});
const planetaSaturno = "/_app/immutable/assets/saturno.eo39P-oh.svg";
const PrecoSaturno = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex w-[18rem] flex-col justify-between gap-4 rounded-3xl border !border-primary-500/50 !bg-transparent p-6 shadow-[0_0px_50px_-20px] shadow-primary-600 hover:!border-primary-600">${validate_component(MelhorPreco, "MelhorPreco").$$render($$result, {}, {}, {})} <img${add_attribute("src", planetaSaturno, 0)} alt="Planeta Saturno" class="absolute -right-9 -top-9 w-32 rotate-12 hover:rotate-6"> <div><h5 class="text-4xl font-bold text-primary-600" data-svelte-h="svelte-1io1dan">Saturno</h5> <div class="flex flex-col items-baseline text-white"><span class="text-ter text-5xl font-extrabold tracking-tight" data-svelte-h="svelte-1q4a9q2">400 <span class="text-3xl font-extrabold tracking-tight">MEGAS</span></span> <span class="flex">${validate_component(Plus$1, "Plus").$$render($$result, { color: "#EF562F" }, {}, {})} ROTEADOR</span></div></div> <div class="flex flex-col" data-svelte-h="svelte-149gg58"><span class="flex items-baseline justify-center text-white"><span class="text-2xl font-semibold text-primary-600">R$</span> <span class="text-4xl font-extrabold tracking-tight">109</span> <span class="text-2xl font-extrabold tracking-tight text-primary-600">,</span> <span class="text-2xl font-extrabold tracking-tight">90</span> <span class="ms-1 text-xl font-normal text-gray-400">/Mes</span></span> <button class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary">Saber mais</button></div></div>`;
});
const planetaMarte = "/_app/immutable/assets/marte.cKE68kCo.svg";
const PrecoMarte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex w-[18rem] flex-col justify-between gap-4 rounded-3xl border !border-primary-500/60 !bg-transparent p-6 hover:!border-primary-600"><img${add_attribute("src", planetaMarte, 0)} alt="Planeta Marte" class="absolute bottom-[73%] left-[75%] w-28 rotate-12 hover:rotate-6"> <div><h5 class="text-4xl font-bold text-primary-600" data-svelte-h="svelte-16pij3w">Marte</h5> <div class="flex flex-col items-baseline text-white"><span class="text-5xl font-extrabold tracking-tight" data-svelte-h="svelte-1csgnp7">01 <span class="text-3xl font-extrabold tracking-tight">GIGA</span></span> <span class="flex">${validate_component(Plus$1, "Plus").$$render($$result, { color: "#EF562F" }, {}, {})} ROTEADOR</span></div></div> <div class="flex flex-col" data-svelte-h="svelte-1usdwdz"><span class="flex items-baseline justify-center text-white"><span class="text-2xl font-semibold text-primary-600">R$</span> <span class="text-4xl font-extrabold tracking-tight">209</span> <span class="text-2xl font-extrabold tracking-tight text-primary-600">,</span> <span class="text-2xl font-extrabold tracking-tight">90</span> <span class="ms-1 text-xl font-normal text-gray-400">/Mes</span></span> <button class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary">Saber mais</button></div></div>`;
});
const planetaJupiter = "/_app/immutable/assets/jupiter.lGmw94e_.svg";
const PrecoJupiter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex w-[18rem] flex-col justify-between gap-4 rounded-3xl border !border-primary-500/60 !bg-transparent p-6 hover:!border-primary-600"><img${add_attribute("src", planetaJupiter, 0)} alt="Planeta Jupiter" class="absolute bottom-[73%] left-[75%] w-28 rotate-12 hover:rotate-6"> <div><h5 class="text-4xl font-bold text-primary-600" data-svelte-h="svelte-3c3wr2">Jupiter</h5> <div class="flex flex-col items-baseline text-white"><span class="text-5xl font-extrabold tracking-tight" data-svelte-h="svelte-x794wy">700 <span class="text-3xl font-extrabold tracking-tight">MEGAS</span></span> <span class="flex">${validate_component(Plus$1, "Plus").$$render($$result, { color: "#EF562F" }, {}, {})} ROTEADOR</span></div></div> <div class="flex flex-col" data-svelte-h="svelte-1n2vmnz"><span class="flex items-baseline justify-center text-white"><span class="text-2xl font-semibold text-primary-600">R$</span> <span class="text-4xl font-extrabold tracking-tight">159</span> <span class="text-2xl font-extrabold tracking-tight text-primary-600">,</span> <span class="text-2xl font-extrabold tracking-tight">90</span> <span class="ms-1 text-xl font-normal text-gray-400">/Mes</span></span> <button class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary">Saber mais</button></div></div>`;
});
const planetaUrano = "/_app/immutable/assets/urano.58jzan4A.svg";
const PrecoUrano = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex w-[18rem] flex-col justify-between gap-4 rounded-3xl border !border-primary-500/60 !bg-transparent p-6 hover:!border-primary-600"><img${add_attribute("src", planetaUrano, 0)} alt="Planeta Urano" class="absolute -right-9 -top-9 w-32 rotate-12 hover:rotate-6"> <div><h5 class="text-4xl font-bold text-primary-600" data-svelte-h="svelte-1dc5hem">Urano</h5> <div class="flex flex-col items-baseline text-white"><span class="text-5xl font-extrabold tracking-tight" data-svelte-h="svelte-m8nvfm">120 <span class="text-3xl font-extrabold tracking-tight">MEGAS</span></span> <span class="flex">${validate_component(Plus$1, "Plus").$$render($$result, { color: "#EF562F" }, {}, {})} ROTEADOR</span></div></div> <div class="flex flex-col" data-svelte-h="svelte-1vfzqai"><span class="flex items-baseline justify-center text-white"><span class="text-2xl font-semibold text-primary-600">R$</span> <span class="text-4xl font-extrabold tracking-tight">99</span> <span class="text-2xl font-extrabold tracking-tight text-primary-600">,</span> <span class="text-2xl font-extrabold tracking-tight">90</span> <span class="ms-1 text-xl font-normal text-gray-400">/Mes</span></span> <button class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary">Saber mais</button></div></div>`;
});
const planetaPlutao = "/_app/immutable/assets/plutao.pmIQT7Uz.svg";
const PrecoPlutao = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex w-[18rem] flex-col justify-between gap-4 rounded-3xl border !border-primary-500/60 !bg-transparent p-6 hover:!border-primary-600"><img${add_attribute("src", planetaPlutao, 0)} alt="Planeta Plutão" class="absolute bottom-[73%] left-[75%] w-28 rotate-12 hover:rotate-6"> <div><h5 class="text-4xl font-bold text-primary-600" data-svelte-h="svelte-1eq6x5o">Plutão</h5> <div class="flex flex-col items-baseline text-white"><span class="text-5xl font-extrabold tracking-tight" data-svelte-h="svelte-3asxc7">60 <span class="text-3xl font-extrabold tracking-tight">MEGAS</span></span> <span class="flex">${validate_component(Plus$1, "Plus").$$render($$result, { color: "#EF562F" }, {}, {})} ROTEADOR</span></div></div> <div class="flex flex-col" data-svelte-h="svelte-18wal19"><span class="flex items-baseline justify-center text-white"><span class="text-2xl font-semibold text-primary-600">R$</span> <span class="text-4xl font-extrabold tracking-tight">69</span> <span class="text-2xl font-extrabold tracking-tight text-primary-600">,</span> <span class="text-2xl font-extrabold tracking-tight">90</span> <span class="ms-1 text-xl font-normal text-gray-400">/Mes</span></span> <button class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary">Saber mais</button></div></div>`;
});
const imgMedlife = "/_app/immutable/assets/logo-medlife.KSjPFLmS.svg";
const imgSicredi = "/_app/immutable/assets/logo-sicredi.UUMXRKbk.svg";
const imgRbs = "/_app/immutable/assets/logo-rbs.Qtt4jmQn.svg";
const imgUnimed = "/_app/immutable/assets/logo-unimed.ZYxfRq3N.svg";
const MainImg = "/_app/immutable/assets/hi-astronauta-main.ffRGJgfk.png";
const Wave1t = "/_app/immutable/assets/wave1t 2.HKdonhVX.svg";
const css = {
  code: ".fontSpace.svelte-8rfuia{font-family:'Xspace Regular';src:url('/src/lib/fonts/Xspace.otf') format('otf')}@font-face{font-family:'Xspace Regular';src:url('/src/lib/fonts/Xspace.otf') format('truetype')}",
  map: null
};
let frase = "O FUTURO É AQUI";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let fraseDigitada = "";
  let i = 0;
  let typewriter;
  const typeChar = () => {
    if (i < frase.length) {
      fraseDigitada += frase[i];
      i += 1;
    } else {
      clearInterval(typewriter);
    }
  };
  const digitando = () => typewriter = setInterval(typeChar, 130);
  digitando();
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  $$result.css.add(css);
  return ` <picture class="flex h-screen items-end justify-center bg-cover bg-center bg-no-repeat pb-40" style="${"background-image: url(" + escape(MainImg, true) + ")"}"><p class="fontSpace text-center text-2xl font-bold md:text-6xl svelte-8rfuia">${escape(fraseDigitada)}</p></picture> <img${add_attribute("src", Wave1t, 0)} alt="Wave1" class="w-full content-evenly"> <section class="flex flex-col items-center justify-center gap-10 p-10"><div class="flex flex-col gap-10 lg:flex-row">${validate_component(PrecoSaturno, "PrecoSaturno").$$render($$result, {}, {}, {})} ${validate_component(PrecoJupiter, "PrecoJupiter").$$render($$result, {}, {}, {})} ${validate_component(PrecoMarte, "PrecoMarte").$$render($$result, {}, {}, {})}</div> <div class="flex flex-col gap-10 lg:flex-row">${validate_component(PrecoUrano, "PrecoUrano").$$render($$result, {}, {}, {})} ${validate_component(PrecoVenus, "PrecoVenus").$$render($$result, {}, {}, {})} ${validate_component(PrecoPlutao, "PrecoPlutao").$$render($$result, {}, {}, {})}</div></section> <section class="flex flex-col gap-10 py-16" data-svelte-h="svelte-1u6vvs5"><h3 class="fontSpace flex items-center justify-center text-center text-2xl lg:text-4xl svelte-8rfuia">Nossos clientes</h3> <div class="flex flex-wrap items-center justify-center gap-4"><img${add_attribute("src", imgMedlife, 0)} alt="Logo Medlife" class="card card-hover flex w-40 items-center justify-center rounded-3xl"> <img${add_attribute("src", imgSicredi, 0)} alt="Logo Sicredi" class="card card-hover flex w-40 items-center justify-center rounded-3xl"> <img${add_attribute("src", imgRbs, 0)} alt="Logo RBS" class="card card-hover flex w-40 items-center justify-center rounded-3xl p-3"> <img${add_attribute("src", imgUnimed, 0)} alt="Logo unimed" class="card card-hover flex w-40 items-center justify-center rounded-3xl"> <img${add_attribute("src", imgSicredi, 0)} alt="Logo Sicredi" class="card card-hover flex w-40 items-center justify-center rounded-3xl"></div> <div class="flex flex-wrap items-center justify-center gap-4"><img${add_attribute("src", imgMedlife, 0)} alt="Logo Medlife" class="card card-hover flex w-40 items-center justify-center rounded-3xl"> <img${add_attribute("src", imgSicredi, 0)} alt="Logo Sicredi" class="card card-hover flex w-40 items-center justify-center rounded-3xl"> <img${add_attribute("src", imgRbs, 0)} alt="Logo RBS" class="card card-hover flex w-40 items-center justify-center rounded-3xl p-3"> <img${add_attribute("src", imgUnimed, 0)} alt="Logo unimed" class="card card-hover flex w-40 items-center justify-center rounded-3xl"> <img${add_attribute("src", imgSicredi, 0)} alt="Logo Sicredi" class="card card-hover flex w-40 items-center justify-center rounded-3xl"></div></section> <section class="flex h-[30rem] px-10 lg:h-[55rem] lg:justify-around" data-svelte-h="svelte-kl5td4"><picture><source${add_attribute("srcset", "/_app/immutable/assets/mini-astro.TnWc1Bm3.avif 1x, /_app/immutable/assets/mini-astro.nZYy76Sj.avif 2x", 0)} type="image/avif"><source${add_attribute("srcset", "/_app/immutable/assets/mini-astro.0yXQWb_8.webp 1x, /_app/immutable/assets/mini-astro.1GXrvLCq.webp 2x", 0)} type="image/webp"><source${add_attribute("srcset", "/_app/immutable/assets/mini-astro.FQugjCYB.png 1x, /_app/immutable/assets/mini-astro.RBkcoHok.png 2x", 0)} type="image/png"><img src="/_app/immutable/assets/mini-astro.RBkcoHok.png" alt="mini astro" class="hidden lg:flex lg:w-[35rem]" width="896" height="1344"></picture> <div class="flex w-[55rem] flex-col items-center justify-center gap-5 lg:gap-10"><h1 class="variant-glass-surface fontSpace flex items-center justify-center rounded-xl px-5 pt-2 text-center text-2xl lg:text-4xl svelte-8rfuia">Quem somos?</h1> <p class="text-md p-5 text-justify lg:text-2xl">Bem-vindo à Himarte, sua porta de entrada para o futuro digital! Somos mais do que um provedor
			de internet, somos pioneiros em conectividade. Na Himarte, a experiência do cliente é nossa
			prioridade, e nosso compromisso com a mais alta qualidade reflete-se em cada byte que
			entregamos. Exploramos novos horizontes no universo digital, não apenas oferecemos internet
			confiável, mas convidamos você a &quot;Dizer Hi para o futuro&quot;.</p> <p class="text-md p-5 text-justify md:text-2xl">Na Himarte, <span class="uppercase underline decoration-primary-600">o futuro é aqui</span>!</p></div> </section>`;
});
export {
  Page as default
};
