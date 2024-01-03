

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sobre/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.8ifH-YRX.js","_app/immutable/chunks/scheduler.mRkECR82.js","_app/immutable/chunks/index.TyIjA7A3.js"];
export const stylesheets = [];
export const fonts = [];
