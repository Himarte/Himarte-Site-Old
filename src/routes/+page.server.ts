import { PostHog } from 'posthog-node';

export async function load() {
	const posthog = new PostHog('phc_1huQjH4JtMRXQcM1SoIQ2QIUt7yOdeztwq3No2XugzL', {
		host: 'https://us.i.posthog.com'
	});
	posthog.capture({
		distinctId: 'distinct_id_of_the_user',
		event: 'event_name'
	});
	await posthog.shutdown();
}
