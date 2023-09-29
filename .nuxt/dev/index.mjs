globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { provider, isWindows } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/std-env/dist/index.mjs';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, getRequestHeader, setResponseHeader, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, readBody, setCookie, createError, assertMethod, getCookie, getQuery as getQuery$1 } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/h3/dist/index.mjs';
import bcrypt from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/bcrypt/bcrypt.js';
import jwt from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/jsonwebtoken/index.js';
import { PrismaClient } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/@prisma/client/index.js';
import { createRenderer } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import devalue from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { renderToString } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/vue/server-renderer/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/ofetch/dist/node.mjs';
import destr from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/scule/dist/index.mjs';
import { klona } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/node_modules/radix3/dist/index.mjs';

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  title: "Project Name",
  theme: {
    dark: true,
    colors: {
      primary: "#ff0000"
    }
  }
});

const inlineAppConfig = {};

const appConfig = defuFn(appConfig0, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Users/dell/Desktop/sample copy- updated 15-07-2022/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\dell\\Desktop\\sample copy- updated 15-07-2022","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\dell\\Desktop\\sample copy- updated 15-07-2022\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\dell\\Desktop\\sample copy- updated 15-07-2022\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\dell\\Desktop\\sample copy- updated 15-07-2022\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      event.node.res.setHeader("Content-Type", "image/x-icon");
      event.node.res.end(
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.node.res.writableEnded) {
        event.node.res.statusCode = event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url
        );
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.node.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.node.res.setHeader(header, response.headers[header]);
      }
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const _lazy_pWWaBm = () => Promise.resolve().then(function () { return jwt_service; });
const _lazy_CErXhz = () => Promise.resolve().then(function () { return signin$1; });
const _lazy_MgwXrY = () => Promise.resolve().then(function () { return signup_post$1; });
const _lazy_Gcw0zl = () => Promise.resolve().then(function () { return testToken$1; });
const _lazy_cGAeBU = () => Promise.resolve().then(function () { return Getreport_to_Authoriser_get$1; });
const _lazy_REydDr = () => Promise.resolve().then(function () { return decision_admin_approved_rejected_post$1; });
const _lazy_ZBahGV = () => Promise.resolve().then(function () { return decision_Appovestatus_get$1; });
const _lazy_gkrRnd = () => Promise.resolve().then(function () { return decision_Rejectedstatus_get$1; });
const _lazy_DNL10X = () => Promise.resolve().then(function () { return decision_user_approve$1; });
const _lazy_4qOOpr = () => Promise.resolve().then(function () { return decision_verfier_approved_rejected_post$1; });
const _lazy_p9dgDX = () => Promise.resolve().then(function () { return decisionauthoriserapproved_post$1; });
const _lazy_LmlREE = () => Promise.resolve().then(function () { return vendor_get$1; });
const _lazy_2LXduM = () => Promise.resolve().then(function () { return vendor_post$3; });
const _lazy_rtEJiZ = () => Promise.resolve().then(function () { return vendor_put$1; });
const _lazy_bSlQMO = () => Promise.resolve().then(function () { return vendordelete_delete$1; });
const _lazy_HlQEdy = () => Promise.resolve().then(function () { return fetchreportApproved_User$1; });
const _lazy_yyLgsA = () => Promise.resolve().then(function () { return fetchreportauthoriser_approved$1; });
const _lazy_fDIEK7 = () => Promise.resolve().then(function () { return fetchreportauthoriser_rejected$1; });
const _lazy_HxWOPD = () => Promise.resolve().then(function () { return fetchreportRejected_User$1; });
const _lazy_0BRRUP = () => Promise.resolve().then(function () { return fetchreportsforuser$1; });
const _lazy_XtIsp9 = () => Promise.resolve().then(function () { return reqrechkforauth$1; });
const _lazy_046c5w = () => Promise.resolve().then(function () { return reqrechkforuser$1; });
const _lazy_77e3r5 = () => Promise.resolve().then(function () { return reqrechkforverifier$1; });
const _lazy_iGMXHi = () => Promise.resolve().then(function () { return findadmin_get$1; });
const _lazy_qeWeKU = () => Promise.resolve().then(function () { return findauthoriser_get$1; });
const _lazy_y4LqJz = () => Promise.resolve().then(function () { return finduser_get$1; });
const _lazy_O2Bxqh = () => Promise.resolve().then(function () { return findVerifier_get$1; });
const _lazy_OJ88RO = () => Promise.resolve().then(function () { return branchLocation_delete$1; });
const _lazy_YU9gBW = () => Promise.resolve().then(function () { return branchLocation_get$1; });
const _lazy_x09S3g = () => Promise.resolve().then(function () { return branchLocation_post$1; });
const _lazy_OaWcNy = () => Promise.resolve().then(function () { return branchLocation_put$1; });
const _lazy_OPFb7P = () => Promise.resolve().then(function () { return Delete$1; });
const _lazy_ZRjbc2 = () => Promise.resolve().then(function () { return findUniq$1; });
const _lazy_uHNTLN = () => Promise.resolve().then(function () { return GetNewPerson$1; });
const _lazy_itDQjK = () => Promise.resolve().then(function () { return Update$1; });
const _lazy_iNz4X2 = () => Promise.resolve().then(function () { return addreport_post$1; });
const _lazy_ZaNoFa = () => Promise.resolve().then(function () { return GetAllReports$1; });
const _lazy_Z0B00I = () => Promise.resolve().then(function () { return vendor_post$1; });
const _lazy_TFEEAE = () => Promise.resolve().then(function () { return vendorcategeorydata$1; });
const _lazy_uwcA5H = () => Promise.resolve().then(function () { return vendorcategoy_delete$1; });
const _lazy_maVAPS = () => Promise.resolve().then(function () { return vendorcategoy_get$1; });
const _lazy_XxrOV4 = () => Promise.resolve().then(function () { return vendorcategoy_post$1; });
const _lazy_hu8MPm = () => Promise.resolve().then(function () { return vendorcategoy_put$1; });
const _lazy_W7mzCN = () => Promise.resolve().then(function () { return vendorType_delete$1; });
const _lazy_yzxM9y = () => Promise.resolve().then(function () { return vendorType_get$1; });
const _lazy_KSjB8b = () => Promise.resolve().then(function () { return vendorType_post$1; });
const _lazy_wnOjgj = () => Promise.resolve().then(function () { return vendorType_put$1; });
const _lazy_1IdYFs = () => Promise.resolve().then(function () { return newApi$1; });
const _lazy_kajrCC = () => Promise.resolve().then(function () { return admin_to_verfier_post$1; });
const _lazy_7Q770X = () => Promise.resolve().then(function () { return fetch_report_rejected_verfier_post$1; });
const _lazy_QWDrBH = () => Promise.resolve().then(function () { return rejected_Api_post$1; });
const _lazy_5uxo5p = () => Promise.resolve().then(function () { return rejetctedby_Verifier_post$1; });
const _lazy_jZ5zor = () => Promise.resolve().then(function () { return verifier_to_authoriser_Api_post$1; });
const _lazy_rGvIwY = () => Promise.resolve().then(function () { return addReport$1; });
const _lazy_fC5zw3 = () => Promise.resolve().then(function () { return report_delete$1; });
const _lazy_2Qnb9W = () => Promise.resolve().then(function () { return report_get$1; });
const _lazy_V6Gs7o = () => Promise.resolve().then(function () { return report_post$1; });
const _lazy_yVxDb0 = () => Promise.resolve().then(function () { return report_put$1; });
const _lazy_rRoXK3 = () => Promise.resolve().then(function () { return reportcreated_post$1; });
const _lazy_7PqmoM = () => Promise.resolve().then(function () { return signout$1; });
const _lazy_Fc2Yvo = () => Promise.resolve().then(function () { return Getreport_to_admin_get$1; });
const _lazy_xljKLo = () => Promise.resolve().then(function () { return Getreport_to_verfier_get$1; });
const _lazy_sCx7iO = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/auth/jwt.service', handler: _lazy_pWWaBm, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/signin', handler: _lazy_CErXhz, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/signup', handler: _lazy_MgwXrY, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/testToken', handler: _lazy_Gcw0zl, lazy: true, middleware: false, method: undefined },
  { route: '/api/Authoriser_APi/Getreport_to_Authoriser', handler: _lazy_cGAeBU, lazy: true, middleware: false, method: "get" },
  { route: '/api/Decision_Api/decision_admin_approved_rejected', handler: _lazy_REydDr, lazy: true, middleware: false, method: "post" },
  { route: '/api/Decision_Api/decision_Appovestatus', handler: _lazy_ZBahGV, lazy: true, middleware: false, method: "get" },
  { route: '/api/Decision_Api/decision_Rejectedstatus', handler: _lazy_gkrRnd, lazy: true, middleware: false, method: "get" },
  { route: '/api/Decision_Api/decision_user_approve', handler: _lazy_DNL10X, lazy: true, middleware: false, method: undefined },
  { route: '/api/Decision_Api/decision_verfier_approved_rejected', handler: _lazy_4qOOpr, lazy: true, middleware: false, method: "post" },
  { route: '/api/Decision_Api/decisionauthoriserapproved', handler: _lazy_p9dgDX, lazy: true, middleware: false, method: "post" },
  { route: '/api/Edit_vendor_APi/vendor', handler: _lazy_LmlREE, lazy: true, middleware: false, method: "get" },
  { route: '/api/Edit_vendor_APi/vendor', handler: _lazy_2LXduM, lazy: true, middleware: false, method: "post" },
  { route: '/api/Edit_vendor_APi/vendor', handler: _lazy_rtEJiZ, lazy: true, middleware: false, method: "put" },
  { route: '/api/Edit_vendor_APi/vendordelete', handler: _lazy_bSlQMO, lazy: true, middleware: false, method: "delete" },
  { route: '/api/fetchreport/fetchreportApproved_User', handler: _lazy_HlQEdy, lazy: true, middleware: false, method: undefined },
  { route: '/api/fetchreport/fetchreportauthoriser_approved', handler: _lazy_yyLgsA, lazy: true, middleware: false, method: undefined },
  { route: '/api/fetchreport/fetchreportauthoriser_rejected', handler: _lazy_fDIEK7, lazy: true, middleware: false, method: undefined },
  { route: '/api/fetchreport/fetchreportRejected_User', handler: _lazy_HxWOPD, lazy: true, middleware: false, method: undefined },
  { route: '/api/fetchreport/fetchreportsforuser', handler: _lazy_0BRRUP, lazy: true, middleware: false, method: undefined },
  { route: '/api/fetchreport/reqrechkforauth', handler: _lazy_XtIsp9, lazy: true, middleware: false, method: undefined },
  { route: '/api/fetchreport/reqrechkforuser', handler: _lazy_046c5w, lazy: true, middleware: false, method: undefined },
  { route: '/api/fetchreport/reqrechkforverifier', handler: _lazy_77e3r5, lazy: true, middleware: false, method: undefined },
  { route: '/api/FetchRole/findadmin', handler: _lazy_iGMXHi, lazy: true, middleware: false, method: "get" },
  { route: '/api/FetchRole/findauthoriser', handler: _lazy_qeWeKU, lazy: true, middleware: false, method: "get" },
  { route: '/api/FetchRole/finduser', handler: _lazy_y4LqJz, lazy: true, middleware: false, method: "get" },
  { route: '/api/FetchRole/findVerifier', handler: _lazy_O2Bxqh, lazy: true, middleware: false, method: "get" },
  { route: '/api/module1/BranchLocation/branchLocation', handler: _lazy_OJ88RO, lazy: true, middleware: false, method: "delete" },
  { route: '/api/module1/BranchLocation/branchLocation', handler: _lazy_YU9gBW, lazy: true, middleware: false, method: "get" },
  { route: '/api/module1/BranchLocation/branchLocation', handler: _lazy_x09S3g, lazy: true, middleware: false, method: "post" },
  { route: '/api/module1/BranchLocation/branchLocation', handler: _lazy_OaWcNy, lazy: true, middleware: false, method: "put" },
  { route: '/api/module1/Delete', handler: _lazy_OPFb7P, lazy: true, middleware: false, method: undefined },
  { route: '/api/module1/findUniq', handler: _lazy_ZRjbc2, lazy: true, middleware: false, method: undefined },
  { route: '/api/module1/GetNewPerson', handler: _lazy_uHNTLN, lazy: true, middleware: false, method: undefined },
  { route: '/api/module1/Update', handler: _lazy_itDQjK, lazy: true, middleware: false, method: undefined },
  { route: '/api/module1/UserAPI/addreport', handler: _lazy_iNz4X2, lazy: true, middleware: false, method: "post" },
  { route: '/api/module1/UserAPI/GetAllReports', handler: _lazy_ZaNoFa, lazy: true, middleware: false, method: undefined },
  { route: '/api/module1/vendor', handler: _lazy_Z0B00I, lazy: true, middleware: false, method: "post" },
  { route: '/api/module1/vendorCategoy_Api/vendorcategeorydata', handler: _lazy_TFEEAE, lazy: true, middleware: false, method: undefined },
  { route: '/api/module1/vendorCategoy_Api/vendorcategoy', handler: _lazy_uwcA5H, lazy: true, middleware: false, method: "delete" },
  { route: '/api/module1/vendorCategoy_Api/vendorcategoy', handler: _lazy_maVAPS, lazy: true, middleware: false, method: "get" },
  { route: '/api/module1/vendorCategoy_Api/vendorcategoy', handler: _lazy_XxrOV4, lazy: true, middleware: false, method: "post" },
  { route: '/api/module1/vendorCategoy_Api/vendorcategoy', handler: _lazy_hu8MPm, lazy: true, middleware: false, method: "put" },
  { route: '/api/module1/vendorType_Api/vendorType', handler: _lazy_W7mzCN, lazy: true, middleware: false, method: "delete" },
  { route: '/api/module1/vendorType_Api/vendorType', handler: _lazy_yzxM9y, lazy: true, middleware: false, method: "get" },
  { route: '/api/module1/vendorType_Api/vendorType', handler: _lazy_KSjB8b, lazy: true, middleware: false, method: "post" },
  { route: '/api/module1/vendorType_Api/vendorType', handler: _lazy_wnOjgj, lazy: true, middleware: false, method: "put" },
  { route: '/api/newApi', handler: _lazy_1IdYFs, lazy: true, middleware: false, method: undefined },
  { route: '/api/recheck_Api/admin_to_verfier', handler: _lazy_kajrCC, lazy: true, middleware: false, method: "post" },
  { route: '/api/recheck_Api/fetch_report_rejected_verfier', handler: _lazy_7Q770X, lazy: true, middleware: false, method: "post" },
  { route: '/api/recheck_Api/rejected_Api', handler: _lazy_QWDrBH, lazy: true, middleware: false, method: "post" },
  { route: '/api/recheck_Api/rejetctedby_Verifier', handler: _lazy_5uxo5p, lazy: true, middleware: false, method: "post" },
  { route: '/api/recheck_Api/verifier_to_authoriser_Api', handler: _lazy_jZ5zor, lazy: true, middleware: false, method: "post" },
  { route: '/api/report_Api/addReport', handler: _lazy_rGvIwY, lazy: true, middleware: false, method: undefined },
  { route: '/api/report_Api/report', handler: _lazy_fC5zw3, lazy: true, middleware: false, method: "delete" },
  { route: '/api/report_Api/report', handler: _lazy_2Qnb9W, lazy: true, middleware: false, method: "get" },
  { route: '/api/report_Api/report', handler: _lazy_V6Gs7o, lazy: true, middleware: false, method: "post" },
  { route: '/api/report_Api/report', handler: _lazy_yVxDb0, lazy: true, middleware: false, method: "put" },
  { route: '/api/report_Api/reportcreated', handler: _lazy_rRoXK3, lazy: true, middleware: false, method: "post" },
  { route: '/api/signoutapi/signout', handler: _lazy_7PqmoM, lazy: true, middleware: false, method: undefined },
  { route: '/api/Verifier_Api/Getreport_to_admin', handler: _lazy_Fc2Yvo, lazy: true, middleware: false, method: "get" },
  { route: '/api/Verifier_Api/Getreport_to_verfier', handler: _lazy_xljKLo, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_sCx7iO, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_sCx7iO, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection]", err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException]", err)
  );
}

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0px}.right-0{right:0px}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template = _template;

