import{z as x,f as c,h as t,w as _,v as g,i as v,F as h,k as m,t as l,m as f,o as r,A as y,p as D,q as w}from"./entry.7a987982.js";import{a as p}from"./index.38b26a9b.js";import{_ as P,a as S}from"./next-img-removebg-preview.08feb811.js";import{_ as k}from"./_plugin-vue_export-helper.c27b6911.js";const A={data(){return{name:"Rahul",search:"",page:1,limit:8,Data:[],specificData:{},data:{},json:{},lang:"en",searchQuery:"",setdata:[],secondsearchbar:!1}},async mounted(){await p.get("/api/module1/UserAPI/GetAllReports").then(i=>{this.Data=i.data,this.Data.map(d=>{d.BillDate=d.BillDate.split("T",1)[0]})}),(this.page-1)*this.limit+this.limit,x(this.Data,()=>{this.page=1})},computed:{filteredData(){if(!this.searchQuery)return this.Data;const n=this.searchQuery.toLowerCase();return this.Data.filter(i=>Object.values(i).some(d=>typeof d=="string"?d.toLowerCase().includes(n):!1))},totalPages(){return Math.ceil(this.filteredData.length/this.limit)},paginatedData(){const n=(this.page-1)*this.limit,i=n+this.limit;return this.filteredData.slice(n,i)}},methods:{nextPage(){this.page<this.totalPages&&this.page++},previousPage(){this.page>1&&this.page--},async update(){await p.get("/api/module1/UserAPI/Update",{method:"PUT"})},getSpecificData(n){this.specificData=n}}},s=n=>(D("data-v-309ff7c5"),n=n(),w(),n),B={class:""},T=s(()=>t("div",{class:"sm:hidden grow ml-7 mt-8 text-center bg-white pb-1"},[t("button",{class:"border-b-2 cursor-default font-semibold text-md lg:text-lg md:text-base"},"Dashboard")],-1)),N={class:"flex flex-wrap flex-row w-full py-2 sm:mt-8 mt-0"},L=s(()=>t("div",{class:"sm:inline-flex hidden grow ml-5 mt-1"},[t("button",{class:"border-b-2 cursor-default font-semibold text-sm lg:text-lg md:text-base"},"Dashboard")],-1)),V={class:"ml-8 grow"},C={class:"float-right w-auto"},I={class:"rounded-full border-2 bg-white flex searchbar mt-4 sm:mt-0"},U={class:"overflow-hidden flex"},R=s(()=>t("i",{class:"fa fa-search text-black ml-3 mt-2",style:{}},null,-1)),j=[R],G=s(()=>t("div",null,[t("i",{class:"fa fa-search mx-1 w-full bg-blue-500 pl-4 pr-3 sm:pl-5 sm:pr-4 py-2 text-white rounded-full searchbaricon"})],-1)),Q={class:"bg-white sm:bg-none ml-5 w-full rounded-2xl"},F={class:""},z={class:"overflow-x-auto border-2 bigscreentable"},M={class:"table w-full table-compact min-w-full"},q=s(()=>t("thead",null,[t("tr",null,[t("th",{class:"w-1/12"},"Sr No"),t("th",{class:"w-2/12"},"Party Name"),t("th",{class:"w-2/12"},"Location"),t("th",{class:"w-2/12"},"Amount"),t("th",{class:"w-2/12"},"Date"),t("th",{class:"w-2/12"},"Report Status"),t("th",{class:"w-1/12"}," View ")])],-1)),E={class:"icon"},O={for:"my-modal-4",class:"cursor-pointer"},H=["onClick"],J={class:"flex text-left my-2 py-1 border-b-2"},K=s(()=>t("div",{class:"basis-2/4 font-semibold text-sm"},[t("p",null,"Sr No")],-1)),W={class:"basis-2/4"},X={class:"flex text-left my-2 py-1 border-b-2"},Y=s(()=>t("div",{class:"basis-2/4 font-semibold text-sm"},"Party Name",-1)),Z={class:"basis-2/4"},$={class:"flex text-left my-2 py-1 border-b-2"},tt=s(()=>t("div",{class:"basis-2/4 font-semibold text-sm"},[t("p",null,"Location")],-1)),st={class:"basis-2/4"},et={class:"flex text-left my-2 py-1 border-b-2"},lt=s(()=>t("div",{class:"basis-2/4 font-semibold text-sm"},"Amount",-1)),ot={class:"basis-2/4"},it={class:"flex text-left my-2 py-1 border-b-2"},nt=s(()=>t("div",{class:"basis-2/4 font-semibold text-sm"},[t("p",null,"Date")],-1)),at={class:"basis-2/4"},ct={class:"flex text-left my-2 py-1 border-b-2"},rt=s(()=>t("div",{class:"basis-2/4 font-semibold text-sm"},[t("p",null,"View")],-1)),dt={class:"basis-2/4"},ut={class:"icon"},_t={for:"my-modal-4",class:""},ht=["onClick"],mt={class:"text-center mt-5"},ft={class:"text-center"},pt={class:"flex justify-center bg-green-600 hover:bg-green-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-pointer transition ease-in duration-200"},bt={class:""},xt=s(()=>t("input",{type:"checkbox",id:"my-modal-4",class:"modal-toggle"},null,-1)),gt={for:"my-modal-4",class:"modal cursor-pointer model-dialog-scrollable"},vt={class:"modal-box relative rounded-none",for:""},yt=s(()=>t("div",{class:"sticky top-0 z-20"},[t("label",{for:"my-modal-4",class:"btn btn-sm btn-circle absolute right-3 top-3"},"✕")],-1)),Dt=s(()=>t("br",null,null,-1)),wt=s(()=>t("br",null,null,-1)),Pt=s(()=>t("hr",null,null,-1)),St={class:"overflow-x-auto"},kt={class:"table table-compact w-full"},At=s(()=>t("th",null,"Bill No",-1)),Bt=s(()=>t("th",null,"Borrower/Project Name",-1)),Tt=s(()=>t("th",null,"GST Number",-1)),Nt=s(()=>t("th",null,"Payment Type",-1)),Lt=s(()=>t("th",null,"Basic Amount",-1)),Vt=s(()=>t("th",null,"GST Amount",-1)),Ct=s(()=>t("th",null,"TDS",-1)),It=s(()=>t("th",null,"Total Amount",-1)),Ut=s(()=>t("th",null,"Advance Payment",-1)),Rt=s(()=>t("th",null,"Payment Amount",-1)),jt=s(()=>t("th",null,"Location",-1)),Gt=s(()=>t("th",null,"Verifier Decision",-1)),Qt=s(()=>t("th",null,"Authoriser Decision",-1)),Ft=s(()=>t("th",null,"Admin Decision",-1)),zt=s(()=>t("th",null,"Report Status",-1)),Mt=s(()=>t("th",null,"Branch Name",-1)),qt=s(()=>t("th",null,"Branch Location",-1)),Et=s(()=>t("hr",null,null,-1)),Ot={key:0,class:"flex w-full"},Ht={class:"flex mx-auto space-x-8"},Jt=["disabled"],Kt=s(()=>t("span",null,[t("img",{src:P,alt:""})],-1)),Wt=[Kt],Xt=["disabled"],Yt=s(()=>t("span",null,[t("img",{src:S,alt:""})],-1)),Zt=[Yt],$t={key:1,class:"mt-10 font-semibold w-full text-2xl text-black flex"},ts=s(()=>t("div",{class:"mx-auto"}," No Data to Display ",-1)),ss=[ts];function es(n,i,d,ls,e,a){return r(),c("div",B,[T,t("div",N,[L,t("div",V,[t("div",C,[t("div",I,[t("div",U,[_(t("span",null,j,512),[[g,e.secondsearchbar]]),_(t("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=o=>e.searchQuery=o),placeholder:"Search",class:"my-1 ml-5 outline-none bg-white sm:w-auto w-full searchbarinput",onFocusin:i[1]||(i[1]=o=>e.secondsearchbar=!0),onFocusout:i[2]||(i[2]=o=>e.secondsearchbar=!1)},null,544),[[v,e.searchQuery]])]),G])])])]),t("div",Q,[t("div",F,[t("div",z,[t("table",M,[q,t("tbody",null,[(r(!0),c(h,null,m(a.paginatedData,(o,u)=>(r(),c("tr",{key:u},[t("td",null,l((e.page-1)*e.limit+u+1),1),t("td",null,l(o.Vendorname),1),t("td",null,l(o.Location),1),t("td",null,l(o.Total),1),t("td",null,l(o.BillDate),1),t("td",null,[t("button",{class:y(["cursor-default px-3 py-1 w-24 rounded-sm",{"bg-green-600 , text-white":o.status=="Approved","bg-red-600 , text-white":o.status=="Rejected","bg-yellow-600 , text-white":o.status=="Pending"}]),id:"status",style:{"font-family":"Roboto"}},l(o.status),3)]),t("td",null,[t("div",E,[t("span",null,[t("label",O,[t("i",{class:"fa fa-eye",onClick:b=>a.getSpecificData(o)},null,8,H)])])])])]))),128))])])])]),(r(!0),c(h,null,m(a.paginatedData,(o,u)=>(r(),c("div",{class:"overflow-x-auto border-2 my-5 px-5 py-3 sm:text-xs smallscreentable",key:u},[t("div",J,[K,t("div",W,[t("p",null,l((e.page-1)*e.limit+u+1),1)])]),t("div",X,[Y,t("div",Z,l(o.Vendorname),1)]),t("div",$,[tt,t("div",st,[t("p",null,l(o.Location),1)])]),t("div",et,[lt,t("div",ot,l(o.Total),1)]),t("div",it,[nt,t("div",at,[t("p",null,l(o.BillDate),1)])]),t("div",ct,[rt,t("div",dt,[t("div",ut,[t("span",null,[t("label",_t,[t("i",{class:"fa fa-eye cursor-pointer",onClick:b=>a.getSpecificData(o)},null,8,ht)])])])])]),t("div",mt,[t("div",ft,[t("div",null,[t("button",pt,l(o.status),1)])])])]))),128)),t("div",bt,[xt,t("label",gt,[t("label",vt,[yt,Dt,wt,Pt,t("div",St,[t("table",kt,[t("tbody",null,[t("tr",null,[At,t("td",null,l(e.specificData.Id),1)]),t("tr",null,[Bt,t("td",null,l(e.specificData.Vendorname),1)]),t("tr",null,[Tt,t("td",null,l(e.specificData.VendorGSTnumber),1)]),t("tr",null,[Nt,t("td",null,l(e.specificData.Paymenttype),1)]),t("tr",null,[Lt,t("td",null,l(e.specificData.Basicamount),1)]),t("tr",null,[Vt,t("td",null,l(e.specificData.GSTamount),1)]),t("tr",null,[Ct,t("td",null,l(e.specificData.TDS),1)]),t("tr",null,[It,t("td",null,l(e.specificData.Total),1)]),t("tr",null,[Ut,t("td",null,l(e.specificData.AdvancePayment),1)]),t("tr",null,[Rt,t("td",null,l(e.specificData.PaymentAmount),1)]),t("tr",null,[jt,t("td",null,l(e.specificData.Location),1)]),t("tr",null,[Gt,t("td",null,l(e.specificData.Verifier),1)]),t("tr",null,[Qt,t("td",null,l(e.specificData.Authoriser),1)]),t("tr",null,[Ft,t("td",null,l(e.specificData.Admin),1)]),t("tr",null,[zt,t("td",null,l(e.specificData.status),1)]),t("tr",null,[Mt,t("td",null,l(e.specificData.BranchName),1)]),t("tr",null,[qt,t("td",null,l(e.specificData.BranchLocation),1)])])])]),Et])])])]),e.Data.length>e.limit?(r(),c("div",Ot,[t("div",Ht,[t("button",{class:"w-20",onClick:i[3]||(i[3]=(...o)=>a.previousPage&&a.previousPage(...o)),disabled:e.page==1},Wt,8,Jt),t("button",{class:"w-20",onClick:i[4]||(i[4]=(...o)=>a.nextPage&&a.nextPage(...o)),disabled:e.page==a.totalPages},Zt,8,Xt)])])):f("",!0),e.Data.length==0?(r(),c("div",$t,ss)):f("",!0)])}const cs=k(A,[["render",es],["__scopeId","data-v-309ff7c5"]]);export{cs as default};
