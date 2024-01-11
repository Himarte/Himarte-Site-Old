

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.gc8eSL52.js","_app/immutable/chunks/scheduler.B8Kw_W-B.js","_app/immutable/chunks/index.cO8Ykfts.js","_app/immutable/chunks/stores.Lt9CabMT.js","_app/immutable/chunks/entry.GTuePIGD.js"];
export const stylesheets = [];
export const fonts = [];
