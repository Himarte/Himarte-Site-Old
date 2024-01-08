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
		client: {"start":"_app/immutable/entry/start.y-6_90e1.js","app":"_app/immutable/entry/app.aS7RkiAs.js","imports":["_app/immutable/entry/start.y-6_90e1.js","_app/immutable/chunks/scheduler.bA8xtfAf.js","_app/immutable/chunks/singletons.UyTc8-yM.js","_app/immutable/chunks/index.lXVnC1G_.js","_app/immutable/entry/app.aS7RkiAs.js","_app/immutable/chunks/scheduler.bA8xtfAf.js","_app/immutable/chunks/index.9u6dcQei.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
