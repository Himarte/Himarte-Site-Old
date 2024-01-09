import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.HGLy3vIy.js","_app/immutable/chunks/scheduler.6d0vwbdN.js","_app/immutable/chunks/index.Ds49Gw-U.js","_app/immutable/chunks/Icon.VxlBh0fW.js"];
export const stylesheets = [];
export const fonts = [];
