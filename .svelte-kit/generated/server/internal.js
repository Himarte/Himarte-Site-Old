
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/.pnpm/@sveltejs+kit@2.3.0_@sveltejs+vite-plugin-svelte@3.0.1_svelte@4.2.8_vite@5.0.11/node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"frame-src":["self","https://maps.googleapis.com/","https://www.google.com/","https://chat.blip.ai/"," https://infotec-telecom.chat.blip.ai/","https://stats.g.doubleclick.net/","https://analytics.google.com/","https://infotec-telecom.com.br/"],"connect-src":["self","https://maps.googleapis.com/","https://va.vercel-scripts.com/","https://chat.blip.ai/","https://stats.g.doubleclick.net/","https://analytics.google.com/","https://infotec-telecom.com.br/"],"object-src":["self","https://maps.googleapis.com/","https://chat.blip.ai/","https://infotec-telecom.chat.blip.ai","https://infotec-telecom.com.br/"],"prefetch-src":["self","'unsafe-inline'","https://maps.googleapis.com/","https://chat.blip.ai/","https://infotec-telecom.chat.blip.ai","https://stats.g.doubleclick.net/","https://analytics.google.com/","https://infotec-telecom.com.br/"],"script-src":["'self'","'unsafe-inline'","'unsafe-eval'","https://maps.googleapis.com/","https://va.vercel-scripts.com/","https://chat.blip.ai/","https://infotec-telecom.chat.blip.ai","https://stats.g.doubleclick.net/","https://analytics.google.com/","https://infotec-telecom.com.br/"],"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"pt-br\" class=\"dark\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"description\" content=\"Conectando você ao futuro com velocidade, confiabilidade e inovação - HIMARTE NET, onde acreditamos que o futuro é feito bem aqui.\">\n\t\t<meta name=\"keywords\" content=\"provedor de internet, conexão de alta velocidade, serviços de banda larga, HIMARTE NET, internet confiável, himarte\">\n\t\t<link rel=\"icon\" href=\"" + assets + "/icon2.ico\" />\n\t\t<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + assets + "/icon32.png\">\n        <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + assets + "/icon16.png\">\n        <title>HIMARTE</title>\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\" data-theme=\"theme_hi_marte\">\n\t\t<div style=\"display: contents\" class=\"h-full overflow-hidden \">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "12qory7"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_prerendering, set_private_env, set_public_env, set_safe_public_env };
