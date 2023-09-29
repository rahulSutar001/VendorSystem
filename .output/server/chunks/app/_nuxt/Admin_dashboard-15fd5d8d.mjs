import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_1, a as _imports_2 } from './rejectedreports-1b3c99d0.mjs';
import { _ as _imports_4, a as _imports_5, b as _imports_1$1 } from './User3-6c5dc2d1.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  data() {
    return {
      ActiveTab: "home",
      branchandlocation: {}
    };
  },
  methods: {
    async signoutmethod() {
      await $fetch("api/signoutapi/signout", {
        method: "POST"
      }).then((res) => {
        window.location.href = "/";
      }).catch((err) => {
        console.log(err);
      });
    },
    getDat() {
      let cookie = Cookie.get("user");
      this.data = JSON.parse(cookie);
      this.dataStore.setsahredcookie(data);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SuperAdmin = resolveComponent("SuperAdmin");
  const _component_Create_Vendor = resolveComponent("Create_Vendor");
  const _component_Admin_ApprovedReports = resolveComponent("Admin_ApprovedReports");
  const _component_Admin_RejectedReports = resolveComponent("Admin_RejectedReports");
  const _component_AddBranchLocation = resolveComponent("AddBranchLocation");
  const _component_AddCategory = resolveComponent("AddCategory");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-100" }, _attrs))}><div class="w-16 float-left md:display-none fixed top-14"><div class="grid grid-rows-2" style="${ssrRenderStyle({ "background-color": "#0400AF", "height": "96vh" })}"><div class="mt-2"><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Home"><i class="fa fa-th text-white" style="${ssrRenderStyle({ "font-size": "18px" })}"></i></button><button class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3" title="Approved Report"><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "19px" })}" alt=""></button><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Rejected Report"><img${ssrRenderAttr("src", _imports_2)} style="${ssrRenderStyle({ "width": "23px" })}" alt=""></button><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Add Location Details"><img${ssrRenderAttr("src", _imports_4)} style="${ssrRenderStyle({ "width": "21px" })}" alt=""></button><button class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3" title="Add Vendor Type"><img${ssrRenderAttr("src", _imports_5)} style="${ssrRenderStyle({ "width": "22px" })}" alt=""></button><button class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3" title="Create User"><img${ssrRenderAttr("src", _imports_1$1)} style="${ssrRenderStyle({ "width": "24px" })}" alt=""></button></div><div class="" style="${ssrRenderStyle({ "margin-top": "200px" })}"><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3"><i class="fa fa-sign-out text-white" style="${ssrRenderStyle({ "font-size": "15px" })}"></i></button></div></div></div><hr><br><div class="ml-16 px-10" style="${ssrRenderStyle({ "width": "93vw" })}">`);
  if ($data.ActiveTab === "home") {
    _push(ssrRenderComponent(_component_SuperAdmin, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.ActiveTab === "generateReport") {
    _push(ssrRenderComponent(_component_Create_Vendor, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.ActiveTab === "approvedreports") {
    _push(ssrRenderComponent(_component_Admin_ApprovedReports, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.ActiveTab === "rejectedreports") {
    _push(ssrRenderComponent(_component_Admin_RejectedReports, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.ActiveTab === "addtypeCategory") {
    _push(ssrRenderComponent(_component_AddBranchLocation, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.ActiveTab === "addVendorType") {
    _push(ssrRenderComponent(_component_AddCategory, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin_dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Admin_dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Admin_dashboard as default };
//# sourceMappingURL=Admin_dashboard-15fd5d8d.mjs.map
