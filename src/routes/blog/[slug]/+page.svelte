<script lang="ts">
  import type { Post } from "$lib/types/Post";

  export let data: Post;
</script>

<svelte:head>
  <title>{data.title} | Andrew Joel</title>
  <meta content={data.excerpt} name="description" />
  <meta content={data.author} name="author" />
  <meta content={data.date} name="date" />
</svelte:head>


<article>
  <h1>{ data.title }</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>
