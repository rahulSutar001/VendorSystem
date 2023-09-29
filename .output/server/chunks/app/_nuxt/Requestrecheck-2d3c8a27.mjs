import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-100" }, _attrs))}><div class="w-16 float-left md:display-none fixed"><div class="grid grid-rows-2" style="${ssrRenderStyle({ "background-color": "#0400AF", "height": "96vh" })}"><div class=""><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3"><i class="fa fa-th text-white" style="${ssrRenderStyle({ "font-size": "15px" })}"></i></button><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3"><i class="fa fa-cog text-white" style="${ssrRenderStyle({ "font-size": "15px" })}"></i></button><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3"><i class="fa fa-file-text text-white" style="${ssrRenderStyle({ "font-size": "15px" })}"></i></button></div><div class="mt-20"><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3"><i class="fa fa-chevron-right text-white" style="${ssrRenderStyle({ "font-size": "15px" })}"></i></button><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3"><i class="fa fa-files-o text-white" style="${ssrRenderStyle({ "font-size": "15px" })}"></i></button><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3"><i class="fa fa-sign-out text-white" style="${ssrRenderStyle({ "font-size": "15px" })}"></i></button></div></div></div><hr><br><div class="ml-16 px-10" style="${ssrRenderStyle({ "width": "93vw" })}"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Requestrecheck.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Requestrecheck = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Requestrecheck as default };
//# sourceMappingURL=Requestrecheck-2d3c8a27.mjs.map
