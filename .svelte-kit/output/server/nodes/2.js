

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ur61RRMR.js","_app/immutable/chunks/scheduler.B8Kw_W-B.js","_app/immutable/chunks/index.cO8Ykfts.js","_app/immutable/chunks/Icon.c27Oldqc.js"];
export const stylesheets = ["_app/immutable/assets/2.4FoM3ZJg.css"];
export const fonts = [];
