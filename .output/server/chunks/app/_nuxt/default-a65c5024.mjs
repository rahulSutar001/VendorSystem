import { useSSRContext } from 'vue';
import axios from 'axios';
import cookie from 'js-cookie';
import { ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './480px-V_logo-b0e572ec.mjs';
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
      data: {},
      navba: false,
      show: false,
      value1: true
    };
  },
  watch(newValue) {
    this.value1 = newValue;
  },
  mounted() {
    axios.get("api/Decision_Api/decision_Appovestatus");
    axios.get("api/Decision_Api/decision_Rejectedstatus");
    this.data = JSON.parse(cookie.get("user"));
    localStorage.setItem("data", JSON.stringify(this.value1));
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
    senddata() {
      this.value1 = !this.value1;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><div class="bg-slate-100"><div><div class="fixed w-full top-0 z-20"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><div><div class="flex text-white py-2" style="${ssrRenderStyle({ "background-color": "#0400AF" })}"><div class="flex-1"><div class="inline-flex"><span class="bars mt-3 mx-3"><button><i class="fa fa-bars"></i></button></span><span><img${ssrRenderAttr("src", _imports_0)} class="ml-2 rounded-full logo logo" alt=""></span><p class="mt-3 ml-2 textvenus"><b>Venus Enterprises</b></p></div></div><div class="flex-1 inline-flex text-right justify-end mt-5 mr-2"><p class="mx-2 text-white"><i class="fa fa-user-circle-o mr-3" style="${ssrRenderStyle({ "font-size": "20px" })}"></i> <span class="hideUname">${ssrInterpolate($data.data.Username)}</span></p><div class="dropdown dropdown-end"><label tabindex="0" class="m-1"><i class="fa fa-angle-down"></i></label><ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-200 text-black mt-9 rounded-sm w-32"><li class="showname border-b-2 mr-4">${ssrInterpolate($data.data.Username)}</li><li class=""><i class="fa fa-sign-out" style="${ssrRenderStyle({ "font-size": "16px" })}"><span class="">Log Out</span></i></li></ul></div></div></div></div></div></div><div class="mt-14">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-a65c5024.mjs.map
