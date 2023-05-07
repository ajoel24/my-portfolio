<script>
  import { Card, CardBody, CardLink, CardSubtitle, CardTitle, Column, Container, Row } from "sveltestrap";

  export let data;
</script>

<svelte:head>
  <title>Blog | Andrew Joel</title>
  <meta content="Blog page of my website." name="description" />
  <meta content="Andrew Joel" name="author" />
</svelte:head>

<Container>
  <Row>
    <Column>
      <h1 class="text-light">This is my blog page!</h1>
    </Column>
  </Row>
</Container>
<Container class="my-4">
  <Row class="row-cols-1 row-cols-md-2">
    {#each data.posts as post}
      <Column>
        <Card class="bg-light text-dark h-100">
          <CardLink href={`/blog/${post.path}`}>
            <CardTitle>{post.meta.title}</CardTitle>
          </CardLink>
          <CardSubtitle>Posted on: {post.meta.date}</CardSubtitle>
          <CardBody>{post.meta.excerpt}</CardBody>
        </Card>
      </Column>
    {/each}
  </Row>
</Container>