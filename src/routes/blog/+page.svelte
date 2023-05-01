<script>
  import Container from "../../components/Container.svelte";
</script>

<svelte:head>
  <title>Blog | Andrew Joel</title>
  <meta content="Blog page of my website." name="description" />
  <meta content="Andrew Joel" name="author" />
</svelte:head>

<Container>
  <section class="blog-content">
    <h1>This is my blog page.</h1>
  </section>
</Container>

<style>
    .blog-content {
        color: var(--foreground-color);
        font-family: 'Rubik', sans-serif;
    }
</style>