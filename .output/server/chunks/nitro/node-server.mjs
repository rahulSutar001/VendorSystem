globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

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
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
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

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

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
    stack: "",
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
    const { template } = await import('../error-500.mjs');
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

const assets = {
  "/_nuxt/480px-V_logo.32442489.png": {
    "type": "image/png",
    "etag": "\"3306-R33/euIQKyhti2tlkDcLl+d3rUc\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 13062,
    "path": "../public/_nuxt/480px-V_logo.32442489.png"
  },
  "/_nuxt/480px-V_logo.bee34205.js": {
    "type": "application/javascript",
    "etag": "\"5f2-SNZoel18IMuT7Nt8XTi7HBJHBhY\"",
    "mtime": "2023-07-14T13:47:38.118Z",
    "size": 1522,
    "path": "../public/_nuxt/480px-V_logo.bee34205.js"
  },
  "/_nuxt/AdminDPage.32d65749.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b7-/3mN5LbzwZiwRRv1J1orFJv3Ufk\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 439,
    "path": "../public/_nuxt/AdminDPage.32d65749.css"
  },
  "/_nuxt/AdminDPage.a5157355.js": {
    "type": "application/javascript",
    "etag": "\"2399-vT0fG0s1sLbfWOV5GgdCj4UG6/U\"",
    "mtime": "2023-07-14T13:47:38.129Z",
    "size": 9113,
    "path": "../public/_nuxt/AdminDPage.a5157355.js"
  },
  "/_nuxt/adminlayout.8f2693e7.js": {
    "type": "application/javascript",
    "etag": "\"23c3-cIoH+62Zgjhg2N8MY5yLy+kRMqs\"",
    "mtime": "2023-07-14T13:47:38.122Z",
    "size": 9155,
    "path": "../public/_nuxt/adminlayout.8f2693e7.js"
  },
  "/_nuxt/Admin_AddBranch.5a1aad72.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b7-PxciILiBoevTrlungL2ZS6wmYsM\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 183,
    "path": "../public/_nuxt/Admin_AddBranch.5a1aad72.css"
  },
  "/_nuxt/Admin_AddBranch.76a3101c.js": {
    "type": "application/javascript",
    "etag": "\"865-O2ER4VX4IdRcjJMTY5yICE+ONLM\"",
    "mtime": "2023-07-14T13:47:38.122Z",
    "size": 2149,
    "path": "../public/_nuxt/Admin_AddBranch.76a3101c.js"
  },
  "/_nuxt/Admin_AddCategory.06bba5b4.js": {
    "type": "application/javascript",
    "etag": "\"934-zAn29EyhdJEkGThGo9s3vvO7qhU\"",
    "mtime": "2023-07-14T13:47:38.129Z",
    "size": 2356,
    "path": "../public/_nuxt/Admin_AddCategory.06bba5b4.js"
  },
  "/_nuxt/Admin_AddCategory.a859bf1f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8f-dCjr3nuWzDilUo58KHsSEY1H7Dw\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 143,
    "path": "../public/_nuxt/Admin_AddCategory.a859bf1f.css"
  },
  "/_nuxt/Admin_ApproveReports.28db7c3e.js": {
    "type": "application/javascript",
    "etag": "\"1eb7-IbrkjRRo/wzuiohL3RSLVX9NcLU\"",
    "mtime": "2023-07-14T13:47:38.125Z",
    "size": 7863,
    "path": "../public/_nuxt/Admin_ApproveReports.28db7c3e.js"
  },
  "/_nuxt/Admin_ApproveReports.31f6a67b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b7-jlPMEIkkWU0u/oWSSMuDIMgIKIg\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 439,
    "path": "../public/_nuxt/Admin_ApproveReports.31f6a67b.css"
  },
  "/_nuxt/Admin_CreateVendor.4dc54034.js": {
    "type": "application/javascript",
    "etag": "\"2700-+o3H0sH5bh5uuU9tJXF6eSnIDjE\"",
    "mtime": "2023-07-14T13:47:38.131Z",
    "size": 9984,
    "path": "../public/_nuxt/Admin_CreateVendor.4dc54034.js"
  },
  "/_nuxt/Admin_CreateVendor.6f08e0e2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"106-PEavXQ+oKWnNUT16JJNlgJo+7IM\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 262,
    "path": "../public/_nuxt/Admin_CreateVendor.6f08e0e2.css"
  },
  "/_nuxt/Admin_dashboard.2f1679cd.js": {
    "type": "application/javascript",
    "etag": "\"bef-jfezEaPS5unidX+ts0V27r+lri4\"",
    "mtime": "2023-07-14T13:47:38.122Z",
    "size": 3055,
    "path": "../public/_nuxt/Admin_dashboard.2f1679cd.js"
  },
  "/_nuxt/Admin_RejectedReports.7c67c1ec.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b7-a2EbhtPIHjXVIBhAjrf7cnNYfVI\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 439,
    "path": "../public/_nuxt/Admin_RejectedReports.7c67c1ec.css"
  },
  "/_nuxt/Admin_RejectedReports.b545b169.js": {
    "type": "application/javascript",
    "etag": "\"1f0c-8MWThkWD7XMNPtVtFvJ1W+zBW5Y\"",
    "mtime": "2023-07-14T13:47:38.130Z",
    "size": 7948,
    "path": "../public/_nuxt/Admin_RejectedReports.b545b169.js"
  },
  "/_nuxt/approvedreport.3579e72e.png": {
    "type": "image/png",
    "etag": "\"13ec8-XzczxRFEVguuT/nk1jPvQUFnNuM\"",
    "mtime": "2023-07-14T13:47:38.105Z",
    "size": 81608,
    "path": "../public/_nuxt/approvedreport.3579e72e.png"
  },
  "/_nuxt/authoriselayout.84314b20.js": {
    "type": "application/javascript",
    "etag": "\"19e6-HM+pMrzJCrIuAw5N3uQzREi3zVk\"",
    "mtime": "2023-07-14T13:47:38.122Z",
    "size": 6630,
    "path": "../public/_nuxt/authoriselayout.84314b20.js"
  },
  "/_nuxt/AuthoriserDPage.92ba48fd.js": {
    "type": "application/javascript",
    "etag": "\"229d-KXEASZg/krhe4EHIqNADLi/ZCoI\"",
    "mtime": "2023-07-14T13:47:38.130Z",
    "size": 8861,
    "path": "../public/_nuxt/AuthoriserDPage.92ba48fd.js"
  },
  "/_nuxt/AuthoriserDPage.bb5b987e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12f-dOQGoGLClvmCeps+EUr4iIroMao\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 303,
    "path": "../public/_nuxt/AuthoriserDPage.bb5b987e.css"
  },
  "/_nuxt/Authoriser_AR.3dfe213a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b7-FVYtzdjpFflRF8Md9y4HfiSXTus\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 439,
    "path": "../public/_nuxt/Authoriser_AR.3dfe213a.css"
  },
  "/_nuxt/Authoriser_AR.dcffdaf1.js": {
    "type": "application/javascript",
    "etag": "\"1fca-CWx/f1Hw5XejTS381O1vrbUUL44\"",
    "mtime": "2023-07-14T13:47:38.129Z",
    "size": 8138,
    "path": "../public/_nuxt/Authoriser_AR.dcffdaf1.js"
  },
  "/_nuxt/Authoriser_dashboard.6db89ef7.js": {
    "type": "application/javascript",
    "etag": "\"182a-wrfmjWPBlMolkdJEn8lKl5kvwsQ\"",
    "mtime": "2023-07-14T13:47:38.129Z",
    "size": 6186,
    "path": "../public/_nuxt/Authoriser_dashboard.6db89ef7.js"
  },
  "/_nuxt/Authoriser_dashboard.b221423c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"27c-8Hx/+3b2eZBm/t2+KmFSNcQT1CI\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 636,
    "path": "../public/_nuxt/Authoriser_dashboard.b221423c.css"
  },
  "/_nuxt/Authoriser_RejectedReports.9389b9af.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b7-c3D2kx2mqIZc/iAwBpqgs1kEocE\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 439,
    "path": "../public/_nuxt/Authoriser_RejectedReports.9389b9af.css"
  },
  "/_nuxt/Authoriser_RejectedReports.e5ae5758.js": {
    "type": "application/javascript",
    "etag": "\"2022-ctymiTx2u209vxdSwu+CNONYW8A\"",
    "mtime": "2023-07-14T13:47:38.129Z",
    "size": 8226,
    "path": "../public/_nuxt/Authoriser_RejectedReports.e5ae5758.js"
  },
  "/_nuxt/Authoriser_RequestRecheck.86251924.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"187-84Nvy2isi8CQF2Mq52gEQyXuX4k\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 391,
    "path": "../public/_nuxt/Authoriser_RequestRecheck.86251924.css"
  },
  "/_nuxt/Authoriser_RequestRecheck.c8ff133d.js": {
    "type": "application/javascript",
    "etag": "\"245b-p6CmN3VrNTvco6WOAWORFP/2toY\"",
    "mtime": "2023-07-14T13:47:38.129Z",
    "size": 9307,
    "path": "../public/_nuxt/Authoriser_RequestRecheck.c8ff133d.js"
  },
  "/_nuxt/custome.700577e2.js": {
    "type": "application/javascript",
    "etag": "\"11a-pNmOaXarBh5DgQJNjfuhdfJLeQs\"",
    "mtime": "2023-07-14T13:47:38.116Z",
    "size": 282,
    "path": "../public/_nuxt/custome.700577e2.js"
  },
  "/_nuxt/default.1f712b9b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10b-j69l1q9pg4+C3RDSjh9rkjqlhQc\"",
    "mtime": "2023-07-14T13:47:38.109Z",
    "size": 267,
    "path": "../public/_nuxt/default.1f712b9b.css"
  },
  "/_nuxt/default.a6dacc3e.js": {
    "type": "application/javascript",
    "etag": "\"992-JxnOKBw9PtaVR4t8xvp70K+cS9A\"",
    "mtime": "2023-07-14T13:47:38.122Z",
    "size": 2450,
    "path": "../public/_nuxt/default.a6dacc3e.js"
  },
  "/_nuxt/deleteuser1.3dc4e355.png": {
    "type": "image/png",
    "etag": "\"32b9-Ut53xAQYlLlKyB9A1Q8FG1Z1n+c\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 12985,
    "path": "../public/_nuxt/deleteuser1.3dc4e355.png"
  },
  "/_nuxt/deleteVendor.9a899169.js": {
    "type": "application/javascript",
    "etag": "\"29ea-lZ+fnhcKZEYC5nwc9Sy7n9xtWwE\"",
    "mtime": "2023-07-14T13:47:38.124Z",
    "size": 10730,
    "path": "../public/_nuxt/deleteVendor.9a899169.js"
  },
  "/_nuxt/deleteVendor.ce143618.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9b-I26fpyYkONoYpUcuhJwYjoKQGpc\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 155,
    "path": "../public/_nuxt/deleteVendor.ce143618.css"
  },
  "/_nuxt/display.b53c3d4a.js": {
    "type": "application/javascript",
    "etag": "\"108-7UExe6sX+1ZOwMTnZRXohjhihWI\"",
    "mtime": "2023-07-14T13:47:38.123Z",
    "size": 264,
    "path": "../public/_nuxt/display.b53c3d4a.js"
  },
  "/_nuxt/entry.46d920da.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a205-UVxL5o0TKxpDK4+W2HAQXadEyLQ\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 107013,
    "path": "../public/_nuxt/entry.46d920da.css"
  },
  "/_nuxt/entry.7a987982.js": {
    "type": "application/javascript",
    "etag": "\"36f44-iYTDipUuR+9Kh2CaU4ohbPp6ExE\"",
    "mtime": "2023-07-14T13:47:38.135Z",
    "size": 225092,
    "path": "../public/_nuxt/entry.7a987982.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.afb24c86.js": {
    "type": "application/javascript",
    "etag": "\"1998-O06ODKPCy/Zm+3E9tILQaaat80E\"",
    "mtime": "2023-07-14T13:47:38.122Z",
    "size": 6552,
    "path": "../public/_nuxt/error-404.afb24c86.js"
  },
  "/_nuxt/error-500.85e3ada3.js": {
    "type": "application/javascript",
    "etag": "\"78b-XD3+ihuayKc8pD9eCCrRCC17exY\"",
    "mtime": "2023-07-14T13:47:38.130Z",
    "size": 1931,
    "path": "../public/_nuxt/error-500.85e3ada3.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.3df85c13.js": {
    "type": "application/javascript",
    "etag": "\"4b2-/33VSPsCudx2pnlGoSij9K8ITJU\"",
    "mtime": "2023-07-14T13:47:38.122Z",
    "size": 1202,
    "path": "../public/_nuxt/error-component.3df85c13.js"
  },
  "/_nuxt/index.04fc6098.js": {
    "type": "application/javascript",
    "etag": "\"95a-c9r2MSrOHUVf/5ZiERaWDiDL7Mc\"",
    "mtime": "2023-07-14T13:47:38.130Z",
    "size": 2394,
    "path": "../public/_nuxt/index.04fc6098.js"
  },
  "/_nuxt/index.27b0e23d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"55-7U2cuefSQ3eM4lK9G4KqFZKxMwE\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 85,
    "path": "../public/_nuxt/index.27b0e23d.css"
  },
  "/_nuxt/index.38b26a9b.js": {
    "type": "application/javascript",
    "etag": "\"4635-BPjGAC+qf93RyG1fti53hcqSSYE\"",
    "mtime": "2023-07-14T13:47:38.122Z",
    "size": 17973,
    "path": "../public/_nuxt/index.38b26a9b.js"
  },
  "/_nuxt/next-img-removebg-preview.08feb811.js": {
    "type": "application/javascript",
    "etag": "\"d1-IcidPE+aKTB6LQYdoDHV90Gfkbc\"",
    "mtime": "2023-07-14T13:47:38.117Z",
    "size": 209,
    "path": "../public/_nuxt/next-img-removebg-preview.08feb811.js"
  },
  "/_nuxt/next-img-removebg-preview.eae4400e.png": {
    "type": "image/png",
    "etag": "\"ef72-pSfK8dTolTzmkDcrNlH/5zuFYlU\"",
    "mtime": "2023-07-14T13:47:38.105Z",
    "size": 61298,
    "path": "../public/_nuxt/next-img-removebg-preview.eae4400e.png"
  },
  "/_nuxt/prev-img-removebg-preview.1893d400.png": {
    "type": "image/png",
    "etag": "\"e109-qbiccg0d035/A9wPXWah6iO5js4\"",
    "mtime": "2023-07-14T13:47:38.099Z",
    "size": 57609,
    "path": "../public/_nuxt/prev-img-removebg-preview.1893d400.png"
  },
  "/_nuxt/rejectedreports.31cb614a.js": {
    "type": "application/javascript",
    "etag": "\"bc-2QHpt3bISwbZGwVE+CPdGEIknpM\"",
    "mtime": "2023-07-14T13:47:38.121Z",
    "size": 188,
    "path": "../public/_nuxt/rejectedreports.31cb614a.js"
  },
  "/_nuxt/rejectedreports.3e77eb47.png": {
    "type": "image/png",
    "etag": "\"6e4b-XGu/tkQklE+c0taMCem1y3A74Ts\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 28235,
    "path": "../public/_nuxt/rejectedreports.3e77eb47.png"
  },
  "/_nuxt/reqrecheck.0accfa23.jpeg": {
    "type": "image/jpeg",
    "etag": "\"d280-r+OOMjPIdCCkPfqVqmn0bnCuDYQ\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 53888,
    "path": "../public/_nuxt/reqrecheck.0accfa23.jpeg"
  },
  "/_nuxt/reqrecheck.f086d5a6.js": {
    "type": "application/javascript",
    "etag": "\"70-pT5IHKv2NLXRi7JToDUA0+h1a+w\"",
    "mtime": "2023-07-14T13:47:38.122Z",
    "size": 112,
    "path": "../public/_nuxt/reqrecheck.f086d5a6.js"
  },
  "/_nuxt/Requestrecheck.cb316c84.js": {
    "type": "application/javascript",
    "etag": "\"6ba-YtXuRsVm6Wk8xLua6dwtn76ObBI\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 1722,
    "path": "../public/_nuxt/Requestrecheck.cb316c84.js"
  },
  "/_nuxt/SuperAdminD.d92a8118.js": {
    "type": "application/javascript",
    "etag": "\"bce-YaAtdiIkKFYCbI7A9OXaYkNXZxg\"",
    "mtime": "2023-07-14T13:47:38.121Z",
    "size": 3022,
    "path": "../public/_nuxt/SuperAdminD.d92a8118.js"
  },
  "/_nuxt/User3.0ad3e873.js": {
    "type": "application/javascript",
    "etag": "\"128e-XNEIEZzIMQwK7YrHeX2Fl9Fnrxs\"",
    "mtime": "2023-07-14T13:47:38.122Z",
    "size": 4750,
    "path": "../public/_nuxt/User3.0ad3e873.js"
  },
  "/_nuxt/User3.65a876bc.jpeg": {
    "type": "image/jpeg",
    "etag": "\"14d8-WXHykYPeWzfOrbQH98W3j64mjZI\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 5336,
    "path": "../public/_nuxt/User3.65a876bc.jpeg"
  },
  "/_nuxt/userlayout.4856745d.js": {
    "type": "application/javascript",
    "etag": "\"1ca6-canD0ktlTeE7WSLwK+nd50aM+x0\"",
    "mtime": "2023-07-14T13:47:38.131Z",
    "size": 7334,
    "path": "../public/_nuxt/userlayout.4856745d.js"
  },
  "/_nuxt/userlayout.a19810cb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2aa-uIjeh3d7nsrWDkJdXkMLNyh7JEk\"",
    "mtime": "2023-07-14T13:47:38.116Z",
    "size": 682,
    "path": "../public/_nuxt/userlayout.a19810cb.css"
  },
  "/_nuxt/User_ApprovedReports.3f4e3979.js": {
    "type": "application/javascript",
    "etag": "\"1fac-2r1Qykg6D5tz7KNG+Lhw5UM+H3U\"",
    "mtime": "2023-07-14T13:47:38.122Z",
    "size": 8108,
    "path": "../public/_nuxt/User_ApprovedReports.3f4e3979.js"
  },
  "/_nuxt/User_ApprovedReports.533c1b5b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b7-+vpnbjb8w+qS/G/DN3s/wnWAmg0\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 439,
    "path": "../public/_nuxt/User_ApprovedReports.533c1b5b.css"
  },
  "/_nuxt/User_createReport.35a124aa.js": {
    "type": "application/javascript",
    "etag": "\"1a60-23fnFroupYSwgHUzprBxhdU4eAM\"",
    "mtime": "2023-07-14T13:47:38.123Z",
    "size": 6752,
    "path": "../public/_nuxt/User_createReport.35a124aa.js"
  },
  "/_nuxt/User_createReport.b1b9667e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"50-8vt3AePaiVY/gf3GqiGg0QNo3aQ\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 80,
    "path": "../public/_nuxt/User_createReport.b1b9667e.css"
  },
  "/_nuxt/User_DPage.23c7251d.js": {
    "type": "application/javascript",
    "etag": "\"2303-LvOY6pilUhNrXN+tpyEXWeZPMwo\"",
    "mtime": "2023-07-14T13:47:38.129Z",
    "size": 8963,
    "path": "../public/_nuxt/User_DPage.23c7251d.js"
  },
  "/_nuxt/User_DPage.7ffefdcd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b7-2+0wZu/vqjWpbXaqKQyKhXJtm0Q\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 439,
    "path": "../public/_nuxt/User_DPage.7ffefdcd.css"
  },
  "/_nuxt/User_RejectedReports.9ab4c637.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"208-9BvaAI0/BfjNXEBqRCBcWKzCr+k\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 520,
    "path": "../public/_nuxt/User_RejectedReports.9ab4c637.css"
  },
  "/_nuxt/User_RejectedReports.a13168b3.js": {
    "type": "application/javascript",
    "etag": "\"1fa8-DUqYObkUY7bkoZOSOav6yxlHlxQ\"",
    "mtime": "2023-07-14T13:47:38.123Z",
    "size": 8104,
    "path": "../public/_nuxt/User_RejectedReports.a13168b3.js"
  },
  "/_nuxt/User_RequestRecheck.91c73642.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"326-2gaETobfg+6NvwaXnWW0HKTbxuQ\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 806,
    "path": "../public/_nuxt/User_RequestRecheck.91c73642.css"
  },
  "/_nuxt/User_RequestRecheck.f16af5ed.js": {
    "type": "application/javascript",
    "etag": "\"3da5-ZZbhY1XcYTjLgQQ+rhBTHxR89V0\"",
    "mtime": "2023-07-14T13:47:38.131Z",
    "size": 15781,
    "path": "../public/_nuxt/User_RequestRecheck.f16af5ed.js"
  },
  "/_nuxt/vendorType.579bfae2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"1e28-PNUkvJ9lsJEXac1MEmhQRp32ZvE\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 7720,
    "path": "../public/_nuxt/vendorType.579bfae2.jpeg"
  },
  "/_nuxt/VerifierApproveReport.95b17edc.js": {
    "type": "application/javascript",
    "etag": "\"2094-IWfZQ3XXfYLNuBUgvw4HBN8mKTw\"",
    "mtime": "2023-07-14T13:47:38.129Z",
    "size": 8340,
    "path": "../public/_nuxt/VerifierApproveReport.95b17edc.js"
  },
  "/_nuxt/VerifierApproveReport.d1c9677e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b7-9eXghtan1NKMl3I59vsYt25+Wzs\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 439,
    "path": "../public/_nuxt/VerifierApproveReport.d1c9677e.css"
  },
  "/_nuxt/VerifierDPage.299ca83b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ac-NyZnwbQQt1kvPEGu/XwntTx1zNA\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 428,
    "path": "../public/_nuxt/VerifierDPage.299ca83b.css"
  },
  "/_nuxt/VerifierDPage.d83cba39.js": {
    "type": "application/javascript",
    "etag": "\"2468-ARUnB/nqLTBlSQHFm1oAunFBg40\"",
    "mtime": "2023-07-14T13:47:38.131Z",
    "size": 9320,
    "path": "../public/_nuxt/VerifierDPage.d83cba39.js"
  },
  "/_nuxt/verifierlayout.32e8ef93.js": {
    "type": "application/javascript",
    "etag": "\"19ce-MN27vJaNIIRGftFnBP0exu30mGY\"",
    "mtime": "2023-07-14T13:47:38.125Z",
    "size": 6606,
    "path": "../public/_nuxt/verifierlayout.32e8ef93.js"
  },
  "/_nuxt/verifierlayout.8f5e594e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2a5-LqWkr0rdOxIC0z5fbFBg/W+7u2A\"",
    "mtime": "2023-07-14T13:47:38.106Z",
    "size": 677,
    "path": "../public/_nuxt/verifierlayout.8f5e594e.css"
  },
  "/_nuxt/VerifierRejectedReports.e657e7f2.js": {
    "type": "application/javascript",
    "etag": "\"1ffb-JSD6fUdDJL2gC4/NBubLW18IkC8\"",
    "mtime": "2023-07-14T13:47:38.132Z",
    "size": 8187,
    "path": "../public/_nuxt/VerifierRejectedReports.e657e7f2.js"
  },
  "/_nuxt/VerifierRejectedReports.e88c5783.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ac-DYK8StSZxk0jxwBjAfyjC5SF5jI\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 428,
    "path": "../public/_nuxt/VerifierRejectedReports.e88c5783.css"
  },
  "/_nuxt/VerifierRequestRecheck.3dcc0db0.js": {
    "type": "application/javascript",
    "etag": "\"25af-cByJ3tHZ2IxbAjLasON/K5TzYgo\"",
    "mtime": "2023-07-14T13:47:38.131Z",
    "size": 9647,
    "path": "../public/_nuxt/VerifierRequestRecheck.3dcc0db0.js"
  },
  "/_nuxt/VerifierRequestRecheck.b9e78801.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ac-t7Vh5rqYxNlFgaDdyAQaYdaElI0\"",
    "mtime": "2023-07-14T13:47:38.115Z",
    "size": 428,
    "path": "../public/_nuxt/VerifierRequestRecheck.b9e78801.css"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2023-07-14T13:47:38.122Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_pWWaBm = () => import('../jwt.service.mjs');
