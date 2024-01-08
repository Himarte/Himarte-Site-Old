import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.X9qYH2YM.js","_app/immutable/chunks/scheduler.bA8xtfAf.js","_app/immutable/chunks/index.9u6dcQei.js","_app/immutable/chunks/index.lXVnC1G_.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.WIrV0m6L.js","_app/immutable/chunks/stores.Zym1reys.js","_app/immutable/chunks/singletons.UyTc8-yM.js","_app/immutable/chunks/Icon.ORSXjyD_.js"];
export const stylesheets = ["_app/immutable/assets/0.cMK5fYwA.css","_app/immutable/assets/ProgressBar.oq5aOWfL.css"];
export const fonts = ["_app/immutable/assets/Xspace.-675vurb.otf"];
