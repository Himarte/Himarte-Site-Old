import { c as create_ssr_component, g as subscribe } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { r as redirect } from "../../chunks/index.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  subscribe(page, (value) => value);
  throw redirect(300, "/");
});
export {
  Error as default
};
