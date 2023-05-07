import { fetchMarkdownPosts } from '$lib/fetchBlogPosts';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();
	allPosts.sort((first, second) => Date.parse(first.meta.date) - Date.parse(second.meta.date));
	return json(allPosts);
};
