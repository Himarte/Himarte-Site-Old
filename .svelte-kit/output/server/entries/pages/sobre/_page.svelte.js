import { c as create_ssr_component, a as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-1o5gf2m">Pagina de sobre</h1> <section class="flex h-[30rem] px-10 lg:h-[55rem] lg:justify-around" data-svelte-h="svelte-1cgvdmn"><picture><source${add_attribute("srcset", "/_app/immutable/assets/mini-astro.TnWc1Bm3.avif 1x, /_app/immutable/assets/mini-astro.nZYy76Sj.avif 2x", 0)} type="image/avif"><source${add_attribute("srcset", "/_app/immutable/assets/mini-astro.0yXQWb_8.webp 1x, /_app/immutable/assets/mini-astro.1GXrvLCq.webp 2x", 0)} type="image/webp"><source${add_attribute("srcset", "/_app/immutable/assets/mini-astro.FQugjCYB.png 1x, /_app/immutable/assets/mini-astro.RBkcoHok.png 2x", 0)} type="image/png"><img src="/_app/immutable/assets/mini-astro.RBkcoHok.png" alt="mini astro" class="hidden lg:flex lg:w-[35rem]" width="896" height="1344"></picture> <div class="flex w-[55rem] flex-col items-center justify-center gap-5 lg:gap-10"><h1 class="variant-glass-surface fontSpace flex items-center justify-center rounded-xl px-5 pt-2 text-center text-2xl lg:text-4xl">Matriz</h1> <p class="text-md p-5 text-justify lg:text-2xl">R. Manoel Antônio de Barros, 290 - Centro, Santa Cruz do Sul - RS, 96825-000</p> <h1 class="variant-glass-surface fontSpace flex items-center justify-center rounded-xl px-5 pt-2 text-center text-2xl lg:text-4xl">Filiais
			<p class="text-md p-5 text-justify lg:text-2xl">R. Cláudio Manoel, 34 - Centro, Vera Cruz - RS, 96880-000 R. Ramiro Barcelos, 511 - Centro,
				Agudo - RS, 96540-000 R. Andrade Neves, 545 - Centro, Rio Pardo - RS, 96640-000 Av. Pereira
				Rêgo, 1545 - Centro, Candelária - RS, 96930-000</p></h1></div></section>`;
});
export {
  Page as default
};
