import { describe, expect, it } from 'vitest';
import { fetchMarkdownPosts } from '$lib/fetchBlogPosts';

describe('Fetch blog posts', () => {
	it('Should fetch posts', async () => {
		const posts = await fetchMarkdownPosts();
		expect(posts).not.toBeNull();
		expect(posts).length.gte(0);
	});
});
