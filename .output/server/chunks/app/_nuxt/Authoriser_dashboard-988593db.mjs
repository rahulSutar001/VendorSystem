import cookie from 'js-cookie';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './480px-V_logo-b0e572ec.mjs';
import { _ as _imports_1, a as _imports_2 } from './rejectedreports-1b3c99d0.mjs';
import { _ as _imports_3 } from './reqrecheck-faa85817.mjs';
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
      ActiveTab: "Home",
      branchandlocation: {},
      data: {},
      value: "",
      show: false
      // dataStore: useDataStore()
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
    togglesidebar() {
      this.show = !this.show;
    }
  },
  mounted() {
    this.data = JSON.parse(cookie.get("user"));
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AuthoriserDashboard = resolveComponent("AuthoriserDashboard");
  const _component_Authoriser_Requestrecheck = resolveComponent("Authoriser_Requestrecheck");
  const _component_Authoriser_ApprovedReports = resolveComponent("Authoriser_ApprovedReports");
  const _component_Authoriser_RejectedReports = resolveComponent("Authoriser_RejectedReports");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "drawer" }, _attrs))}><input id="my-drawer" type="checkbox" class="drawer-toggle"><div class="drawer-content"><div class="bg-slate-100"><div><div class="fixed w-full top-0 z-20"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><div><div class="flex text-white py-2" style="${ssrRenderStyle({ "background-color": "#0400AF" })}"><div class="flex-1"><div class="inline-flex"><span class="bars mt-3 mx-3"><label for="my-drawer" class="drawer-button"><i class="fa fa-bars"></i></label></span><span><img${ssrRenderAttr("src", _imports_0)} class="ml-2 rounded-full logo logo" alt=""></span><p class="mt-3 ml-2 textvenus"><b>Venus Enterprises</b></p></div></div><div class="flex-1 inline-flex text-right justify-end mt-5 mr-2"><p class="mx-2 text-white"><i class="fa fa-user-circle-o mr-3" style="${ssrRenderStyle({ "font-size": "20px" })}"></i> <span class="hideUname">${ssrInterpolate($data.data.Username)}</span></p><div class="dropdown dropdown-end"><label tabindex="0" class="m-1"><i class="fa fa-angle-down"></i></label><ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-200 text-black mt-9 rounded-sm w-32"><li class="showname border-b-2 mr-4">${ssrInterpolate($data.data.Username)}</li><li class=""><i class="fa fa-sign-out" style="${ssrRenderStyle({ "font-size": "16px" })}"><span class="">Log Out</span></i></li></ul></div></div></div></div></div></div><div class="mt-10"><div class="w-16 float-left fixed sidebar_desktop"><div class="grid grid-rows-2 pt-5" style="${ssrRenderStyle({ "background-color": "#0400AF", "height": "96vh" })}"><div class=""><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Home"><i class="fa fa-th text-white" style="${ssrRenderStyle({ "font-size": "18px" })}"></i></button><button class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3" title="Approved Report"><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "19px" })}" alt=""></button><button class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3" title="Rejected Report"><img${ssrRenderAttr("src", _imports_2)} style="${ssrRenderStyle({ "width": "20px" })}" alt=""></button><button class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3" title="Recheck Requested"><span><img${ssrRenderAttr("src", _imports_3)} style="${ssrRenderStyle({ "width": "22px" })}" alt=""></span></button></div><div class="" style="${ssrRenderStyle({ "margin-top": "190px" })}"><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Signout"><i class="fa fa-sign-out text-white" style="${ssrRenderStyle({ "font-size": "18px" })}"></i></button></div></div></div><hr><div class="ml-10 px-10 sidebarmain">`);
  if ($data.ActiveTab === "Home") {
    _push(ssrRenderComponent(_component_AuthoriserDashboard, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.ActiveTab === "RRR") {
    _push(ssrRenderComponent(_component_Authoriser_Requestrecheck, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.ActiveTab === "approvedreports") {
    _push(ssrRenderComponent(_component_Authoriser_ApprovedReports, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($data.ActiveTab === "rejectedreports") {
    _push(ssrRenderComponent(_component_Authoriser_RejectedReports, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div><div class="drawer-side"><label for="my-drawer" class="drawer-overlay"></label><div class="w-3/4 h-full bg-base-200 text-base-content"><div class="flex flex-col pt-5 justify-between" style="${ssrRenderStyle({ "background-color": "#0400AF", "height": "94vh" })}"><div class="flex flex-col space-y-3"><div class="flex items-center"><button class="flex" title="Home"><i class="fa fa-th text-white bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-4" style="${ssrRenderStyle({ "font-size": "18px" })}"></i><p class="text-white mt-5 font-light text-sm">Home</p></button></div><div class="flex items-center"><button class="flex items-center" title="Approved Report"><img class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-4 h-9 w-9"${ssrRenderAttr("src", _imports_1)} alt=""><p class="text-white font-light text-sm">Approved Reports</p></button></div><div class="flex items-center"><button class="flex items-center" title="Rejected Report"><img${ssrRenderAttr("src", _imports_2)} class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-4 h-9 w-9"><p class="text-white font-light text-sm">Rejected Reports</p></button></div><div class="flex items-center"><button class="flex items-center" title="Recheck Requested"><img${ssrRenderAttr("src", _imports_3)} class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-4 h-9 w-9"></button><p class="text-white font-light text-sm">Recheck Requested</p></div></div><div class="mb-11"><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Signout"><i class="fa fa-sign-out text-white" style="${ssrRenderStyle({ "font-size": "18px" })}"></i></button></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Authoriser_dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Authoriser_dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Authoriser_dashboard as default };
//# sourceMappingURL=Authoriser_dashboard-988593db.mjs.map
