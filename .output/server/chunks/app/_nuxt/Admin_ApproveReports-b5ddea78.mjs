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
  __name: "Admin_ApproveReports",
  __ssrInlineRender: true,
  setup(__props) {
    ref("Rahul");
    ref("");
    const page = ref(1);
    const limit = ref(8);
    let Data = ref([]);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-649a5a2c><div class="flex flex-wrap w-full py-2 mt-8" data-v-649a5a2c><div class="grow ml-5 mt-1" data-v-649a5a2c><button class="border-b-2 cursor-default font-semibold text-lg" data-v-649a5a2c>Approved Reports</button></div><div class="w-20 grow" data-v-649a5a2c><div class="float-right w-auto" data-v-649a5a2c><div class="rounded-full border-2 bg-white flex searchbar" data-v-649a5a2c><div class="overflow-hidden flex" data-v-649a5a2c><span style="${ssrRenderStyle(unref(secondsearchbar) ? null : { display: "none" })}" data-v-649a5a2c><i class="fa fa-search text-black ml-3 mt-2" style="${ssrRenderStyle({})}" data-v-649a5a2c></i></span><input type="text"${ssrRenderAttr("value", unref(searchQuery))} placeholder="Search" class="my-1 ml-5 outline-none bg-white sm:w-auto w-full searchbarinput" data-v-649a5a2c></div><div data-v-649a5a2c><i class="fa fa-search mx-1 w-full bg-blue-500 pl-5 pr-4 py-2 text-white rounded-full searchbaricon" data-v-649a5a2c></i></div></div></div></div></div><div class="ml-5 w-full rounded-2xl" data-v-649a5a2c><div class="" data-v-649a5a2c><div class="overflow-x-auto border-2 bigscreentable" data-v-649a5a2c><table class="table w-full table-compact min-w-full" data-v-649a5a2c><thead data-v-649a5a2c><tr data-v-649a5a2c><th class="w-1/12" data-v-649a5a2c>Sr no</th><th class="w-2/12" data-v-649a5a2c>Party Name</th><th class="w-2/12" data-v-649a5a2c>Location</th><th class="w-2/12" data-v-649a5a2c>Amount</th><th class="w-2/12" data-v-649a5a2c>Date</th><th class="w-2/12" data-v-649a5a2c>Status</th><th class="w-1/12" data-v-649a5a2c> View </th></tr></thead><tbody data-v-649a5a2c><!--[-->`);
      ssrRenderList(unref(paginatedData), (data, index) => {
        _push(`<tr data-v-649a5a2c><td data-v-649a5a2c>${ssrInterpolate((unref(page) - 1) * unref(limit) + index + 1)}</td><td data-v-649a5a2c>${ssrInterpolate(data.Vendorname)}</td><td data-v-649a5a2c>${ssrInterpolate(data.Location)}</td><td data-v-649a5a2c>${ssrInterpolate(data.Total)}</td><td data-v-649a5a2c>${ssrInterpolate(data.BillDate)}</td><td data-v-649a5a2c><div data-v-649a5a2c><button class="flex w-20 cursor-default justify-center bg-green-500 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm" data-v-649a5a2c>${ssrInterpolate(data.Admin)}</button></div></td><td data-v-649a5a2c><div class="icon" data-v-649a5a2c><span data-v-649a5a2c><label for="my-modal-4" class="" data-v-649a5a2c><i class="fa fa-eye cursor-pointer" data-v-649a5a2c></i></label></span></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><!--[-->`);
      ssrRenderList(unref(paginatedData), (data, index) => {
        _push(`<div class="overflow-x-auto border-2 my-5 px-5 py-3 sm:text-xs smallscreentable" data-v-649a5a2c><div class="flex text-left my-2 py-1 border-b-2" data-v-649a5a2c><div class="basis-2/4 font-semibold text-sm" data-v-649a5a2c><p data-v-649a5a2c>Sr No</p></div><div class="basis-2/4" data-v-649a5a2c><p data-v-649a5a2c>${ssrInterpolate((unref(page) - 1) * unref(limit) + index + 1)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-649a5a2c><div class="basis-2/4 font-semibold text-sm" data-v-649a5a2c>Party Name</div><div class="basis-2/4" data-v-649a5a2c>${ssrInterpolate(data.Vendorname)}</div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-649a5a2c><div class="basis-2/4 font-semibold text-sm" data-v-649a5a2c><p data-v-649a5a2c>Location</p></div><div class="basis-2/4" data-v-649a5a2c><p data-v-649a5a2c>${ssrInterpolate(data.Location)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-649a5a2c><div class="basis-2/4 font-semibold text-sm" data-v-649a5a2c>Amount</div><div class="basis-2/4" data-v-649a5a2c>${ssrInterpolate(data.Total)}</div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-649a5a2c><div class="basis-2/4 font-semibold text-sm" data-v-649a5a2c><p data-v-649a5a2c>Date</p></div><div class="basis-2/4" data-v-649a5a2c><p data-v-649a5a2c>${ssrInterpolate(data.BillDate)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-649a5a2c><div class="basis-2/4 font-semibold text-sm" data-v-649a5a2c><p data-v-649a5a2c>View</p></div><div class="basis-2/4" data-v-649a5a2c><div class="icon" data-v-649a5a2c><span data-v-649a5a2c><label for="my-modal-4" class="" data-v-649a5a2c><i class="fa fa-eye cursor-pointer" data-v-649a5a2c></i></label></span></div></div></div><div class="text-center mt-5" data-v-649a5a2c><div class="text-center" data-v-649a5a2c><div data-v-649a5a2c><button class="flex w-20 justify-center bg-green-500 hover:bg-green-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-default transition ease-in duration-200" data-v-649a5a2c>${ssrInterpolate(data.Admin)}</button></div></div></div></div>`);
      });
      _push(`<!--]--><div data-v-649a5a2c><input type="checkbox" id="my-modal-4" class="modal-toggle" data-v-649a5a2c><label for="my-modal-4" class="modal cursor-pointer" data-v-649a5a2c><label class="modal-box relative rounded-none" for="" data-v-649a5a2c><div class="sticky top-0 z-20" title="Close" data-v-649a5a2c><label for="my-modal-4" class="btn btn-sm btn-circle absolute right-3 top-3" data-v-649a5a2c>\u2715</label></div><br data-v-649a5a2c><br data-v-649a5a2c><hr data-v-649a5a2c><div class="overflow-x-auto" data-v-649a5a2c><table class="table table-compact w-full" data-v-649a5a2c><tbody data-v-649a5a2c><tr data-v-649a5a2c><th data-v-649a5a2c>Bill No</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).Id)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Borrower/Project Name</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).Vendorname)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>GST Number</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).VendorGSTnumber)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Payment Type</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).Paymenttype)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Basic Amount</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).Basicamount)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>GST Amount</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).GSTamount)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>TDS</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).TDS)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Total Amount</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).Total)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Advance Payment</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).AdvancePayment)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Payment Amount</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).PaymentAmount)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Location</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).Location)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Verifier Decision</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).Verifier)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Authoriser Decision</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).Authoriser)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Admin Decision</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).Admin)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Report Status</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).status)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Branch Name</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).BranchName)}</td></tr><tr data-v-649a5a2c><th data-v-649a5a2c>Branch Location</th><td data-v-649a5a2c>${ssrInterpolate(unref(specificData).BranchLocation)}</td></tr></tbody></table></div><hr data-v-649a5a2c><br data-v-649a5a2c></label></label></div></div>`);
      if (unref(Data).length > unref(limit)) {
        _push(`<div class="flex w-full" data-v-649a5a2c><div class="flex mx-auto space-x-8" data-v-649a5a2c><button class="w-20"${ssrIncludeBooleanAttr(unref(page) == 1) ? " disabled" : ""} data-v-649a5a2c><span data-v-649a5a2c><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-649a5a2c></span></button><button class="w-20"${ssrIncludeBooleanAttr(unref(page) == unref(totalPages)) ? " disabled" : ""} data-v-649a5a2c><span data-v-649a5a2c><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-649a5a2c></span></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(Data).length == 0) {
        _push(`<div class="mt-10 font-semibold w-full text-2xl text-black flex" data-v-649a5a2c><div class="mx-auto" data-v-649a5a2c> No Data to Display </div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/Admin_ApproveReports.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Admin_ApproveReports = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-649a5a2c"]]);

export { Admin_ApproveReports as default };
//# sourceMappingURL=Admin_ApproveReports-b5ddea78.mjs.map
