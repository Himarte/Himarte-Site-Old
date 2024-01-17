import { c as create_ssr_component, b as add_attribute, v as validate_component, e as escape, h as each } from "../../../chunks/ssr.js";
const Spinning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="md:map-frame absolute flex justify-center h-full w-full items-center" data-svelte-h="svelte-mdm1mu"><div class="border-transparent h-36 w-36 animate-spin rounded-full border-8 border-t-primary-500/70"></div></div>`;
});
const css = {
  code: ".map-frame.svelte-aoy8cu{width:400px;height:300px;border:0}",
  map: null
};
const LocationCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { location } = $$props;
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  $$result.css.add(css);
  return `<div class="flex md:w-1/2 md:p-2"><a class="card md:flex card-hover md:w-full overflow-hidden border border-gray-200"${add_attribute("href", location.url, 0)}><header class="relative">${`${validate_component(Spinning, "Spinning").$$render($$result, {}, {}, {})}`} <iframe class="map-frame svelte-aoy8cu"${add_attribute("src", location.url, 0)} ${"allowfullscreen"} loading="lazy" referrerpolicy="no-referrer"${add_attribute("title", location.title, 0)}></iframe></header> <div class="flex flex-col w-full py-20 md:py-0 justify-center items-center space-y-2 whitespace-nowrap"><h3 class="h3 text-primary-500">${escape(location.city)}</h3> <h6 class="h6">${escape(location.days)}</h6> <h6 class="h6">${escape(location.schedule)}</h6></div></a> </div>`;
});
const listaFiliais = [
  {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13857.20401264829!2d-52.43406213052162!3d-29.740000651407122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ca36c00bd5853%3A0x616fb46dea836058!2sHIMARTE%20NET!5e0!3m2!1spt-BR!2sbr!4v1704579780349!5m2!1spt-BR!2sbr",
    title: "Himarte Net Localização Santa Cruz do Sul",
    city: "Santa Cruz do Sul",
    schedule: "08:30 - 12:00 | 13:30 - 18:00",
    days: "Segunda a Sexta"
  },
  {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.1010305099617!2d-52.5019599!3d-29.7168326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951cbacfad314b5f%3A0x21c08751489fdd15!2sR.%20Cl%C3%A1udio%20Manoel%2C%2034%20-%20Centro%2C%20Vera%20Cruz%20-%20RS%2C%2096880-000!5e0!3m2!1spt-BR!2sbr!4v1704916342959!5m2!1spt-BR!2sbr",
    title: "Himarte Net Localização Vera Cruz",
    city: "Vera Cruz",
    schedule: "08:30 - 12:00 | 13:30 - 18:00",
    days: "Segunda a Sexta"
  },
  {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8313322753793!2d-52.380830074465095!3d-29.98427696370144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951b5d438b3601f9%3A0xece5e30052035b44!2sR.%20Andrade%20Neves%2C%20545%20-%20Centro%2C%20Rio%20Pardo%20-%20RS%2C%2096640-000!5e0!3m2!1spt-BR!2sbr!4v1704917277535!5m2!1spt-BR!2sbr",
    title: "Himarte Net Localização Rio Pardo",
    city: "Rio Pardo",
    schedule: "08:30 - 12:00 | 13:30 - 18:00",
    days: "Segunda a Sexta"
  },
  {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.1489580779007!2d-52.52549858463143!3d-30.54509526171223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951ad8223a5733bd%3A0x600caf11bf8a4e26!2sAv.%20Cel.%20Hon%C3%B3rio%20Carvalho%2C%201368%20-%20Encruzilhada%20do%20Sul%2C%20RS%2C%2096610-000!5e0!3m2!1spt-BR!2sbr!4v1704916192295!5m2!1spt-BR!2sbr",
    title: "Himarte Net Localização Encruzilhada do Sul",
    city: "Encruzilhada do Sul",
    schedule: "08:30 - 12:00 | 13:30 - 18:00",
    days: "Segunda a Sexta"
  },
  {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.5817792356784!2d-53.25349578773347!3d-29.644887812761727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503057ca8505d55%3A0x82f4d6d0f233a364!2sR.%20Ramiro%20Barcelos%2C%20511%20-%2001%20-%20Centro%2C%20Agudo%20-%20RS%2C%2096540-000!5e0!3m2!1spt-BR!2sbr!4v1704917553203!5m2!1spt-BR!2sbr",
    title: "Himarte Net Localização Agudo",
    city: "Agudo",
    schedule: "08:30 - 12:00 | 13:30 - 18:00",
    days: "Segunda a Sexta"
  },
  {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.6272188209496!2d-52.789262387732684!3d-29.672590014030767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95034a1dc7593213%3A0x387fd40d2374c5e1!2sAv.%20Pereira%20R%C3%AAgo%2C%201545%20-%20Centro%2C%20Candel%C3%A1ria%20-%20RS%2C%2096930-000!5e0!3m2!1spt-BR!2sbr!4v1704917370236!5m2!1spt-BR!2sbr",
    title: "Himarte Net Localização Candelaria",
    city: "Candelaria - RS",
    schedule: "08:30 - 12:00 | 13:30 - 18:00",
    days: "Segunda a Sexta"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="px-10 pt-10 space-y-5" data-svelte-h="svelte-1dzr6z2"><h1 class="h1 text-center font-bold gradient-heading fontSpace">Bem vindo!</h1> <h3 class="h3">Um pouco sobre a nossa historia...</h3> <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui quam dolorem
        aspernatur? Ab, voluptatibus ratione? Facere omnis iusto pariatur recusandae dolor cumque
        accusamus explicabo consectetur officiis magni! Cupiditate, dolor! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Earum tempora ut at, id</article> <h3 class="h3">E foi assim que nos...</h3> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis qui quam dolorem
        aspernatur? Ab, voluptatibus ratione? Facere omnis iusto pariatur recusandae dolor cumque
        accusamus explicabo consectetur officiis magni! Cupiditate, dolor! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Earum tempora ut at, id repellat rem odio iste esse
        nostrum inventore a, illum deserunt. Accusantium at necessitatibus temporibus reprehenderit
        totam quasi?</p></section> <section class="px-10 py-10 space-y-5"><h2 class="h5 md:h2 font-semibold gradient-heading" data-svelte-h="svelte-1ko31na">Encontre a HIMARTE mais proxima de você!</h2> <div class="flex flex-col gap-5 items-center w-full"><div class="flex flex-col md:flex-row md:flex-wrap w-full gap-5 md:gap-0">${each(listaFiliais, (location) => {
    return `${validate_component(LocationCard, "LocationCard").$$render($$result, { location }, {}, {})}`;
  })}</div> <div class="flex flex-col md:flex-row w-full md:justify-center gap-5"></div></div></section>`;
});
export {
  Page as default
};
