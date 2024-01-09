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
		client: {"start":"_app/immutable/entry/start.X7cRspO_.js","app":"_app/immutable/entry/app.GJM_ifAt.js","imports":["_app/immutable/entry/start.X7cRspO_.js","_app/immutable/chunks/entry.EDmgOGPf.js","_app/immutable/chunks/scheduler.6d0vwbdN.js","_app/immutable/chunks/index.ksOrT-sj.js","_app/immutable/entry/app.GJM_ifAt.js","_app/immutable/chunks/scheduler.6d0vwbdN.js","_app/immutable/chunks/index.Ds49Gw-U.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js'))
		],
		routes: [
			{
				id: "/sobre",
				pattern: /^\/sobre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/trabalhe-conosco",
				pattern: /^\/trabalhe-conosco\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
