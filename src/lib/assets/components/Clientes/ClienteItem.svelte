<script lang="ts">
    export let img: string;
    export let alt: string;
</script>

<img
    src={img}
    loading="lazy"
    {alt}
    class="card flex w-40 items-center justify-center rounded-3xl"
/>
