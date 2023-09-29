import cookie from 'js-cookie';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
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
      show: false,
      selected: "",
      drpd: false
      // dataStore: useDataStore()
    };
  },
  methods: {
    async signoutmethod() {
      await $fetch("/api/signoutapi/signout", {
        method: "POST"
      }).then((res) => {
        window.location.href = "/";
      }).catch((err) => {
        console.log(err);
      });
    },
    togglesidebar() {
      this.show = !this.show;
    },
    goToPage1() {
      this.$router.push("/AuthoriserDPage");
    },
    goTopage2() {
      this.$router.push("/Authoriser_AR");
    },
    goToPage3() {
      this.$router.push("/Authoriser_RejectedReports");
    },
    goTopage4() {
      this.$router.push("/Authoriser_RequestRecheck");
    }
  },
  mounted() {
    this.data = JSON.parse(cookie.get("user"));
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "drawer" }, _attrs))}><input id="my-drawer" type="checkbox" class="drawer-toggle"><div class="drawer-content"><div class="bg-slate-100"><div><div class="fixed w-full top-0 z-20"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><div><div class="flex text-white py-2 bg-blue-500" style="${ssrRenderStyle({})}"><div class="flex-1"><div class="inline-flex"><span class="bars mt-3 mx-3"><label for="my-drawer" class="drawer-button"><i class="fa fa-bars"></i></label></span><span><img${ssrRenderAttr("src", _imports_0)} class="ml-2 rounded-full logo logo" alt=""></span><p class="mt-3 ml-2 textvenus"><b>Venus Enterprises</b></p></div></div><div class="flex-1 inline-flex text-right justify-end mt-5 mr-2"><p class="mx-2 text-white"><i class="fa fa-user-circle-o mr-3" style="${ssrRenderStyle({ "font-size": "20px" })}"></i> <span class="hideUname">${ssrInterpolate($data.data.Username)}</span><span><label tabindex="0" class="mx-2"><i class="fa fa-angle-down"></i></label></span></p><div class="cursor-pointer absolute" style="${ssrRenderStyle(($data.drpd ? "drpd" : "") ? null : { display: "none" })}"><ul tabindex="0" class="py-3 px-2 shadow-xl bg-base-200 text-black mt-9 rounded-sm w-32"><li class="showname border-b-2 mr-4">${ssrInterpolate($data.data.Username)}</li><li class="cursor-pointer py-2 shadow text-center hover:text-white hover:bg-blue-400 rounded-lg active:bg-blue-500"><i class="fa fa-sign-out" style="${ssrRenderStyle({ "font-size": "16px" })}"><span class="">Log Out</span></i></li></ul></div></div></div></div></div></div><div class="mt-10"><div class="w-16 float-left fixed sidebar_desktop"><div class="grid grid-rows-2 pt-5 bg-blue-500" style="${ssrRenderStyle({ "height": "96vh" })}"><div class=""><span><button class="${ssrRenderClass([{ "bg-opacity-50": $data.selected === "home" }, "bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50"])}" title="Home"><i class="fa fa-th text-white" style="${ssrRenderStyle({ "font-size": "24px" })}"></i></button></span><span><button class="${ssrRenderClass([{ "bg-opacity-50": $data.selected === "AR" }, "bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50"])}" title="Approved Report"><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "24px" })}" alt=""></button></span><span><button class="${ssrRenderClass([{ "bg-opacity-50": $data.selected === "RR" }, "bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50"])}" title="Rejected Report"><img${ssrRenderAttr("src", _imports_2)} style="${ssrRenderStyle({ "width": "24px" })}" alt=""></button></span><span><button class="${ssrRenderClass([{ "bg-opacity-50": $data.selected === "QR" }, "bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50"])}" title="Recheck Requested"><span><img${ssrRenderAttr("src", _imports_3)} style="${ssrRenderStyle({ "width": "24px" })}" alt=""></span></button></span></div><div class="" style="${ssrRenderStyle({ "margin-top": "190px" })}"><button class="bg-slate-100 px-2 py-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50" title="Log Out"><i class="fa fa-sign-out text-white" style="${ssrRenderStyle({ "font-size": "18px" })}"></i></button></div></div></div><hr><div class="ml-10 px-10 sidebarmain">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div><div class="drawer-side"><label for="my-drawer" class="drawer-overlay"></label><div class="w-3/4 h-full bg-base-200 text-base-content"><div class="flex flex-col pt-5 justify-between bg-blue-500" style="${ssrRenderStyle({ "height": "94vh" })}"><div class="flex flex-col space-y-3"><div class="flex items-center"><a href="/AuthoriserDPage"><button class="flex" title="Home"><i class="fa fa-th text-white bg-slate-100 p-1 bg-opacity-30 mx-3 mt-4" style="${ssrRenderStyle({ "font-size": "26px" })}"></i><p class="text-white mt-5 font-light text-sm">Home</p></button></a></div><div class="flex items-center"><a href="/Authoriser_AR"><button class="flex items-center" title="Approved Report"><img class="bg-slate-100 p-1 bg-opacity-30 mx-3 my-2 h-9 w-9"${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "font-size": "26px" })}" alt=""><p class="text-white font-light text-sm">Approved Reports</p></button></a></div><div class="flex items-center"><a href="/Authoriser_RejectedReports"><button class="flex items-center" title="Rejected Report"><img${ssrRenderAttr("src", _imports_2)} style="${ssrRenderStyle({ "font-size": "26px" })}" class="bg-slate-100 p-1 bg-opacity-30 mx-3 my-2 h-9 w-9"><p class="text-white font-light text-sm">Rejected Reports</p></button></a></div><div class="flex items-center"><a href="/Authoriser_RequestRecheck"><button class="flex items-center" title="Recheck Requested"><img${ssrRenderAttr("src", _imports_3)} class="bg-slate-100 p-1 bg-opacity-30 mx-3 my-2 h-9 w-9"><p class="text-white font-light text-sm">Recheck Requested</p></button></a></div></div><div class="mb-11"><button class="flex" title="Signout"><i class="fa fa-sign-out text-white bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" style="${ssrRenderStyle({ "font-size": "18px" })}"></i><p class="text-white font-light text-sm mt-4">Log out</p></button></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/authoriselayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const authoriselayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { authoriselayout as default };
//# sourceMappingURL=authoriselayout-fce2c226.mjs.map
