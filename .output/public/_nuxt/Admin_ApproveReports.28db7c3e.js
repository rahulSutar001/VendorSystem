import{a as C,r as d,b as L,e as b,o as u,f as r,h as t,w as A,v as N,u as l,i as V,j as I,F as D,k,t as e,m as S,p as R,q as j}from"./entry.7a987982.js";import{_ as $,a as F}from"./next-img-removebg-preview.08feb811.js";import{_ as G}from"./_plugin-vue_export-helper.c27b6911.js";const s=f=>(R("data-v-649a5a2c"),f=f(),j(),f),M={class:""},O={class:"flex flex-wrap w-full py-2 mt-8"},q=s(()=>t("div",{class:"grow ml-5 mt-1"},[t("button",{class:"border-b-2 cursor-default font-semibold text-lg"},"Approved Reports")],-1)),z={class:"w-20 grow"},E={class:"float-right w-auto"},Q={class:"rounded-full border-2 bg-white flex searchbar"},U={class:"overflow-hidden flex"},H=s(()=>t("i",{class:"fa fa-search text-black ml-3 mt-2",style:{}},null,-1)),J=[H],K=s(()=>t("div",null,[t("i",{class:"fa fa-search mx-1 w-full bg-blue-500 pl-5 pr-4 py-2 text-white rounded-full searchbaricon"})],-1)),W={class:"ml-5 w-full rounded-2xl"},X={class:""},Y={class:"overflow-x-auto border-2 bigscreentable"},Z={class:"table w-full table-compact min-w-full"},tt=s(()=>t("thead",null,[t("tr",null,[t("th",{class:"w-1/12"},"Sr no"),t("th",{class:"w-2/12"},"Party Name"),t("th",{class:"w-2/12"},"Location"),t("th",{class:"w-2/12"},"Amount"),t("th",{class:"w-2/12"},"Date"),t("th",{class:"w-2/12"},"Status"),t("th",{class:"w-1/12"}," View ")])],-1)),st={class:"flex w-20 cursor-default justify-center bg-green-500 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm"},lt={class:"icon"},et={for:"my-modal-4",class:""},ot=["onClick"],nt={class:"flex text-left my-2 py-1 border-b-2"},at=s(()=>t("div",{class:"basis-2/4 font-semibold text-sm"},[t("p",null,"Sr No")],-1)),it={class:"basis-2/4"},ct={class:"flex text-left my-2 py-1 border-b-2"},dt=s(()=>t("div",{class:"basis-2/4 font-semibold text-sm"},"Party Name",-1)),ut={class:"basis-2/4"},rt={class:"flex text-left my-2 py-1 border-b-2"},_t=s(()=>t("div",{class:"basis-2/4 font-semibold text-sm"},[t("p",null,"Location")],-1)),ht={class:"basis-2/4"},mt={class:"flex text-left my-2 py-1 border-b-2"},pt=s(()=>t("div",{class:"basis-2/4 font-semibold text-sm"},"Amount",-1)),ft={class:"basis-2/4"},vt={class:"flex text-left my-2 py-1 border-b-2"},bt=s(()=>t("div",{class:"basis-2/4 font-semibold text-sm"},[t("p",null,"Date")],-1)),xt={class:"basis-2/4"},yt={class:"flex text-left my-2 py-1 border-b-2"},wt=s(()=>t("div",{class:"basis-2/4 font-semibold text-sm"},[t("p",null,"View")],-1)),gt={class:"basis-2/4"},At={class:"icon"},Dt={for:"my-modal-4",class:""},kt=["onClick"],St={class:"text-center mt-5"},Bt={class:"text-center"},Tt={class:"flex w-20 justify-center bg-green-500 hover:bg-green-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm shadow-sm cursor-default transition ease-in duration-200"},Pt=s(()=>t("input",{type:"checkbox",id:"my-modal-4",class:"modal-toggle"},null,-1)),Ct={for:"my-modal-4",class:"modal cursor-pointer"},Lt={class:"modal-box relative rounded-none",for:""},Nt=s(()=>t("div",{class:"sticky top-0 z-20",title:"Close"},[t("label",{for:"my-modal-4",class:"btn btn-sm btn-circle absolute right-3 top-3"},"✕")],-1)),Vt=s(()=>t("br",null,null,-1)),It=s(()=>t("br",null,null,-1)),Rt=s(()=>t("hr",null,null,-1)),jt={class:"overflow-x-auto"},$t={class:"table table-compact w-full"},Ft=s(()=>t("th",null,"Bill No",-1)),Gt=s(()=>t("th",null,"Borrower/Project Name",-1)),Mt=s(()=>t("th",null,"GST Number",-1)),Ot=s(()=>t("th",null,"Payment Type",-1)),qt=s(()=>t("th",null,"Basic Amount",-1)),zt=s(()=>t("th",null,"GST Amount",-1)),Et=s(()=>t("th",null,"TDS",-1)),Qt=s(()=>t("th",null,"Total Amount",-1)),Ut=s(()=>t("th",null,"Advance Payment",-1)),Ht=s(()=>t("th",null,"Payment Amount",-1)),Jt=s(()=>t("th",null,"Location",-1)),Kt=s(()=>t("th",null,"Verifier Decision",-1)),Wt=s(()=>t("th",null,"Authoriser Decision",-1)),Xt=s(()=>t("th",null,"Admin Decision",-1)),Yt=s(()=>t("th",null,"Report Status",-1)),Zt=s(()=>t("th",null,"Branch Name",-1)),ts=s(()=>t("th",null,"Branch Location",-1)),ss=s(()=>t("hr",null,null,-1)),ls=s(()=>t("br",null,null,-1)),es={key:0,class:"flex w-full"},os={class:"flex mx-auto space-x-8"},ns=["disabled"],as=s(()=>t("span",null,[t("img",{src:$,alt:""})],-1)),is=[as],cs=["disabled"],ds=s(()=>t("span",null,[t("img",{src:F,alt:""})],-1)),us=[ds],rs={key:1,class:"mt-10 font-semibold w-full text-2xl text-black flex"},_s=s(()=>t("div",{class:"mx-auto"}," No Data to Display ",-1)),hs=[_s],ms=C({__name:"Admin_ApproveReports",setup(f){d("Rahul"),d("");const i=d(1),_=d(8);let h=d([]);const v=d(!1);L(()=>{$fetch("/api/fetchreport/fetchreportauthoriser_approved",{method:"POST"}).then(c=>{h.value=c,h.value.map(a=>{a.BillDate=a.BillDate.split("T",1)[0]})})});const n=d({}),m=d(""),x=b(()=>{if(!m.value)return h.value;const c=m.value.toLowerCase();return h.value.filter(a=>Object.values(a).some(o=>typeof o=="string"?o.toLowerCase().includes(c):!1))}),y=c=>{n.value=c},w=b(()=>Math.ceil(x.value.length/_.value)),g=b(()=>{const c=(i.value-1)*_.value,a=c+_.value;return x.value.slice(c,a)}),B=()=>{i.value<w.value&&i.value++},T=()=>{i.value>1&&i.value--};return(c,a)=>(u(),r("div",M,[t("div",O,[q,t("div",z,[t("div",E,[t("div",Q,[t("div",U,[A(t("span",null,J,512),[[N,l(v)]]),A(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=o=>I(m)?m.value=o:null),placeholder:"Search",class:"my-1 ml-5 outline-none bg-white sm:w-auto w-full searchbarinput",onFocusin:a[1]||(a[1]=o=>v.value=!0),onFocusout:a[2]||(a[2]=o=>v.value=!1)},null,544),[[V,l(m)]])]),K])])])]),t("div",W,[t("div",X,[t("div",Y,[t("table",Z,[tt,t("tbody",null,[(u(!0),r(D,null,k(l(g),(o,p)=>(u(),r("tr",{key:p},[t("td",null,e((l(i)-1)*l(_)+p+1),1),t("td",null,e(o.Vendorname),1),t("td",null,e(o.Location),1),t("td",null,e(o.Total),1),t("td",null,e(o.BillDate),1),t("td",null,[t("div",null,[t("button",st,e(o.Admin),1)])]),t("td",null,[t("div",lt,[t("span",null,[t("label",et,[t("i",{class:"fa fa-eye cursor-pointer",onClick:P=>y(o)},null,8,ot)])])])])]))),128))])])])]),(u(!0),r(D,null,k(l(g),(o,p)=>(u(),r("div",{class:"overflow-x-auto border-2 my-5 px-5 py-3 sm:text-xs smallscreentable",key:p},[t("div",nt,[at,t("div",it,[t("p",null,e((l(i)-1)*l(_)+p+1),1)])]),t("div",ct,[dt,t("div",ut,e(o.Vendorname),1)]),t("div",rt,[_t,t("div",ht,[t("p",null,e(o.Location),1)])]),t("div",mt,[pt,t("div",ft,e(o.Total),1)]),t("div",vt,[bt,t("div",xt,[t("p",null,e(o.BillDate),1)])]),t("div",yt,[wt,t("div",gt,[t("div",At,[t("span",null,[t("label",Dt,[t("i",{class:"fa fa-eye cursor-pointer",onClick:P=>y(o)},null,8,kt)])])])])]),t("div",St,[t("div",Bt,[t("div",null,[t("button",Tt,e(o.Admin),1)])])])]))),128)),t("div",null,[Pt,t("label",Ct,[t("label",Lt,[Nt,Vt,It,Rt,t("div",jt,[t("table",$t,[t("tbody",null,[t("tr",null,[Ft,t("td",null,e(l(n).Id),1)]),t("tr",null,[Gt,t("td",null,e(l(n).Vendorname),1)]),t("tr",null,[Mt,t("td",null,e(l(n).VendorGSTnumber),1)]),t("tr",null,[Ot,t("td",null,e(l(n).Paymenttype),1)]),t("tr",null,[qt,t("td",null,e(l(n).Basicamount),1)]),t("tr",null,[zt,t("td",null,e(l(n).GSTamount),1)]),t("tr",null,[Et,t("td",null,e(l(n).TDS),1)]),t("tr",null,[Qt,t("td",null,e(l(n).Total),1)]),t("tr",null,[Ut,t("td",null,e(l(n).AdvancePayment),1)]),t("tr",null,[Ht,t("td",null,e(l(n).PaymentAmount),1)]),t("tr",null,[Jt,t("td",null,e(l(n).Location),1)]),t("tr",null,[Kt,t("td",null,e(l(n).Verifier),1)]),t("tr",null,[Wt,t("td",null,e(l(n).Authoriser),1)]),t("tr",null,[Xt,t("td",null,e(l(n).Admin),1)]),t("tr",null,[Yt,t("td",null,e(l(n).status),1)]),t("tr",null,[Zt,t("td",null,e(l(n).BranchName),1)]),t("tr",null,[ts,t("td",null,e(l(n).BranchLocation),1)])])])]),ss,ls])])])]),l(h).length>l(_)?(u(),r("div",es,[t("div",os,[t("button",{class:"w-20",onClick:T,disabled:l(i)==1},is,8,ns),t("button",{class:"w-20",onClick:B,disabled:l(i)==l(w)},us,8,cs)])])):S("",!0),l(h).length==0?(u(),r("div",rs,hs)):S("",!0)]))}});const bs=G(ms,[["__scopeId","data-v-649a5a2c"]]);export{bs as default};