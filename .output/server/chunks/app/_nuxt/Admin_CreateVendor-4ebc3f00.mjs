import axios from 'axios';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  data() {
    return {
      vendordata: {
        action: "signup",
        create: "User",
        Vendorname: "",
        Branchlocation: "",
        Branchname: "",
        vendorType: "",
        vendorCategory: "",
        categorySubtype: "",
        User: "False",
        Admin: "False",
        Authoriser: "False",
        Verifier: "False",
        Bankname: "",
        BankAccountNumber: "",
        BankIFCcode: "",
        PanNumber: "",
        GSTnumber: "",
        Username: "",
        Password: ""
      },
      branchandlocation: {},
      BranchLocation: "",
      backenddataVendorCandT: {},
      BranchName: "",
      VendorCategory: "",
      VendorType: "",
      vendorExtraDetails: false
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    selectRole(role) {
      this.vendordata = {
        ...this.vendordata,
        User: role === "User" ? "True" : "False",
        Admin: role === "Admin" ? "True" : "False",
        Authoriser: role === "Authoriser" ? "True" : "False",
        Verifier: role === "Verifier" ? "True" : "False"
      };
      if (this.vendordata.User === "True") {
        this.vendorExtraDetails = true;
      } else {
        this.vendorExtraDetails = false;
      }
    },
    // mehtod to create vendor 
    async CreaeVendor() {
      const hasAllValues = Object.values(this.vendordata).every((value) => value !== "");
      if (hasAllValues) {
        const body = this.vendordata;
        await axios.post("/api/auth/signup", body).then((res) => {
          for (let key in this.vendordata) {
            if (key !== "action" && key !== "create") {
              this.vendordata[key] = null;
            }
          }
          alert("User Created Successfully!");
        }).catch((err) => {
          console.log(err);
        });
      } else {
        alert("Please Fill Complete Details.");
      }
    }
  },
  mounted() {
    $fetch("/api/module1/BranchLocation/branchLocation").then((res) => {
      this.branchandlocation = res;
    }).catch((err) => {
      console.log(err);
    });
    $fetch("/api/module1/vendorCategoy_Api/vendorcategoy").then((res) => {
      this.backenddataVendorCandT = res;
    }).catch((err) => {
      console.log(err);
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="flex flex-wrap"><div class="grow"></div><div class="bg-white mt-10 ml-10 rounded-md contain grow"><form><div class="bg-blue-500 text-white py-2 px-2"><h1 class="mb-2 sm:text-xl text-sm text-center">Create User</h1></div><div class="mx-4 my-3"><div class="text-black mt-5 flex flex-wrap"><div class="grow"><label for="" class="">User Name</label><input type="text"${ssrRenderAttr("value", $data.vendordata.Vendorname)} placeholder="Enter name" class="form-control bg-white w-full py-1 px-2 mt-2" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div></div><div class="flex flex-wrap text-black mt-4 md:space-x-2 sm:space-x-2 space-x-0"><div class="pb-1 grow"><label for="" class="">Branch Name</label><select name="" id="" class="bg-white outline-none px-2 py-1 w-full mt-2" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"><option value="" selected disabled>Select Branch Name</option><!--[-->`);
  ssrRenderList($data.branchandlocation, (data) => {
    _push(`<option${ssrRenderAttr("value", data.Branch)}>${ssrInterpolate($options.capitalizeFirstLetter(data.Branch))}</option>`);
  });
  _push(`<!--]--></select></div><div class="pb-1 grow"><label for="" class="">Branch Location</label><select name="" id="" placeholder="Please Select Branch Location" class="bg-white outline-none px-2 py-1 mt-2 w-full" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"><option value="" selected disabled>Select Branch Location</option><!--[-->`);
  ssrRenderList($data.branchandlocation, (data) => {
    _push(`<option${ssrRenderAttr("value", data.Location)}>${ssrInterpolate($options.capitalizeFirstLetter(data.Location))}</option>`);
  });
  _push(`<!--]--></select></div></div><div class="text-black mt-2 ml-1"><h2 class="">Select Role</h2><fieldset id="group1"><fieldset id="group1"><div style="${ssrRenderStyle({ "text-align": "inline-flex" })}"><input type="radio" class="mr-3 bg-white" name="group1"${ssrIncludeBooleanAttr($data.vendordata.User === "True") ? " checked" : ""} style="${ssrRenderStyle({ "outline": "none" })}"><label for="" class="text-lg">User</label></div><div style="${ssrRenderStyle({ "text-align": "inline-flex" })}"><input type="radio" class="mr-3 bg-white" name="group1"${ssrIncludeBooleanAttr($data.vendordata.Authoriser === "True") ? " checked" : ""} style="${ssrRenderStyle({ "outline": "none" })}"><label for="" class="text-lg">Authoriser</label></div><div style="${ssrRenderStyle({ "text-align": "inline-flex" })}"><input type="radio" class="mr-3 bg-white" name="group1"${ssrIncludeBooleanAttr($data.vendordata.Verifier === "True") ? " checked" : ""} style="${ssrRenderStyle({ "outline": "none" })}"><label for="" class="text-lg">Verifier</label></div><div style="${ssrRenderStyle({ "text-align": "inline-flex" })}"><input type="radio" class="mr-3 bg-white" name="group1"${ssrIncludeBooleanAttr($data.vendordata.Admin === "True") ? " checked" : ""} style="${ssrRenderStyle({ "outline": "none" })}"><label for="" class="text-lg">Admin</label></div></fieldset></fieldset></div><div style="${ssrRenderStyle($data.vendorExtraDetails ? null : { display: "none" })}" class="contain text-black mt-3 space-x-0 sm:space-x-2"><div class="pb-2"><label for="" class="">Vendor Category</label><select name="" id="" placeholder="Please Select Vendor Category" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}" class="form-control mt-2 w-full bg-white py-1 px-2"><option value="" selected disabled text-sm>Select Category</option><!--[-->`);
  ssrRenderList($data.backenddataVendorCandT, (data) => {
    _push(`<option${ssrRenderAttr("value", data.vendorCategory)}>${ssrInterpolate(data.vendorType)}</option>`);
  });
  _push(`<!--]--><option value="Other">Other</option></select></div><div class="pb-2"><label for="" class="">Sub-category</label><select name="" id="" placeholder="Please Select Vendor Type" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}" class="form-control mt-2 w-full bg-white py-1 px-2"><option value="" selected disabled>Select Sub-Category</option><!--[-->`);
  ssrRenderList($data.backenddataVendorCandT, (data) => {
    _push(`<option${ssrRenderAttr("value", data.vendorType)}>${ssrInterpolate(data.vendorCategory)}</option>`);
  });
  _push(`<!--]--><option value="Other">Other</option></select></div><div class="pb-2"><label for="">Vendor Type</label><select name="" id="" class="form-control mt-2 w-full bg-white py-1 px-2" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"><option value="" selected disabled>Select Type</option><option value="Regular">Regular</option><option value="One Time">One Time</option><option value="ABC Supplier">ABC Supplier</option><option value="Other">Other</option></select></div></div><div class="flex flex-wrap text-black sm:space-x-2 space-x-0"><div class="pb-2 grow"><label for="" class="">Bank Name</label><input type="text" placeholder="Bank Name"${ssrRenderAttr("value", $data.vendordata.Bankname)} class="form-control mt-2 w-full bg-white py-1 px-1" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div><div class="pb-2 grow"><label for="" class="">Bank Account Number</label><input type="text" placeholder="Bank Account Number"${ssrRenderAttr("value", $data.vendordata.BankAccountNumber)} class="form-control mt-2 bg-white w-full py-1 px-1" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div><div class="pb-2 grow"><label for="">Bank IFSC Code</label><input type="text" placeholder="Bank IFSC code"${ssrRenderAttr("value", $data.vendordata.BankIFCcode)} class="form-control px-2 mt-2 w-full bg-white py-1" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div></div><div class="flex flex-wrap sm:space-x-2 space-x-0 text-black"><div class="grow pb-2"><label for="">PAN Number</label><input type="text" placeholder="PAN Number"${ssrRenderAttr("value", $data.vendordata.PanNumber)} class="form-control mt-2 w-full bg-white py-1 px-1" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div><div class="grow pb-2"><label for="">GST Number</label><input type="text" placeholder="GST Number"${ssrRenderAttr("value", $data.vendordata.GSTnumber)} class="form-control mt-2 w-full bg-white py-1 px-1" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div></div><div class="flex flex-wrap sm:space-x-2 space-x-0 text-black"><div class="grow pb-2"><label for="">Username</label><input type="text" placeholder="Username"${ssrRenderAttr("value", $data.vendordata.Username)} class="form-control mt-2 w-full bg-white py-1 px-1" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div><div class="grow pb-2"><label for="">Enter Password</label><input type="password" placeholder="Password"${ssrRenderAttr("value", $data.vendordata.Password)} class="form-control mt-2 w-full bg-white py-1 px-1" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div></div><br><div class="text-center"><button class="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-md btntext" id="submitbtn" type="submit" name="myButton" value="Submit">Submit</button></div></div></form></div><div class="grow"></div></div><div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/Admin_CreateVendor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Admin_CreateVendor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Admin_CreateVendor as default };
//# sourceMappingURL=Admin_CreateVendor-4ebc3f00.mjs.map
