import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.wTi5yxCP.js","_app/immutable/chunks/scheduler.bA8xtfAf.js","_app/immutable/chunks/index.9u6dcQei.js","_app/immutable/chunks/Icon.ORSXjyD_.js"];
export const stylesheets = [];
export const fonts = [];
