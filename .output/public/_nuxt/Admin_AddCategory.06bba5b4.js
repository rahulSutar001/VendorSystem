import"./index.38b26a9b.js";import{f as a,h as e,w as l,x as c,i,l as y,s as n,o as p}from"./entry.7a987982.js";import{_}from"./_plugin-vue_export-helper.c27b6911.js";const g={data(){return{vendorcategory:{Type:"",Vendor:""},SelectVendorCategoryType:{type:""}}},watch:{"SelectVendorCategoryType.type":function(r){this.vendorcategory.Type=r}},methods:{async addVendorCategory(){Object.values(this.vendorcategory).every(o=>o!=="")?(this.vendorcategory,await $fetch("/api/module1/vendorCategoy_Api/vendorcategeorydata",{method:"POST",body:this.vendorcategory}).then(o=>{alert("Vendor Category and Type Added Successfully!"),this.vendorcategory="",location.reload(),console.log(o)}).catch(o=>{console.log(o)})):(alert("Please Fill All the Details."),location.reload())}}},u={class:"flex flex-wrap mt-10"},v=e("div",{class:"grow"},null,-1),h={class:"ml-10 bg-white grow"},m=e("div",{class:"bg-blue-500 text-white w-full px-2 mr-4 py-1 text-center"},[e("h2",{class:"my-1 text-lg text-white px-2 mr-4 py-1"},"Add Vendor Category")],-1),V={class:"p-5 bg-white border-gray-300 rounded w-full"},b=e("label",{for:"",class:"block font-semibold"},[n("Enter Vendor Type"),e("span",{class:"text-red-500 ml-2"},"*")],-1),f=e("option",{value:"",selected:""},"Vendor Type",-1),x=e("option",{value:"A/V vendor"},"A/V vendor",-1),w=e("option",{value:"MBT Vendor"},"MBT Vendor",-1),T=[f,x,w],A={class:"mt-2"},C=e("label",{for:"",class:"block font-semibold mb-1"},[n("Vendor Category"),e("span",{class:"text-red-500 ml-2"},"*")],-1),k={class:"mt-3 text-center"},B=e("div",{class:"grow"},null,-1);function M(r,o,S,E,s,d){return p(),a("div",u,[v,e("div",h,[m,e("div",V,[b,l(e("select",{name:"",id:"","onUpdate:modelValue":o[0]||(o[0]=t=>s.vendorcategory.Type=t),style:{},class:"-ml-0 w-full p-1 border border-gray-300 rounded"},T,512),[[c,s.vendorcategory.Type]]),e("div",A,[C,l(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=t=>s.vendorcategory.Vendor=t),placeholder:"Enter Vendor Category",style:{outline:"none"},class:"w-full p-2 border border-gray-300 rounded"},null,512),[[i,s.vendorcategory.Vendor,void 0,{lazy:!0}]])]),e("div",k,[e("button",{class:"bg-blue-500 text-white px-3 py-1 btn btn-success w-24",onClick:o[2]||(o[2]=y((...t)=>d.addVendorCategory&&d.addVendorCategory(...t),["prevent"]))},"Add")])])]),B])}const P=_(g,[["render",M]]);export{P as default};
