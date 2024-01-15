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
        withEventHandler(ENTER_EVENT: any, arg1: () => void) {
            throw new Error("Method not implemented.");
        }
        static ENTER_EVENT(ENTER_EVENT: any, arg1: () => void) {
            throw new Error("Method not implemented.");
        }
        static LEAVE_EVENT(LEAVE_EVENT: any, arg1: () => void) {
            throw new Error("Method not implemented.");
        }
        static LOAD_EVENT(LOAD_EVENT: any, arg1: () => void) {
            throw new Error("Method not implemented.");
        }
        withAppKey(appKey: string): this;
        withButton(options: { color: string; icon: string }): this;
        withCustomCommonUrl(url: string): this;
        build(): void;
    }
}
