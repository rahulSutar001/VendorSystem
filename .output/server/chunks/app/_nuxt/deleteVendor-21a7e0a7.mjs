import { useSSRContext, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
      successdata: [],
      specificData: [],
      searchQuery: "",
      searchQuery2: "",
      secondsearchbar: false,
      page: 1,
      limit: 6
    };
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
    async getAllVendor() {
      await $fetch("/api/Edit_vendor_APi/vendor").then((res) => {
        console.log(res);
        this.successdata = res;
      }).catch((err) => {
        console.log();
      });
    },
    getSpecificData(value) {
      this.specificData = value;
    },
    // changesearchtype(value) {
    //     this.searchQuery = value
    // },
    DeleteVendor(value) {
      const id = value;
      $fetch("/api/Edit_vendor_APi/vendordelete", {
        method: "DELETE",
        body: { id }
      }).then((res) => {
        alert("Deleted successfully!");
        this.getAllVendor();
      }).catch((err) => {
      });
    }
  },
  computed: {
    filteredData() {
      if (!this.searchQuery) {
        return this.successdata;
      }
      const searchTerm = this.searchQuery.toLowerCase();
      return this.successdata.filter((item) => {
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
  mounted() {
    this.getAllVendor();
    const start = (this.page - 1) * this.limit;
    start + this.limit;
    watch(this.Data, () => {
      this.page = 1;
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ml-4" }, _attrs))}><div class="mobileView"><div class="sm:hidden grow ml-7 mt-6 text-center bg-white title"><button class="border-b-2 cursor-default font-semibold text-md lg:text-lg md:text-base">Delete User</button></div><div class="flex flex-wrap w-full py-1 sm:mt-8 -mt-3 sbar"><div class="sm:inline-flex hidden grow my-2"><button class="border-b-2 cursor-default font-semibold text-sm lg:text-lg md:text-base">Delete User</button></div><div class="ml-8 grow"><div class="float-right w-auto"><div class="rounded-full border-2 bg-white flex searchbar mt-4 sm:mt-0"><div class="overflow-hidden flex"><span style="${ssrRenderStyle($data.secondsearchbar ? null : { display: "none" })}"><i class="fa fa-search text-black ml-3 mt-2" style="${ssrRenderStyle({})}"></i></span><input type="text"${ssrRenderAttr("value", $data.searchQuery)} placeholder="Search" class="my-1 ml-5 outline-none bg-white sm:w-auto w-full searchbarinput"></div><div><i class="fa fa-search mx-1 w-full bg-blue-500 pl-4 pr-3 sm:pl-5 sm:pr-4 py-2 text-white rounded-full searchbaricon"></i></div></div></div></div></div><div class="flex flex-wrap overflow-x-auto border-b-2 bg-white header mb-6 selectbar"><div class="flex flex-nowrap px-3 mt-2 mb-2 space-x-5"><div class="grow"><button class="${ssrRenderClass([{ "font-semibold": $data.searchQuery === "" }, "outline-none sm:text-base text-sm hover:border-b-1"])}">All Users</button></div><div class="grow"><button class="${ssrRenderClass([{ "font-semibold": $data.searchQuery === "User" }, "outline-none hover:border-b-1"])}">Users</button></div><div class="grow"><button class="${ssrRenderClass([{ "font-semibold": $data.searchQuery === "Authoriser" }, "outline-none hover:border-b-4"])}">Authoriser</button></div><div class="grow"><button class="${ssrRenderClass([{ "font-semibold": $data.searchQuery === "Verifier" }, "outline-none hover:border-b-4"])}">Verifier</button></div><div class="grow"><button class="${ssrRenderClass([{ "font-semibold": $data.searchQuery === "Admin" }, "outline-none hover:border-b-4"])}">Admin</button></div></div><div></div></div></div><div class=""><div class="overflow-x-auto border-2 bigscreentable"><table class="table w-full table-compact min-w-full"><thead><tr><th class="w-1/12">Sr no</th><th class="w-2/12">Name</th><th class="w-2/12">Branch Location</th><th class="w-2/12">Branch Name</th><th class="w-2/12">Role</th><th class="w-2/12">Action</th><th class="w-1/12"> View </th></tr></thead><tbody><!--[-->`);
  ssrRenderList($options.paginatedData, (data, index) => {
    _push(`<tr><td>${ssrInterpolate(($data.page - 1) * $data.limit + index + 1)}</td><td>${ssrInterpolate(data.Vendorname)}</td><td>${ssrInterpolate(data.BranchLocation)}</td><td>${ssrInterpolate(data.Branchname)}</td><td>`);
    if (data.User === "True") {
      _push(`<button>User</button>`);
    } else {
      _push(`<!---->`);
    }
    if (data.Admin === "True") {
      _push(`<button>Admin</button>`);
    } else {
      _push(`<!---->`);
    }
    if (data.Authoriser === "True") {
      _push(`<button>Authoriser</button>`);
    } else {
      _push(`<!---->`);
    }
    if (data.Verifier === "True") {
      _push(`<button>Verifier</button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</td><td><div class="flex"><div><button class="flex w-20 justify-center bg-green-500 hover:bg-green-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-pointer transition ease-in duration-200">Delete</button></div></div></td><td><div class="icon"><span><label for="my-modal-4" class=""><i class="fa fa-eye cursor-pointer"></i></label></span></div></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div><!--[-->`);
  ssrRenderList($options.paginatedData, (data, index) => {
    _push(`<div class="overflow-x-auto bg-white border-2 my-5 px-5 py-3 sm:text-xs header smallscreentable"><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm"><p>Sr No</p></div><div class="basis-2/4"><p>${ssrInterpolate(($data.page - 1) * $data.limit + index + 1)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm">Party Name</div><div class="basis-2/4">${ssrInterpolate(data.Vendorname)}</div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm"><p>Branch Location</p></div><div class="basis-2/4"><p>${ssrInterpolate(data.BranchLocation)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm">Branch Name</div><div class="basis-2/4">${ssrInterpolate(data.Branchname)}</div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm"><p>Bank Name</p></div><div class="basis-2/4"><p>${ssrInterpolate(data.BankName)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm"><p>Bank Account Number</p></div><div class="basis-2/4"><p>${ssrInterpolate(data.BankAccountNumber)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm"><p>Bank IFSC Code</p></div><div class="basis-2/4"><p>${ssrInterpolate(data.BankIFCcode)}</p></div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm"><p>Role</p></div><div class="basis-2/4">`);
    if (data.User === "True") {
      _push(`<button>User</button>`);
    } else {
      _push(`<!---->`);
    }
    if (data.Admin === "True") {
      _push(`<button>Admin</button>`);
    } else {
      _push(`<!---->`);
    }
    if (data.Authoriser === "True") {
      _push(`<button>Authoriser</button>`);
    } else {
      _push(`<!---->`);
    }
    if (data.Verifier === "True") {
      _push(`<button>Verifier</button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div><div class="flex text-left my-2 py-1 border-b-2"><div class="basis-2/4 font-semibold text-sm"><p>View</p></div><div class="basis-2/4"><div class="icon"><span><label for="my-modal-4" class=""><i class="fa fa-eye cursor-pointer"></i></label></span></div></div></div><div class="text-center mt-5"><div class="flex flex-wrap justify-center"><div><button class="flex w-20 justify-center bg-green-500 hover:bg-green-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-pointer transition ease-in duration-200">Delete</button></div></div></div></div>`);
  });
  _push(`<!--]--><div><input type="checkbox" id="my-modal-4" class="modal-toggle"><label for="my-modal-4" class="modal cursor-pointer"><label class="modal-box relative rounded-none" for=""><div class="sticky top-0 z-20" title="Close"><label for="my-modal-4" class="btn btn-sm btn-circle absolute right-3 top-3">\u2715</label></div><br><br><hr><div class="overflow-x-auto"><table class="table table-compact w-full"><tbody><tr><th>Sr no.</th><td>${ssrInterpolate($data.specificData.Id)}</td></tr><tr><th>Name</th><td>${ssrInterpolate($data.specificData.Vendorname)}</td></tr><tr><th>Role</th><td>`);
  if ($data.specificData.User === "True") {
    _push(`<button>User</button>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.specificData.Admin === "True") {
    _push(`<button>Admin</button>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.specificData.Authoriser === "True") {
    _push(`<button>Authoriser</button>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.specificData.Verifier === "True") {
    _push(`<button>Verifier</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</td></tr><tr><th>Branch Location</th><td>${ssrInterpolate($data.specificData.BranchLocation)}</td></tr><tr><th>Branch Name</th><td>${ssrInterpolate($data.specificData.Branchname)}</td></tr><tr><th>Bank Name</th><td>${ssrInterpolate($data.specificData.BankName)}</td></tr><tr><th>Bank Account Number</th><td>${ssrInterpolate($data.specificData.BankAccountNumber)}</td></tr><tr><th>Bank IFSC Number</th><td>${ssrInterpolate($data.specificData.BankIFCcode)}</td></tr></tbody></table></div><hr><br></label></label></div>`);
  if ($data.successdata.length > $data.limit) {
    _push(`<div class="text-center my-5"><div class="grow"><div class="mr-5"><button class="rounded-full"${ssrIncludeBooleanAttr(_ctx.currentPage === 1) ? " disabled" : ""}><img${ssrRenderAttr("src", _imports_0)} class="w-20 hover:scale-105" alt=""></button><button class="ml-5"${ssrIncludeBooleanAttr(_ctx.currentPage === $options.totalPages) ? " disabled" : ""}><img${ssrRenderAttr("src", _imports_1)} class="w-20 hover:scale-105" alt=""></button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.successdata.length == 0) {
    _push(`<div class="mt-10 font-semibold w-full text-2xl text-black flex"><div class="mx-auto"> No Data to Display </div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/deleteVendor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deleteVendor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { deleteVendor as default };
//# sourceMappingURL=deleteVendor-21a7e0a7.mjs.map
