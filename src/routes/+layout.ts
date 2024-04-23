import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

injectSpeedInsights();
import posthog from 'posthog-js';
import { browser } from '$app/environment';

export const load = async () => {
	if (browser) {
		posthog.init('phc_1huQjH4JtMRXQcM1SoIQ2QIUt7yOdeztwq3No2XugzL', {
			api_host: '"https://us.i.posthog.com"',
			capture_pageview: false,
			capture_pageleave: false
		});
	}
	return;
};
