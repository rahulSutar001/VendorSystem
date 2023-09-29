import { useSSRContext, defineComponent, ref, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './next-img-removebg-preview-b90029ec.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "User_RequestRecheck",
  __ssrInlineRender: true,
  setup(__props) {
    let show = ref(false);
    const page = ref(1);
    const limit = ref(9);
    let Data = ref([]);
    const updataData = ref();
    const secondsearchbar = ref(false);
    const specificData = ref({});
    const searchQuery = ref("");
    const filteredData = computed(() => {
      if (!searchQuery.value) {
        return Data.value;
      }
      const searchTerm = searchQuery.value.toLowerCase();
      return Data.value.filter((item) => {
        return Object.values(item).some((value) => {
          if (typeof value === "string") {
            return value.toLowerCase().includes(searchTerm);
          }
          return false;
        });
      });
    });
    const totalPages = computed(() => Math.ceil(filteredData.value.length / limit.value));
    const paginatedData = computed(() => {
      const startIndex = (page.value - 1) * limit.value;
      const endIndex = startIndex + limit.value;
      return filteredData.value.slice(startIndex, endIndex);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-b36d1934><div class="sm:hidden grow ml-7 mt-8 text-center bg-white pb-1" data-v-b36d1934><button class="border-b-2 cursor-default font-semibold text-md lg:text-lg md:text-base" data-v-b36d1934>Recheck Requested Reports</button></div><div class="flex flex-wrap flex-row w-full py-2 sm:mt-8 mt-0" data-v-b36d1934><div class="sm:inline-flex hidden grow ml-5 mt-1" data-v-b36d1934><button class="border-b-2 cursor-default font-semibold text-sm lg:text-lg md:text-base" data-v-b36d1934>Recheck Requested Reports</button></div><div class="ml-8 grow" data-v-b36d1934><div class="float-right w-auto" data-v-b36d1934><div class="rounded-full border-2 bg-white flex searchbar mt-4 sm:mt-0" data-v-b36d1934><div class="overflow-hidden flex" data-v-b36d1934><span style="${ssrRenderStyle(unref(secondsearchbar) ? null : { display: "none" })}" data-v-b36d1934><i class="fa fa-search text-black ml-3 mt-2" style="${ssrRenderStyle({})}" data-v-b36d1934></i></span><input type="text"${ssrRenderAttr("value", unref(searchQuery))} placeholder="Search" class="my-1 ml-5 outline-none bg-white sm:w-auto w-full searchbarinput" data-v-b36d1934></div><div data-v-b36d1934><i class="fa fa-search mx-1 w-full bg-blue-500 pl-4 pr-3 sm:pl-5 sm:pr-4 py-2 text-white rounded-full searchbaricon" data-v-b36d1934></i></div></div></div></div></div><div data-v-b36d1934><div class="bg-white sm:bg-none ml-5 w-full rounded-2xl" data-v-b36d1934><div class="" data-v-b36d1934><div class="overflow-x-auto border-2 bigscreentable" data-v-b36d1934><table class="table w-full table-compact min-w-full" data-v-b36d1934><thead data-v-b36d1934><tr data-v-b36d1934><th class="w-1/12" data-v-b36d1934>Sr no</th><th class="w-2/12" data-v-b36d1934>Party Name</th><th class="w-2/12" data-v-b36d1934>Location</th><th class="w-2/12" data-v-b36d1934>Amount</th><th class="w-2/12" data-v-b36d1934>Date</th><th class="w-2/12" data-v-b36d1934>Status</th><th class="w-2/12" data-v-b36d1934>Action</th><th class="w-1/12" data-v-b36d1934> View </th></tr></thead><tbody data-v-b36d1934><!--[-->`);
      ssrRenderList(unref(paginatedData), (data, index) => {
        _push(`<tr data-v-b36d1934><td data-v-b36d1934>${ssrInterpolate((unref(page) - 1) * unref(limit) + index + 1)}</td><td data-v-b36d1934>${ssrInterpolate(data.Vendorname)}</td><td data-v-b36d1934>${ssrInterpolate(data.Location)}</td><td data-v-b36d1934>${ssrInterpolate(data.Total)}</td><td data-v-b36d1934>${ssrInterpolate(data.BillDate)}</td><td data-v-b36d1934><div class="flex" data-v-b36d1934><div data-v-b36d1934><button class="flex justify-center bg-red-600 text-gray-100 px-1 py-1 mx-1 cursor-default rounded-sm tracking-wide font-sm shadow-sm" data-v-b36d1934>${ssrInterpolate(data.Authoriser)}</button></div></div></td><td data-v-b36d1934><div class="flex flex-wrap text-center" data-v-b36d1934><div data-v-b36d1934><button class="flex justify-center bg-blue-600 hover:bg-blue-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-default transition ease-in duration-200" data-v-b36d1934><label class="cursor-pointer" for="my-modal-5" data-v-b36d1934>Edit</label></button></div><div data-v-b36d1934><button class="flex justify-center bg-yellow-600 hover:bg-yellow-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-default transition ease-in duration-200" data-v-b36d1934><label class="cursor-pointer" for="my-modal-5" data-v-b36d1934>Resubmit</label></button></div></div></td><td data-v-b36d1934><div class="icon" data-v-b36d1934><span data-v-b36d1934><label for="my-modal-4" class="" data-v-b36d1934><i class="fa fa-eye cursor-pointer" data-v-b36d1934></i></label></span></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><!--[-->`);
      ssrRenderList(unref(paginatedData), (data, index) => {
        _push(`<div class="overflow-x-auto border-2 my-5 px-5 py-3 sm:text-xs smallscreentable" data-v-b36d1934><div class="flex text-left my-2 py-1 border-b-2" data-v-b36d1934><div class="basis-2/4 font-semibold text-sm" data-v-b36d1934><p data-v-b36d1934>Sr No</p></div><div class="basis-2/4" data-v-b36d1934><p data-v-b36d1934>${ssrInterpolate(index + 1)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-b36d1934><div class="basis-2/4 font-semibold text-sm" data-v-b36d1934>Party Name</div><div class="basis-2/4" data-v-b36d1934>${ssrInterpolate(data.Vendorname)}</div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-b36d1934><div class="basis-2/4 font-semibold text-sm" data-v-b36d1934><p data-v-b36d1934>Location</p></div><div class="basis-2/4" data-v-b36d1934><p data-v-b36d1934>${ssrInterpolate(data.Location)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-b36d1934><div class="basis-2/4 font-semibold text-sm" data-v-b36d1934>Amount</div><div class="basis-2/4" data-v-b36d1934>${ssrInterpolate(data.Total)}</div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-b36d1934><div class="basis-2/4 font-semibold text-sm" data-v-b36d1934><p data-v-b36d1934>Date</p></div><div class="basis-2/4" data-v-b36d1934><p data-v-b36d1934>${ssrInterpolate(data.BillDate)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-b36d1934><div class="basis-2/4 font-semibold text-sm" data-v-b36d1934><p data-v-b36d1934>Status</p></div><div class="basis-2/4" data-v-b36d1934><div data-v-b36d1934><button class="flex justify-center bg-red-600 hover:bg-red-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm transition ease-in duration-200" data-v-b36d1934>${ssrInterpolate(data.Authoriser)}</button></div></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-b36d1934><div class="basis-2/4 font-semibold text-sm" data-v-b36d1934><p data-v-b36d1934>View</p></div><div class="basis-2/4" data-v-b36d1934><div class="icon" data-v-b36d1934><span data-v-b36d1934><label for="my-modal-4" class="" data-v-b36d1934><i class="fa fa-eye cursor-pointer" data-v-b36d1934></i></label></span></div></div></div><div class="text-center mt-5" data-v-b36d1934><div class="flex flex-wrap justify-center text-center" data-v-b36d1934><div class="" data-v-b36d1934><button class="flex justify-center bg-blue-600 hover:bg-blue-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-pointer transition ease-in duration-200" data-v-b36d1934><label class="cursor-pointer" for="my-modal-5" data-v-b36d1934>Edit</label></button></div><div class="" data-v-b36d1934><button class="flex justify-center bg-yellow-600 hover:bg-yellow-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-pointer transition ease-in duration-200" data-v-b36d1934><label class="sm:text-sm cursor-pointer" for="my-modal-5" data-v-b36d1934>Resubmit</label></button></div></div></div></div>`);
      });
      _push(`<!--]--><div class="" data-v-b36d1934><input type="checkbox" id="my-modal-4" class="modal-toggle" data-v-b36d1934><label for="my-modal-4" class="modal cursor-pointer" style="${ssrRenderStyle({ "overflow": "scroll" })}" data-v-b36d1934><label class="modal-box relative rounded-none" for="" data-v-b36d1934><div class="sticky top-0 z-20" title="Close" data-v-b36d1934><label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-0" data-v-b36d1934>\u2715</label></div><br data-v-b36d1934><br data-v-b36d1934><hr data-v-b36d1934><div class="overflow-x-auto" data-v-b36d1934><table class="table table-compact w-full" data-v-b36d1934><tbody data-v-b36d1934><tr data-v-b36d1934><th data-v-b36d1934>Bill No</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).Id)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Borrower/Project Name</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).Vendorname)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>GST Number</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).VendorGSTnumber)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Payment Type</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).Paymenttype)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Basic Amount</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).Basicamount)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>GST Amount</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).GSTamount)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>TDS</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).TDS)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Total Amount</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).Total)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Advance Payment</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).AdvancePayment)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Payment Amount</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).PaymentAmount)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Location</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).Location)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Verifier Decision</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).Verifier)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Authoriser Decision</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).Authoriser)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Admin Decision</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).Admin)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Report Status</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).status)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Branch Name</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).BranchName)}</td></tr><tr data-v-b36d1934><th data-v-b36d1934>Branch Location</th><td data-v-b36d1934>${ssrInterpolate(unref(specificData).BranchLocation)}</td></tr></tbody></table></div><hr data-v-b36d1934><br data-v-b36d1934></label></label></div><div style="${ssrRenderStyle(unref(show) ? null : { display: "none" })}" data-v-b36d1934>`);
      if (unref(updataData)) {
        _push(`<div class="modal1" data-v-b36d1934><div class="modal-box" data-v-b36d1934><h3 class="font-bold text-lg mb-2" data-v-b36d1934>Update Report</h3><hr class="" data-v-b36d1934><br data-v-b36d1934><div class="" data-v-b36d1934><label for="" class="text-sm" data-v-b36d1934>Vendor Name</label><input type="text"${ssrRenderAttr("value", unref(updataData).Vendorname)} placeholder="Enter Vendor Name" class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" style="${ssrRenderStyle({ "outline": "none" })}" data-v-b36d1934></div><br data-v-b36d1934><div class="" data-v-b36d1934><label for="" class="text-sm" data-v-b36d1934>Location</label><input type="text"${ssrRenderAttr("value", unref(updataData).Location)} placeholder="Enter Location" class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" style="${ssrRenderStyle({ "outline": "none" })}" data-v-b36d1934></div><div class="contain mt-4" data-v-b36d1934><div class="mr-2" data-v-b36d1934><label for="" class="text-sm" data-v-b36d1934>Branch Location</label><input type="text"${ssrRenderAttr("value", unref(updataData).BranchLocation)} placeholder="Enter Branch Location" class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" style="${ssrRenderStyle({ "outline": "none" })}" data-v-b36d1934></div><div class="" data-v-b36d1934><label for="" class="text-sm" data-v-b36d1934>Branch Name</label><input type="text"${ssrRenderAttr("value", unref(updataData).BranchName)} placeholder="Enter Branch Name" class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" style="${ssrRenderStyle({ "outline": "none" })}" data-v-b36d1934></div></div><br data-v-b36d1934><div data-v-b36d1934><label for="" data-v-b36d1934>GST number</label><input type="text"${ssrRenderAttr("value", unref(updataData).VendorGSTnumber)} class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" placeholder="Enter GST Number " style="${ssrRenderStyle({ "outline": "none" })}" data-v-b36d1934></div><br data-v-b36d1934><div data-v-b36d1934><label for="" data-v-b36d1934>GST Amount</label><input type="text"${ssrRenderAttr("value", unref(updataData).GSTamount)} class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" placeholder="Enter GST Amount" style="${ssrRenderStyle({ "outline": "none" })}" data-v-b36d1934></div><br data-v-b36d1934><div data-v-b36d1934><label for="" data-v-b36d1934>TDS Amount</label><input type="text"${ssrRenderAttr("value", unref(updataData).TDS)} class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" placeholder="Enter TDS Amount" style="${ssrRenderStyle({ "outline": "none" })}" data-v-b36d1934></div><br data-v-b36d1934><div data-v-b36d1934><label for="" data-v-b36d1934>Basic Amount</label><input type="text"${ssrRenderAttr("value", unref(updataData).Basicamount)} class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" placeholder="Enter Basic Amount" style="${ssrRenderStyle({ "outline": "none" })}" data-v-b36d1934></div><br data-v-b36d1934><label class="" for="" data-v-b36d1934>Payment Type</label><br data-v-b36d1934><div class="inline-flex form-group w-full" data-v-b36d1934><select name="" id="" class="w-full bg-white form-control border-b-2 mt-2" style="${ssrRenderStyle({ "outline": "none" })}" data-v-b36d1934><option value="" selected data-v-b36d1934></option><option value="Advance" data-v-b36d1934>Advance</option><option value="AgainstBill" data-v-b36d1934>Against Bill</option><option value="PurchaseOrder" data-v-b36d1934>Purchase Order</option></select></div><br data-v-b36d1934><br data-v-b36d1934><div data-v-b36d1934><label for="" data-v-b36d1934>Advance Payment</label><input type="text"${ssrRenderAttr("value", unref(updataData).AdvancePayment)} class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" placeholder="Enter amount" style="${ssrRenderStyle({ "outline": "none" })}" data-v-b36d1934></div><br data-v-b36d1934><div data-v-b36d1934><label for="" data-v-b36d1934>Balance Payment Amount</label><input type="text"${ssrRenderAttr("value", unref(updataData).PaymentAmount)} class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" placeholder="Enter amount" style="${ssrRenderStyle({ "outline": "none" })}" data-v-b36d1934></div><br data-v-b36d1934><div data-v-b36d1934><label for="" data-v-b36d1934>Total Amount</label><input type="text"${ssrRenderAttr("value", unref(updataData).Total)} class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" placeholder="Enter amount" style="${ssrRenderStyle({ "outline": "none" })}" data-v-b36d1934></div><div class="modal-action" data-v-b36d1934><button class="btn" data-v-b36d1934>Update</button><button class="btn" data-v-b36d1934>Close</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      if (unref(Data).length > unref(limit)) {
        _push(`<div class="flex w-full" data-v-b36d1934><div class="flex mx-auto space-x-8" data-v-b36d1934><button class="w-20"${ssrIncludeBooleanAttr(unref(page) == 1) ? " disabled" : ""} data-v-b36d1934><span data-v-b36d1934><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-b36d1934></span></button><button class="w-20"${ssrIncludeBooleanAttr(unref(page) == unref(totalPages)) ? " disabled" : ""} data-v-b36d1934><span data-v-b36d1934><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-b36d1934></span></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(Data).length == 0) {
        _push(`<div class="mt-10 font-semibold w-full text-2xl text-black flex" data-v-b36d1934><div class="mx-auto" data-v-b36d1934> No Data to Display </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/User_RequestRecheck.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const User_RequestRecheck = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b36d1934"]]);

export { User_RequestRecheck as default };
//# sourceMappingURL=User_RequestRecheck-8fa0fa8a.mjs.map
