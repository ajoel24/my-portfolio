import type { PageLoad } from './$types';
import { GET_POSTS_URL } from '$lib/const';

export const load = (async ({ fetch }) => {
	const response = await fetch(GET_POSTS_URL);
	const posts = await response.json();

	return {
		posts
	};
}) satisfies PageLoad;
