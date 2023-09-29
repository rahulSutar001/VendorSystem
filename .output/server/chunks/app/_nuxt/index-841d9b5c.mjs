import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserLogin",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    ref();
    const userData = ref({
      Username: "",
      Password: ""
    });
    const button = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="mt-10 w-auto mx-8"><div><div class="flex justify-left self-center z-10"><div class="sm:p-4 p-10 border-2 bg-slate-100 mx-auto rounded-2xl w-100"><div class="mb-4"><h3 class="font-semibold pb-2 text-2xl text-gray-800">Login </h3><p class="text-gray-500">Please Log in to your account.</p></div><form action="" method="POST"><div class="space-y-3"><div class="space-y-1"><label class="text-sm font-medium text-gray-700 tracking-wide">Username</label><input class="w-full text-base px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="Enter username"${ssrRenderAttr("value", unref(userData).Username)}></div><div class="space-y-2"><label class="mb-5 text-sm font-medium text-gray-700 tracking-wide"> Password </label><input type="password" class="w-full content-center text-base bg-white px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" placeholder="Enter password"${ssrRenderAttr("value", unref(userData).Password)}></div><div class="pt-4"><input type="submit"${ssrRenderAttr("name", unref(button))} value="Submit" class="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 sm:p-1 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500 btn"></div></div></form><div id="mes"></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UserLogin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UserLogin = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-left"><div>`);
  _push(ssrRenderComponent(_component_UserLogin, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-841d9b5c.mjs.map