const _lazy_CErXhz = () => import('../signin.mjs');
const _lazy_MgwXrY = () => import('../signup.post.mjs');
const _lazy_Gcw0zl = () => import('../testToken.mjs');
const _lazy_cGAeBU = () => import('../Getreport_to_Authoriser.get.mjs');
const _lazy_REydDr = () => import('../decision_admin_approved_rejected.post.mjs');
const _lazy_ZBahGV = () => import('../decision_Appovestatus.get.mjs');
const _lazy_gkrRnd = () => import('../decision_Rejectedstatus.get.mjs');
const _lazy_DNL10X = () => import('../decision_user_approve.mjs');
const _lazy_4qOOpr = () => import('../decision_verfier_approved_rejected.post.mjs');
const _lazy_p9dgDX = () => import('../decisionauthoriserapproved.post.mjs');
const _lazy_LmlREE = () => import('../vendor.get.mjs');
const _lazy_2LXduM = () => import('../vendor.post.mjs');
const _lazy_rtEJiZ = () => import('../vendor.put.mjs');
const _lazy_bSlQMO = () => import('../vendordelete.delete.mjs');
const _lazy_HlQEdy = () => import('../fetchreportApproved_User.mjs');
const _lazy_yyLgsA = () => import('../fetchreportauthoriser_approved.mjs');
const _lazy_fDIEK7 = () => import('../fetchreportauthoriser_rejected.mjs');
const _lazy_HxWOPD = () => import('../fetchreportRejected_User.mjs');
const _lazy_0BRRUP = () => import('../fetchreportsforuser.mjs');
const _lazy_XtIsp9 = () => import('../reqrechkforauth.mjs');
const _lazy_046c5w = () => import('../reqrechkforuser.mjs');
const _lazy_77e3r5 = () => import('../reqrechkforverifier.mjs');
const _lazy_iGMXHi = () => import('../findadmin.get.mjs');
const _lazy_qeWeKU = () => import('../findauthoriser.get.mjs');
const _lazy_y4LqJz = () => import('../finduser.get.mjs');
const _lazy_O2Bxqh = () => import('../findVerifier.get.mjs');
const _lazy_OJ88RO = () => import('../branchLocation.delete.mjs');
const _lazy_YU9gBW = () => import('../branchLocation.get.mjs');
const _lazy_x09S3g = () => import('../branchLocation.post.mjs');
const _lazy_OaWcNy = () => import('../branchLocation.put.mjs');
const _lazy_OPFb7P = () => import('../Delete.mjs');
const _lazy_ZRjbc2 = () => import('../findUniq.mjs');
const _lazy_uHNTLN = () => import('../GetNewPerson.mjs');
const _lazy_itDQjK = () => import('../Update.mjs');
const _lazy_iNz4X2 = () => import('../addreport.post.mjs');
const _lazy_ZaNoFa = () => import('../GetAllReports.mjs');
const _lazy_Z0B00I = () => import('../vendor.post2.mjs');
const _lazy_TFEEAE = () => import('../vendorcategeorydata.mjs');
const _lazy_uwcA5H = () => import('../vendorcategoy.delete.mjs');
const _lazy_maVAPS = () => import('../vendorcategoy.get.mjs');
const _lazy_XxrOV4 = () => import('../vendorcategoy.post.mjs');
const _lazy_hu8MPm = () => import('../vendorcategoy.put.mjs');
const _lazy_W7mzCN = () => import('../vendorType.delete.mjs');
const _lazy_yzxM9y = () => import('../vendorType.get.mjs');
const _lazy_KSjB8b = () => import('../vendorType.post.mjs');
const _lazy_wnOjgj = () => import('../vendorType.put.mjs');
const _lazy_1IdYFs = () => import('../newApi.mjs');
const _lazy_kajrCC = () => import('../admin_to_verfier.post.mjs');
const _lazy_7Q770X = () => import('../fetch_report_rejected_verfier.post.mjs');
const _lazy_QWDrBH = () => import('../rejected_Api.post.mjs');
const _lazy_5uxo5p = () => import('../rejetctedby_Verifier.post.mjs');
const _lazy_jZ5zor = () => import('../verifier_to_authoriser_Api.post.mjs');
const _lazy_rGvIwY = () => import('../addReport.mjs');
const _lazy_fC5zw3 = () => import('../report.delete.mjs');
const _lazy_2Qnb9W = () => import('../report.get.mjs');
const _lazy_V6Gs7o = () => import('../report.post.mjs');
const _lazy_yVxDb0 = () => import('../report.put.mjs');
const _lazy_rRoXK3 = () => import('../reportcreated.post.mjs');
const _lazy_7PqmoM = () => import('../signout.mjs');
const _lazy_Fc2Yvo = () => import('../Getreport_to_admin.get.mjs');
const _lazy_xljKLo = () => import('../Getreport_to_verfier.get.mjs');
const _lazy_sCx7iO = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
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
    debug: destr(false),
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

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
