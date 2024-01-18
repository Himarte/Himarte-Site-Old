
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const VITE_LINK_BLIP_CHAT: string;
	export const VITE_CHAVE_API_BLIP_CHAT: string;
	export const HOST_SERVER: string;
	export const SENDER_EMAIL: string;
	export const SENDER_PASSWORD: string;
	export const EMAIL_RECEVER: string;
	export const CHROME_DESKTOP: string;
	export const COLORTERM: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const DBUS_STARTER_ADDRESS: string;
	export const DBUS_STARTER_BUS_TYPE: string;
	export const DEBUGINFOD_URLS: string;
	export const DESKTOP_SESSION: string;
	export const DISPLAY: string;
	export const GDK_BACKEND: string;
	export const GDK_BACKEND_VSCODE_SNAP_ORIG: string;
	export const GDMSESSION: string;
	export const GIO_MODULE_DIR: string;
	export const GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
	export const GIT_ASKPASS: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const GPG_AGENT_INFO: string;
	export const GSETTINGS_SCHEMA_DIR: string;
	export const GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
	export const GTK_EXE_PREFIX: string;
	export const GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
	export const GTK_IM_MODULE_FILE: string;
	export const GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
	export const GTK_MODULES: string;
	export const GTK_PATH: string;
	export const GTK_PATH_VSCODE_SNAP_ORIG: string;
	export const HOME: string;
	export const INIT_CWD: string;
	export const LANG: string;
	export const LESS: string;
	export const LOCPATH: string;
	export const LOCPATH_VSCODE_SNAP_ORIG: string;
	export const LOGNAME: string;
	export const LSCOLORS: string;
	export const LS_COLORS: string;
	export const NODE: string;
	export const NODE_PATH: string;
	export const OLDPWD: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const PAGER: string;
	export const PATH: string;
	export const PMSPEC: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const PWD: string;
	export const QT_ACCESSIBILITY: string;
	export const QT_IM_MODULE: string;
	export const SESSION_MANAGER: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const SNAP: string;
	export const SNAP_ARCH: string;
	export const SNAP_COMMON: string;
	export const SNAP_CONTEXT: string;
	export const SNAP_COOKIE: string;
	export const SNAP_DATA: string;
	export const SNAP_EUID: string;
	export const SNAP_INSTANCE_KEY: string;
	export const SNAP_INSTANCE_NAME: string;
	export const SNAP_LIBRARY_PATH: string;
	export const SNAP_NAME: string;
	export const SNAP_REAL_HOME: string;
	export const SNAP_REEXEC: string;
	export const SNAP_REVISION: string;
	export const SNAP_UID: string;
	export const SNAP_USER_COMMON: string;
	export const SNAP_USER_DATA: string;
	export const SNAP_VERSION: string;
	export const SPACESHIP_ROOT: string;
	export const SPACESHIP_VERSION: string;
	export const SSH_AGENT_LAUNCHER: string;
	export const SSH_AUTH_SOCK: string;
	export const SYSTEMD_EXEC_PID: string;
	export const TERM: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const USER: string;
	export const USERNAME: string;
	export const USER_ZDOTDIR: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VSCODE_INJECTION: string;
	export const VTE_VERSION: string;
	export const WINDOWPATH: string;
	export const XAUTHORITY: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
	export const XDG_MENU_PREFIX: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const XMODIFIERS: string;
	export const ZDOTDIR: string;
	export const ZPFX: string;
	export const ZSH: string;
	export const ZSH_CACHE_DIR: string;
	export const _: string;
	export const npm_command: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_config_node_gyp: string;
	export const npm_config_prefix: string;
	export const npm_config_registry: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_dependencies__floating_ui_dom: string;
	export const npm_package_dependencies_blip_chat_widget: string;
	export const npm_package_dependencies_highlight_js: string;
	export const npm_package_dependencies_lucide_svelte: string;
	export const npm_package_dependencies_nodemailer: string;
	export const npm_package_dependencies_sanitize_html: string;
	export const npm_package_devDependencies__skeletonlabs_skeleton: string;
	export const npm_package_devDependencies__skeletonlabs_tw_plugin: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies__sveltejs_adapter_vercel: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies__tailwindcss_forms: string;
	export const npm_package_devDependencies__tailwindcss_typography: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const npm_package_devDependencies__types_node: string;
	export const npm_package_devDependencies__types_nodemailer: string;
	export const npm_package_devDependencies__types_sanitize_html: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies_vite_plugin_tailwind_purgecss: string;
	export const npm_package_name: string;
	export const npm_package_private: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_check: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_format: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_type: string;
	export const npm_package_version: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		VITE_LINK_BLIP_CHAT: string;
		VITE_CHAVE_API_BLIP_CHAT: string;
		HOST_SERVER: string;
		SENDER_EMAIL: string;
		SENDER_PASSWORD: string;
		EMAIL_RECEVER: string;
		CHROME_DESKTOP: string;
		COLORTERM: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		DBUS_STARTER_ADDRESS: string;
		DBUS_STARTER_BUS_TYPE: string;
		DEBUGINFOD_URLS: string;
		DESKTOP_SESSION: string;
		DISPLAY: string;
		GDK_BACKEND: string;
		GDK_BACKEND_VSCODE_SNAP_ORIG: string;
		GDMSESSION: string;
		GIO_MODULE_DIR: string;
		GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
		GIT_ASKPASS: string;
		GNOME_DESKTOP_SESSION_ID: string;
		GNOME_SHELL_SESSION_MODE: string;
		GNOME_TERMINAL_SCREEN: string;
		GNOME_TERMINAL_SERVICE: string;
		GPG_AGENT_INFO: string;
		GSETTINGS_SCHEMA_DIR: string;
		GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
		GTK_EXE_PREFIX: string;
		GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
		GTK_IM_MODULE_FILE: string;
		GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
		GTK_MODULES: string;
		GTK_PATH: string;
		GTK_PATH_VSCODE_SNAP_ORIG: string;
		HOME: string;
		INIT_CWD: string;
		LANG: string;
		LESS: string;
		LOCPATH: string;
		LOCPATH_VSCODE_SNAP_ORIG: string;
		LOGNAME: string;
		LSCOLORS: string;
		LS_COLORS: string;
		NODE: string;
		NODE_PATH: string;
		OLDPWD: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		PAGER: string;
		PATH: string;
		PMSPEC: string;
		PNPM_SCRIPT_SRC_DIR: string;
		PWD: string;
		QT_ACCESSIBILITY: string;
		QT_IM_MODULE: string;
		SESSION_MANAGER: string;
		SHELL: string;
		SHLVL: string;
		SNAP: string;
		SNAP_ARCH: string;
		SNAP_COMMON: string;
		SNAP_CONTEXT: string;
		SNAP_COOKIE: string;
		SNAP_DATA: string;
		SNAP_EUID: string;
		SNAP_INSTANCE_KEY: string;
		SNAP_INSTANCE_NAME: string;
		SNAP_LIBRARY_PATH: string;
		SNAP_NAME: string;
		SNAP_REAL_HOME: string;
		SNAP_REEXEC: string;
		SNAP_REVISION: string;
		SNAP_UID: string;
		SNAP_USER_COMMON: string;
		SNAP_USER_DATA: string;
		SNAP_VERSION: string;
		SPACESHIP_ROOT: string;
		SPACESHIP_VERSION: string;
		SSH_AGENT_LAUNCHER: string;
		SSH_AUTH_SOCK: string;
		SYSTEMD_EXEC_PID: string;
		TERM: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		USER: string;
		USERNAME: string;
		USER_ZDOTDIR: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VSCODE_INJECTION: string;
		VTE_VERSION: string;
		WINDOWPATH: string;
		XAUTHORITY: string;
		XDG_CONFIG_DIRS: string;
		XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
		XDG_CURRENT_DESKTOP: string;
		XDG_DATA_DIRS: string;
		XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
		XDG_MENU_PREFIX: string;
		XDG_RUNTIME_DIR: string;
		XDG_SESSION_CLASS: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		XMODIFIERS: string;
		ZDOTDIR: string;
		ZPFX: string;
		ZSH: string;
		ZSH_CACHE_DIR: string;
		_: string;
		npm_command: string;
		npm_config_frozen_lockfile: string;
		npm_config_node_gyp: string;
		npm_config_prefix: string;
		npm_config_registry: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_dependencies__floating_ui_dom: string;
		npm_package_dependencies_blip_chat_widget: string;
		npm_package_dependencies_highlight_js: string;
		npm_package_dependencies_lucide_svelte: string;
		npm_package_dependencies_nodemailer: string;
		npm_package_dependencies_sanitize_html: string;
		npm_package_devDependencies__skeletonlabs_skeleton: string;
		npm_package_devDependencies__skeletonlabs_tw_plugin: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies__sveltejs_adapter_vercel: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies__tailwindcss_forms: string;
		npm_package_devDependencies__tailwindcss_typography: string;
		npm_package_devDependencies__types_eslint: string;
		npm_package_devDependencies__types_node: string;
		npm_package_devDependencies__types_nodemailer: string;
		npm_package_devDependencies__types_sanitize_html: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies_eslint: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies_vite_plugin_tailwind_purgecss: string;
		npm_package_name: string;
		npm_package_private: string;
		npm_package_scripts_build: string;
		npm_package_scripts_check: string;
		npm_package_scripts_check_watch: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_format: string;
		npm_package_scripts_lint: string;
		npm_package_scripts_preview: string;
		npm_package_type: string;
		npm_package_version: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
