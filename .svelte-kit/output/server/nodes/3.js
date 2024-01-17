

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sobre/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.TZjnnwtN.js","_app/immutable/chunks/scheduler.a7-2wmif.js","_app/immutable/chunks/index.uKqedO9l.js","_app/immutable/chunks/each.bYXOOGY3.js"];
export const stylesheets = ["_app/immutable/assets/3._Tpcl6EQ.css"];
export const fonts = [];
