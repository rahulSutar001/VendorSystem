import { version, getCurrentInstance, inject, ref, watchEffect, watch, createApp, shallowReactive, unref, useSSRContext, provide, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, toRef, shallowRef, computed, reactive, isReadonly, defineAsyncComponent, effectScope, markRaw, isRef, mergeProps, withCtx, nextTick, triggerRef, defineComponent, h, onUnmounted, Suspense, Transition, isReactive, toRaw, createTextVNode, resolveComponent } from 'vue';
import { $fetch } from 'ofetch';
import { createHooks } from 'hookable';
import { getContext, executeAsync } from 'unctx';
import { renderSSRHead } from '@unhead/ssr';
import { getActiveHead, createServerHead as createServerHead$1 } from 'unhead';
import { defineHeadPlugin } from '@unhead/shared';
import { createMemoryHistory, createRouter, useRoute as useRoute$1, RouterView } from 'vue-router';
import { sendRedirect, createError as createError$1, setResponseStatus as setResponseStatus$1 } from 'h3';
import { hasProtocol, parseURL, joinURL, isEqual } from 'ufo';
import { createConfig, getNode, clearErrors, setErrors, submitForm, reset, createClasses, generateClassList, createMessage, error, createNode, warn, watchRegistry, isNode, sugar, isDOM, isComponent, isConditional, compile } from '@formkit/core';
import { extend, empty, has, eq, undefine, cloneAny, camel, kebab, nodeProps, only, except, slugify, isObject as isObject$1, isPojo } from '@formkit/utils';
import { createLibraryPlugin, inputs } from '@formkit/inputs';
import * as defaultRules from '@formkit/rules';
import { createValidationPlugin } from '@formkit/validation';
import { createI18nPlugin, en } from '@formkit/i18n';
import { createThemePlugin } from '@formkit/themes';
import { createObserver } from '@formkit/observer';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs } from 'vue/server-renderer';
import { defu } from 'defu';
import { a as useRuntimeConfig$1 } from '../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.4.0";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      data: shallowReactive({}),
      state: shallowReactive({}),
      _errors: shallowReactive({}),
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtAppCtx.call(nuxtApp, () => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext._payloadReducers = {};
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin2, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin2 of plugins2) {
    await applyPlugin(nuxtApp, plugin2);
  }
}
function normalizePlugins(_plugins2) {
  const plugins2 = [];
  for (const plugin2 of _plugins2) {
    if (typeof plugin2 !== "function") {
      continue;
    }
    let _plugin = plugin2;
    if (plugin2.length > 1) {
      _plugin = (nuxtApp) => plugin2(nuxtApp, nuxtApp.provide);
    }
    plugins2.push(_plugin);
  }
  plugins2.sort((a, b) => {
    var _a, _b;
    return (((_a = a.meta) == null ? void 0 : _a.order) || orderMap.default) - (((_b = b.meta) == null ? void 0 : _b.order) || orderMap.default);
  });
  return plugins2;
}
const orderMap = {
  pre: -20,
  default: 0,
  post: 20
};
function defineNuxtPlugin(plugin2, meta) {
  var _a;
  if (typeof plugin2 === "function") {
    return /* @__PURE__ */ defineNuxtPlugin({ setup: plugin2 }, meta);
  }
  const wrapper = (nuxtApp) => {
    if (plugin2.hooks) {
      nuxtApp.hooks.addHooks(plugin2.hooks);
    }
    if (plugin2.setup) {
      return plugin2.setup(nuxtApp);
    }
  };
  wrapper.meta = {
    name: (meta == null ? void 0 : meta.name) || plugin2.name || ((_a = plugin2.setup) == null ? void 0 : _a.name),
    order: (meta == null ? void 0 : meta.order) || plugin2.order || orderMap[plugin2.enforce || "default"] || orderMap.default
  };
  wrapper[NuxtPluginIndicator] = true;
  return wrapper;
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const nuxtAppInstance = nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    const vm = getCurrentInstance();
    if (!vm) {
      throw new Error("nuxt instance unavailable");
    }
    return vm.appContext.app.$nuxt;
  }
  return nuxtAppInstance;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config2) {
  return config2;
}
const isVue2 = false;
/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
const Vue3 = version.startsWith("3");
const headSymbol = "usehead";
function injectHead() {
  return getCurrentInstance() && inject(headSymbol) || getActiveHead();
}
function vueInstall(head) {
  const plugin2 = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin2.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...(options == null ? void 0 : options.plugins) || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}
function VueReactiveUseHeadPlugin() {
  return defineHeadPlugin({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry2 of ctx.entries)
          entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
      }
    }
  });
}
function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}
function useHead(input, options = {}) {
  var _a;
  const head = injectHead();
  if (head) {
    const isBrowser = !!((_a = head.resolvedOptions) == null ? void 0 : _a.document);
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function setResponseStatus(arg1, arg2, arg3) {
  if (arg1 && typeof arg1 !== "number") {
    return setResponseStatus$1(arg1, arg2, arg3);
  }
  return setResponseStatus$1(useRequestEvent(), arg1, arg2);
}
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (getCurrentInstance()) {
    return inject("_route", useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
const defineNuxtRouteMiddleware = (middleware) => middleware;
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal && !(options == null ? void 0 : options.external)) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      if (isProcessingMiddleware() && !isExternal) {
        setResponseStatus(nuxtApp.ssrContext.event, (options == null ? void 0 : options.redirectCode) || 302);
        return to;
      }
      const redirectLocation = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, (options == null ? void 0 : options.redirectCode) || 302));
    }
  }
  if (isExternal) {
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = useNuxtApp();
    nuxtApp.callHook("app:error", err);
    const error2 = useError();
    error2.value = error2.value || err;
  } catch {
    throw err;
  }
  return err;
};
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const appHead = { "meta": [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }], "link": [], "style": [], "script": [], "noscript": [] };
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
function isObject(value) {
  return value !== null && typeof value === "object";
}
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isObject(value) && isObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defuFn = createDefu((object, key, currentValue) => {
  if (typeof object[key] !== "undefined" && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const cfg0 = defineAppConfig({
  title: "Project Name",
  theme: {
    dark: true,
    colors: {
      primary: "#ff0000"
    }
  }
});
const inlineConfig = {};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, inlineConfig);
function useAppConfig() {
  const nuxtApp = useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = reactive(__appConfig);
  }
  return nuxtApp._appConfig;
}
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const components = {};
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const name in components) {
      nuxtApp.vueApp.component(name, components[name]);
      nuxtApp.vueApp.component("Lazy" + name, components[name]);
    }
  }
});
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = createServerHead;
    const head = createHead();
    head.push(appHead);
    nuxtApp.vueApp.use(head);
    {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});
