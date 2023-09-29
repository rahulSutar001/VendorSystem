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
  __name: "User_RejectedReports",
  __ssrInlineRender: true,
  setup(__props) {
    ref("Rahul");
    ref("");
    const page = ref(1);
    const limit = ref(9);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-468514b1><div class="sm:hidden grow ml-7 mt-8 text-center bg-white pb-1" data-v-468514b1><button class="border-b-2 cursor-default font-semibold text-md lg:text-lg md:text-base" data-v-468514b1>Rejected Reports</button></div><div class="flex flex-wrap flex-row w-full py-2 sm:mt-8 mt-0" data-v-468514b1><div class="sm:inline-flex hidden grow ml-5 mt-1" data-v-468514b1><button class="border-b-2 cursor-default font-semibold text-sm lg:text-lg md:text-base" data-v-468514b1>Rejected Reports</button></div><div class="ml-8 grow" data-v-468514b1><div class="float-right w-auto" data-v-468514b1><div class="rounded-full border-2 bg-white flex searchbar mt-4 sm:mt-0" data-v-468514b1><div class="overflow-hidden flex" data-v-468514b1><span style="${ssrRenderStyle(unref(secondsearchbar) ? null : { display: "none" })}" data-v-468514b1><i class="fa fa-search text-black ml-3 mt-2" style="${ssrRenderStyle({})}" data-v-468514b1></i></span><input type="text"${ssrRenderAttr("value", unref(searchQuery))} placeholder="Search" class="my-1 ml-5 outline-none bg-white sm:w-auto w-full searchbarinput" data-v-468514b1></div><div data-v-468514b1><i class="fa fa-search mx-1 w-full bg-blue-500 pl-4 pr-3 sm:pl-5 sm:pr-4 py-2 text-white rounded-full searchbaricon" data-v-468514b1></i></div></div></div></div></div><div class="bg-white sm:bg-none ml-5 w-full rounded-2xl" data-v-468514b1><div class="" data-v-468514b1><div class="overflow-x-auto border-2 bigscreentable" data-v-468514b1><table class="table w-full table-compact min-w-full" data-v-468514b1><thead data-v-468514b1><tr data-v-468514b1><th class="w-1/12" data-v-468514b1>Sr no</th><th class="w-2/12" data-v-468514b1>Party Name</th><th class="w-2/12" data-v-468514b1>Location</th><th class="w-2/12" data-v-468514b1>Amount</th><th class="w-2/12" data-v-468514b1>Date</th><th class="w-2/12" data-v-468514b1>Status</th><th class="w-1/12" data-v-468514b1> View </th></tr></thead><tbody data-v-468514b1><!--[-->`);
      ssrRenderList(unref(paginatedData), (data, index) => {
        _push(`<tr data-v-468514b1><td data-v-468514b1>${ssrInterpolate((unref(page) - 1) * unref(limit) + index + 1)}</td><td data-v-468514b1>${ssrInterpolate(data.Vendorname)}</td><td data-v-468514b1>${ssrInterpolate(data.Location)}</td><td data-v-468514b1>${ssrInterpolate(data.Total)}</td><td data-v-468514b1>${ssrInterpolate(data.BillDate)}</td><td data-v-468514b1><div class="" data-v-468514b1><div data-v-468514b1><button class="flex justify-center bg-red-600 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm" data-v-468514b1>${ssrInterpolate(data.status)}</button></div></div></td><td data-v-468514b1><div class="icon" data-v-468514b1><span data-v-468514b1><label for="my-modal-4" class="" data-v-468514b1><i class="fa fa-eye" data-v-468514b1></i></label></span></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><!--[-->`);
      ssrRenderList(unref(paginatedData), (data, index) => {
        _push(`<div class="overflow-x-auto border-2 my-5 px-5 py-3 sm:text-xs smallscreentable" data-v-468514b1><div class="flex text-left my-2 py-1 border-b-2" data-v-468514b1><div class="basis-2/4 font-semibold text-sm" data-v-468514b1><p data-v-468514b1>Sr No</p></div><div class="basis-2/4" data-v-468514b1><p data-v-468514b1>${ssrInterpolate(index + 1)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-468514b1><div class="basis-2/4 font-semibold text-sm" data-v-468514b1>Party Name</div><div class="basis-2/4" data-v-468514b1>${ssrInterpolate(data.Vendorname)}</div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-468514b1><div class="basis-2/4 font-semibold text-sm" data-v-468514b1><p data-v-468514b1>Location</p></div><div class="basis-2/4" data-v-468514b1><p data-v-468514b1>${ssrInterpolate(data.Location)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-468514b1><div class="basis-2/4 font-semibold text-sm" data-v-468514b1>Amount</div><div class="basis-2/4" data-v-468514b1>${ssrInterpolate(data.Total)}</div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-468514b1><div class="basis-2/4 font-semibold text-sm" data-v-468514b1><p data-v-468514b1>Date</p></div><div class="basis-2/4" data-v-468514b1><p data-v-468514b1>${ssrInterpolate(data.BillDate)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-468514b1><div class="basis-2/4 font-semibold text-sm" data-v-468514b1><p data-v-468514b1>View</p></div><div class="basis-2/4" data-v-468514b1><div class="icon" data-v-468514b1><span data-v-468514b1><label for="my-modal-4" class="" data-v-468514b1><i class="fa fa-eye cursor-pointer" data-v-468514b1></i></label></span></div></div></div><div class="text-center mt-5" data-v-468514b1><div class="text-center" data-v-468514b1><div data-v-468514b1><button class="flex justify-center bg-green-600 hover:bg-green-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-pointer transition ease-in duration-200" data-v-468514b1>${ssrInterpolate(data.status)}</button></div></div></div></div>`);
      });
      _push(`<!--]--><div data-v-468514b1><input type="checkbox" id="my-modal-4" class="modal-toggle" data-v-468514b1><label for="my-modal-4" class="modal cursor-pointer" data-v-468514b1><label class="modal-box relative rounded-none" for="" data-v-468514b1><div class="sticky top-0 z-20" title="Close" data-v-468514b1><label for="my-modal-4" class="btn btn-sm btn-circle absolute right-3 top-3" data-v-468514b1>\u2715</label></div><br data-v-468514b1><br data-v-468514b1><hr data-v-468514b1><div class="overflow-x-auto" data-v-468514b1><table class="table table-compact w-full" data-v-468514b1><tbody data-v-468514b1><tr data-v-468514b1><th data-v-468514b1>Bill No</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).Id)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Borrower/Project Name</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).Vendorname)}</td></tr><tr data-v-468514b1><th data-v-468514b1>GST Number</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).VendorGSTnumber)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Payment Type</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).Paymenttype)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Basic Amount</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).Basicamount)}</td></tr><tr data-v-468514b1><th data-v-468514b1>GST Amount</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).GSTamount)}</td></tr><tr data-v-468514b1><th data-v-468514b1>TDS</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).TDS)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Total Amount</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).Total)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Advance Payment</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).AdvancePayment)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Payment Amount</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).PaymentAmount)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Location</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).Location)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Verifier Decision</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).Verifier)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Authoriser Decision</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).Authoriser)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Admin Decision</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).Admin)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Report Status</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).status)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Branch Name</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).BranchName)}</td></tr><tr data-v-468514b1><th data-v-468514b1>Branch Location</th><td data-v-468514b1>${ssrInterpolate(unref(specificData).BranchLocation)}</td></tr></tbody></table></div><hr data-v-468514b1></label></label></div></div>`);
      if (unref(Data).length > unref(limit)) {
        _push(`<div class="flex w-full" data-v-468514b1><div class="flex mx-auto space-x-8" data-v-468514b1><button class="w-20"${ssrIncludeBooleanAttr(unref(page) == 1) ? " disabled" : ""} data-v-468514b1><span data-v-468514b1><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-468514b1></span></button><button class="w-20"${ssrIncludeBooleanAttr(unref(page) == unref(totalPages)) ? " disabled" : ""} data-v-468514b1><span data-v-468514b1><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-468514b1></span></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(Data).length == 0) {
        _push(`<div class="mt-10 font-semibold w-full text-2xl text-black flex" data-v-468514b1><div class="mx-auto" data-v-468514b1> No Data to Display </div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/User_RejectedReports.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const User_RejectedReports = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-468514b1"]]);

export { User_RejectedReports as default };
//# sourceMappingURL=User_RejectedReports-fec06654.mjs.map
