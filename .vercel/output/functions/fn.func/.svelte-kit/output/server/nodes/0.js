import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.XCMkOLwy.js","_app/immutable/chunks/scheduler.B8Kw_W-B.js","_app/immutable/chunks/index.cO8Ykfts.js","_app/immutable/chunks/entry.N3EroB7P.js","_app/immutable/chunks/ProgressBar.svelte_svelte_type_style_lang.fMcmEBuW.js","_app/immutable/chunks/Icon.QsaS6Gvk.js","_app/immutable/chunks/stores.TOdFnR4W.js"];
export const stylesheets = ["_app/immutable/assets/0.ZtwPKURO.css","_app/immutable/assets/ProgressBar.oq5aOWfL.css"];
export const fonts = ["_app/immutable/assets/Xspace.-675vurb.otf"];