const errorDev = /*#__PURE__*/Object.freeze({
    __proto__: null,
    template: template
});

const secretKey$2 = "abcd";
function verifyToken(token) {
  try {
    if (!token) {
      return { message: "No token provided!" };
    }
    const value = token;
    const decoded = jwt.verify(value, secretKey$2);
    return decoded;
  } catch (error) {
    console.log(error);
  }
}

const jwt_service = /*#__PURE__*/Object.freeze({
    __proto__: null,
    verifyToken: verifyToken
});

const db = new PrismaClient();
const db$1 = db;

const secretKey$1 = "abcd";
const generateToken$1 = (id) => {
  return jwt.sign({ userId: id }, secretKey$1, {
    expiresIn: "10h"
  });
};
const signin = defineEventHandler(async (event) => {
  const reqBody = await readBody(event);
  const SignIn = await db$1.vendor.findUnique({
    where: {
      Username: reqBody.Username
    }
  }).then(async (user) => {
    if (user) {
      const isPasswordValid = await bcrypt.compare(reqBody.Password, user.Password);
      if (isPasswordValid) {
        let use = user.User;
        let admin = user.Admin;
        let Auth = user.Authoriser;
        let Verifier = user.Verifier;
        let users;
        if (use === "True")
          users = "/User_DPage";
        if (admin === "True")
          users = "/Admin/AdminDPage";
        if (Auth === "True")
          users = "/AuthoriserDPage";
        if (Verifier === "True")
          users = "/VerifierDPage";
        const token = generateToken$1(user.Id);
        setCookie(event, "user", JSON.stringify(user));
        setCookie(event, "token", token);
        return {
          "statusCode": 200,
          "statusMessage": "OK",
          users,
          token
        };
      } else {
        throw createError({ statusCode: 500, statusMessage: "Invalid Password" });
      }
    } else {
      throw {
        "statusCode": 500,
        "statusMessage": "Username not found!",
        "message": "Username not found!"
      };
    }
  }).catch(async (err) => {
    console.log(err);
    throw err;
  });
  return SignIn;
});

