<script lang="ts">
  import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "sveltestrap";

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<Navbar class="border-bottom border-white" color="dark" dark expand="md">
  <NavbarBrand href="/">Andrew Joel</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse expand="md" {isOpen} navbar on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink href="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/blog">Blog</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/contact">Contact</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
