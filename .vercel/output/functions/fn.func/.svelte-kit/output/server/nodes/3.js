

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sobre/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.GkX2S8PF.js","_app/immutable/chunks/scheduler.bA8xtfAf.js","_app/immutable/chunks/index.9u6dcQei.js"];
export const stylesheets = [];
export const fonts = [];
