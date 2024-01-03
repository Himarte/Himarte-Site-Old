import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.egEFP_-f.js","_app/immutable/chunks/scheduler.mRkECR82.js","_app/immutable/chunks/index.TyIjA7A3.js","_app/immutable/chunks/singletons.bnlutw9S.js","_app/immutable/chunks/stores.v_DcH3tf.js"];
export const stylesheets = ["_app/immutable/assets/0.oqfZOpwB.css"];
export const fonts = [];
