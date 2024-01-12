<script lang="ts">
    import { onMount } from "svelte";

    let BlipChat: any;

    onMount(async () => {
        const module = await import("blip-chat-widget");
        BlipChat = module.BlipChat;

        new BlipChat()
            .withAppKey(import.meta.env.VITE_CHAVE_API_BLIP_CHAT)
            .withButton({ color: "#EB4F27", icon: "" })
            .withCustomCommonUrl(import.meta.env.VITE_LINK_BLIP_CHAT)
            .build();
    });
</script>
