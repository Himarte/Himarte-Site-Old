import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte"],
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: [vitePreprocess()],

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            // see below for options that can be set here
        }),
        // csp: {
        //     directives: {
        //         "script-src": [
        //             "'self'",
        //             "'unsafe-inline'",
        //             "'unsafe-eval'",
        //             "https://maps.googleapis.com/",
        //             "https://va.vercel-scripts.com/",
        //             "https://chat.blip.ai/",
        //             "https://infotec-telecom.chat.blip.ai",
        //             "https://stats.g.doubleclick.net/",
        //             "https://analytics.google.com/",
        //             "https://infotec-telecom.com.br/",
        //         ],
        //         "frame-src": [
        //             "self",
        //             "https://maps.googleapis.com/",
        //             "https://www.google.com/",
        //             "https://chat.blip.ai/",
        //             " https://infotec-telecom.chat.blip.ai/",
        //             "https://stats.g.doubleclick.net/",
        //             "https://analytics.google.com/",
        //             "https://infotec-telecom.com.br/",
        //         ],
        //         "connect-src": [
        //             "self",
        //             "https://maps.googleapis.com/" /* for google maps */,
        //             "https://va.vercel-scripts.com/" /* for vercel */,
        //             "https://chat.blip.ai/",
        //             "https://stats.g.doubleclick.net/",
        //             "https://analytics.google.com/",
        //             "https://infotec-telecom.com.br/",
        //         ],
        //         "object-src": [
        //             "self",
        //             "https://maps.googleapis.com/",
        //             "https://chat.blip.ai/",
        //             "https://infotec-telecom.chat.blip.ai",
        //             "https://infotec-telecom.com.br/",
        //         ],
        //         "prefetch-src": [
        //             "self",
        //             "'unsafe-inline'",
        //             "https://maps.googleapis.com/",
        //             "https://chat.blip.ai/",
        //             "https://infotec-telecom.chat.blip.ai",
        //             "https://stats.g.doubleclick.net/",
        //             "https://analytics.google.com/",
        //             "https://infotec-telecom.com.br/",
        //         ],
        //     },
        // },
    },
};

export default config;
