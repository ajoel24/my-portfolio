<script>
  import { Styles } from "sveltestrap";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Styles />
<section class="wrapper">
  <Header />
  <main class="container-fluid py-2 bg-dark flex-fill">
    <slot />
  </main>
  <Footer />
</section>


<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .flex-fill {
        flex: 1 1 auto;
    }
</style>