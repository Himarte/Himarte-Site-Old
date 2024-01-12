import LINK_BLIP_CHAT from "$env/static/private";
import CHAVE_API_BLIP_CHAT from "$env/static/private";

let BlipChat;

const module = await import("blip-chat-widget");
BlipChat = module.BlipChat;

new BlipChat()
    .withAppKey(`${CHAVE_API_BLIP_CHAT}`)
    .withButton({ color: "#EB4F27", icon: "" })
    .withCustomCommonUrl(`${LINK_BLIP_CHAT}`)
    .build();

export default BlipChat;