const signin$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: signin
});

const prisma$E = new PrismaClient();
const secretKey = "abcd";
const generateToken = (id) => {
  return jwt.sign({ userId: id }, secretKey, {
    expiresIn: "10h"
  });
};
const signup_post = defineEventHandler(async (event) => {
  const postData = await readBody(event);
  assertMethod(event, "POST");
  try {
    if (postData.create == "User") {
      const existingUser = await prisma$E.vendor.findUnique({
        where: {
          Username: postData.Username
        }
      });
      if (existingUser) {
        return { message: "Username already exists." };
      }
      const hashedPassword = await bcrypt.hash(postData.Password, 10);
      const user = await prisma$E.vendor.create({
        data: {
          Vendorname: postData.Vendorname,
          Username: postData.Username,
          Password: hashedPassword,
          BranchLocation: postData.Branchlocation,
          Branchname: postData.Branchname,
          vendorType: postData.vendorType,
          vendorCategory: postData.vendorCategory,
          categorySubtype: postData.categorySubtype,
          GSTnumber: postData.GSTnumber,
          PanNumber: postData.PanNumber,
          User: postData.User,
          Admin: postData.Admin,
          Authoriser: postData.Authoriser,
          Verifier: postData.Verifier,
          BankName: postData.Bankname,
          BankAccountNumber: postData.BankAccountNumber,
          BankIFCcode: postData.BankIFCcode
        }
      });
      if (!user) {
        return { message: "User creating failed." };
      }
      if (user)
        return { user };
    } else {
      const existingUser = await prisma$E.superadmin.findUnique({
        where: {
          Username: postData.Username
        }
      });
      if (existingUser) {
        return { message: "Username already exists." };
      }
      const hashedPassword = await bcrypt.hash(postData.Password, 10);
      const user = await prisma$E.superadmin.create({
        data: {
          Username: postData.Username,
          Mobile: postData.Mobileno,
          Password: hashedPassword,
          EmailId: postData.EmailId
        }
      });
      if (!user) {
        return { message: "User creating failed." };
      }
      const token = generateToken(user.Id);
      setCookie(event, "token", token);
      return { result: { user, token } };
    }
  } catch (error) {
    return error;
  }
});

const signup_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: signup_post
});

const testToken = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  try {
    const token = getCookie(event, "token");
    const userID = verifyToken(token);
    const user = await db$1.vendor.findUnique({
      where: {
        Id: userID == null ? void 0 : userID.userId
      }
    }).then(async (user2) => {
    });
    return "done";
  } catch (error) {
    return "This is error" + error;
  }
});

const testToken$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: testToken
});

const Getreport_to_Authoriser_get = defineEventHandler(async (event) => {
  const getReport = await db$1.requestrecheck.findMany({
    where: {
      AuthId: null
    }
  }).then(async (reports) => {
    const sortedReports = reports.map((report) => report.ReportId);
    const allReports = await db$1.report.findMany({
      where: {
        Id: {
          in: sortedReports
        }
      },
      include: {
        BillNumber: true
      }
    });
    return allReports;
  });
  return getReport;
});

const Getreport_to_Authoriser_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Getreport_to_Authoriser_get
});

const decision_admin_approved_rejected_post = defineEventHandler(async (event) => {
  const get = getCookie(event, "user") || "";
  const cookie = JSON.parse(get);
  const postdata = await readBody(event);
  const update = await db$1.decision.findFirst({
    where: {
      ReportId: postdata.ReportId,
      Role: "Admin"
    }
  }).then(async (report) => {
    if (!report) {
      const create = db$1.decision.create({
        data: {
          ReportId: postdata.ReportId,
          VendorModelId: cookie.Id,
          Comment: postdata.Comment,
          Approve: postdata.Approve,
          Rejected: postdata.Rejected,
          VendorName: cookie.Vendorname,
          Role: "Admin"
        }
      }).then((decision) => {
        return decision;
      }).catch(async (err) => {
        throw await err;
      });
      return await create;
    } else {
      const updateDecision = db$1.decision.update({
        where: {
          Id: report.Id
        },
        data: {
          Approve: postdata.Approve,
          Rejected: postdata.Rejected,
          Comment: postdata.Comment
        }
      }).then((decision) => {
        return decision;
      }).catch(async (err) => {
        throw await err;
      });
      return await updateDecision;
    }
  }).catch((err) => {
    throw err;
  });
  if (postdata.Approve == "True") {
    const reportUpdate = await db$1.report.update({
      where: {
        Id: update.ReportId
      },
      data: {
        Admin: "Approved",
        status: "Approved"
      }
    });
    await db$1.requestrecheck.delete({
      where: {
        ReportId: update.ReportId
      }
    });
    await db$1.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: update.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.Vendorname,
        Comment: update.Comment,
        Approve: update.Approve,
        Rejected: update.Rejected
      }
    });
    return {
      statusCode: 200,
      statusMessage: "Report Approved Successfully!",
      reportId: reportUpdate.Id
    };
  } else {
    const reportUpdate = await db$1.report.update({
      where: {
        Id: update.ReportId
      },
      data: {
        Admin: "Rejected"
      }
    });
    await db$1.requestrecheck.update({
      where: {
        ReportId: update.ReportId
      },
      data: {
        VerifierCheck: "False",
        AdminCheck: "False",
        AdminId: cookie.Id,
        AdminName: cookie.Username
      }
    });
    await db$1.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: update.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.Vendorname,
        Comment: update.Comment,
        Approve: update.Approve,
        Rejected: update.Rejected
      }
    });
    return {
      statusCode: 200,
      statusMessage: "Report Rejected Successfully!",
      reportId: reportUpdate.Id
    };
  }
});

const decision_admin_approved_rejected_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: decision_admin_approved_rejected_post
});

