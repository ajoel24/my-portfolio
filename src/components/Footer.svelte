<script>
  import { Column, Container, Row } from "sveltestrap";
</script>

<Container class="bg-secondary" fluid>
  <Row>
    <Column class="d-flex flex-column align-items-center justify-content-center text-light">
      <h5>&copy; {new Date().getFullYear()}. All rights reserved.</h5>
      <p>Powered by SvelteKit</p>
    </Column>
  </Row>
</Container>

<style>
    h5 {
        font-size: 1rem;
    }
</style>