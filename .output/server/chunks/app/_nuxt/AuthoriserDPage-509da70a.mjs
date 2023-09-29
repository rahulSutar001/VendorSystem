import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './next-img-removebg-preview-b90029ec.mjs';
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
  __name: "AuthoriserDPage",
  __ssrInlineRender: true,
  setup(__props) {
    ref("Rahul");
    ref("");
    const page = ref(1);
    const limit = ref(9);
    const Data = ref([]);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="sm:hidden grow ml-7 mt-8 text-center bg-white pb-1"><button class="border-b-2 cursor-default font-semibold text-md lg:text-lg md:text-base">Dashboard</button></div><div class="flex flex-wrap flex-row w-full py-2 sm:mt-8 mt-0"><div class="sm:inline-flex hidden grow ml-5 mt-1"><button class="border-b-2 cursor-default font-semibold text-sm lg:text-lg md:text-base">Dashboard</button></div><div class="ml-8 grow"><div class="float-right w-auto"><div class="rounded-full border-2 bg-white flex searchbar mt-4 sm:mt-0"><div class="overflow-hidden flex"><span style="${ssrRenderStyle(unref(secondsearchbar) ? null : { display: "none" })}"><i class="fa fa-search text-black ml-3 mt-2" style="${ssrRenderStyle({})}"></i></span><input type="text"${ssrRenderAttr("value", unref(searchQuery))} placeholder="Search" class="my-1 ml-5 outline-none bg-white sm:w-auto w-full searchbarinput"></div><div><i class="fa fa-search mx-1 w-full bg-blue-500 pl-4 pr-3 sm:pl-5 sm:pr-4 py-2 text-white rounded-full searchbaricon"></i></div></div></div></div></div><div class="ml-5 w-full rounded-2xl"><div class=""><div class="overflow-x-auto border-2 bigscreentable"><table class="table w-full table-compact min-w-full"><thead><tr><th class="w-1/12">Sr no</th><th class="w-2/12">Party Name</th><th class="w-2/12">Location</th><th class="w-2/12">Amount</th><th class="w-2/12">Date</th><th class="w-2/12">Action</th><th class="w-1/12"> View </th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(paginatedData), (data, index) => {
        _push(`<tr><td>${ssrInterpolate((unref(page) - 1) * unref(limit) + index + 1)}</td><td>${ssrInterpolate(data.Vendorname)}</td><td>${ssrInterpolate(data.Location)}</td><td>${ssrInterpolate(data.Total)}</td><td>${ssrInterpolate(data.BillDate)}</td><td><div class="flex"><div><button class="flex w-20 justify-center bg-green-500 hover:bg-green-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-pointer transition ease-in duration-200">Approve</button></div><div><button class="flex w-20 justify-center bg-red-500 hover:bg-red-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-pointer transition ease-in duration-200">Reject</button></div></div></td><td><div class="icon"><span><label for="my-modal-4" class=""><i class="fa fa-eye cursor-pointer"></i></label></span></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><!--[-->`);
      ssrRenderList(unref(paginatedData), (data, index) => {
        _push(`<div class="overflow-x-auto border-2 my-5 px-5 py-3 sm:text-xs smallscreentable"><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm"><p>Sr No</p></div><div class="basis-2/4"><p>${ssrInterpolate((unref(page) - 1) * unref(limit) + index + 1)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm">Party Name</div><div class="basis-2/4">${ssrInterpolate(data.Vendorname)}</div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm"><p>Location</p></div><div class="basis-2/4"><p>${ssrInterpolate(data.Location)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm">Amount</div><div class="basis-2/4">${ssrInterpolate(data.Total)}</div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm"><p>Date</p></div><div class="basis-2/4"><p>${ssrInterpolate(data.BillDate)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm"><p>View</p></div><div class="basis-2/4"><div class="icon"><span><label for="my-modal-4" class=""><i class="fa fa-eye cursor-pointer"></i></label></span></div></div></div><div class="text-center mt-5"><div class="flex flex-wrap justify-center"><div><button class="flex w-20 justify-center bg-green-500 hover:bg-green-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-pointer transition ease-in duration-200">Approve</button></div><div><button class="flex w-20 justify-center bg-red-500 hover:bg-red-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-pointer transition ease-in duration-200">Reject</button></div></div></div></div>`);
      });
      _push(`<!--]--><div><input type="checkbox" id="my-modal-4" class="modal-toggle rounded-none"><label for="my-modal-4" class="modal cursor-pointer rounded-none"><label class="modal-box relative rounded-none" for=""><div class="sticky top-0 z-20" title="Close"><label for="my-modal-4" class="btn btn-sm btn-circle absolute right-3 top-3">\u2715</label></div><br><br><hr><div class="overflow-x-auto"><table class="table table-compact w-full"><tbody><tr><th>Bill No</th><td>${ssrInterpolate(unref(specificData).Id)}</td></tr><tr><th>Borrower/Project Name</th><td>${ssrInterpolate(unref(specificData).Vendorname)}</td></tr><tr><th>GST Number</th><td>${ssrInterpolate(unref(specificData).VendorGSTnumber)}</td></tr><tr><th>Payment Type</th><td>${ssrInterpolate(unref(specificData).Paymenttype)}</td></tr><tr><th>Basic Amount</th><td>${ssrInterpolate(unref(specificData).Basicamount)}</td></tr><tr><th>GST Amount</th><td>${ssrInterpolate(unref(specificData).GSTamount)}</td></tr><tr><th>TDS</th><td>${ssrInterpolate(unref(specificData).TDS)}</td></tr><tr><th>Total Amount</th><td>${ssrInterpolate(unref(specificData).Total)}</td></tr><tr><th>Advance Payment</th><td>${ssrInterpolate(unref(specificData).AdvancePayment)}</td></tr><tr><th>Payment Amount</th><td>${ssrInterpolate(unref(specificData).PaymentAmount)}</td></tr><tr><th>Location</th><td>${ssrInterpolate(unref(specificData).Location)}</td></tr><tr><th>Verifier Decision</th><td>${ssrInterpolate(unref(specificData).Verifier)}</td></tr><tr><th>Authoriser Decision</th><td>${ssrInterpolate(unref(specificData).Authoriser)}</td></tr><tr><th>Admin Decision</th><td>${ssrInterpolate(unref(specificData).Admin)}</td></tr><tr><th>Report Status</th><td>${ssrInterpolate(unref(specificData).status)}</td></tr><tr><th>Branch Name</th><td>${ssrInterpolate(unref(specificData).BranchName)}</td></tr><tr><th>Branch Location</th><td>${ssrInterpolate(unref(specificData).BranchLocation)}</td></tr></tbody></table></div><hr><br></label></label></div></div>`);
      if (unref(Data).length > unref(limit)) {
        _push(`<div class="flex w-full"><div class="flex mx-auto space-x-8"><button class="w-20"${ssrIncludeBooleanAttr(unref(page) == 1) ? " disabled" : ""}><span><img${ssrRenderAttr("src", _imports_0)} alt=""></span></button><button class="w-20"${ssrIncludeBooleanAttr(unref(page) == unref(totalPages)) ? " disabled" : ""}><span><img${ssrRenderAttr("src", _imports_1)} alt=""></span></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(Data).length == 0) {
        _push(`<div class="mt-10 font-semibold w-full text-2xl text-black flex"><div class="mx-auto"> No Data to Display </div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/AuthoriserDPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=AuthoriserDPage-509da70a.mjs.map
