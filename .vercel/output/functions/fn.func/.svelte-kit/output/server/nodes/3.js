

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sobre/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.gvKG7p_Q.js","_app/immutable/chunks/scheduler.6d0vwbdN.js","_app/immutable/chunks/index.Ds49Gw-U.js"];
export const stylesheets = [];
export const fonts = [];
