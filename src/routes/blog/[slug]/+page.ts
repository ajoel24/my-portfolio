import type { Post } from '$lib/types/Post';

export async function load({ params }) {
	const post = await import(`../../../posts/${params.slug}.md`);

	return {
		...post.metadata,
		content: post.default
	} as Post;
}
