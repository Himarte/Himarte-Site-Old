import { c as create_ssr_component, e as escape, a as add_attribute, b as compute_slots, d as add_styles, f as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { p as page } from "../../chunks/stores.js";
import { I as Icon } from "../../chunks/Icon.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import css$1 from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import { computePosition, autoUpdate, flip, shift, offset, arrow } from "@floating-ui/dom";
const storeHighlightJs = writable(void 0);
const storePopup = writable(void 0);
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
const LogoRodape = "/_app/immutable/assets/logo-nome.9TKz916y.png";
const css = {
  code: ".active.svelte-1cr2s5t{font-weight:600;color:rgb(var(--color-primary-500))}.active.svelte-1cr2s5t:hover{color:rgb(var(--color-primary-600))}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(AppBar, "AppBar").$$render(
    $$result,
    {
      class: "px-10",
      slotDefault: "flex justify-center gap-5",
      background: "bg-surface-700"
    },
    {},
    {
      trail: () => {
        return `<a href="https://portal.himarte.com.br/person_users/login" class="flex btn-sm rounded-full md:btn variant-ghost-primary font-semibold" data-svelte-h="svelte-wr0glr">Area do Cliente</a> `;
      },
      default: () => {
        return `<ul class="hidden md:flex"><a class="${[
          "btn md:text-xl hover:variant-soft-primary svelte-1cr2s5t",
          $page.url.pathname === "/" ? "active" : ""
        ].join(" ").trim()}" href="/" data-svelte-h="svelte-10p4bx4">Home</a> <a class="${[
          "btn md:text-xl hover:variant-soft-primary svelte-1cr2s5t",
          $page.url.pathname === "/sobre" ? "active" : ""
        ].join(" ").trim()}" href="/sobre" data-svelte-h="svelte-3vhmmh">Sobre</a> <a class="${[
          "btn md:text-xl hover:variant-soft-primary svelte-1cr2s5t",
          $page.url.pathname === "/trabalhe-conosco" ? "active" : ""
        ].join(" ").trim()}" href="/trabalhe-conosco" data-svelte-h="svelte-niljvz">Trabalhe Conosco</a></ul> `;
      },
      lead: () => {
        return `<a href="/" data-svelte-h="svelte-1m56128"><img${add_attribute("src", LogoRodape, 0)} class="h-8 sm:h-10" alt="Himarte Logo"></a>`;
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
const Message_circle_plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
    ["path", { "d": "M8 12h8" }],
    ["path", { "d": "M12 8v8" }]
  ];
  return `  ${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "message-circle-plus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const MessageCirclePlus = Message_circle_plus;
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="flex flex-col justify-between md:h-36"><div class="flex flex-col md:flex-row md:px-10"><div class="flex flex-col items-center md:items-start md:w-1/3" data-svelte-h="svelte-r3tylk"><img${add_attribute("src", LogoRodape, 0)} alt="Logo Himarte" class="w-32 md:w-36 h-8 md:h-10 mb-2"> <p class="px-5 md:px-0 text-sm fontSpace">O futuro é aqui</p></div> <ul class="flex items-center p-8 md:p-0 gap-10 md:w-1/3 justify-center"><li><a href="https://www.facebook.com/himarte.net/">${validate_component(Facebook$1, "Facebook").$$render($$result, { size: 34 }, {}, {})}</a></li> <li><a href="https://www.instagram.com/himarte_net/">${validate_component(Instagram$1, "Instagram").$$render($$result, { size: 34 }, {}, {})}</a></li> <li><a href="https://www.linkedin.com/company/himarte-net/">${validate_component(Linkedin$1, "Linkedin").$$render($$result, { size: 34 }, {}, {})}</a></li></ul> <ul class="hidden md:flex flex-col gap-3 md:w-1/3 md:items-end" data-svelte-h="svelte-18sqkdw"><li><a href="/sobre" class="text-primary-500 hover:text-primary-600">Sobre</a></li> <li><a href="/trabalhe-conosco" class="text-primary-500 hover:text-primary-600">Trabalhe conosco</a></li> <li><a href="/sobre" class="text-primary-500 hover:text-primary-600">Filiais</a></li></ul></div> <p class="text-center text-sm" data-svelte-h="svelte-1kzppgw">©2024 Quiliao</p></footer>`;
});
const ChatPagina = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button class="sticky btn-icon-base rounded-full variant-filled-surface bottom-16 ml-[87%] md:ml-[94%] md:bottom-10">${validate_component(MessageCirclePlus, "MessageCirclePlus").$$render($$result, { size: 44 }, {}, {})}</button>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return ` ${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    pageFooter: () => {
      return ` ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} `;
    },
    header: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} `;
    },
    default: () => {
      return ` <main class="relative">${slots.default ? slots.default({}) : ``} ${validate_component(ChatPagina, "ChatPagina").$$render($$result, {}, {}, {})}</main>`;
    }
  })}`;
});
export {
  Layout as default
};
