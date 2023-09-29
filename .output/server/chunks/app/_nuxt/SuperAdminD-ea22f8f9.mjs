import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-100" }, _attrs))}><div class="w-16 float-left md:display-none fixed"><div class="grid grid-rows-2" style="${ssrRenderStyle({ "background-color": "#0400AF", "height": "96vh" })}"><div class="mt-2"><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Home"><i class="fa fa-th text-white" style="${ssrRenderStyle({ "font-size": "15px" })}"></i></button><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Approved Report"><i class="fa fa-file-text text-white" style="${ssrRenderStyle({ "font-size": "15px", "color": "greenyellow" })}"></i></button><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Rejected Report"><i class="fa fa-file-text text-white" style="${ssrRenderStyle({ "font-size": "15px", "color": "red" })}"></i></button><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Add Branch Details"><i class="fa fa-bank bank-icon text-white" style="${ssrRenderStyle({ "font-size": "15px" })}"></i></button><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Add Vendor Type"><i class="fa fa-user vendor-icon text-white" style="${ssrRenderStyle({ "font-size": "15px" })}"></i></button><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Generate Report"><i class="fa fa-file-text text-white" style="${ssrRenderStyle({ "font-size": "15px" })}"></i></button></div><div class="mt-40"><button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3"><i class="fa fa-sign-out text-white" style="${ssrRenderStyle({ "font-size": "15px" })}"></i></button></div></div></div><hr><br><div class="ml-16 px-10" style="${ssrRenderStyle({ "width": "93vw" })}">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/SuperAdminD.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SuperAdminD = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { SuperAdminD as default };
//# sourceMappingURL=SuperAdminD-ea22f8f9.mjs.map
