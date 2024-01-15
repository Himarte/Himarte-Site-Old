import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape, h as each } from "../../chunks/ssr.js";
import { I as Icon } from "../../chunks/Icon.js";
const Plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
  return `  ${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "plus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Plus$1 = Plus;
const planetaVenus = "/_app/immutable/assets/venus.YSm7jU5J.webp";
const planetaUrano = "/_app/immutable/assets/urano.uVCGZCPk.webp";
const planetaSaturno = "/_app/immutable/assets/saturno.fpPY7Wu4.webp";
const planetaJupiter = "/_app/immutable/assets/jupiter.MSapDBuy.webp";
const planetaMarte = "/_app/immutable/assets/marte.UhScxkCI.webp";
const css$1 = {
  code: "@keyframes svelte-1ubpan1-rotate{from{transform:rotate(3deg)}to{transform:rotate(-2deg)}}.rotate.svelte-1ubpan1{animation:svelte-1ubpan1-rotate 1s infinite alternate}",
  map: null
};
const PlanetaCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { nome } = $$props;
  let { imagem } = $$props;
  let { megas } = $$props;
  let { preco } = $$props;
  let { blipClient } = $$props;
  if ($$props.nome === void 0 && $$bindings.nome && nome !== void 0)
    $$bindings.nome(nome);
  if ($$props.imagem === void 0 && $$bindings.imagem && imagem !== void 0)
    $$bindings.imagem(imagem);
  if ($$props.megas === void 0 && $$bindings.megas && megas !== void 0)
    $$bindings.megas(megas);
  if ($$props.preco === void 0 && $$bindings.preco && preco !== void 0)
    $$bindings.preco(preco);
  if ($$props.blipClient === void 0 && $$bindings.blipClient && blipClient !== void 0)
    $$bindings.blipClient(blipClient);
  $$result.css.add(css$1);
  return `<div class="relative flex w-[18rem] flex-col justify-between gap-4 rounded-3xl border border-primary-500/60 bg-transparent p-6 hover:border-primary-600"><img${add_attribute("src", imagem, 0)}${add_attribute("alt", `Planeta ${nome}`, 0)} class="absolute bottom-[73%] left-[75%] w-28 rotate-12 rotate svelte-1ubpan1"> <div><h5 class="text-4xl font-bold text-primary-600">${escape(nome)}</h5> <div class="flex flex-col items-baseline text-white"><span class="text-5xl font-extrabold tracking-tight">${escape(megas)} <span class="text-3xl font-extrabold tracking-tight" data-svelte-h="svelte-1xf5qbq">MEGAS</span></span> <span class="flex">${validate_component(Plus$1, "Plus").$$render($$result, { color: "#EF562F" }, {}, {})} ROTEADOR</span></div></div> <div class="flex flex-col"><span class="flex items-baseline justify-center text-white"><span class="text-2xl font-semibold text-primary-600" data-svelte-h="svelte-oijhfr">R$</span> <span class="text-4xl font-extrabold tracking-tight">${escape(preco)}</span> <span class="text-2xl font-extrabold tracking-tight text-primary-600" data-svelte-h="svelte-1ui1613">,</span> <span class="text-2xl font-extrabold tracking-tight" data-svelte-h="svelte-11r6zgv">90</span> <span class="ms-1 text-xl font-normal text-gray-400" data-svelte-h="svelte-1lk4ouo">/Mes</span></span> <button class="btn variant-outline-primary mt-1 w-full font-semibold uppercase hover:variant-filled-primary" data-svelte-h="svelte-grdolt">Saber mais</button></div> </div>`;
});
const planetaPlutao = "/_app/immutable/assets/plutao.70u1YNuB.webp";
const imgMedlife = "/_app/immutable/assets/logo-medlife.EAd5OEuj.webp";
const imgSicredi = "/_app/immutable/assets/logo-sicredi.Se4CN5XP.webp";
const imgRbs = "/_app/immutable/assets/logo-rbs.qDB4tZQp.webp";
const imgUnimed = "/_app/immutable/assets/logo-unimed.3x3OrIjc.webp";
const MiniAstro = "/_app/immutable/assets/mini-astro.o2lmnD74.webp";
const Wave1t = "/_app/immutable/assets/wave1t 2.eqr7QNcz.webp";
const seta = "data:image/webp;base64,UklGRr4IAABXRUJQVlA4WAoAAAAUAAAAMQAATwAAQUxQSMECAAABoHXb2rG91b+u67rf2LZto7Zt22+Oats6sm3btm3bdvs+2UXw5oqICeD/wf9b9hg+ZmSPlszbixtNN4PVTrr3k7lS1Wj89sbNx201pT3zjGiOwSbvqnrq3AO3W3+VVTasH3nlS5/9+OULNx66cg+abHCu3tm6LQtc67Hkbmfe//Znj19Y79Kc83QiQJQI94jizLs2cIOT75yKL1Swic6AwkKaRzGa/9oPHQiaa1GsKVN0IoXcO2gDItlBWgxPt1S6OdqQSLaW9qMkG6FrsWS1D75rT27nTK1JpApW15V4Kmj9UTUISxUcoROIVMaA338bhGUiOFlnEqmMAb9oKp6J4EjdhKUyOn2kjYlMBNvow85YJuAunUakcqZWWoHIRHCyXmmFZTI6vqvjiEwE60tLEJlwLtOzgeXq+5WOIjJR2EFahsiEcbNeb4NlcoZ8r9OJTBTmSOtRMmHcpc/74JmcoT/oZiwThV2l3SmZMG7Sn9OITE7/b/RqaywRhU2ls/FMOOdLW1AyGe3f1vdD8EQEy0iPkDs4WjqGyAQ8Lq1MyRSM+VUfd8MTUahLN5PbuFY6gMjkdPlYWoGSiGBl6ZPueCKC46XbSW3whHQQJRHOiF+kFSmJKGwvfdkLT4RzuXQPqY0O70nHEIkIltBcrUtJRGEf6YchRCKM26SnHEvk9PxCOp1IRGE1/a3tKfPyDATHqPp7MjGPtA9Lb7bFgNpSkcIZ/IN0KY4x5vtuWAIKG+tP1SnOun/1zEFwmhrVNFqxr7IYtRelt9rCaRqchGDCX5Uuh+s0FU/Sirr+UJ0ntXyOGv+/RtVfS7ygzYlFF+z28Rlbjcaekz78RvtSFh102et96Y3jzlBDlU4hMgAr3CzpT1V/6zZyBjD1YqlqVHqvZQ4Ih5k3SY3qjz5YDnCHFR6RPmxDYndYff/JWCIIAAMAVlA4IG4BAABwCgCdASoyAFAAPpE8mkiloyKhKzJM6LASCWwAzP9hfCcbfuuZW9ic4DbFeYD9RvX/9BW8L8/F7KmRgjp/A3nFfRQXLste0g53kgQNDRRpnAK601AYM4jgf2u6AAD+7h///dtf/uwL//e38f/xXef605abZUA9n//VqOEYO9Zeh5SJt/wcLaufvAgmTNh1UBdNYr0KuaN96f/moruxrrX3FwcbovOMe2yMBakfEm+JJe3v2gsW2l97XEdeIuCUhKttO/7sW0c69w3TUFd/WQ//70myxpFL+tyPqq+0buCAfvmX4G+8eE63Z/cyZB5gx8BJMJaq8JL+yT0+gsCp/pSwiLLgP6wUPrqJUZcl+i5LH/2ek0EB2gf5m6WALvcPleKJzYIpOCc32/VgaA14yrRuAOds9qeR/v+EkP7g9vkapo94YB087kMm50WCJS/E/+mj1i+kFVU0xmMZEQ8YJWHrNppOFouJQkxyVQj5wABYTVAgYAQAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMy0xMi0yOTwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD5hNzQ0YTJmYi00ZmZlLTQ0NDAtOWYxMC04NWFlM2I2MDI3NjA8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgPGRjOnRpdGxlPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+RGVzaWduIHNlbSBub21lIC0gMTwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5PdGhhdmlvIFF1aWxpYW88L3BkZjpBdXRob3I+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YTwveG1wOkNyZWF0b3JUb29sPgogPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9J3InPz4=";
const ClienteItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img } = $$props;
  let { alt } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<img${add_attribute("src", img, 0)} loading="lazy"${add_attribute("alt", alt, 0)} class="card flex w-40 items-center justify-center rounded-3xl">`;
});
const ClienteList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { clientes } = $$props;
  if ($$props.clientes === void 0 && $$bindings.clientes && clientes !== void 0)
    $$bindings.clientes(clientes);
  return `<section class="flex flex-col gap-10 py-16"><h3 class="fontSpace flex items-center justify-center text-center text-2xl md:text-4xl" data-svelte-h="svelte-lyvn3t">Nossos clientes</h3> <div class="flex flex-wrap items-center justify-center gap-4">${each(clientes, (cliente) => {
    return `${validate_component(ClienteItem, "ClienteItem").$$render($$result, { img: cliente.img, alt: cliente.alt }, {}, {})}`;
  })}</div></section>`;
});
const css = {
  code: '@keyframes svelte-fbxz3h-vibate{0%{box-shadow:0 0px 2rem 0.1rem #eb4f27/50}25%{box-shadow:0 0px 2rem 0.1rem #eb4f27}50%{box-shadow:0 0px 2rem 0.1rem #eb4f27/80}75%{box-shadow:0 0px 2rem 0.1rem #eb4f27}100%{box-shadow:0 0px 2rem 0.1rem #eb4f27/50}}.vibrate.svelte-fbxz3h{animation:svelte-fbxz3h-vibate 3s ease-in-out infinite}.mainImgBg.svelte-fbxz3h{background-image:url("$lib/assets/img/extras/hi-astronauta-main.webp")}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let clientes = [
    { img: imgMedlife, alt: "Logo Medlife" },
    { img: imgSicredi, alt: "Logo Sicredi" },
    { img: imgRbs, alt: "Logo RBS" },
    { img: imgUnimed, alt: "Logo unimed" }
  ];
  let fraseDigitada = "";
  let blipClient;
  $$result.css.add(css);
  return `<picture class="flex h-screen items-end justify-center bg-cover bg-center bg-no-repeat pb-40 mainImgBg svelte-fbxz3h"><p class="fontSpace text-center text-2xl font-bold md:text-6xl">${escape(fraseDigitada)}</p></picture> <img${add_attribute("src", Wave1t, 0)} loading="lazy" alt="Wave1" class="flex w-full opacity-30"> <section class="flex flex-col items-center justify-center gap-10 p-10 md:pt-20"><div class="flex flex-col gap-10 md:flex-row"> <div class="relative"><figure class="absolute -left-[5.5rem] -top-[3.5rem] hidden w-52 -rotate-[20deg] sm:flex vibate" data-svelte-h="svelte-qssyzi"><img${add_attribute("src", seta, 0)} alt="Seta indicando o melhor preço" class="w-16 -rotate-6"> <figcaption class="absolute right-[1.3rem] bg-primary-800/40 -top-[0.9rem] rounded-xl border-2 px-2 text-xl font-bold text-white shadow-[0_0px_2rem_0.1rem] shadow-primary-700 hover:border-2 hover:border-white vibrate svelte-fbxz3h">Melhor Preço</figcaption></figure> ${validate_component(PlanetaCard, "PlanetaCard").$$render(
    $$result,
    {
      blipClient,
      imagem: planetaSaturno,
      nome: "Saturno",
      megas: "400",
      preco: "99"
    },
    {},
    {}
  )}</div> ${validate_component(PlanetaCard, "PlanetaCard").$$render(
    $$result,
    {
      blipClient,
      imagem: planetaJupiter,
      nome: "Jupiter",
      megas: "700",
      preco: "149"
    },
    {},
    {}
  )} ${validate_component(PlanetaCard, "PlanetaCard").$$render(
    $$result,
    {
      blipClient,
      imagem: planetaMarte,
      nome: "Marte",
      megas: "1",
      preco: "199"
    },
    {},
    {}
  )}</div> <div class="flex flex-col gap-10 md:flex-row">${validate_component(PlanetaCard, "PlanetaCard").$$render(
    $$result,
    {
      blipClient,
      imagem: planetaVenus,
      nome: "Venus",
      megas: "90",
      preco: "79"
    },
    {},
    {}
  )} ${validate_component(PlanetaCard, "PlanetaCard").$$render(
    $$result,
    {
      blipClient,
      imagem: planetaUrano,
      nome: "Urano",
      megas: "120",
      preco: "89"
    },
    {},
    {}
  )} ${validate_component(PlanetaCard, "PlanetaCard").$$render(
    $$result,
    {
      blipClient,
      imagem: planetaPlutao,
      nome: "Plutão",
      megas: "60",
      preco: "59"
    },
    {},
    {}
  )}</div></section> ${validate_component(ClienteList, "ClienteList").$$render($$result, { clientes }, {}, {})} <section class="flex h-[36rem] px-5 md:px-10 md:h-[50rem] md:justify-around" data-svelte-h="svelte-1ivul2z"><img${add_attribute("src", MiniAstro, 0)} alt="mini astro" class="hidden md:flex md:w-[35rem]"> <article class="flex w-[55rem] flex-col items-center justify-center gap-5 md:gap-10"><h1 class="fontSpace flex items-center justify-center text-center text-2xl md:text-4xl">Quem somos?</h1> <p class="text-md p-5 text-justify md:text-2xl">Bem-vindo à Himarte, sua porta de entrada para o futuro digital! Somos mais do que um
            provedor de internet, somos pioneiros em conectividade. Na Himarte, a experiência do
            cliente é nossa prioridade, e nosso compromisso com a mais alta qualidade reflete-se em
            cada byte que entregamos. Exploramos novos horizontes no universo digital, não apenas
            oferecemos internet confiável, mas convidamos você a &quot;Dizer Hi para o futuro&quot;.</p> <p class="text-md p-5 text-justify md:text-2xl">Na Himarte, <span class="uppercase underline decoration-primary-600">o futuro é aqui</span>!</p></article> </section>`;
});
export {
  Page as default
};
