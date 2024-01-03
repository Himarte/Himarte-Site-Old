import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.H-IoxTmM.js","_app/immutable/chunks/scheduler.mRkECR82.js","_app/immutable/chunks/index.TyIjA7A3.js"];
export const stylesheets = ["_app/immutable/assets/2.fs3rGiiN.css"];
export const fonts = ["_app/immutable/assets/Xspace.-675vurb.otf"];
