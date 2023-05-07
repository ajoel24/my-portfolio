import type { Post } from '$lib/types/Post';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const post = await import(`../../../posts/${params.slug}.md`);

	return {
		...post.metadata,
		content: post.default
	} as Post;
}) satisfies PageLoad;
