<script>
  import Container from "../components/Container.svelte";
</script>

<svelte:head>
  <title>Home | Andrew Joel</title>
  <meta content="Welcome to my home page!" name="description" />
  <meta content="Andrew Joel" name="author" />
</svelte:head>

<Container>
  <section class="welcome-content">
    <h1>Hey there! Welcome to my site.</h1>
    <p>I&lsquo;m a back-end developer by trade. I can do some frontend as well. Please feel free to explore my site, as
      I constantly share my ideas here.</p>
  </section>
</Container>

<style>
    .welcome-content {
        color: var(--foreground-color);
        font-family: 'Rubik', sans-serif;
        line-height: 1.25;
    }

    .welcome-content p {
        font-size: 1.25rem;
    }
</style>
