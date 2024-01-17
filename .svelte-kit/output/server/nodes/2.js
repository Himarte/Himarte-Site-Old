

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.hKU8d8pY.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.qsg2qU0_.js","_app/immutable/chunks/index.pQbJqlm8.js","_app/immutable/chunks/Icon.QqS9T5X9.js","_app/immutable/chunks/each.rMjQtr9c.js"];
export const stylesheets = ["_app/immutable/assets/2.novgq4e2.css"];
export const fonts = [];
