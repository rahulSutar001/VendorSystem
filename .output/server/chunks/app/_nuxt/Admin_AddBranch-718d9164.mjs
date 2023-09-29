import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  data() {
    return {
      branchandlocation: {
        Branch: "",
        location: ""
      }
    };
  },
  methods: {
    async addBranchLocation() {
      const hasAllValues = Object.values(this.branchandlocation).every((value) => value !== "");
      if (hasAllValues) {
        await $fetch("/api/module1/BranchLocation/branchLocation", {
          method: "POST",
          body: this.branchandlocation
        }).then((res) => {
          alert(JSON.stringify(res));
          this.branchandlocation = "";
          location.reload();
        }).catch((err) => {
          console.log(err);
        });
      } else {
        alert("Please Fill All the Details.");
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap mt-6" }, _attrs))}><div class="grow"></div><div class="ml-10 py-4 grow"><div><div class="bg-blue-500 text-white w-full px-2 mr-4 py-1 text-center"><h2 class="my-1 text-lg text-white px-2 mr-4 py-1">Add New Branch Details</h2></div><div class="mx-auto p-5 bg-white border border-gray-300 rounded w-full"><div class=""><label for="branch-name" class="block font-semibold mb-1">Branch Name<span class="text-red-500 ml-2">*</span></label><input id="branch-name" type="text" placeholder="Branch Name" style="${ssrRenderStyle({ "outline": "none" })}" class="w-full p-2 border border-gray-300 rounded"${ssrRenderAttr("value", $data.branchandlocation.Branch)}></div><div class="mt-4"><label for="branch-location" class="block font-semibold mb-1">Branch Location<span class="text-red-500 ml-2">*</span></label><input id="branch-location" type="text" placeholder="Branch Location" style="${ssrRenderStyle({ "outline": "none" })}" class="w-full p-2 border border-gray-300 rounded"${ssrRenderAttr("value", $data.branchandlocation.location)}></div><div class="mt-3 text-center"><button class="bg-blue-500 text-white px-3 py-2 btn btn-success w-24">Add</button></div></div></div></div><div class="grow"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/Admin_AddBranch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Admin_AddBranch = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Admin_AddBranch as default };
//# sourceMappingURL=Admin_AddBranch-718d9164.mjs.map
