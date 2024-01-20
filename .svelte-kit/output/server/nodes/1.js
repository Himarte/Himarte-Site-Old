

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6CL29zSC.js","_app/immutable/chunks/scheduler.a7-2wmif.js","_app/immutable/chunks/index.G-6XglCo.js","_app/immutable/chunks/stores.8_IC7KzF.js","_app/immutable/chunks/entry.mKzypRJR.js"];
export const stylesheets = [];
export const fonts = [];
