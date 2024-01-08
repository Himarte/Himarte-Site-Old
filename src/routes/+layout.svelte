<script lang="ts">
    import "../app.postcss";
    import { AppShell } from "@skeletonlabs/skeleton";
    import Header from "$lib/assets/components/Header.svelte";
    import Footer from "$lib/assets/components/Footer.svelte";
    // Highlight JS
    import hljs from "highlight.js/lib/core";
    import "highlight.js/styles/github-dark.css";
    import { storeHighlightJs } from "@skeletonlabs/skeleton";
    import xml from "highlight.js/lib/languages/xml"; // for HTML
    import css from "highlight.js/lib/languages/css";
    import javascript from "highlight.js/lib/languages/javascript";
    import typescript from "highlight.js/lib/languages/typescript";
    // Speed Insights da vercel
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
    injectSpeedInsights();
    // Skeleton Stores
    // import { initializeStores } from "@skeletonlabs/skeleton";
    // initializeStores();

    hljs.registerLanguage("xml", xml); // for HTML
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("typescript", typescript);
    storeHighlightJs.set(hljs);

    // Floating UI for Popups
    import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
    import { storePopup } from "@skeletonlabs/skeleton";
    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    // tenho que testar isso:

    import type { ComponentEvents } from "svelte";

    function scrollHandler(event: ComponentEvents<AppShell>["scroll"]) {
        console.log(event.currentTarget.scrollTop);
    }
</script>

<!-- App Shell -->
<AppShell on:scroll={scrollHandler}>
    <svelte:fragment slot="header">
        <Header />
    </svelte:fragment>
    <!-- Page Route Content -->
    <main><slot /></main>
    <svelte:fragment slot="pageFooter">
        <Footer />
    </svelte:fragment>
</AppShell>
