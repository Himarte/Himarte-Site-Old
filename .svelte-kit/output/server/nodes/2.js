import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.vK512-vq.js","_app/immutable/chunks/scheduler.B8Kw_W-B.js","_app/immutable/chunks/index.vT7lrOHz.js","_app/immutable/chunks/Icon.AAgfEOBb.js"];
export const stylesheets = [];
export const fonts = [];