const prisma$D = new PrismaClient();
const decision_Appovestatus_get = defineEventHandler(async (event) => {
  try {
    const reports = await prisma$D.report.findMany({
      where: {
        Authoriser: "Approved",
        Verifier: "Approved",
        Admin: "Approved"
      }
    });
    const reportIds = reports.map((report) => report.Id);
    for (const reportId of reportIds) {
      await prisma$D.report.updateMany({
        where: {
          Id: reportId
        },
        data: {
          status: "Approved"
        }
      });
    }
    return "Reports updated successfully";
  } catch (error) {
    return error;
  }
});

const decision_Appovestatus_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: decision_Appovestatus_get
});

const prisma$C = new PrismaClient();
const decision_Rejectedstatus_get = defineEventHandler(async (event) => {
  try {
    const reports = await prisma$C.report.findMany({
      where: {
        Authoriser: "Rejected",
        Verifier: "Rejected",
        Admin: "Rejected"
      }
    });
    const reportIds = reports.map((report) => report.Id);
    for (const reportId of reportIds) {
      await prisma$C.report.updateMany({
        where: {
          Id: reportId
        },
        data: {
          status: "Rejected"
        }
      });
    }
    return "Reports updated successfully";
  } catch (error) {
    return error;
  }
});

const decision_Rejectedstatus_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: decision_Rejectedstatus_get
});

const decision_user_approve = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user") || "");
  const postdata = await readBody(event);
  const update = await db$1.decision.findFirst({
    where: {
      ReportId: postdata.ReportId,
      Role: "User"
    }
  }).then(async (report) => {
    if (!report) {
      const create = db$1.decision.create({
        data: {
          ReportId: postdata.ReportId,
          VendorModelId: cookie.Id,
          Comment: postdata.Comment,
          Approve: "True",
          Rejected: postdata.Rejected,
          VendorName: cookie.Vendorname,
          Role: "User"
        }
      }).then((decision) => {
        return decision;
      }).catch(async (err) => {
        throw await err;
      });
      return await create;
    } else {
      const updateDecision = db$1.decision.update({
        where: {
          Id: report.Id
        },
        data: {
          Approve: "True",
          Rejected: postdata.Rejected,
          Comment: postdata.Comment
        }
      }).then((decision) => {
        return decision;
      }).catch(async (err) => {
        throw await err;
      });
      return await updateDecision;
    }
  }).catch((err) => {
    throw err;
  });
  await db$1.report.update({
    where: {
      Id: update.ReportId
    },
    data: {
      Authoriser: "Pending"
    }
  });
  await db$1.requestrecheck.update({
    where: {
      ReportId: update.ReportId
    },
    data: {
      UserCheck: "True"
    }
  });
  await db$1.history.create({
    data: {
      DecisionId: update.Id,
      ReportId: update.ReportId,
      VendorModelId: cookie.Id,
      VendorName: cookie.Vendorname,
      Comment: update.Comment,
      Approve: update.Approve,
      Rejected: update.Rejected
    }
  });
  return {
    statusCode: 200,
    statusMessage: "Report send for Rechecking"
  };
});

const decision_user_approve$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: decision_user_approve
});

const decision_verfier_approved_rejected_post = defineEventHandler(async (event) => {
  const get = getCookie(event, "user") || "";
  const cookie = JSON.parse(get);
  const postdata = await readBody(event);
  const update = await db$1.decision.findFirst({
    where: {
      ReportId: postdata.ReportId,
      Role: "Verifier"
    }
  }).then(async (report) => {
    if (!report) {
      const create = db$1.decision.create({
        data: {
          ReportId: postdata.ReportId,
          VendorModelId: cookie.Id,
          Comment: postdata.Comment,
          Approve: postdata.Approve,
          Rejected: postdata.Rejected,
          VendorName: cookie.Vendorname,
          Role: "Verifier"
        }
      }).then((decision) => {
        return decision;
      }).catch(async (err) => {
        throw await err;
      });
      return await create;
    } else {
      const updateDecision = db$1.decision.update({
        where: {
          Id: report.Id
        },
        data: {
          Approve: postdata.Approve,
          Rejected: postdata.Rejected,
          Comment: postdata.Comment
        }
      }).then((decision) => {
        return decision;
      }).catch(async (err) => {
        throw await err;
      });
      return await updateDecision;
    }
  }).catch((err) => {
    throw err;
  });
  if (postdata.Approve == "True") {
    const reportUpdate = await db$1.report.update({
      where: {
        Id: update.ReportId
      },
      data: {
        Verifier: "Approved",
        Admin: "Pending"
      }
    });
    await db$1.requestrecheck.update({
      where: {
        ReportId: update.ReportId
      },
      data: {
        AuthCheck: "True",
        VerifierCheck: "True",
        VerifierId: cookie.Id,
        VerifierName: cookie.Username
      }
    });
    await db$1.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: update.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.Vendorname,
        Comment: update.Comment,
        Approve: update.Approve,
        Rejected: update.Rejected
      }
    });
    return {
      statusCode: 200,
      statusMessage: "Report Approved Successfully!",
      reportId: reportUpdate.Id
    };
  } else {
    const reportUpdate = await db$1.report.update({
      where: {
        Id: update.ReportId
      },
      data: {
        Verifier: "Rejected"
      }
    });
    await db$1.requestrecheck.update({
      where: {
        ReportId: update.ReportId
      },
      data: {
        AuthCheck: "False",
        VerifierCheck: "False",
        VerifierId: cookie.Id,
        VerifierName: cookie.Username
      }
    });
    await db$1.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: update.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.Vendorname,
        Comment: update.Comment,
        Approve: update.Approve,
        Rejected: update.Rejected
      }
    });
    return {
      statusCode: 200,
      statusMessage: "Report Rejected Successfully!",
      reportId: reportUpdate.Id
    };
  }
});

const decision_verfier_approved_rejected_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: decision_verfier_approved_rejected_post
});

const decisionauthoriserapproved_post = defineEventHandler(async (event) => {
  const get = getCookie(event, "user") || "";
  const cookie = JSON.parse(get);
  const postdata = await readBody(event);
  const update = await db$1.decision.findFirst({
    where: {
      ReportId: postdata.ReportId,
      Role: "Authoriser"
    }
  }).then(async (report) => {
    if (!report) {
      const create = db$1.decision.create({
        data: {
          ReportId: postdata.ReportId,
          VendorModelId: cookie.Id,
          Comment: postdata.Comment,
          Approve: postdata.Approve,
          Rejected: postdata.Rejected,
          VendorName: cookie.Vendorname,
          Role: "Authoriser"
        }
      }).then((decision) => {
        return decision;
      }).catch(async (err) => {
        throw await err;
      });
      return await create;
    } else {
      const updateDecision = db$1.decision.update({
        where: {
          Id: report.Id
        },
        data: {
          Approve: postdata.Approve,
          Rejected: postdata.Rejected,
          Comment: postdata.Comment
        }
      }).then((decision) => {
        return decision;
      }).catch(async (err) => {
        throw await err;
      });
      return await updateDecision;
    }
  }).catch((err) => {
    throw err;
  });
  if (postdata.Approve == "True") {
    const reportUpdate = await db$1.report.update({
      where: {
        Id: update.ReportId
      },
      data: {
        Authoriser: "Approved"
      }
    }).then(async (result) => {
      if (result.Admin == "Rejected") {
        const reject = await db$1.report.update({
          where: {
            Id: result.Id
          },
          data: {
            status: "Pending"
          }
        });
        return reject;
      } else {
        return result;
      }
    });
    await db$1.requestrecheck.update({
      where: {
        ReportId: update.ReportId
      },
      data: {
        UserCheck: "True",
        AuthCheck: "True",
        AuthId: cookie.Id,
        AuthName: cookie.Username
      }
    });
    await db$1.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: update.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.Vendorname,
        Comment: update.Comment,
        Approve: update.Approve,
        Rejected: update.Rejected
      }
    });
    return {
      statusCode: 200,
      statusMessage: "Report Approved Successfully!",
      reportId: reportUpdate.Id
    };
  } else {
    const reportUpdate = await db$1.report.update({
      where: {
        Id: update.ReportId
      },
      data: {
        Authoriser: "Rejected"
      }
    }).then(async (result) => {
      if (result.Admin == "Rejected") {
        const reject = await db$1.report.update({
          where: {
            Id: result.Id
          },
          data: {
            status: "Rejected"
          }
        });
        return reject;
      } else {
        return result;
      }
    });
    await db$1.requestrecheck.update({
      where: {
        ReportId: update.ReportId
      },
      data: {
        UserCheck: "False",
        AuthCheck: "False",
        AuthId: cookie.Id,
        AuthName: cookie.Username
      }
    });
    await db$1.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: update.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.Vendorname,
        Comment: update.Comment,
        Approve: update.Approve,
        Rejected: update.Rejected
      }
    });
    return {
      statusCode: 200,
      statusMessage: "Report Rejected Successfully!",
      reportId: reportUpdate.Id
    };
  }
});

