export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icon2.ico"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7YfKzVyC.js","app":"_app/immutable/entry/app.IF49OJGX.js","imports":["_app/immutable/entry/start.7YfKzVyC.js","_app/immutable/chunks/entry.N9_1sqsr.js","_app/immutable/chunks/scheduler.B8Kw_W-B.js","_app/immutable/entry/app.IF49OJGX.js","_app/immutable/chunks/scheduler.B8Kw_W-B.js","_app/immutable/chunks/index.vT7lrOHz.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/sobre",
				pattern: /^\/sobre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/trabalhe-conosco",
				pattern: /^\/trabalhe-conosco\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
