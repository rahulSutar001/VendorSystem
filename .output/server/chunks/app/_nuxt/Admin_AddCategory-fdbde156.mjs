import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  data() {
    return {
      vendorcategory: {
        Type: "",
        Vendor: ""
      },
      SelectVendorCategoryType: {
        type: ""
      }
    };
  },
  watch: {
    "SelectVendorCategoryType.type": function(newvalue) {
      this.vendorcategory.Type = newvalue;
    }
  },
  methods: {
    async addVendorCategory() {
      const hasAllValues = Object.values(this.vendorcategory).every((value) => value !== "");
      if (hasAllValues) {
        this.vendorcategory;
        await $fetch("/api/module1/vendorCategoy_Api/vendorcategeorydata", {
          method: "POST",
          body: this.vendorcategory
        }).then((res) => {
          alert("Vendor Category and Type Added Successfully!");
          this.vendorcategory = "";
          location.reload();
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
      } else {
        alert("Please Fill All the Details.");
        location.reload();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap mt-10" }, _attrs))}><div class="grow"></div><div class="ml-10 bg-white grow"><div class="bg-blue-500 text-white w-full px-2 mr-4 py-1 text-center"><h2 class="my-1 text-lg text-white px-2 mr-4 py-1">Add Vendor Category</h2></div><div class="p-5 bg-white border-gray-300 rounded w-full"><label for="" class="block font-semibold">Enter Vendor Type<span class="text-red-500 ml-2">*</span></label><select name="" id="" style="${ssrRenderStyle({})}" class="-ml-0 w-full p-1 border border-gray-300 rounded"><option value="" selected>Vendor Type</option><option value="A/V vendor">A/V vendor</option><option value="MBT Vendor">MBT Vendor</option></select><div class="mt-2"><label for="" class="block font-semibold mb-1">Vendor Category<span class="text-red-500 ml-2">*</span></label><input type="text"${ssrRenderAttr("value", $data.vendorcategory.Vendor)} placeholder="Enter Vendor Category" style="${ssrRenderStyle({ "outline": "none" })}" class="w-full p-2 border border-gray-300 rounded"></div><div class="mt-3 text-center"><button class="bg-blue-500 text-white px-3 py-1 btn btn-success w-24">Add</button></div></div></div><div class="grow"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/Admin_AddCategory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Admin_AddCategory = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Admin_AddCategory as default };
//# sourceMappingURL=Admin_AddCategory-fdbde156.mjs.map