const decisionauthoriserapproved_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: decisionauthoriserapproved_post
});

const prisma$B = new PrismaClient();
const vendor_get = defineEventHandler(async () => {
  try {
    const vendor = await prisma$B.vendor.findMany();
    return vendor;
  } catch (error) {
    return error;
  }
});

const vendor_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendor_get
});

const prisma$A = new PrismaClient();
const vendor_post$2 = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const vendor2 = await prisma$A.vendor.create({
      data: {
        Vendorname: postdata.Vendorname,
        Email: postdata.Email,
        Mobileno: postdata.Mobileno,
        Username: postdata.Username,
        Password: postdata.Password,
        GSTnumber: postdata.GSTnumber,
        PanNumber: postdata.PanNumber,
        BankName: postdata.BankName,
        BankAccountNumber: postdata.BankAccountNumber,
        BankIFCcode: postdata.BankIFCcode,
        BranchLocationId: postdata.BranchLocationId,
        User: postdata.User,
        Admin: postdata.Admin,
        Authoriser: postdata.Authoriser,
        Verifier: postdata.Verifier,
        SuperadminId: postdata.SuperadminId
      }
    });
    return vendor2;
  } catch (error) {
    return error;
  }
});

const vendor_post$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendor_post$2
});

const prisma$z = new PrismaClient();
const vendor_put = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const vendor = await prisma$z.vendor.update({
      where: {
        Id: postdata.Id
      },
      data: {
        Email: postdata.email,
        Mobileno: postdata.Mobileno,
        Username: postdata.Username,
        Password: postdata.Password,
        User: postdata.User,
        Admin: postdata.Admin,
        Authoriser: postdata.Authoriser,
        Verifier: postdata.Verifier
      }
    });
    return vendor;
  } catch (error) {
    return error;
  }
});

const vendor_put$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendor_put
});

const prisma$y = new PrismaClient();
const vendordelete_delete = defineEventHandler(async (event) => {
  try {
    const postData = await readBody(event);
    const vendordelete = await prisma$y.vendor.delete({
      where: {
        Id: postData.id
      }
    });
    return vendordelete;
  } catch (error) {
    return error;
  }
});

const vendordelete_delete$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendordelete_delete
});

const prisma$x = new PrismaClient();
const fetchreportApproved_User = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  try {
    const statusApprovedreport = await prisma$x.report.findMany({
      where: {
        VendorModelId: cookie.Id,
        status: "Approved"
      }
    });
    return statusApprovedreport;
  } catch (error) {
    return error;
  }
});

const fetchreportApproved_User$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: fetchreportApproved_User
});

const fetchreportauthoriser_approved = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user") || "");
  try {
    const decision = await db$1.decision.findMany({
      where: {
        VendorModelId: cookie.Id,
        Approve: "True"
      },
      select: {
        ReportId: true
      }
    });
    const Id = decision.map((decision2) => decision2.ReportId);
    const AuthoriserApprovedreport = await db$1.report.findMany({
      where: {
        Id: {
          in: Id
        }
      }
    });
    return AuthoriserApprovedreport;
  } catch (error) {
    return error;
  }
});

const fetchreportauthoriser_approved$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: fetchreportauthoriser_approved
});

const prisma$w = new PrismaClient();
const fetchreportauthoriser_rejected = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  try {
    const decision = await prisma$w.decision.findMany({
      where: {
        VendorModelId: cookie.Id,
        Rejected: "True"
      },
      select: {
        ReportId: true
      }
    });
    const Id = decision.map((decision2) => decision2.ReportId);
    const AuthoriserApprovedreport = await prisma$w.report.findMany({
      where: {
        Id: {
          in: Id
        }
      }
    });
    return AuthoriserApprovedreport;
  } catch (error) {
    return error;
  }
});

const fetchreportauthoriser_rejected$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: fetchreportauthoriser_rejected
});

const prisma$v = new PrismaClient();
const fetchreportRejected_User = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  try {
    const statusApprovedreport = await prisma$v.report.findMany({
      where: {
        VendorModelId: cookie.Id,
        status: "Rejected"
      }
    });
    return statusApprovedreport;
  } catch (error) {
    return error;
  }
});

const fetchreportRejected_User$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: fetchreportRejected_User
});

const prisma$u = new PrismaClient();
const fetchreportsforuser = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  try {
    const decision = await prisma$u.decision.findMany({
      where: {
        VendorModelId: cookie.Id,
        Role: "Authoriser",
        Rejected: "True"
      },
      select: {
        ReportId: true
      }
    });
    const Id = decision.map((decision2) => decision2.ReportId);
    const AuthoriserApprovedreport = await prisma$u.report.findMany({
      where: {
        Id: {
          in: Id
        }
      }
    });
    return AuthoriserApprovedreport;
  } catch (error) {
    return error;
  }
});

const fetchreportsforuser$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: fetchreportsforuser
});

const prisma$t = new PrismaClient();
const reqrechkforauth = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  const reqrechk = await prisma$t.requestrecheck.findMany({
    where: {
      UserCheck: "True",
      AuthCheck: "False",
      AuthId: cookie.Id
    }
  });
  const id = reqrechk.map((reqrechk2) => reqrechk2.ReportId);
  const reports = prisma$t.report.findMany({
    where: {
      Id: {
        in: id
      }
    }
  });
  return reports;
});

const reqrechkforauth$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: reqrechkforauth
});

const reqrechkforuser = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  const cookie = JSON.parse(getCookie(event, "user") || "");
  if (postdata.recheck == "Approved") {
    const reqrechk = await db$1.requestrecheck.findMany({
      where: {
        UserCheck: "True",
        AuthCheck: "True",
        UserId: cookie.Id
      }
    }).then(async (reports) => {
      const id = reports.map((report) => report.ReportId);
      const getReports = await db$1.report.findMany({
        where: {
          Id: {
            in: id
          }
        }
      });
      return getReports;
    });
    return reqrechk;
  } else if (postdata.recheck == "Rejected") {
    const reqrechk = await db$1.requestrecheck.findMany({
      where: {
        UserCheck: "False",
        AuthCheck: "False",
        UserId: cookie.Id
      }
    }).then(async (reports) => {
      const id = reports.map((report) => report.ReportId);
      const getReports = await db$1.report.findMany({
        where: {
          Id: {
            in: id
          }
        }
      });
      return getReports;
    });
    return reqrechk;
  }
});

const reqrechkforuser$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: reqrechkforuser
});

const prisma$s = new PrismaClient();
const reqrechkforverifier = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user") || "");
  const getReports = await prisma$s.requestrecheck.findMany({
    where: {
      AuthCheck: "True",
      VerifierCheck: "False",
      VerifierId: cookie.Id
    }
  });
  const id = getReports.map((reports2) => reports2.ReportId);
  const reports = await prisma$s.report.findMany({
    where: {
      Id: {
        in: id
      }
    }
  }).then((sortReports) => {
    return sortReports;
  }).catch(async (err) => {
    throw await err;
  });
  return reports;
});

const reqrechkforverifier$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: reqrechkforverifier
});

const prisma$r = new PrismaClient();
const findadmin_get = defineEventHandler(async () => {
  try {
    const vendor = await prisma$r.vendor.findMany({
      where: {
        Admin: "True"
      }
    });
    return vendor;
  } catch (error) {
    return error;
  }
});

