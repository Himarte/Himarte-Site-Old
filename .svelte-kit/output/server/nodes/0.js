import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.qKVSsmey.js","_app/immutable/chunks/scheduler.6d0vwbdN.js","_app/immutable/chunks/index.Ds49Gw-U.js","_app/immutable/chunks/index.ksOrT-sj.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.wYCh_8hT.js","_app/immutable/chunks/stores.PKv2kfUV.js","_app/immutable/chunks/entry.iDLwFUJA.js","_app/immutable/chunks/Icon.VxlBh0fW.js"];
export const stylesheets = ["_app/immutable/assets/0.Y9QArMX1.css","_app/immutable/assets/ProgressBar.oq5aOWfL.css"];
export const fonts = ["_app/immutable/assets/Xspace.-675vurb.otf"];
