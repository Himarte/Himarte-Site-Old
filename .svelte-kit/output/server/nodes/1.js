

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5pxcZMv1.js","_app/immutable/chunks/scheduler.mRkECR82.js","_app/immutable/chunks/index.TyIjA7A3.js","_app/immutable/chunks/stores.klwONJs3.js","_app/immutable/chunks/singletons.J9bYAoQU.js"];
export const stylesheets = [];
export const fonts = [];