const findadmin_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: findadmin_get
});

const prisma$q = new PrismaClient();
const findauthoriser_get = defineEventHandler(async () => {
  try {
    const vendor = await prisma$q.vendor.findMany({
      where: {
        Authoriser: "True"
      }
    });
    return vendor;
  } catch (error) {
    return error;
  }
});

const findauthoriser_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: findauthoriser_get
});

const prisma$p = new PrismaClient();
const finduser_get = defineEventHandler(async () => {
  try {
    const vendor = await prisma$p.vendor.findMany({
      where: {
        User: "True"
      }
    });
    return vendor;
  } catch (error) {
    return error;
  }
});

const finduser_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: finduser_get
});

const prisma$o = new PrismaClient();
const findVerifier_get = defineEventHandler(async () => {
  try {
    const vendor = await prisma$o.vendor.findMany({
      where: {
        Verifier: "True"
      }
    });
    return vendor;
  } catch (error) {
    return error;
  }
});

const findVerifier_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: findVerifier_get
});

const prisma$n = new PrismaClient();
const branchLocation_delete = defineEventHandler(async (event) => {
  try {
    const postData = await readBody(event);
    let branchLocation = null;
    branchLocation = await prisma$n.branchlocation.delete({
      where: {
        id: postData.id
      }
    });
    return branchLocation;
  } catch (error) {
    return error;
  }
});

const branchLocation_delete$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: branchLocation_delete
});

const prisma$m = new PrismaClient();
const branchLocation_get = defineEventHandler(async () => {
  try {
    const branchLocations = await prisma$m.branchlocation.findMany();
    return branchLocations;
  } catch (error) {
    return error;
  }
});

const branchLocation_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: branchLocation_get
});

const prisma$l = new PrismaClient();
const branchLocation_post = defineEventHandler(async (event) => {
  let value;
  const postdata = await readBody(event);
  await prisma$l.branchlocation.create({
    data: {
      Branch: postdata.Branch,
      Location: postdata.location
    }
  }).then((res) => {
    value = "New branch created successfully!";
  }).catch((err) => {
    console.log(err);
    value = "Branch already exists";
  });
  return value;
});

const branchLocation_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: branchLocation_post
});

const prisma$k = new PrismaClient();
const branchLocation_put = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const branchLocation = await prisma$k.branchlocation.update({
      where: {
        id: postdata.id
      },
      data: {
        branch: postdata.branch,
        location: postdata.location
      }
    });
    return branchLocation;
  } catch (error) {
    return error;
  }
});

const branchLocation_put$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: branchLocation_put
});

const Delete = defineEventHandler(async (event) => {
  assertMethod(event, "DELETE");
  const postData = await readBody(event);
  try {
    const user = await db$1.admissionRahul.delete({
      data: {
        id: parseInt(postData.id)
      }
    });
    return await user;
  } catch (error) {
    return "" + error;
  }
});

const Delete$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Delete
});

const findUniq = defineEventHandler((event) => {
  return {
    api: "Find specific data operation"
  };
});

const findUniq$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: findUniq
});

const GetNewPerson = defineEventHandler(async (event) => {
  assertMethod(event, "GET");
  return await db$1.admissionRahul.findMany({});
});

const GetNewPerson$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GetNewPerson
});

const Update = defineEventHandler(async (event) => {
  assertMethod(event, "PUT");
  const postData = await readBody(event);
  try {
    const user = await db$1.report.update({
      data: {
        where: {
          id: postData.id
        },
        data: {
          Verifier: postData.verifier
        }
      }
    });
    return await user;
  } catch (error) {
    return error;
  }
});

const Update$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Update
});

const addreport_post = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const postdata = await readBody(event);
  event.node;
  const user = await db$1.report.create({
    data: {
      Vendorname: postdata.Vendorname,
      VendorGSTnumber: postdata.GSTnumber,
      Paymenttype: postdata.Paymenttype,
      Particular: postdata.Particular,
      Basicamount: postdata.Basicamount,
      GSTamount: postdata.GSTamount,
      TDS: postdata.TDSamount,
      Total: postdata.Totalamount,
      AdvancePayment: postdata.Advanceamount,
      PaymentAmount: postdata.Paymentamount,
      Location: postdata.Location,
      GSTstatus: postdata.GSTstatus,
      BranchName: postdata.BranchName,
      BranchLocation: postdata.BranchLocation,
      VendorModelId: 1
    }
  }).then(async (user2) => {
    const userId = user2.Id;
    await db$1.billNumber.create({
      data: {
        ReportId: userId
      }
    });
    return await "status 200";
  }).catch(async (err) => {
    console.log(err);
    return await err;
  });
  return await user;
});

const addreport_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: addreport_post
});

const prisma$j = new PrismaClient();
const GetAllReports = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  try {
    const report = await prisma$j.report.findMany({
      where: {
        VendorModelId: cookie.Id
      }
    });
    return report;
  } catch (error) {
    return error;
  }
});

const GetAllReports$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: GetAllReports
});

const prisma$i = new PrismaClient();
const vendor_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const vendor = await prisma$i.vendor.create({
      data: {
        Vendorname: postdata.Vendorname,
        Email: postdata.Email,
        Mobileno: postdata.Mobileno,
        Username: postdata.Username,
        Password: postdata.Password,
        SuperadminId: 1,
        Branchlocation: postdata.Branchlocation,
        Branchname: postdata.Branchname,
        User: postdata.User,
        Admin: postdata.Admin,
        Authoriser: postdata.Authoriser,
        Verifier: postdata.Verifier,
        Bankname: postdata.Bankname,
        BankAccountNumber: postdata.BankAccountNumber,
        BankIFCcode: postdata.BankIFCcode
      }
    });
    return vendor;
  } catch (error) {
    return "" + error;
  }
});

const vendor_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendor_post
});

const prisma$h = new PrismaClient();
const vendorcategeorydata = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const vendor = await prisma$h.vendorCategory.create({
      data: {
        vendorType: postdata.Type,
        vendorCategory: postdata.Vendor
      }
    });
    return vendor;
  } catch (error) {
    return error;
  }
});

const vendorcategeorydata$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendorcategeorydata
});

const prisma$g = new PrismaClient();
const vendorcategoy_delete = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    let VendorCategory = null;
    VendorCategory = await prisma$g.VendorCategory.delete({
      where: {
        Id: body.Id
      }
    });
    return VendorCategory;
  } catch (error) {
    return error;
  }
});

const vendorcategoy_delete$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendorcategoy_delete
});

const prisma$f = new PrismaClient();
const vendorcategoy_get = defineEventHandler(async () => {
  try {
    const vendorcategory = await prisma$f.vendorCategory.findMany();
    return vendorcategory;
  } catch (error) {
    return error;
  }
});

const vendorcategoy_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendorcategoy_get
});

const prisma$e = new PrismaClient();
const vendorcategoy_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    if (postdata.Type == "A/V vendor") {
      const VendorCategory = await prisma$e.vendorCategory.create({
        data: {
          Avendor: postdata.Vendor,
          SuperadminId: 1
        }
      }).then((res) => {
      }).catch((err) => {
        console.log(err);
      });
    } else if (postdata.Type == "MBT Vendor") {
      const VendorCategory = await prisma$e.vendorCategory.create({
        data: {
          //  Anvendor:postdata.Anvendor,    
          MBTvendor: postdata.Vendor,
          SuperadminId: 1
        }
      }).then((res) => {
      }).catch((err) => {
        console.log(err);
      });
    }
  } catch (error) {
    return error;
  }
});

const vendorcategoy_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendorcategoy_post
});

const prisma$d = new PrismaClient();
const vendorcategoy_put = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const VendorCategory = await prisma$d.VendorCategory.update({
      where: {
        id: postdata.id
      },
      data: {
        Anvendor: postdata.Anvendor,
        MBTvendor: postdata.MBTvendor
      }
    });
    return VendorCategory;
  } catch (error) {
    return error;
  }
});

const vendorcategoy_put$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendorcategoy_put
});

