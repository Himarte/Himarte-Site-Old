

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sobre/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.T-kVpzni.js","_app/immutable/chunks/scheduler.a7-2wmif.js","_app/immutable/chunks/index.GEc5RCi9.js","_app/immutable/chunks/each.ggWAAFli.js"];
export const stylesheets = ["_app/immutable/assets/3._Tpcl6EQ.css"];
export const fonts = [];
