import { useSSRContext, watch, mergeProps } from 'vue';
import axios from 'axios';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  data() {
    return {
      name: "Rahul",
      search: "",
      page: 1,
      limit: 8,
      Data: [],
      specificData: {},
      data: {},
      json: {},
      lang: "en",
      searchQuery: "",
      setdata: [],
      secondsearchbar: false
    };
  },
  async mounted() {
    await axios.get("/api/module1/UserAPI/GetAllReports").then((res) => {
      this.Data = res.data;
      this.Data.map((data) => {
        data.BillDate = data.BillDate.split("T", 1)[0];
      });
    });
    const start = (this.page - 1) * this.limit;
    start + this.limit;
    watch(this.Data, () => {
      this.page = 1;
    });
  },
  computed: {
    filteredData() {
      if (!this.searchQuery) {
        return this.Data;
      }
      const searchTerm = this.searchQuery.toLowerCase();
      return this.Data.filter((item) => {
        return Object.values(item).some((value) => {
          if (typeof value === "string") {
            return value.toLowerCase().includes(searchTerm);
          }
          return false;
        });
      });
    },
    // the pagination code starts here 
    totalPages() {
      return Math.ceil(this.filteredData.length / this.limit);
    },
    paginatedData() {
      const startIndex = (this.page - 1) * this.limit;
      const endIndex = startIndex + this.limit;
      return this.filteredData.slice(startIndex, endIndex);
    }
    // the pagination code ends here 
  },
  methods: {
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
      }
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    async update() {
      await axios.get("/api/module1/UserAPI/Update", {
        method: "PUT"
      });
    },
    getSpecificData(value) {
      this.specificData = value;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-309ff7c5><div class="sm:hidden grow ml-7 mt-8 text-center bg-white pb-1" data-v-309ff7c5><button class="border-b-2 cursor-default font-semibold text-md lg:text-lg md:text-base" data-v-309ff7c5>Dashboard</button></div><div class="flex flex-wrap flex-row w-full py-2 sm:mt-8 mt-0" data-v-309ff7c5><div class="sm:inline-flex hidden grow ml-5 mt-1" data-v-309ff7c5><button class="border-b-2 cursor-default font-semibold text-sm lg:text-lg md:text-base" data-v-309ff7c5>Dashboard</button></div><div class="ml-8 grow" data-v-309ff7c5><div class="float-right w-auto" data-v-309ff7c5><div class="rounded-full border-2 bg-white flex searchbar mt-4 sm:mt-0" data-v-309ff7c5><div class="overflow-hidden flex" data-v-309ff7c5><span style="${ssrRenderStyle($data.secondsearchbar ? null : { display: "none" })}" data-v-309ff7c5><i class="fa fa-search text-black ml-3 mt-2" style="${ssrRenderStyle({})}" data-v-309ff7c5></i></span><input type="text"${ssrRenderAttr("value", $data.searchQuery)} placeholder="Search" class="my-1 ml-5 outline-none bg-white sm:w-auto w-full searchbarinput" data-v-309ff7c5></div><div data-v-309ff7c5><i class="fa fa-search mx-1 w-full bg-blue-500 pl-4 pr-3 sm:pl-5 sm:pr-4 py-2 text-white rounded-full searchbaricon" data-v-309ff7c5></i></div></div></div></div></div><div class="bg-white sm:bg-none ml-5 w-full rounded-2xl" data-v-309ff7c5><div class="" data-v-309ff7c5><div class="overflow-x-auto border-2 bigscreentable" data-v-309ff7c5><table class="table w-full table-compact min-w-full" data-v-309ff7c5><thead data-v-309ff7c5><tr data-v-309ff7c5><th class="w-1/12" data-v-309ff7c5>Sr No</th><th class="w-2/12" data-v-309ff7c5>Party Name</th><th class="w-2/12" data-v-309ff7c5>Location</th><th class="w-2/12" data-v-309ff7c5>Amount</th><th class="w-2/12" data-v-309ff7c5>Date</th><th class="w-2/12" data-v-309ff7c5>Report Status</th><th class="w-1/12" data-v-309ff7c5> View </th></tr></thead><tbody data-v-309ff7c5><!--[-->`);
  ssrRenderList($options.paginatedData, (data, index) => {
    _push(`<tr data-v-309ff7c5><td data-v-309ff7c5>${ssrInterpolate(($data.page - 1) * $data.limit + index + 1)}</td><td data-v-309ff7c5>${ssrInterpolate(data.Vendorname)}</td><td data-v-309ff7c5>${ssrInterpolate(data.Location)}</td><td data-v-309ff7c5>${ssrInterpolate(data.Total)}</td><td data-v-309ff7c5>${ssrInterpolate(data.BillDate)}</td><td data-v-309ff7c5><button id="status" style="${ssrRenderStyle({ "font-family": "Roboto" })}" class="${ssrRenderClass([{
      "bg-green-600 , text-white": data.status == "Approved",
      "bg-red-600 , text-white": data.status == "Rejected",
      "bg-yellow-600 , text-white": data.status == "Pending"
    }, "cursor-default px-3 py-1 w-24 rounded-sm"])}" data-v-309ff7c5>${ssrInterpolate(data.status)}</button></td><td data-v-309ff7c5><div class="icon" data-v-309ff7c5><span data-v-309ff7c5><label for="my-modal-4" class="cursor-pointer" data-v-309ff7c5><i class="fa fa-eye" data-v-309ff7c5></i></label></span></div></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div><!--[-->`);
  ssrRenderList($options.paginatedData, (data, index) => {
    _push(`<div class="overflow-x-auto border-2 my-5 px-5 py-3 sm:text-xs smallscreentable" data-v-309ff7c5><div class="flex text-left my-2 py-1 border-b-2" data-v-309ff7c5><div class="basis-2/4 font-semibold text-sm" data-v-309ff7c5><p data-v-309ff7c5>Sr No</p></div><div class="basis-2/4" data-v-309ff7c5><p data-v-309ff7c5>${ssrInterpolate(($data.page - 1) * $data.limit + index + 1)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-309ff7c5><div class="basis-2/4 font-semibold text-sm" data-v-309ff7c5>Party Name</div><div class="basis-2/4" data-v-309ff7c5>${ssrInterpolate(data.Vendorname)}</div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-309ff7c5><div class="basis-2/4 font-semibold text-sm" data-v-309ff7c5><p data-v-309ff7c5>Location</p></div><div class="basis-2/4" data-v-309ff7c5><p data-v-309ff7c5>${ssrInterpolate(data.Location)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-309ff7c5><div class="basis-2/4 font-semibold text-sm" data-v-309ff7c5>Amount</div><div class="basis-2/4" data-v-309ff7c5>${ssrInterpolate(data.Total)}</div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-309ff7c5><div class="basis-2/4 font-semibold text-sm" data-v-309ff7c5><p data-v-309ff7c5>Date</p></div><div class="basis-2/4" data-v-309ff7c5><p data-v-309ff7c5>${ssrInterpolate(data.BillDate)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2" data-v-309ff7c5><div class="basis-2/4 font-semibold text-sm" data-v-309ff7c5><p data-v-309ff7c5>View</p></div><div class="basis-2/4" data-v-309ff7c5><div class="icon" data-v-309ff7c5><span data-v-309ff7c5><label for="my-modal-4" class="" data-v-309ff7c5><i class="fa fa-eye cursor-pointer" data-v-309ff7c5></i></label></span></div></div></div><div class="text-center mt-5" data-v-309ff7c5><div class="text-center" data-v-309ff7c5><div data-v-309ff7c5><button class="flex justify-center bg-green-600 hover:bg-green-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-pointer transition ease-in duration-200" data-v-309ff7c5>${ssrInterpolate(data.status)}</button></div></div></div></div>`);
  });
  _push(`<!--]--><div class="" data-v-309ff7c5><input type="checkbox" id="my-modal-4" class="modal-toggle" data-v-309ff7c5><label for="my-modal-4" class="modal cursor-pointer model-dialog-scrollable" data-v-309ff7c5><label class="modal-box relative rounded-none" for="" data-v-309ff7c5><div class="sticky top-0 z-20" data-v-309ff7c5><label for="my-modal-4" class="btn btn-sm btn-circle absolute right-3 top-3" data-v-309ff7c5>\u2715</label></div><br data-v-309ff7c5><br data-v-309ff7c5><hr data-v-309ff7c5><div class="overflow-x-auto" data-v-309ff7c5><table class="table table-compact w-full" data-v-309ff7c5><tbody data-v-309ff7c5><tr data-v-309ff7c5><th data-v-309ff7c5>Bill No</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.Id)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Borrower/Project Name</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.Vendorname)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>GST Number</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.VendorGSTnumber)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Payment Type</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.Paymenttype)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Basic Amount</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.Basicamount)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>GST Amount</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.GSTamount)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>TDS</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.TDS)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Total Amount</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.Total)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Advance Payment</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.AdvancePayment)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Payment Amount</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.PaymentAmount)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Location</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.Location)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Verifier Decision</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.Verifier)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Authoriser Decision</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.Authoriser)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Admin Decision</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.Admin)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Report Status</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.status)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Branch Name</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.BranchName)}</td></tr><tr data-v-309ff7c5><th data-v-309ff7c5>Branch Location</th><td data-v-309ff7c5>${ssrInterpolate($data.specificData.BranchLocation)}</td></tr></tbody></table></div><hr data-v-309ff7c5></label></label></div></div>`);
  if ($data.Data.length > $data.limit) {
    _push(`<div class="flex w-full" data-v-309ff7c5><div class="flex mx-auto space-x-8" data-v-309ff7c5><button class="w-20"${ssrIncludeBooleanAttr($data.page == 1) ? " disabled" : ""} data-v-309ff7c5><span data-v-309ff7c5><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-309ff7c5></span></button><button class="w-20"${ssrIncludeBooleanAttr($data.page == $options.totalPages) ? " disabled" : ""} data-v-309ff7c5><span data-v-309ff7c5><img${ssrRenderAttr("src", _imports_1)} alt="" data-v-309ff7c5></span></button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.Data.length == 0) {
    _push(`<div class="mt-10 font-semibold w-full text-2xl text-black flex" data-v-309ff7c5><div class="mx-auto" data-v-309ff7c5> No Data to Display </div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/User_DPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const User_DPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-309ff7c5"]]);

export { User_DPage as default };
//# sourceMappingURL=User_DPage-6af2b76d.mjs.map