const prisma$c = new PrismaClient();
const vendorType_delete = defineEventHandler(async (event) => {
  try {
    const postdata = await readBody(event);
    let vendorType = null;
    vendorType = await prisma$c.vendorType.delete({
      where: {
        Id: postdata.Id
      }
    });
    return vendorType;
  } catch (error) {
    return error;
  }
});

const vendorType_delete$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendorType_delete
});

const prisma$b = new PrismaClient();
const vendorType_get = defineEventHandler(async () => {
  try {
    const vendorType = await prisma$b.vendorType.findMany();
    return vendorType;
  } catch (error) {
    return error;
  }
});

const vendorType_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendorType_get
});

const prisma$a = new PrismaClient();
const vendorType_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const vendorType = await prisma$a.vendorType.create({
      data: {
        Types: postdata.Type,
        SuperadminId: 1
      }
    });
    return await vendorType;
  } catch (error) {
    return error;
  }
});

const vendorType_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendorType_post
});

const prisma$9 = new PrismaClient();
const vendorType_put = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const vendorType = await prisma$9.vendorType.update({
      where: {
        Id: postdata.Id
      },
      data: {
        Types: postdata.Types
      }
    });
    return vendorType;
  } catch (error) {
    return error;
  }
});

const vendorType_put$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: vendorType_put
});

const newApi = defineEventHandler(async (event) => {
  const get = getCookie(event, "user") || "";
  const cookie = JSON.parse(get);
  const postdata = await readBody(event);
  console.log(postdata);
  await db$1.decision.upsert({});
  const existingDecision = await db$1.decision.findFirst({
    where: {
      VendorModelId: cookie.Id,
      Role: "Verifier"
    }
  });
  let update;
  if (existingDecision) {
    update = await db$1.decision.update({
      where: {
        Id: existingDecision.Id
      },
      data: {
        Approve: postdata.Approve,
        Rejected: postdata.Rejected,
        Comment: postdata.Comment
      }
    });
  } else {
    update = await db$1.decision.create({
      data: {
        ReportId: postdata.ReportId,
        VendorModelId: cookie.Id,
        Comment: postdata.Comment,
        Approve: postdata.Approve,
        Rejected: postdata.Rejected,
        VendorName: cookie.VendorName,
        Role: "Verifier"
      }
    });
  }
  console.log({
    Decision: "Row created or updated!",
    DecisionId: update.Id
  });
  if (postdata.Approve === "True") {
    const reportUpdate = await db$1.report.update({
      where: {
        Id: postdata.ReportId
      },
      data: {
        Verifier: "Approved"
      }
    });
    const reqrechk = await db$1.requestrecheck.update({
      where: {
        ReportId: postdata.ReportId
      },
      data: {
        AuthCheck: "True",
        VerifierCheck: "True",
        VerifierId: cookie.Id,
        VerifierName: cookie.Username
      }
    });
    const history = await db$1.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: postdata.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.VendorName,
        Comment: postdata.Comment,
        Approve: postdata.Approve,
        Rejected: postdata.Rejected
      }
    });
    console.log({
      reportUpdated: "Report Approved",
      reportId: reportUpdate.Id,
      requestRecheckUpdated: "Report Approved",
      requestRecheckAction: {
        Auth: reqrechk.AuthCheck,
        Verifier: reqrechk.VerifierCheck
      },
      HistoryId: history.Id
    });
    return {
      statusCode: 200,
      statusMessage: "Report Approved",
      reportId: reportUpdate.Id
    };
  } else {
    const reportUpdate = await db$1.report.update({
      where: {
        Id: postdata.ReportId
      },
      data: {
        Verifier: "Rejected"
      }
    });
    const reqrechk = await db$1.requestrecheck.update({
      where: {
        ReportId: postdata.ReportId
      },
      data: {
        AuthCheck: "False",
        VerifierCheck: "False",
        VerifierId: cookie.Id,
        VerifierName: cookie.Username
      }
    });
    const history = await db$1.history.create({
      data: {
        DecisionId: update.Id,
        ReportId: postdata.ReportId,
        VendorModelId: cookie.Id,
        VendorName: cookie.VendorName,
        Comment: postdata.Comment,
        Approve: postdata.Approve,
        Rejected: postdata.Rejected
      }
    });
    console.log({
      reportUpdated: "Report Rejected",
      reportId: reportUpdate.Id,
      requestRecheckUpdated: "Report Rejected",
      requestRecheckAction: {
        Auth: reqrechk.AuthCheck,
        Verifier: reqrechk.VerifierCheck
      },
      HistoryId: history.Id
    });
    return {
      statusCode: 200,
      statusMessage: "Report Rejected",
      reportId: reportUpdate.Id
    };
  }
});

const newApi$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: newApi
});

const prisma$8 = new PrismaClient();
const admin_to_verfier_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const decision = await prisma$8.decision.findMany({
      where: {
        AND: [
          { VendorModelId: postdata.VendorModelId },
          { Role: postdata.Role }
        ]
      }
    });
    const adminrejected = await prisma$8.decision.findMany({
      where: {
        AND: [
          { ReportId: postdata.ReportId },
          { Rejected: true },
          { Role: "Admin" }
        ]
      }
    });
    return { decision, adminrejected };
  } catch (error) {
    return error;
  }
});

const admin_to_verfier_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: admin_to_verfier_post
});

const prisma$7 = new PrismaClient();
const fetch_report_rejected_verfier_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const decision = await prisma$7.decision.findMany({
      where: {
        AND: [
          { VendorModelId: postdata.AuthoriserId }
        ]
      }
    });
    const findreport = await prisma$7.decision.findMany({
      where: {
        AND: [
          { ReportId: postdata.ReportId },
          { Role: "Verifier" },
          { Rejected: true }
        ]
      }
    });
    return { decision, findreport };
  } catch (error) {
    return error;
  }
});

const fetch_report_rejected_verfier_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: fetch_report_rejected_verfier_post
});

const prisma$6 = new PrismaClient();
const rejected_Api_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const decision = await prisma$6.decision.findMany({
      where: {
        VendorModelId: postdata.VendorModelId,
        Role: postdata.Role
      },
      select: {
        ReportId: true
      }
    });
    const reportIds = decision.map((decision2) => decision2.ReportId);
    const verfierrejected = await prisma$6.decision.findMany({
      where: {
        ReportId: {
          in: reportIds
        },
        Role: "verifier",
        Rejected: "True"
      },
      select: {
        ReportId: true
      }
    });
    const id = verfierrejected.map((decision2) => decision2.ReportId);
    const verfierrejectedfromreport = await prisma$6.report.findMany({
      where: {
        Id: {
          in: id
        },
        select: {
          Id: true
        }
      }
    });
    return verfierrejectedfromreport;
  } catch (error) {
    return error;
  }
});

const rejected_Api_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: rejected_Api_post
});

const prisma$5 = new PrismaClient();
const rejetctedby_Verifier_post = defineEventHandler(async (event) => {
  const cookie = JSON.parse(getCookie(event, "user"));
  await readBody(event);
  try {
    const decision = await prisma$5.decision.findMany({
      where: {
        VendorModelId: cookie.VendorModelId,
        Role: cookie.Role
      },
      select: {
        ReportId: true
      }
    });
    const Id = decision.map((decision2) => decision2.ReportId);
    const verfierrejected = await prisma$5.decision.findMany({
      where: {
        ReportId: {
          in: Id
        },
        Verifier: "Rejected"
      }
    });
    return verfierrejected;
  } catch (error) {
    return error;
  }
});

const rejetctedby_Verifier_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: rejetctedby_Verifier_post
});

const prisma$4 = new PrismaClient();
const verifier_to_authoriser_Api_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const decision = await prisma$4.decision.findMany({
      where: {
        VendorModelId: postdata.VendorModelId,
        Role: postdata.Role
      },
      select: {
        ReportId: true
      }
    });
    const reportIds = decision.map((decision2) => decision2.ReportId);
    const verfierrejected = await prisma$4.decision.findMany({
      where: {
        ReportId: {
          in: reportIds
        },
        Role: "verifier",
        Rejected: "True"
      },
      select: {
        VendorModelId: true,
        ReportId: true
      }
    });
    const verifierIds = verfierrejected.map((decision2) => decision2.VendorModelId);
    const ReportIds = verfierrejected.map((decision2) => decision2.ReportId);
    return { verifierIds, ReportIds };
  } catch (error) {
    return error;
  }
});

