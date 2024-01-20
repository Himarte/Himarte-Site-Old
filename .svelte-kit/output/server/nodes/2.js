

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.I7j4K-lj.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.a7-2wmif.js","_app/immutable/chunks/index.G-6XglCo.js","_app/immutable/chunks/Icon.ugWvyeas.js","_app/immutable/chunks/each.OzPVbFMF.js"];
export const stylesheets = ["_app/immutable/assets/2.WRR3RRRw.css"];
export const fonts = [];
