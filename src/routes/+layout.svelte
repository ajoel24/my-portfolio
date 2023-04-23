<script>
    import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider withNormalizeCss withGlobalStyles>
    <slot />
</SvelteUIProvider>
