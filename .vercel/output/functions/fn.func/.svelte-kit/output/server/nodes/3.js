

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sobre/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.mc41p7ab.js","_app/immutable/chunks/scheduler.B8Kw_W-B.js","_app/immutable/chunks/index.cO8Ykfts.js"];
export const stylesheets = [];
export const fonts = [];
