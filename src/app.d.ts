// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
    // interface Locals {}
    // interface PageData {}
    // interface Error {}
    // interface Platform {}
}
declare module "blip-chat-widget" {
    export class BlipChat {
        withAppKey(appKey: string): this;
        withButton(options: { color: string; icon: string }): this;
        withCustomCommonUrl(url: string): this;
        build(): void;
    }
}
