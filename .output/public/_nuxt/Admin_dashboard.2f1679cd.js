import{_ as u,a as h}from"./rejectedreports.31cb614a.js";import{_ as b,a as v,b as A}from"./User3.0ad3e873.js";import{_ as x}from"./_plugin-vue_export-helper.c27b6911.js";import{B as i,f,h as t,c as r,m as d,o as s}from"./entry.7a987982.js";const k={data(){return{ActiveTab:"home",branchandlocation:{}}},methods:{async signoutmethod(){await $fetch("api/signoutapi/signout",{method:"POST"}).then(l=>{window.location.href="/"}).catch(l=>{console.log(l)})},getDat(){let l=Cookie.get("user");this.data=JSON.parse(l),this.dataStore.setsahredcookie(data)}}},C={class:"bg-slate-100"},T={class:"w-16 float-left md:display-none fixed top-14"},w={class:"grid grid-rows-2",style:{"background-color":"#0400AF",height:"96vh"}},R={class:"mt-2"},B=t("i",{class:"fa fa-th text-white",style:{"font-size":"18px"}},null,-1),V=[B],j=t("img",{src:u,style:{width:"19px"},alt:""},null,-1),S=[j],L=t("img",{src:h,style:{width:"23px"},alt:""},null,-1),N=[L],z=t("img",{src:b,style:{width:"21px"},alt:""},null,-1),D=[z],O=t("img",{src:v,style:{width:"22px"},alt:""},null,-1),E=[O],F=t("img",{src:A,style:{width:"24px"},alt:""},null,-1),H=[F],J={class:"",style:{"margin-top":"200px"}},P=t("i",{class:"fa fa-sign-out text-white",style:{"font-size":"15px"}},null,-1),U=[P],q=t("hr",null,null,-1),G=t("br",null,null,-1),I={class:"ml-16 px-10",style:{width:"93vw"}};function K(l,e,M,Q,o,c){const a=i("SuperAdmin"),p=i("Create_Vendor"),_=i("Admin_ApprovedReports"),m=i("Admin_RejectedReports"),y=i("AddBranchLocation"),g=i("AddCategory");return s(),f("div",C,[t("div",T,[t("div",w,[t("div",R,[t("button",{class:"bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3",title:"Home",onClick:e[0]||(e[0]=n=>o.ActiveTab="home")},V),t("button",{class:"bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3",title:"Approved Report",onClick:e[1]||(e[1]=n=>o.ActiveTab="approvedreports")},S),t("button",{class:"bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3",title:"Rejected Report",onClick:e[2]||(e[2]=n=>o.ActiveTab="rejectedreports")},N),t("button",{class:"bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3",title:"Add Location Details",onClick:e[3]||(e[3]=n=>o.ActiveTab="addtypeCategory")},D),t("button",{class:"bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3",title:"Add Vendor Type",onClick:e[4]||(e[4]=n=>o.ActiveTab="addVendorType")},E),t("button",{class:"bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3",title:"Create User",onClick:e[5]||(e[5]=n=>o.ActiveTab="generateReport")},H)]),t("div",J,[t("button",{class:"bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3",onClick:e[6]||(e[6]=n=>c.signoutmethod())},U)])])]),q,G,t("div",I,[o.ActiveTab==="home"?(s(),r(a,{key:0})):d("",!0),o.ActiveTab==="generateReport"?(s(),r(p,{key:1})):d("",!0),o.ActiveTab==="approvedreports"?(s(),r(_,{key:2})):d("",!0),o.ActiveTab==="rejectedreports"?(s(),r(m,{key:3})):d("",!0),o.ActiveTab==="addtypeCategory"?(s(),r(y,{key:4})):d("",!0),o.ActiveTab==="addVendorType"?(s(),r(g,{key:5})):d("",!0)])])}const $=x(k,[["render",K]]);export{$ as default};