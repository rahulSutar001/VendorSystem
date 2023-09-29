import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  data() {
    return {
      formdata: {
        Vendorname: "",
        Location: "",
        BranchLocation: "",
        BranchName: "",
        GSTnumber: "",
        GSTamount: "",
        TDSamount: "",
        Basicamount: "",
        Paymenttype: "",
        Advanceamount: "",
        Paymentamount: "",
        Totalamount: ""
      },
      resDataSuccess: {},
      slectedpaymentType: "",
      branchandlocation: {}
    };
  },
  methods: {
    async submitFormDetails() {
      const hasAllValues = Object.values(this.formdata).every((value) => value !== "");
      if (hasAllValues) {
        const body = this.formdata;
        await $fetch(
          "/api/report_Api/report",
          {
            method: "POST",
            body
          }
        ).then((res) => {
          for (let key in this.formdata) {
            this.formdata[key] = null;
          }
          alert(res.statusMessage);
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
  },
  watch: {
    slectedpaymentType(newVal) {
      this.formdata.Paymenttype = newVal;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><br><div class="flex flex-wrap"><div class="grow"></div><div class="bg-white rounded-md contain mt-2 ml-10 grow"><form><div class="bg-blue-500 text-white py-2 px-2"><h1 class="mb-2 sm:text-xl text-sm text-center">Generate Report</h1></div><div class="px-3 py-3"><br><div class="contain space-x-0 sm:space-x-1 my-1"><div class=""><label for="" class="text-sm">Vendor Name</label><input type="text"${ssrRenderAttr("value", $data.formdata.Vendorname)} placeholder="Enter Vendor Name" class="form-control bg-white w-full my-2 py-1 px-2" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div><div class=""><label for="" class="text-sm">Location</label><input type="text"${ssrRenderAttr("value", $data.formdata.Location)} placeholder="Enter Location" class="form-control bg-white w-full my-2 py-1 px-2" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div></div><div class="contain space-x-0 sm:space-x-1 my-1"><div class=""><label for="">Branch Name</label><select name="" id="" class="bg-white outline-none px-2 my-2 py-1 w-full" style="${ssrRenderStyle({ "border": "1px solid black", "outline": "none" })}"><option value="" selected disabled>Select Branch Name</option><!--[-->`);
  ssrRenderList($data.branchandlocation, (data) => {
    _push(`<option${ssrRenderAttr("value", data.Branch)}>${ssrInterpolate(data.Branch)}</option>`);
  });
  _push(`<!--]--></select></div><div class=""><label for="">Branch Location</label><select name="" id="" style="${ssrRenderStyle({ "border": "1px solid black", "outline": "none" })}" placeholder="Please Select Branch Location" class="bg-white outline-none my-2 py-1 w-full px-2"><option value="" selected disabled>Select Branch Location</option><!--[-->`);
  ssrRenderList($data.branchandlocation, (data) => {
    _push(`<option${ssrRenderAttr("value", data.Location)}>${ssrInterpolate(data.Location)}</option>`);
  });
  _push(`<!--]--></select></div></div><div class="contain space-x-0 sm:space-x-1 my-1"><div class=""><label for="">GST number</label><input type="text"${ssrRenderAttr("value", $data.formdata.GSTnumber)} class="form-control bg-white w-full my-2 py-1 px-2" placeholder="Enter GST Number " style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div><div class=""><label for="">GST Amount</label><input type="text"${ssrRenderAttr("value", $data.formdata.GSTamount)} class="form-control bg-white w-full my-2 py-1 px-2" placeholder="Enter GST Amount" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div></div><div class="contain space-x-0 sm:space-x-1"><div class=""><label for="">TDS Amount</label><input type="text"${ssrRenderAttr("value", $data.formdata.TDSamount)} class="form-control bg-white my-2 w-full py-1 px-2" placeholder="Enter TDS Amount" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div><div class=""><label for="">Basic Amount</label><input type="text"${ssrRenderAttr("value", $data.formdata.Basicamount)} class="form-control bg-white my-2 w-full py-1 px-2" placeholder="Enter Basic Amount" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div></div><label class="" for="">Payment Type</label><div class=""><select name="" id="" class="bg-white my-2 w-full py-1 px-2" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"><option value="" selected disabled> Select Payment Type</option><option value="Advance">Advance</option><option value="AgainstBill">Against Bill</option><option value="PurchaseOrder">Purchase Order</option></select></div><div class="contain space-x-0 sm:space-x-1"><div class=""><label for="">Advance Payment</label><input type="text"${ssrRenderAttr("value", $data.formdata.Advanceamount)} class="form-control bg-white w-full my-2 py-1 px-2" placeholder="Enter Amount" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div><div class=""><label for="">Balance Payment Amount</label><input type="text"${ssrRenderAttr("value", $data.formdata.Paymentamount)} class="form-control bg-white w-full my-2 py-1 px-2" placeholder="Enter Amount" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div></div><div class=""><label for="">Total Amount</label><input type="text"${ssrRenderAttr("value", $data.formdata.Totalamount)} class="form-control my-2 bg-white w-full py-1 px-1" placeholder="Enter Amount" style="${ssrRenderStyle({ "outline": "none", "border": "1px solid black" })}"></div><button class="bg-blue-500 text-white my-2 px-3 py-2 hover:bg-green-500" type="submit" id="btntext" name="myButton" value="Submit">Submit</button></div></form></div><div class="grow"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/User_createReport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const User_createReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { User_createReport as default };
//# sourceMappingURL=User_createReport-fa94d4b8.mjs.map