const __nuxt_page_meta$l = {
  layout: "adminlayout"
};
const __nuxt_page_meta$k = {
  layout: "adminlayout"
};
const __nuxt_page_meta$j = {
  layout: "adminlayout"
};
const __nuxt_page_meta$i = {
  layout: "adminlayout"
};
const __nuxt_page_meta$h = {
  layout: "adminlayout"
};
const __nuxt_page_meta$g = {
  layout: "adminlayout"
};
const __nuxt_page_meta$f = {
  layout: "adminlayout"
};
const __nuxt_page_meta$e = {
  layout: "authoriselayout"
};
const __nuxt_page_meta$d = {
  layout: "authoriselayout"
};
const __nuxt_page_meta$c = {
  layout: "authoriselayout"
};
const __nuxt_page_meta$b = {
  layout: "authoriselayout"
};
const __nuxt_page_meta$a = {
  layout: "display"
};
const __nuxt_page_meta$9 = {
  // set custom layout
  layout: "userlayout"
};
const __nuxt_page_meta$8 = {
  // set custom layout
  layout: "userlayout"
};
const __nuxt_page_meta$7 = {
  // set custom layout
  layout: "userlayout"
};
const __nuxt_page_meta$6 = {
  // set custom layout
  layout: "userlayout"
};
const __nuxt_page_meta$5 = {
  // set custom layout
  layout: "userlayout"
};
const __nuxt_page_meta$4 = {
  // set custom layout
  layout: "verifierlayout"
};
const __nuxt_page_meta$3 = {
  // set custom layout
  layout: "verifierlayout"
};
const __nuxt_page_meta$2 = {
  // set custom layout
  layout: "verifierlayout"
};
const __nuxt_page_meta$1 = {
  // set custom layout
  layout: "verifierlayout"
};
const __nuxt_page_meta = {
  layout: "custome"
};
const _routes = [
  {
    name: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.name) ?? "Admin-AdminDPage",
    path: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.path) ?? "/Admin/AdminDPage",
    meta: __nuxt_page_meta$l || {},
    alias: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.alias) || [],
    redirect: (__nuxt_page_meta$l == null ? void 0 : __nuxt_page_meta$l.redirect) || void 0,
    component: () => import('./_nuxt/AdminDPage-92561315.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.name) ?? "Admin-Admin_AddBranch",
    path: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.path) ?? "/Admin/Admin_AddBranch",
    meta: __nuxt_page_meta$k || {},
    alias: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.alias) || [],
    redirect: (__nuxt_page_meta$k == null ? void 0 : __nuxt_page_meta$k.redirect) || void 0,
    component: () => import('./_nuxt/Admin_AddBranch-718d9164.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.name) ?? "Admin-Admin_AddCategory",
    path: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.path) ?? "/Admin/Admin_AddCategory",
    meta: __nuxt_page_meta$j || {},
    alias: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.alias) || [],
    redirect: (__nuxt_page_meta$j == null ? void 0 : __nuxt_page_meta$j.redirect) || void 0,
    component: () => import('./_nuxt/Admin_AddCategory-fdbde156.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.name) ?? "Admin-Admin_ApproveReports",
    path: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.path) ?? "/Admin/Admin_ApproveReports",
    meta: __nuxt_page_meta$i || {},
    alias: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.alias) || [],
    redirect: (__nuxt_page_meta$i == null ? void 0 : __nuxt_page_meta$i.redirect) || void 0,
    component: () => import('./_nuxt/Admin_ApproveReports-b5ddea78.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.name) ?? "Admin-Admin_CreateVendor",
    path: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.path) ?? "/Admin/Admin_CreateVendor",
    meta: __nuxt_page_meta$h || {},
    alias: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.alias) || [],
    redirect: (__nuxt_page_meta$h == null ? void 0 : __nuxt_page_meta$h.redirect) || void 0,
    component: () => import('./_nuxt/Admin_CreateVendor-4ebc3f00.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.name) ?? "Admin-Admin_RejectedReports",
    path: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.path) ?? "/Admin/Admin_RejectedReports",
    meta: __nuxt_page_meta$g || {},
    alias: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.alias) || [],
    redirect: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.redirect) || void 0,
    component: () => import('./_nuxt/Admin_RejectedReports-65ca81a8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.name) ?? "Admin-deleteVendor",
    path: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.path) ?? "/Admin/deleteVendor",
    meta: __nuxt_page_meta$f || {},
    alias: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.alias) || [],
    redirect: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.redirect) || void 0,
    component: () => import('./_nuxt/deleteVendor-21a7e0a7.mjs').then((m) => m.default || m)
  },
  {
    name: "Admin_dashboard",
    path: "/Admin_dashboard",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/Admin_dashboard-15fd5d8d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.name) ?? "AuthoriserDPage",
    path: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.path) ?? "/AuthoriserDPage",
    meta: __nuxt_page_meta$e || {},
    alias: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.alias) || [],
    redirect: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.redirect) || void 0,
    component: () => import('./_nuxt/AuthoriserDPage-509da70a.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.name) ?? "Authoriser_AR",
    path: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.path) ?? "/Authoriser_AR",
    meta: __nuxt_page_meta$d || {},
    alias: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.alias) || [],
    redirect: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.redirect) || void 0,
    component: () => import('./_nuxt/Authoriser_AR-a7ce6a59.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.name) ?? "Authoriser_RejectedReports",
    path: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.path) ?? "/Authoriser_RejectedReports",
    meta: __nuxt_page_meta$c || {},
    alias: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.alias) || [],
    redirect: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.redirect) || void 0,
    component: () => import('./_nuxt/Authoriser_RejectedReports-7bbc3a1c.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.name) ?? "Authoriser_RequestRecheck",
    path: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.path) ?? "/Authoriser_RequestRecheck",
    meta: __nuxt_page_meta$b || {},
    alias: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.alias) || [],
    redirect: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.redirect) || void 0,
    component: () => import('./_nuxt/Authoriser_RequestRecheck-b0ed3a1a.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.name) ?? "Authoriser_dashboard",
    path: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.path) ?? "/Authoriser_dashboard",
    meta: __nuxt_page_meta$a || {},
    alias: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.alias) || [],
    redirect: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.redirect) || void 0,
    component: () => import('./_nuxt/Authoriser_dashboard-988593db.mjs').then((m) => m.default || m)
  },
  {
    name: "Requestrecheck",
    path: "/Requestrecheck",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/Requestrecheck-2d3c8a27.mjs').then((m) => m.default || m)
  },
  {
    name: "SuperAdminD",
    path: "/SuperAdminD",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/SuperAdminD-ea22f8f9.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.name) ?? "User_ApprovedReports",
    path: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.path) ?? "/User_ApprovedReports",
    meta: __nuxt_page_meta$9 || {},
    alias: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.alias) || [],
    redirect: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.redirect) || void 0,
    component: () => import('./_nuxt/User_ApprovedReports-b259a7a2.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.name) ?? "User_DPage",
    path: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.path) ?? "/User_DPage",
    meta: __nuxt_page_meta$8 || {},
    alias: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.alias) || [],
    redirect: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.redirect) || void 0,
    component: () => import('./_nuxt/User_DPage-6af2b76d.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.name) ?? "User_RejectedReports",
    path: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.path) ?? "/User_RejectedReports",
    meta: __nuxt_page_meta$7 || {},
    alias: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.alias) || [],
    redirect: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.redirect) || void 0,
    component: () => import('./_nuxt/User_RejectedReports-fec06654.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.name) ?? "User_RequestRecheck",
    path: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.path) ?? "/User_RequestRecheck",
    meta: __nuxt_page_meta$6 || {},
    alias: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.alias) || [],
    redirect: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.redirect) || void 0,
    component: () => import('./_nuxt/User_RequestRecheck-8fa0fa8a.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.name) ?? "User_createReport",
    path: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.path) ?? "/User_createReport",
    meta: __nuxt_page_meta$5 || {},
    alias: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.alias) || [],
    redirect: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect) || void 0,
    component: () => import('./_nuxt/User_createReport-fa94d4b8.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.name) ?? "VerifierApproveReport",
    path: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.path) ?? "/VerifierApproveReport",
    meta: __nuxt_page_meta$4 || {},
    alias: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.alias) || [],
    redirect: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect) || void 0,
    component: () => import('./_nuxt/VerifierApproveReport-a4da732c.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.name) ?? "VerifierDPage",
    path: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.path) ?? "/VerifierDPage",
    meta: __nuxt_page_meta$3 || {},
    alias: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.alias) || [],
    redirect: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect) || void 0,
    component: () => import('./_nuxt/VerifierDPage-c4749190.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.name) ?? "VerifierRejectedReports",
    path: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.path) ?? "/VerifierRejectedReports",
    meta: __nuxt_page_meta$2 || {},
    alias: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.alias) || [],
    redirect: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect) || void 0,
    component: () => import('./_nuxt/VerifierRejectedReports-4f32a5af.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) ?? "VerifierRequestRecheck",
    path: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) ?? "/VerifierRequestRecheck",
    meta: __nuxt_page_meta$1 || {},
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect) || void 0,
    component: () => import('./_nuxt/VerifierRequestRecheck-34e376d0.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) ?? "index",
    path: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) ?? "/",
    meta: __nuxt_page_meta || {},
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./_nuxt/index-841d9b5c.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useNuxtApp();
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const globalMiddleware = [
  validate
];
const namedMiddleware = {};
const router_jmwsqit4Rs = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      route[key] = computed(() => _route.value[key]);
    }
    nuxtApp._route = reactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => callWithNuxt(nuxtApp, showError, [error2])), await __temp, __restore();
    }
    const initialLayout = useState("_layout");
    router.beforeEach(async (to, from) => {
      var _a2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
      for (const component of to.matched) {
        const componentMiddleware = component.meta.middleware;
        if (!componentMiddleware) {
          continue;
        }
        if (Array.isArray(componentMiddleware)) {
          for (const entry2 of componentMiddleware) {
            middlewareEntries.add(entry2);
          }
        } else {
          middlewareEntries.add(componentMiddleware);
        }
      }
      for (const entry2 of middlewareEntries) {
        const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a2 = namedMiddleware[entry2]) == null ? void 0 : _a2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
        if (!middleware) {
          throw new Error(`Unknown route middleware: '${entry2}'.`);
        }
        const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
        {
          if (result === false || result instanceof Error) {
            const error2 = result || createError$1({
              statusCode: 404,
              statusMessage: `Page Not Found: ${initialURL}`
            });
            await callWithNuxt(nuxtApp, showError, [error2]);
            return false;
          }
        }
        if (result || result === false) {
          return result;
        }
      }
    });
    router.afterEach(async (to) => {
      delete nuxtApp._processingMiddleware;
      if (to.matched.length === 0) {
        await callWithNuxt(nuxtApp, showError, [createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })]);
      } else {
        const currentURL = to.fullPath || "/";
        if (!isEqual(currentURL, initialURL, { trailingSlash: true })) {
          const event = await callWithNuxt(nuxtApp, useRequestEvent);
          const options = { redirectCode: event.node.res.statusCode !== 200 ? event.node.res.statusCode || 302 : 302 };
          await callWithNuxt(nuxtApp, navigateTo, [currentURL, options]);
        }
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #$4982
          force: true
        });
      } catch (error2) {
        await callWithNuxt(nuxtApp, showError, [error2]);
      }
    });
    return { provide: { router } };
  }
}, 1);
const memo = {};
let instanceKey;
const instanceScopes = /* @__PURE__ */ new Map();
const raw = "__raw__";
const isClassProp = /[a-zA-Z0-9\-][cC]lass$/;
function getRef(token, data) {
  const value = ref(null);
  if (token === "get") {
    const nodeRefs = {};
    value.value = get$1.bind(null, nodeRefs);
    return value;
  }
  const path = token.split(".");
  watchEffect(() => value.value = getValue(data, path));
  return value;
}
function getValue(set, path) {
  if (Array.isArray(set)) {
    for (const subset of set) {
      const value = subset !== false && getValue(subset, path);
      if (value !== void 0)
        return value;
    }
    return void 0;
  }
  let foundValue = void 0;
  path.reduce((obj, segment, i2, arr) => {
    if (typeof obj !== "object") {
      foundValue = void 0;
      return arr.splice(1);
    }
    const currentValue = obj[segment];
    if (i2 === path.length - 1 && currentValue !== void 0) {
      foundValue = currentValue;
    }
    return obj[segment];
  }, set);
  return foundValue;
}
function get$1(nodeRefs, id) {
  if (typeof id !== "string")
    return warn(650);
  if (!(id in nodeRefs))
    nodeRefs[id] = ref(void 0);
  if (nodeRefs[id].value === void 0) {
    nodeRefs[id].value = null;
    const root = getNode(id);
    if (root)
      nodeRefs[id].value = root.context;
    watchRegistry(id, ({ payload: node }) => {
      nodeRefs[id].value = isNode(node) ? node.context : node;
    });
  }
  return nodeRefs[id].value;
}
function parseSchema(library, schema) {
  function parseCondition(library2, node) {
    const condition = provider(compile(node.if), { if: true });
    const children = createElements(library2, node.then);
    const alternate = node.else ? createElements(library2, node.else) : null;
    return [condition, children, alternate];
  }
  function parseConditionAttr(attr, _default) {
    var _a, _b;
    const condition = provider(compile(attr.if));
    let b = () => _default;
    let a = () => _default;
    if (typeof attr.then === "object") {
      a = parseAttrs(attr.then, void 0);
    } else if (typeof attr.then === "string" && ((_a = attr.then) === null || _a === void 0 ? void 0 : _a.startsWith("$"))) {
      a = provider(compile(attr.then));
    } else {
      a = () => attr.then;
    }
    if (has(attr, "else")) {
      if (typeof attr.else === "object") {
        b = parseAttrs(attr.else);
      } else if (typeof attr.else === "string" && ((_b = attr.else) === null || _b === void 0 ? void 0 : _b.startsWith("$"))) {
        b = provider(compile(attr.else));
      } else {
        b = () => attr.else;
      }
    }
    return () => condition() ? a() : b();
  }
  function parseAttrs(unparsedAttrs, bindExp, _default = {}) {
    const explicitAttrs = new Set(Object.keys(unparsedAttrs || {}));
    const boundAttrs = bindExp ? provider(compile(bindExp)) : () => ({});
    const setters = [
      (attrs) => {
        const bound = boundAttrs();
        for (const attr in bound) {
          if (!explicitAttrs.has(attr)) {
            attrs[attr] = bound[attr];
          }
        }
      }
    ];
    if (unparsedAttrs) {
      if (isConditional(unparsedAttrs)) {
        const condition = parseConditionAttr(unparsedAttrs, _default);
        return condition;
      }
      for (let attr in unparsedAttrs) {
        const value = unparsedAttrs[attr];
        let getValue2;
        const isStr = typeof value === "string";
        if (attr.startsWith(raw)) {
          attr = attr.substring(7);
          getValue2 = () => value;
        } else if (isStr && value.startsWith("$") && value.length > 1 && !(value.startsWith("$reset") && isClassProp.test(attr))) {
          getValue2 = provider(compile(value));
        } else if (typeof value === "object" && isConditional(value)) {
          getValue2 = parseConditionAttr(value, void 0);
        } else if (typeof value === "object" && isPojo(value)) {
          getValue2 = parseAttrs(value);
        } else {
          getValue2 = () => value;
        }
        setters.push((attrs) => {
          attrs[attr] = getValue2();
        });
      }
    }
    return () => {
      const attrs = {};
      setters.forEach((setter) => setter(attrs));
      return attrs;
    };
  }
  function parseNode(library2, _node) {
    let element = null;
    let attrs = () => null;
    let condition = false;
    let children = null;
    let alternate = null;
    let iterator = null;
    let resolve = false;
    const node = sugar(_node);
    if (isDOM(node)) {
      element = node.$el;
      attrs = node.$el !== "text" ? parseAttrs(node.attrs, node.bind) : () => null;
    } else if (isComponent(node)) {
      if (typeof node.$cmp === "string") {
        if (has(library2, node.$cmp)) {
          element = library2[node.$cmp];
        } else {
          element = node.$cmp;
          resolve = true;
        }
      } else {
        element = node.$cmp;
      }
      attrs = parseAttrs(node.props, node.bind);
    } else if (isConditional(node)) {
      [condition, children, alternate] = parseCondition(library2, node);
    }
    if (!isConditional(node) && "if" in node) {
      condition = provider(compile(node.if));
    } else if (!isConditional(node) && element === null) {
      condition = () => true;
    }
    if ("children" in node && node.children) {
      if (typeof node.children === "string") {
        if (node.children.startsWith("$slots.")) {
          element = element === "text" ? "slot" : element;
          children = provider(compile(node.children));
        } else if (node.children.startsWith("$") && node.children.length > 1) {
          const value = provider(compile(node.children));
          children = () => String(value());
        } else {
          children = () => String(node.children);
        }
      } else if (Array.isArray(node.children)) {
        children = createElements(library2, node.children);
      } else {
        const [childCondition, c, a] = parseCondition(library2, node.children);
        children = (iterationData) => childCondition && childCondition() ? c && c(iterationData) : a && a(iterationData);
      }
    }
    if (isComponent(node)) {
      if (children) {
        const produceChildren = children;
        children = (iterationData) => {
          return {
            default(slotData2, key) {
              var _a, _b, _c, _d;
              const currentKey = instanceKey;
              if (key)
                instanceKey = key;
              if (slotData2)
                (_a = instanceScopes.get(instanceKey)) === null || _a === void 0 ? void 0 : _a.unshift(slotData2);
              if (iterationData)
                (_b = instanceScopes.get(instanceKey)) === null || _b === void 0 ? void 0 : _b.unshift(iterationData);
              const c = produceChildren(iterationData);
              if (slotData2)
                (_c = instanceScopes.get(instanceKey)) === null || _c === void 0 ? void 0 : _c.shift();
              if (iterationData)
                (_d = instanceScopes.get(instanceKey)) === null || _d === void 0 ? void 0 : _d.shift();
              instanceKey = currentKey;
              return c;
            }
          };
        };
        children.slot = true;
      } else {
        children = () => ({});
      }
    }
    if ("for" in node && node.for) {
      const values = node.for.length === 3 ? node.for[2] : node.for[1];
      const getValues = typeof values === "string" && values.startsWith("$") ? provider(compile(values)) : () => values;
      iterator = [
        getValues,
        node.for[0],
        node.for.length === 3 ? String(node.for[1]) : null
      ];
    }
    return [condition, element, attrs, children, alternate, iterator, resolve];
  }
  function createSlots(children, iterationData) {
    const slots = children(iterationData);
    const currentKey = instanceKey;
    return Object.keys(slots).reduce((allSlots, slotName) => {
      const slotFn = slots && slots[slotName];
      allSlots[slotName] = (data) => {
        return slotFn && slotFn(data, currentKey) || null;
      };
      return allSlots;
    }, {});
  }
  function createElement(library2, node) {
    const [condition, element, attrs, children, alternate, iterator, resolve] = parseNode(library2, node);
    let createNodes = (iterationData) => {
      if (condition && element === null && children) {
        return condition() ? children(iterationData) : alternate && alternate(iterationData);
      }
      if (element && (!condition || condition())) {
        if (element === "text" && children) {
          return createTextVNode(String(children()));
        }
        if (element === "slot" && children)
          return children(iterationData);
        const el = resolve ? resolveComponent(element) : element;
        const slots = (children === null || children === void 0 ? void 0 : children.slot) ? createSlots(children, iterationData) : null;
        return h(el, attrs(), slots || (children ? children(iterationData) : []));
      }
      return typeof alternate === "function" ? alternate(iterationData) : alternate;
    };
    if (iterator) {
      const repeatedNode = createNodes;
      const [getValues, valueName, keyName] = iterator;
      createNodes = () => {
        const _v = getValues();
        const values = !isNaN(_v) ? Array(Number(_v)).fill(0).map((_, i2) => i2) : _v;
        const fragment = [];
        if (typeof values !== "object")
          return null;
        const instanceScope = instanceScopes.get(instanceKey) || [];
        for (const key in values) {
          const iterationData = Object.defineProperty({
            ...instanceScope.reduce((previousIterationData, scopedData) => {
              if (previousIterationData.__idata) {
                return { ...previousIterationData, ...scopedData };
              }
              return scopedData;
            }, {}),
            [valueName]: values[key],
            ...keyName !== null ? { [keyName]: key } : {}
          }, "__idata", { enumerable: false, value: true });
          instanceScope.unshift(iterationData);
          fragment.push(repeatedNode.bind(null, iterationData)());
          instanceScope.shift();
        }
        return fragment;
      };
    }
    return createNodes;
  }
  function createElements(library2, schema2) {
    if (Array.isArray(schema2)) {
      const els = schema2.map(createElement.bind(null, library2));
      return (iterationData) => els.map((element2) => element2(iterationData));
    }
    const element = createElement(library2, schema2);
    return (iterationData) => element(iterationData);
  }
  const providers = [];
  function provider(compiled, hints = {}) {
    const compiledFns = {};
    providers.push((callback, key) => {
      compiledFns[key] = compiled.provide((tokens) => callback(tokens, hints));
    });
    return () => compiledFns[instanceKey]();
  }
  return function createInstance(providerCallback, key) {
    const memoKey = JSON.stringify(schema);
    const [render, compiledProviders] = has(memo, memoKey) ? memo[memoKey] : [createElements(library, schema), providers];
    memo[memoKey] = [render, compiledProviders];
    compiledProviders.forEach((compiledProvider) => {
      compiledProvider(providerCallback, key);
    });
    return () => {
      instanceKey = key;
      return render();
    };
  };
}
function useScope(token, defaultValue) {
  const scopedData = instanceScopes.get(instanceKey) || [];
  let scopedValue = void 0;
  if (scopedData.length) {
    scopedValue = getValue(scopedData, token.split("."));
  }
  return scopedValue === void 0 ? defaultValue : scopedValue;
}
function slotData(data, key) {
  return new Proxy(data, {
    get(...args) {
      let data2 = void 0;
      const property = args[1];
      if (typeof property === "string") {
        const prevKey = instanceKey;
        instanceKey = key;
        data2 = useScope(property, void 0);
        instanceKey = prevKey;
      }
      return data2 !== void 0 ? data2 : Reflect.get(...args);
    }
  });
}
function createRenderFn(instanceCreator, data, instanceKey2) {
  return instanceCreator((requirements, hints = {}) => {
    return requirements.reduce((tokens, token) => {
      if (token.startsWith("slots.")) {
        const slot = token.substring(6);
        const hasSlot = data.slots && has(data.slots, slot);
        if (hints.if) {
          tokens[token] = () => hasSlot;
        } else if (data.slots && hasSlot) {
          const scopedData = slotData(data, instanceKey2);
          tokens[token] = () => data.slots[slot](scopedData);
          return tokens;
        }
      }
      const value = getRef(token, data);
      tokens[token] = () => useScope(token, value.value);
      return tokens;
    }, {});
  }, instanceKey2);
}
let i = 0;
const FormKitSchema = /* @__PURE__ */ defineComponent({
  name: "FormKitSchema",
  props: {
    schema: {
      type: [Array, Object],
      required: true
    },
    data: {
      type: Object,
      default: () => ({})
    },
    library: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props2, context) {
    const instance = getCurrentInstance();
    let instanceKey2 = Symbol(String(i++));
    instanceScopes.set(instanceKey2, []);
    let provider = parseSchema(props2.library, props2.schema);
    let render;
    let data;
    watch(() => props2.schema, (newSchema, oldSchema) => {
      var _a;
      instanceKey2 = Symbol(String(i++));
      provider = parseSchema(props2.library, props2.schema);
      render = createRenderFn(provider, data, instanceKey2);
      if (newSchema === oldSchema) {
        ((_a = instance === null || instance === void 0 ? void 0 : instance.proxy) === null || _a === void 0 ? void 0 : _a.$forceUpdate)();
      }
    }, { deep: true });
    watchEffect(() => {
      data = Object.assign(reactive(props2.data), {
        slots: context.slots
      });
      render = createRenderFn(provider, data, instanceKey2);
    });
    return () => render();
  }
});
const nativeProps = {
  config: {
    type: Object,
    default: {}
  },
  classes: {
    type: Object,
    required: false
  },
  delay: {
    type: Number,
    required: false
  },
  errors: {
    type: Array,
    default: []
  },
  inputErrors: {
    type: Object,
    default: () => ({})
  },
  index: {
    type: Number,
    required: false
  },
  id: {
    type: String,
    required: false
  },
  modelValue: {
    required: false
  },
  name: {
    type: String,
    required: false
  },
  parent: {
    type: Object,
    required: false
  },
  plugins: {
    type: Array,
    default: []
  },
  sectionsSchema: {
    type: Object,
    default: {}
  },
  type: {
    type: [String, Object],
    default: "text"
  },
  validation: {
    type: [String, Array],
    required: false
  },
  validationMessages: {
    type: Object,
    required: false
  },
  validationRules: {
    type: Object,
    required: false
  },
  validationLabel: {
    type: [String, Function],
    required: false
  }
};
const props = nativeProps;
const parentSymbol = Symbol("FormKitParent");
const FormKit = /* @__PURE__ */ defineComponent({
  props,
  emits: {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    input: (_value, _node) => true,
    inputRaw: (_value, _node) => true,
    "update:modelValue": (_value) => true,
    node: (node) => !!node,
    submit: (_data, _node) => true,
    submitRaw: (_event, _node) => true
    /* eslint-enable @typescript-eslint/no-unused-vars */
  },
  inheritAttrs: false,
  setup(props2, context) {
    const node = useInput(props2, context);
    if (!node.props.definition)
      error(600, node);
    if (node.props.definition.component) {
      return () => {
        var _a;
        return h((_a = node.props.definition) === null || _a === void 0 ? void 0 : _a.component, {
          context: node.context
        }, { ...context.slots });
      };
    }
    const schema = ref([]);
    const generateSchema = () => {
      var _a, _b;
      const schemaDefinition = (_b = (_a = node.props) === null || _a === void 0 ? void 0 : _a.definition) === null || _b === void 0 ? void 0 : _b.schema;
      if (!schemaDefinition)
        error(601, node);
      schema.value = typeof schemaDefinition === "function" ? schemaDefinition({ ...props2.sectionsSchema }) : schemaDefinition;
    };
    generateSchema();
    node.on("schema", generateSchema);
    context.emit("node", node);
    const library = node.props.definition.library;
    context.expose({ node });
    return () => h(FormKitSchema, { schema: schema.value, data: node.context, library }, { ...context.slots });
  }
});
function createPlugin(app, options) {
  app.component(options.alias || "FormKit", FormKit).component(options.schemaAlias || "FormKitSchema", FormKitSchema);
  return {
    get: getNode,
    setLocale: (locale) => {
      var _a;
      if ((_a = options.config) === null || _a === void 0 ? void 0 : _a.rootConfig) {
        options.config.rootConfig.locale = locale;
      }
    },
    clearErrors,
    setErrors,
    submit: submitForm,
    reset
  };
}
const optionsSymbol = Symbol.for("FormKitOptions");
const configSymbol = Symbol.for("FormKitConfig");
const plugin = {
  install(app, _options) {
    const options = Object.assign({
      alias: "FormKit",
      schemaAlias: "FormKitSchema"
    }, typeof _options === "function" ? _options() : _options);
    const rootConfig = createConfig(options.config || {});
    options.config = { rootConfig };
    app.config.globalProperties.$formkit = createPlugin(app, options);
    app.provide(optionsSymbol, options);
    app.provide(configSymbol, rootConfig);
  }
};
const invalidGet = Symbol();
function watchVerbose(obj, callback) {
  const watchers = {};
  const applyWatch = (paths) => {
    for (const path of paths) {
      if (path.__str in watchers)
        watchers[path.__str]();
      watchers[path.__str] = watch(touch.bind(null, obj, path), dispatcher.bind(null, path), { deep: false });
    }
  };
  const clearWatch = (path) => {
    if (!path.length)
      return;
    for (const key in watchers) {
      if (`${key}`.startsWith(`${path.__str}.`)) {
        watchers[key]();
        delete watchers[key];
      }
    }
  };
  const dispatcher = createDispatcher(obj, callback, applyWatch, clearWatch);
  applyWatch(getPaths(obj));
}
function createDispatcher(obj, callback, applyWatch, clearChildWatches) {
  return (path) => {
    const value = get(obj, path);
    if (value === invalidGet)
      return;
    if (path.__deep)
      clearChildWatches(path);
    if (typeof value === "object")
      applyWatch(getPaths(value, [path], ...path));
    callback(path, value, obj);
  };
}
function touch(obj, path) {
  const value = get(obj, path);
  return value && typeof value === "object" ? Object.keys(value) : value;
}
function get(obj, path) {
  if (isRef(obj)) {
    if (path.length === 0)
      return obj.value;
    obj = obj.value;
  }
  return path.reduce((value, segment) => {
    if (value === invalidGet)
      return value;
    if (value === null || typeof value !== "object") {
      return invalidGet;
    }
    return value[segment];
  }, obj);
}
function getPaths(obj, paths = [], ...parents) {
  if (obj === null)
    return paths;
  if (!parents.length) {
    const path = Object.defineProperty([], "__str", {
      value: ""
    });
    obj = isRef(obj) ? obj.value : obj;
    if (obj && typeof obj === "object") {
      Object.defineProperty(path, "__deep", { value: true });
      paths.push(path);
    } else {
      return [path];
    }
  }
  if (obj === null || typeof obj !== "object")
    return paths;
  for (const key in obj) {
    const path = parents.concat(key);
    Object.defineProperty(path, "__str", { value: path.join(".") });
    const value = obj[key];
    if (isPojo(value) || Array.isArray(value)) {
      paths.push(Object.defineProperty(path, "__deep", { value: true }));
      paths = paths.concat(getPaths(value, [], ...path));
    } else {
      paths.push(path);
    }
  }
  return paths;
}
function useRaw(obj) {
  if (obj === null || typeof obj !== "object")
    return obj;
  if (isReactive(obj)) {
    obj = toRaw(obj);
  } else if (isRef(obj)) {
    obj = isReactive(obj.value) ? useRaw(obj.value) : obj.value;
  }
  return obj;
}
const pseudoProps = [
  "help",
  "label",
  "ignore",
  "disabled",
  "preserve",
  /^preserve(-e|E)rrors/,
  /^[a-z]+(?:-visibility|Visibility)$/,
  /^[a-zA-Z-]+(?:-class|Class)$/,
  "prefixIcon",
  "suffixIcon",
  /^[a-zA-Z-]+(?:-icon|Icon)$/
];
function classesToNodeProps(node, props2) {
  if (props2.classes) {
    Object.keys(props2.classes).forEach((key) => {
      if (typeof key === "string") {
        node.props[`_${key}Class`] = props2.classes[key];
        if (isObject$1(props2.classes[key]) && key === "inner")
          Object.values(props2.classes[key]);
      }
    });
  }
}
function onlyListeners(props2) {
  if (!props2)
    return {};
  const knownListeners = ["Submit", "SubmitRaw"].reduce((listeners, listener) => {
    const name = `on${listener}`;
    if (name in props2) {
      if (typeof props2[name] === "function") {
        listeners[name] = props2[name];
      }
    }
    return listeners;
  }, {});
  return knownListeners;
}
function useInput(props2, context, options = {}) {
  const config2 = Object.assign({}, inject(optionsSymbol) || {}, options);
  const instance = getCurrentInstance();
  const listeners = onlyListeners(instance === null || instance === void 0 ? void 0 : instance.vnode.props);
  const isVModeled = props2.modelValue !== void 0;
  const value = props2.modelValue !== void 0 ? props2.modelValue : cloneAny(context.attrs.value);
  function createInitialProps() {
    const initialProps2 = {
      ...nodeProps(props2),
      ...listeners
    };
    const attrs = except(nodeProps(context.attrs), pseudoProps);
    initialProps2.attrs = attrs;
    const propValues = only(nodeProps(context.attrs), pseudoProps);
    for (const propName in propValues) {
      initialProps2[camel(propName)] = propValues[propName];
    }
    const classesProps = { props: {} };
    classesToNodeProps(classesProps, props2);
    Object.assign(initialProps2, classesProps.props);
    if (typeof initialProps2.type !== "string") {
      initialProps2.definition = initialProps2.type;
      delete initialProps2.type;
    }
    return initialProps2;
  }
  const initialProps = createInitialProps();
  const parent = initialProps.ignore ? null : props2.parent || inject(parentSymbol, null);
  const node = createNode(extend(config2 || {}, {
    name: props2.name || void 0,
    value,
    parent,
    plugins: (config2.plugins || []).concat(props2.plugins),
    config: props2.config,
    props: initialProps,
    index: props2.index
  }, false, true));
  if (!node.props.definition)
    error(600, node);
  const lateBoundProps = ref(new Set(node.props.definition.props || []));
  node.on("added-props", ({ payload: lateProps }) => {
    if (Array.isArray(lateProps))
      lateProps.forEach((newProp) => lateBoundProps.value.add(newProp));
  });
  const pseudoPropNames = computed(() => pseudoProps.concat([...lateBoundProps.value]).reduce((names, prop) => {
    if (typeof prop === "string") {
      names.push(camel(prop));
      names.push(kebab(prop));
    } else {
      names.push(prop);
    }
    return names;
  }, []));
  watchEffect(() => classesToNodeProps(node, props2));
  const passThrough = nodeProps(props2);
  for (const prop in passThrough) {
    watch(() => props2[prop], () => {
      if (props2[prop] !== void 0) {
        node.props[prop] = props2[prop];
      }
    });
  }
  const attributeWatchers = /* @__PURE__ */ new Set();
  const possibleProps = nodeProps(context.attrs);
  watchEffect(() => {
    watchAttributes(only(possibleProps, pseudoPropNames.value));
  });
  function watchAttributes(attrProps) {
    attributeWatchers.forEach((stop) => {
      stop();
      attributeWatchers.delete(stop);
    });
    for (const prop in attrProps) {
      const camelName = camel(prop);
      attributeWatchers.add(watch(() => context.attrs[prop], () => {
        node.props[camelName] = context.attrs[prop];
      }));
    }
  }
  watchEffect(() => {
    const attrs = except(nodeProps(context.attrs), pseudoPropNames.value);
    node.props.attrs = Object.assign({}, node.props.attrs || {}, attrs);
  });
  watchEffect(() => {
    const messages = props2.errors.map((error2) => createMessage({
      key: slugify(error2),
      type: "error",
      value: error2,
      meta: { source: "prop" }
    }));
    node.store.apply(messages, (message) => message.type === "error" && message.meta.source === "prop");
  });
  if (node.type !== "input") {
    const sourceKey = `${node.name}-prop`;
    watchEffect(() => {
      const keys = Object.keys(props2.inputErrors);
      const messages = keys.reduce((messages2, key) => {
        let value2 = props2.inputErrors[key];
        if (typeof value2 === "string")
          value2 = [value2];
        if (Array.isArray(value2)) {
          messages2[key] = value2.map((error2) => createMessage({
            key: error2,
            type: "error",
            value: error2,
            meta: { source: sourceKey }
          }));
        }
        return messages2;
      }, {});
      node.store.apply(messages, (message) => message.type === "error" && message.meta.source === sourceKey);
    });
  }
  watchEffect(() => Object.assign(node.config, props2.config));
  if (node.type !== "input") {
    provide(parentSymbol, node);
  }
  let inputTimeout;
  const mutex = /* @__PURE__ */ new WeakSet();
  node.on("modelUpdated", () => {
    var _a, _b;
    context.emit("inputRaw", (_a = node.context) === null || _a === void 0 ? void 0 : _a.value, node);
    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(context.emit, 20, "input", (_b = node.context) === null || _b === void 0 ? void 0 : _b.value, node);
    if (isVModeled && node.context) {
      const newValue = useRaw(node.context.value);
      if (isObject$1(newValue) && useRaw(props2.modelValue) !== newValue) {
        mutex.add(newValue);
      }
      context.emit("update:modelValue", newValue);
    }
  });
  if (isVModeled) {
    watchVerbose(toRef(props2, "modelValue"), (path, value2) => {
      var _a;
      const rawValue = useRaw(value2);
      if (isObject$1(rawValue) && mutex.has(rawValue)) {
        return mutex.delete(rawValue);
      }
      if (!path.length)
        node.input(value2, false);
      else
        (_a = node.at(path)) === null || _a === void 0 ? void 0 : _a.input(value2, false);
    });
  }
  onUnmounted(() => node.destroy());
  return node;
}
const vueBindings = function vueBindings2(node) {
  node.ledger.count("blocking", (m) => m.blocking);
  const isValid = ref(!node.ledger.value("blocking"));
  node.ledger.count("errors", (m) => m.type === "error");
  const hasErrors = ref(!!node.ledger.value("errors"));
  let hasTicked = false;
  nextTick(() => {
    hasTicked = true;
  });
  const availableMessages = reactive(node.store.reduce((store, message) => {
    if (message.visible) {
      store[message.key] = message;
    }
    return store;
  }, {}));
  const validationVisibility = ref(node.props.validationVisibility || "blur");
  node.on("prop:validationVisibility", ({ payload }) => {
    validationVisibility.value = payload;
  });
  const hasShownErrors = ref(validationVisibility.value === "live");
  const validationVisible = computed(() => {
    if (context.state.submitted)
      return true;
    if (!hasShownErrors.value && !context.state.settled) {
      return false;
    }
    switch (validationVisibility.value) {
      case "live":
        return true;
      case "blur":
        return context.state.blurred;
      case "dirty":
        return context.state.dirty;
      default:
        return false;
    }
  });
  const isComplete = computed(() => {
    return hasValidation.value ? isValid.value && !hasErrors.value : context.state.dirty && !empty(context.value);
  });
  const hasValidation = ref(Array.isArray(node.props.parsedRules) && node.props.parsedRules.length > 0);
  node.on("prop:parsedRules", ({ payload: rules }) => {
    hasValidation.value = Array.isArray(rules) && rules.length > 0;
  });
  const messages = computed(() => {
    const visibleMessages = {};
    for (const key in availableMessages) {
      const message = availableMessages[key];
      if (message.type !== "validation" || validationVisible.value) {
        visibleMessages[key] = message;
      }
    }
    return visibleMessages;
  });
  const ui = reactive(node.store.reduce((messages2, message) => {
    if (message.type === "ui" && message.visible)
      messages2[message.key] = message;
    return messages2;
  }, {}));
  const cachedClasses = reactive({});
  const classes = new Proxy(cachedClasses, {
    get(...args) {
      const [target, property] = args;
      let className = Reflect.get(...args);
      if (!className && typeof property === "string") {
        if (!has(target, property) && !property.startsWith("__v")) {
          const observedNode = createObserver(node);
          observedNode.watch((node2) => {
            const rootClasses = typeof node2.config.rootClasses === "function" ? node2.config.rootClasses(property, node2) : {};
            const globalConfigClasses = node2.config.classes ? createClasses(property, node2, node2.config.classes[property]) : {};
            const classesPropClasses = createClasses(property, node2, node2.props[`_${property}Class`]);
            const sectionPropClasses = createClasses(property, node2, node2.props[`${property}Class`]);
            className = generateClassList(node2, property, rootClasses, globalConfigClasses, classesPropClasses, sectionPropClasses);
            target[property] = className;
          });
        }
      }
      return className;
    }
  });
  const describedBy = computed(() => {
    const describers = [];
    if (context.help) {
      describers.push(`help-${node.props.id}`);
    }
    for (const key in messages.value) {
      describers.push(`${node.props.id}-${key}`);
    }
    return describers.length ? describers.join(" ") : void 0;
  });
  const value = ref(node.value);
  const _value = ref(node.value);
  const context = reactive({
    _value,
    attrs: node.props.attrs,
    disabled: node.props.disabled,
    describedBy,
    fns: {
      length: (obj) => Object.keys(obj).length,
      number: (value2) => Number(value2),
      string: (value2) => String(value2),
      json: (value2) => JSON.stringify(value2),
      eq
    },
    handlers: {
      blur: () => node.store.set(createMessage({ key: "blurred", visible: false, value: true })),
      touch: () => {
        node.store.set(createMessage({ key: "dirty", visible: false, value: true }));
      },
      DOMInput: (e) => {
        node.input(e.target.value);
        node.emit("dom-input-event", e);
      }
    },
    help: node.props.help,
    id: node.props.id,
    label: node.props.label,
    messages,
    node: markRaw(node),
    options: node.props.options,
    state: {
      blurred: false,
      complete: isComplete,
      dirty: false,
      submitted: false,
      settled: node.isSettled,
      valid: isValid,
      errors: hasErrors,
      rules: hasValidation,
      validationVisible
    },
    type: node.props.type,
    ui,
    value,
    classes
  });
  node.on("created", () => {
    if (!eq(context.value, node.value)) {
      _value.value = node.value;
      value.value = node.value;
      triggerRef(value);
      triggerRef(_value);
    }
  });
  node.on("settled", ({ payload: isSettled }) => {
    context.state.settled = isSettled;
  });
  function observeProps(observe) {
    observe.forEach((prop) => {
      prop = camel(prop);
      if (!has(context, prop) && has(node.props, prop)) {
        context[prop] = node.props[prop];
      }
      node.on(`prop:${prop}`, ({ payload }) => {
        context[prop] = payload;
      });
    });
  }
  const rootProps = () => {
    const props2 = [
      "help",
      "label",
      "disabled",
      "options",
      "type",
      "attrs",
      "preserve",
      "preserveErrors",
      "id"
    ];
    const iconPattern = /^[a-zA-Z-]+(?:-icon|Icon)$/;
    const matchingProps = Object.keys(node.props).filter((prop) => {
      return iconPattern.test(prop);
    });
    return props2.concat(matchingProps);
  };
  observeProps(rootProps());
  function definedAs(definition) {
    if (definition.props)
      observeProps(definition.props);
  }
  node.props.definition && definedAs(node.props.definition);
  node.on("added-props", ({ payload }) => observeProps(payload));
  node.on("input", ({ payload }) => {
    _value.value = payload;
    triggerRef(_value);
  });
  node.on("commit", ({ payload }) => {
    value.value = _value.value = payload;
    triggerRef(value);
    node.emit("modelUpdated");
    if (!context.state.dirty && node.isCreated && hasTicked)
      context.handlers.touch();
    if (isComplete && node.type === "input" && hasErrors.value && !undefine(node.props.preserveErrors)) {
      node.store.filter((message) => {
        var _a;
        return !(message.type === "error" && ((_a = message.meta) === null || _a === void 0 ? void 0 : _a.autoClear) === true);
      });
    }
  });
  const updateState = async (message) => {
    if (message.type === "ui" && message.visible && !message.meta.showAsMessage) {
      ui[message.key] = message;
    } else if (message.visible) {
      availableMessages[message.key] = message;
    } else if (message.type === "state") {
      context.state[message.key] = !!message.value;
    }
  };
  node.on("message-added", (e) => updateState(e.payload));
  node.on("message-updated", (e) => updateState(e.payload));
  node.on("message-removed", ({ payload: message }) => {
    delete ui[message.key];
    delete availableMessages[message.key];
    delete context.state[message.key];
  });
  node.on("settled:blocking", () => {
    isValid.value = true;
  });
  node.on("unsettled:blocking", () => {
    isValid.value = false;
  });
  node.on("settled:errors", () => {
    hasErrors.value = false;
  });
  node.on("unsettled:errors", () => {
    hasErrors.value = true;
  });
  watch(validationVisible, (value2) => {
    if (value2) {
      hasShownErrors.value = true;
    }
  });
  node.context = context;
  node.emit("context", node, false);
};
const defaultConfig = (options = {}) => {
  const { rules = {}, locales = {}, inputs: inputs$1 = {}, messages = {}, locale = void 0, theme: theme2 = void 0, iconLoaderUrl = void 0, iconLoader = void 0, icons = {}, ...nodeOptions } = options;
  const validation = createValidationPlugin({
    ...defaultRules,
    ...rules || {}
  });
  const i18n = createI18nPlugin(extend({ en, ...locales || {} }, messages));
  const library = createLibraryPlugin(inputs, inputs$1);
  const themePlugin = createThemePlugin(theme2, icons, iconLoaderUrl, iconLoader);
  return extend({
    plugins: [library, themePlugin, vueBindings, i18n, validation],
    ...!locale ? {} : { config: { locale } }
  }, nodeOptions || {}, true);
};
const config = {
  locales: { en },
  locale: "en"
};
const formkitPlugin_pZqjah0RUG = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin, defaultConfig(config));
});
const _plugins = [
  plugin$1,
  components_plugin_KR1HBZs4kY,
  unhead_KgADcZ0jPj,
  router_jmwsqit4Rs,
  formkitPlugin_pZqjah0RUG
];
const Fragment = /* @__PURE__ */ defineComponent({
  name: "FragmentWrapper",
  setup(_props, { slots }) {
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const _wrapIf = (component, props2, slots) => {
  return { default: () => props2 ? h(component, props2 === true ? {} : props2, slots) : h(Fragment, {}, slots) };
};
const layouts = {
  adminlayout: () => import('./_nuxt/adminlayout-d3b92f18.mjs').then((m) => m.default || m),
  authoriselayout: () => import('./_nuxt/authoriselayout-fce2c226.mjs').then((m) => m.default || m),
  custome: () => import('./_nuxt/custome-8939bb86.mjs').then((m) => m.default || m),
  default: () => import('./_nuxt/default-a65c5024.mjs').then((m) => m.default || m),
  display: () => import('./_nuxt/display-76b2947e.mjs').then((m) => m.default || m),
  userlayout: () => import('./_nuxt/userlayout-10cda85f.mjs').then((m) => m.default || m),
  verifierlayout: () => import('./_nuxt/verifierlayout-adf50a37.mjs').then((m) => m.default || m)
};
const LayoutLoader = /* @__PURE__ */ defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    ...{}
  },
  async setup(props2, context) {
    const LayoutComponent = await layouts[props2.name]().then((r) => r.default || r);
    return () => {
      return h(LayoutComponent, context.attrs, context.slots);
    };
  }
});
const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props2, context) {
    const injectedRoute = inject("_route");
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => unref(props2.name) ?? route.meta.layout ?? "default");
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => _wrapIf(LayoutLoader, hasLayout && {
          key: layout.value,
          name: layout.value,
          ...{},
          ...context.attrs
        }, context.slots).default()
      }).default();
    };
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props2, children) => {
  return { default: () => children };
};
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props2, { attrs }) {
    const nuxtApp = useNuxtApp();
    return () => {
      return h(RouterView, { name: props2.name, route: props2.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = generateRouteKey(routeProps, props2.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props2.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props2.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props2.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props2) {
    const previousKey = props2.pageKey;
    const previousRoute = props2.routeProps.route;
    const route = {};
    for (const key in props2.routeProps.route) {
      route[key] = computed(() => previousKey === props2.pageKey ? props2.routeProps.route[key] : previousRoute[key]);
    }
    provide("_route", reactive(route));
    return () => {
      return h(props2.routeProps.Component);
    };
  }
});
const _sfc_main$1 = {
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useAppConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-100" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props2, ctx) : void 0;
};
const AppComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const ErrorComponent = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-component-e9643b98.mjs').then((r) => r.default || r));
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-85b64e03.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide("_route", useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error2 = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = callWithNuxt(nuxtApp, showError, [err]);
        onServerPrefetch(() => p);
        return false;
      }
    });
    const { islandContext } = nuxtApp.ssrContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error2)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error2) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props2, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props2, ctx) : void 0;
};
const RootComponent = _sfc_main;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { useHead as a, createError as c, entry$1 as default, navigateTo as n, useRouter as u };
//# sourceMappingURL=server.mjs.map