const verifier_to_authoriser_Api_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: verifier_to_authoriser_Api_post
});

const addReport = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  const cookie = JSON.parse(getCookie(event, "user"));
  await db$1.report.create({
    data: {
      Vendorname: postdata.Vendorname,
      VendorGSTnumber: postdata.GSTnumber,
      Paymenttype: postdata.Paymenttype,
      Particular: postdata.Particular,
      Basicamount: postdata.Basicamount,
      GSTamount: postdata.GSTamount,
      TDS: postdata.TDSamount,
      Total: postdata.Totalamount,
      AdvancePayment: postdata.Advanceamount,
      PaymentAmount: postdata.Paymentamount,
      Location: postdata.Location,
      BranchName: postdata.BranchName,
      BranchLocation: postdata.BranchLocation,
      VendorModelId: cookie.Id
    }
  }).then(async (user2) => {
    const userId = user2.Id;
    await db$1.billNumber.create({
      data: {
        ReportId: userId
      }
    });
    await db$1.requestrecheck.create({
      data: {
        ReportId: user2.Id,
        UserId: cookie.Id,
        UserName: cookie.Username,
        UserCheck: "True"
      }
    });
  }).catch(async (err) => {
    return await err;
  });
  return { message: "Report Created Successfully" };
});

const addReport$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: addReport
});

const prisma$3 = new PrismaClient();
const report_delete = defineEventHandler(async (event) => {
  try {
    const postData = await readBody(event);
    let report = null;
    report = await prisma$3.report.delete({
      where: {
        Id: postData.Id
      }
    });
    return report;
  } catch (error) {
    return error;
  }
});

const report_delete$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: report_delete
});

const prisma$2 = new PrismaClient();
const report_get = defineEventHandler(async () => {
  try {
    const report = await prisma$2.report.findMany({
      include: {
        BillNumber: true
      }
    });
    return report;
  } catch (error) {
    return error;
  }
});

const report_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: report_get
});

const report_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  const get = getCookie(event, "user") || "";
  const cookie = JSON.parse(get);
  const report = await db$1.report.create({
    data: {
      Vendorname: postdata.Vendorname,
      VendorGSTnumber: postdata.GSTnumber,
      Paymenttype: postdata.Paymenttype,
      Basicamount: postdata.Basicamount,
      GSTamount: postdata.GSTamount,
      TDS: postdata.TDSamount,
      Total: postdata.Totalamount,
      AdvancePayment: postdata.Advanceamount,
      PaymentAmount: postdata.Paymentamount,
      Location: postdata.Location,
      BranchName: postdata.BranchName,
      BranchLocation: postdata.BranchLocation,
      VendorModelId: cookie.Id
    }
  }).then(async (report2) => {
    await db$1.billNumber.create({
      data: {
        ReportId: report2.Id
      }
    });
    await db$1.requestrecheck.create({
      data: {
        ReportId: report2.Id,
        UserId: cookie.Id,
        UserName: cookie.Username,
        UserCheck: "True"
      }
    });
    return {
      statusCode: 200,
      statusMessage: "Report Created Successfully!"
    };
  }).catch(async (err) => {
    throw await err;
  });
  return report;
});

const report_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: report_post
});

const report_put = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  const report = await db$1.report.update({
    where: {
      Id: postdata.Id
    },
    data: {
      Vendorname: postdata.Vendorname,
      VendorGSTnumber: postdata.VendorGSTnumber,
      Paymenttype: postdata.Paymenttype,
      Basicamount: postdata.Basicamount,
      GSTamount: postdata.GSTamount,
      TDS: postdata.TDS,
      Total: postdata.Total,
      AdvancePayment: postdata.AdvancePayment,
      PaymentAmount: postdata.PaymentAmount,
      Location: postdata.Location,
      BranchName: postdata.BranchName,
      BranchLocation: postdata.BranchLocation
    }
  }).then(async (report2) => {
    return {
      statusCode: 200,
      statusMessage: "Report Updated Successfully!"
    };
  }).catch(async (err) => {
    throw await err;
  });
  return report;
});

const report_put$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: report_put
});

const prisma$1 = new PrismaClient();
const reportcreated_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const report2 = await prisma$1.report.create({
      data: {
        Vendorname: postdata.Vendorname,
        VendorGSTnumber: postdata.VendorGSTnumber,
        Paymenttype: postdata.Paymenttype,
        Particular: postdata.Particular,
        Basicamount: postdata.Basicamount,
        GSTamount: postdata.GSTamount,
        TDS: postdata.TDS,
        Total: postdata.Total,
        AdvancePayment: postdata.AdvancePayment,
        PaymentAmount: postdata.PaymentAmount,
        Location: postdata.Location,
        Verifier: postdata.Verifier,
        Authoriser: postdata.Authoriser,
        Admin: postdata.Admin,
        GSTstatus: postdata.GSTstatus,
        status: postdata.status,
        BranchName: postdata.BranchName,
        BranchLocation: postdata.BranchLocation
      }
    });
    return report2;
  } catch (error) {
    return "" + error;
  }
});

const reportcreated_post$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: reportcreated_post
});

const signout = defineEventHandler(async (event) => {
  var _a;
  try {
    const token = (_a = event.node.req.headers.cookie) == null ? void 0 : _a.split(";").map((cookie) => cookie.trim()).find((cookie) => cookie.startsWith("token="));
    if (token) {
      try {
        setCookie(event, "token", "", { expires: /* @__PURE__ */ new Date(0) });
        setCookie(event, "user", "", { expires: /* @__PURE__ */ new Date(0) });
        return { message: "User signed out successfully." };
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  } catch (error) {
    return error;
  }
});

const signout$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: signout
});

const prisma = new PrismaClient();
const Getreport_to_admin_get = defineEventHandler(async (event) => {
  event.node.req;
  try {
    const decision = await prisma.decision.findMany({
      where: {
        Role: "Authoriser",
        Approve: "True"
      }
    });
    const Id = decision.map((decision2) => decision2.ReportId);
    const findreport = await prisma.report.findMany({
      where: {
        Id: {
          in: Id
        },
        Verifier: "Approved",
        Admin: "Pending"
      }
    });
    return findreport;
  } catch (error) {
    return error;
  }
});

const Getreport_to_admin_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Getreport_to_admin_get
});

const Getreport_to_verfier_get = defineEventHandler(async (event) => {
  const getReport = await db$1.requestrecheck.findMany({
    where: {
      VerifierId: null,
      AuthCheck: "True"
    }
  }).then(async (reports) => {
    const sortedReports = reports.map((report) => report.ReportId);
    const allReports = await db$1.report.findMany({
      where: {
        Id: {
          in: sortedReports
        }
      },
      include: {
        BillNumber: true
      }
    });
    return allReports;
  });
  return getReport;
});

const Getreport_to_verfier_get$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: Getreport_to_verfier_get
});

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getServerEntry = () => import('file://C:/Users/dell/Desktop/sample%20copy-%20updated%2015-07-2022/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}"></${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      },
      data: {},
      state: {}
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.js(\?.*)?$/;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError("Cannot directly render error page!");
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false || (false),
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch((error) => {
    throw !ssrError && ssrContext.payload?.error || error;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext });
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = "";
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null,
      NO_SCRIPTS ? null : _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [_rendered.html],
    bodyAppend: normalizeChunks([
      NO_SCRIPTS ? void 0 : renderPayloadScript({ ssrContext, data: ssrContext.payload }),
      routeOptions.experimentalNoScripts ? void 0 : _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts
    ])
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: `export default ${devalue(splitPayload(ssrContext).payload)}`,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "text/javascript;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadScript(opts) {
  opts.data.config = opts.ssrContext.config;
  return `<script>window.__NUXT__=${devalue(opts.data)}<\/script>`;
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: renderer
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _virtual__headStatic
});
//# sourceMappingURL=index.mjs.map
