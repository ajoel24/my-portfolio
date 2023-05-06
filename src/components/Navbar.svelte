<header class="navbar">
  <div class="navbar-title-wrapper">
    <h1 class="navbar-title">Andrew Joel</h1>
  </div>
  <div class="navbar-nav">
    <ul class="navbar-links">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</header>

<style>
    .navbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.5rem;
        border-bottom: 0.1rem solid var(--orange-color);
    }

    .navbar div {
        padding: 0 5rem;
    }

    .navbar-title-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem;
    }

    .navbar-title {
        font-family: 'Merriweather', sans-serif;
        font-size: 2rem;
        color: var(--purple-color);
    }

    .navbar-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .navbar-links li {
        list-style: none;
        padding: 0 1rem;
    }

    .navbar-links li a {
        cursor: pointer;
        text-decoration: none;
        color: var(--foreground-color);
        font-family: 'Rubik', sans-serif;
        font-size: 1.5rem;
    }
</style>