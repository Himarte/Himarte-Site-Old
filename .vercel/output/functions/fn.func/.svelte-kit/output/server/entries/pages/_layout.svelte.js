import { s as setContext, a as split_css_unit, c as create_ssr_component, e as escape, b as add_attribute, d as compute_slots, f as add_styles, g as subscribe, h as each, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
import { i as initializeToastStore, p as prefersReducedMotionStore, g as getToastStore } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { p as page } from "../../chunks/stores.js";
import { I as Icon } from "../../chunks/Icon.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import css$1 from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import "../../chunks/client.js";
import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
const storeHighlightJs = writable(void 0);
const storePopup = writable(void 0);
const DRAWER_STORE_KEY = "drawerStore";
function initializeDrawerStore() {
  const drawerStore = drawerService();
  return setContext(DRAWER_STORE_KEY, drawerStore);
}
function drawerService() {
  const { subscribe: subscribe2, set, update } = writable({});
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Open the drawer. */
    open: (newSettings) => update(() => {
      return { open: true, ...newSettings };
    }),
    /** Close the drawer. */
    close: () => update((d) => {
      d.open = false;
      return d;
    })
  };
}
const MODAL_STORE_KEY = "modalStore";
function initializeModalStore() {
  const modalStore = modalService();
  return setContext(MODAL_STORE_KEY, modalStore);
}
function modalService() {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Append to end of queue. */
    trigger: (modal) => update((mStore) => {
      mStore.push(modal);
      return mStore;
    }),
    /**  Remove first item in queue. */
    close: () => update((mStore) => {
      if (mStore.length > 0)
        mStore.shift();
      return mStore;
    }),
    /** Remove all items from queue. */
    clear: () => set([])
  };
}
function initializeStores() {
  initializeModalStore();
  initializeToastStore();
  initializeDrawerStore();
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [xValue, xUnit] = split_css_unit(x);
  const [yValue, yUnit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
			opacity: ${target_opacity - od * u}`
  };
}
const cBase = "flex flex-col";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
    $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0)
    $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0)
    $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
    $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
    $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="app-bar" role="toolbar"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}> <div class="${"app-bar-row-main " + escape(classesRowMain, true)}"> ${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>  ${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { scrollbarGutter = "auto" } = $$props;
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.scrollbarGutter === void 0 && $$bindings.scrollbarGutter && scrollbarGutter !== void 0)
    $$bindings.scrollbarGutter(scrollbarGutter);
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell"> ${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}  <div class="${"flex-auto " + escape(cContentArea, true)}"> ${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}  <div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}"${add_styles({ "scrollbar-gutter": scrollbarGutter })}> ${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}  <main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>  ${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>  ${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>  ${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const cWrapper = "flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none";
const cSnackbar = "flex flex-col gap-y-2";
const cToast = "flex justify-between items-center pointer-events-auto";
const cToastActions = "flex items-center space-x-2";
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesWrapper;
  let classesSnackbar;
  let classesToast;
  let filteredToasts;
  let $toastStore, $$unsubscribe_toastStore;
  let $prefersReducedMotionStore, $$unsubscribe_prefersReducedMotionStore;
  $$unsubscribe_prefersReducedMotionStore = subscribe(prefersReducedMotionStore, (value) => $prefersReducedMotionStore = value);
  const toastStore = getToastStore();
  $$unsubscribe_toastStore = subscribe(toastStore, (value) => $toastStore = value);
  let { position = "b" } = $$props;
  let { max = 3 } = $$props;
  let { background = "variant-filled-secondary" } = $$props;
  let { width = "max-w-[640px]" } = $$props;
  let { color = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-x-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-lg" } = $$props;
  let { zIndex = "z-[888]" } = $$props;
  let { buttonAction = "btn variant-filled" } = $$props;
  let { buttonDismiss = "btn-icon btn-icon-sm variant-filled" } = $$props;
  let { buttonDismissLabel = "✕" } = $$props;
  let { transitions = !$prefersReducedMotionStore } = $$props;
  let { transitionIn = fly } = $$props;
  let { transitionInParams = { duration: 250 } } = $$props;
  let { transitionOut = fly } = $$props;
  let { transitionOutParams = { duration: 250 } } = $$props;
  let cPosition;
  let cAlign;
  switch (position) {
    case "t":
      cPosition = "justify-center items-start";
      cAlign = "items-center";
      break;
    case "b":
      cPosition = "justify-center items-end";
      cAlign = "items-center";
      break;
    case "l":
      cPosition = "justify-start items-center";
      cAlign = "items-start";
      break;
    case "r":
      cPosition = "justify-end items-center";
      cAlign = "items-end";
      break;
    case "tl":
      cPosition = "justify-start items-start";
      cAlign = "items-start";
      break;
    case "tr":
      cPosition = "justify-end items-start";
      cAlign = "items-end";
      break;
    case "bl":
      cPosition = "justify-start items-end";
      cAlign = "items-start";
      break;
    case "br":
      cPosition = "justify-end items-end";
      cAlign = "items-end";
      break;
  }
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.buttonAction === void 0 && $$bindings.buttonAction && buttonAction !== void 0)
    $$bindings.buttonAction(buttonAction);
  if ($$props.buttonDismiss === void 0 && $$bindings.buttonDismiss && buttonDismiss !== void 0)
    $$bindings.buttonDismiss(buttonDismiss);
  if ($$props.buttonDismissLabel === void 0 && $$bindings.buttonDismissLabel && buttonDismissLabel !== void 0)
    $$bindings.buttonDismissLabel(buttonDismissLabel);
  if ($$props.transitions === void 0 && $$bindings.transitions && transitions !== void 0)
    $$bindings.transitions(transitions);
  if ($$props.transitionIn === void 0 && $$bindings.transitionIn && transitionIn !== void 0)
    $$bindings.transitionIn(transitionIn);
  if ($$props.transitionInParams === void 0 && $$bindings.transitionInParams && transitionInParams !== void 0)
    $$bindings.transitionInParams(transitionInParams);
  if ($$props.transitionOut === void 0 && $$bindings.transitionOut && transitionOut !== void 0)
    $$bindings.transitionOut(transitionOut);
  if ($$props.transitionOutParams === void 0 && $$bindings.transitionOutParams && transitionOutParams !== void 0)
    $$bindings.transitionOutParams(transitionOutParams);
  classesWrapper = `${cWrapper} ${cPosition} ${zIndex} ${$$props.class || ""}`;
  classesSnackbar = `${cSnackbar} ${cAlign} ${padding}`;
  classesToast = `${cToast} ${width} ${color} ${padding} ${spacing} ${rounded} ${shadow}`;
  filteredToasts = Array.from($toastStore).slice(0, max);
  $$unsubscribe_toastStore();
  $$unsubscribe_prefersReducedMotionStore();
  return `${$toastStore.length ? ` <div class="${"snackbar-wrapper " + escape(classesWrapper, true)}" data-testid="snackbar-wrapper"> <div class="${"snackbar " + escape(classesSnackbar, true)}">${each(filteredToasts, (t, i) => {
    return `<div${add_attribute("role", t.hideDismiss ? "alert" : "alertdialog", 0)} aria-live="polite"> <div class="${"toast " + escape(classesToast, true) + " " + escape(t.background ?? background, true) + " " + escape(t.classes ?? "", true)}" data-testid="toast"><div class="text-base"><!-- HTML_TAG_START -->${t.message}<!-- HTML_TAG_END --></div> ${t.action || !t.hideDismiss ? `<div class="${"toast-actions " + escape(cToastActions, true)}">${t.action ? `<button${add_attribute("class", buttonAction, 0)}><!-- HTML_TAG_START -->${t.action.label}<!-- HTML_TAG_END --></button>` : ``} ${!t.hideDismiss ? `<button${add_attribute("class", buttonDismiss, 0)} aria-label="Dismiss toast">${escape(buttonDismissLabel)}</button>` : ``} </div>` : ``}</div> </div>`;
  })}</div></div>` : ``}`;
});
const LogoRodape = "data:image/webp;base64,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ZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6N2U4ZjRjNjctZWNhMS05MTQ1LTg5NDYtNGRmNDk1ZTEzZWY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0MTg3NEZGM0Y1NDExRUQ5MjM1QkRCRUNBNjBFNzI2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0MTg3NEZFM0Y1NDExRUQ5MjM1QkRCRUNBNjBFNzI2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxMjZiYTA4LTYyZGItYjk0ZC1iZTJmLWMyMTk5OTU1OTg5OCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjRhMGY4OTg5LTc1ZDMtN2Y0OC1hYmE0LWZkNzE5YTNhY2ZlZiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgA=";
const css = {
  code: ".active.svelte-1svc5m3{font-weight:600;color:rgb(var(--color-primary-500))}.active.svelte-1svc5m3:hover{color:rgb(var(--color-primary-600))}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const links = [
    { href: "/", text: "Home" },
    { href: "/sobre-nos", text: "Sobre" },
    {
      href: "/trabalhe-conosco",
      text: "Trabalhe Conosco"
    }
  ];
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(AppBar, "AppBar").$$render(
    $$result,
    {
      class: "px-10 md:px-28",
      slotDefault: "flex justify-center gap-5",
      background: "bg-surface-700"
    },
    {},
    {
      trail: () => {
        return `<a href="https://portal.himarte.com.br/person_users/login" class="flex btn-sm rounded-full md:btn variant-ghost-primary hover:variant-filled-primary font-semibold" aria-label="Acessar a área do cliente" data-svelte-h="svelte-uxcdsq">Area do Cliente</a> `;
      },
      default: () => {
        return `<nav aria-label="Menu principal"><ul class="hidden md:flex" role="navigation">${each(links, (link) => {
          return `<a class="${[
            "btn md:text-xl hover:variant-soft-primary svelte-1svc5m3",
            $page.url.pathname === link.href ? "active" : ""
          ].join(" ").trim()}"${add_attribute("href", link.href, 0)}>${escape(link.text)}</a>`;
        })}</ul></nav> `;
      },
      lead: () => {
        return `<a href="/" data-svelte-h="svelte-nxhkx1"><img${add_attribute("src", LogoRodape, 0)} class="h-8 sm:h-10" alt="Logo da Himarte"></a>`;
      }
    }
  )}`;
});
const Facebook = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      }
    ]
  ];
  return `  ${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "facebook" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Facebook$1 = Facebook;
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "20",
        "x": "2",
        "y": "2",
        "rx": "5",
        "ry": "5"
      }
    ],
    [
      "path",
      {
        "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      }
    ],
    [
      "line",
      {
        "x1": "17.5",
        "x2": "17.51",
        "y1": "6.5",
        "y2": "6.5"
      }
    ]
  ];
  return `  ${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "instagram" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Instagram$1 = Instagram;
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    [
      "rect",
      {
        "width": "4",
        "height": "12",
        "x": "2",
        "y": "9"
      }
    ],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  return `  ${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "linkedin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Linkedin$1 = Linkedin;
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/himarte.net/",
      component: Facebook$1,
      label: "Facebook"
    },
    {
      href: "https://www.instagram.com/himarte_net/",
      component: Instagram$1,
      label: "Instagram"
    },
    {
      href: "https://www.linkedin.com/company/himarte-net/",
      component: Linkedin$1,
      label: "Linkedin"
    }
  ];
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return `<footer class="flex flex-col justify-between md:h-36"><div class="flex flex-col md:flex-row md:px-32"><div class="flex flex-col items-center md:items-start md:w-1/3" data-svelte-h="svelte-sek51n"><img${add_attribute("src", LogoRodape, 0)} alt="Logo Himarte" class="w-32 md:w-36 h-8 md:h-10 mb-3"> <p class="px-5 md:px-0 text-sm md:text-lg fontSpace">O futuro é aqui</p></div> <ul class="flex items-center p-8 md:p-0 gap-10 md:w-1/3 justify-center">${each(socialLinks, ({ href, component: SocialIcon, label }) => {
    return `<a${add_attribute("href", href, 0)}${add_attribute("aria-label", label, 0)}>${validate_component(SocialIcon, "SocialIcon").$$render($$result, { size: 34 }, {}, {})}</a>`;
  })}</ul> <ul class="hidden md:flex flex-col gap-3 md:w-1/3 md:items-end" data-svelte-h="svelte-3kmxzh"> <a href="/sobre-nos" class="text-primary-500 hover:text-primary-600">Sobre</a> <a href="/trabalhe-conosco" class="text-primary-500 hover:text-primary-600">Trabalhe conosco</a> <a href="/sobre-nos" class="text-primary-500 hover:text-primary-600">Filiais</a></ul></div> <p class="text-center text-sm">©${escape(currentYear)} Quiliao</p></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  initializeStores();
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("css", css$1);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("typescript", typescript);
  storeHighlightJs.set(hljs);
  storePopup.set({
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow
  });
  return `${validate_component(Toast, "Toast").$$render($$result, {}, {}, {})}  ${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    pageFooter: () => {
      return ` ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} `;
    },
    header: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} `;
    },
    default: () => {
      return ` <main class="relative">${slots.default ? slots.default({}) : ``}</main>`;
    }
  })}`;
});
export {
  Layout as default
};
