import{a as p,_ as h}from"./480px-V_logo.bee34205.js";import{f as g,h as e,s as u,t as n,w as m,v as f,A as a,E as _,y as b,o as x}from"./entry.7a987982.js";import{_ as r,a as d}from"./rejectedreports.31cb614a.js";import{_ as c}from"./reqrecheck.f086d5a6.js";import{_ as v}from"./_plugin-vue_export-helper.c27b6911.js";const y={data(){return{ActiveTab:"Home",branchandlocation:{},data:{},value:"",show:!1,drpd:!1,selected:""}},methods:{async signoutmethod(){await $fetch("/api/signoutapi/signout",{method:"POST"}).then(l=>{window.location.href="/"}).catch(l=>{console.log(l)})},togglesidebar(){this.show=!this.show},goToPage1(){this.$router.push("/VerifierDPage")},goToPage2(){this.$router.push("/VerifierRejectedReports")},goTopage3(){this.$router.push("/VerifierApproveReport")},goTopage4(){this.$router.push("/VerifierRequestRecheck")}},mounted(){this.data=JSON.parse(p.get("user"))}},w={class:"drawer"},R=e("input",{id:"my-drawer",type:"checkbox",class:"drawer-toggle"},null,-1),k={class:"drawer-content"},T={class:"bg-slate-100"},C={class:"fixed w-full top-0 z-20"},V=e("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},null,-1),z={class:"flex text-white py-2 bg-blue-500",style:{}},j={class:"flex-1"},A={class:"inline-flex"},P=e("span",{class:"bars mt-3 mx-3"},[e("label",{for:"my-drawer",class:"drawer-button"},[e("i",{class:"fa fa-bars"})])],-1),S=e("img",{src:h,class:"ml-2 rounded-full logo logo",alt:""},null,-1),q=[S],D=e("p",{class:"mt-3 ml-2 textvenus"},[e("b",null,"Venus Enterprises")],-1),H={class:"mx-2 text-white"},N=e("i",{class:"fa fa-user-circle-o mr-3",style:{"font-size":"20px"}},null,-1),B={class:"hideUname"},E=e("span",null,[e("label",{tabindex:"0",class:"mx-2"},[e("i",{class:"fa fa-angle-down"})])],-1),M={tabindex:"0",class:"py-3 px-2 shadow-xl bg-base-200 text-black mt-9 rounded-sm w-32"},O={class:"showname border-b-2 mr-4"},U={class:"cursor-pointer py-2 shadow text-center hover:text-white hover:bg-blue-400 rounded-lg active:bg-blue-500"},L=e("span",{class:""},"Log Out",-1),Q=[L],J={class:"mt-10"},F={class:"w-16 float-left fixed sidebar_desktop"},G={class:"grid grid-rows-2 pt-5 bg-blue-500",style:{height:"96vh"}},I={class:""},K=e("i",{class:"fa fa-th text-white",style:{"font-size":"24px"}},null,-1),W=[K],X=e("img",{src:r,style:{width:"24px"},alt:""},null,-1),Y=[X],Z=e("img",{src:d,style:{width:"24px"},alt:""},null,-1),$=[Z],ee=e("span",null,[e("img",{src:c,style:{width:"24px"},alt:""})],-1),te=[ee],se={class:"",style:{"margin-top":"190px"}},oe=e("i",{class:"fa fa-sign-out text-white",style:{"font-size":"18px"}},null,-1),ie=[oe],le=e("hr",null,null,-1),ae={class:"ml-10 px-10 sidebarmain"},ne={class:"drawer-side"},re=e("label",{for:"my-drawer",class:"drawer-overlay"},null,-1),de={class:"w-3/4 h-full bg-base-200 text-base-content"},ce={class:"flex flex-col pt-5 justify-between bg-blue-500",style:{height:"94vh"}},pe=b('<div class="flex flex-col space-y-3"><div class="flex items-center"><a href="/VerifierDPage"><button class="flex" title="Home"><i class="fa fa-th text-white bg-slate-100 p-1 bg-opacity-30 mx-3 mt-4" style="font-size:26px;"></i><p class="text-white mt-5 font-light">Home</p></button></a></div><div class="flex items-center"><a href="/VerifierApproveReport"><button class="flex items-center" title="Approved Report"><img class="bg-slate-100 p-1 bg-opacity-30 mx-3 my-2 h-9 w-9" src="'+r+'" style="font-size:20px;" alt=""><p class="text-white font-light">Approved Reports</p></button></a></div><div class="flex items-center"><a href="/VerifierRejectedReports"><button class="flex items-center" title="Rejected Report"><img src="'+d+'" style="font-size:20px;" class="bg-slate-100 p-1 bg-opacity-30 mx-3 my-2 h-9 w-9"><p class="text-white font-light">Rejected Reports</p></button></a></div><div class="flex items-center"><a href="/VerifierRequestRecheck"><button class="flex items-center" title="Recheck Requested"><img src="'+c+'" class="bg-slate-100 p-1 bg-opacity-30 mx-3 my-2 h-9 w-9"><p class="text-white font-light text-sm">Recheck Requested</p></button></a></div></div>',1),he={class:"mb-11"},ge=e("i",{class:"fa fa-sign-out text-white bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3",style:{"font-size":"18px"}},null,-1),ue=e("p",{class:"text-white font-light text-sm mt-4"},"Log out",-1),me=[ge,ue];function fe(l,t,_e,be,i,o){return x(),g("div",w,[R,e("div",k,[e("div",T,[e("div",null,[e("div",C,[V,e("div",null,[e("div",z,[e("div",j,[e("div",A,[P,e("span",{onClick:t[0]||(t[0]=s=>l.senddata())},q),D])]),e("div",{class:"flex-1 inline-flex text-right justify-end mt-5 mr-2",onMouseover:t[3]||(t[3]=s=>this.drpd=!0),onMouseleave:t[4]||(t[4]=s=>this.drpd=!1)},[e("p",H,[N,u(),e("span",B,n(i.data.Username),1),E]),m(e("div",{class:"cursor-pointer absolute",onMouseover:t[2]||(t[2]=s=>this.drpd=!0)},[e("ul",M,[e("li",O,n(i.data.Username),1),e("li",U,[e("i",{class:"fa fa-sign-out",style:{"font-size":"16px"},onClick:t[1]||(t[1]=(...s)=>o.signoutmethod&&o.signoutmethod(...s))},Q)])])],544),[[f,i.drpd?"drpd":""]])],32)])])])]),e("div",J,[e("div",F,[e("div",G,[e("div",I,[e("span",{onClick:t[6]||(t[6]=s=>i.selected="home")},[e("button",{class:a([{"bg-opacity-50":i.selected==="home"},"bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50"]),onClick:t[5]||(t[5]=(...s)=>o.goToPage1&&o.goToPage1(...s)),title:"Home"},W,2)]),e("span",{onClick:t[8]||(t[8]=s=>i.selected="AR")},[e("button",{class:a([{"bg-opacity-50":i.selected==="AR"},"bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50"]),title:"Approved Report",onClick:t[7]||(t[7]=(...s)=>o.goTopage3&&o.goTopage3(...s))},Y,2)]),e("span",{onClick:t[10]||(t[10]=s=>i.selected="RR")},[e("button",{class:a([{"bg-opacity-50":i.selected==="RR"},"bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50"]),title:"Rejected Report",onClick:t[9]||(t[9]=(...s)=>o.goToPage2&&o.goToPage2(...s))},$,2)]),e("span",{onClick:t[12]||(t[12]=s=>i.selected="QR")},[e("button",{class:a([{"bg-opacity-50":i.selected==="QR"},"bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50"]),title:"Recheck Requested",onClick:t[11]||(t[11]=(...s)=>o.goTopage4&&o.goTopage4(...s))},te,2)])]),e("div",se,[e("button",{class:"bg-slate-100 px-2 py-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50",onClick:t[13]||(t[13]=s=>o.signoutmethod()),title:"Signout"},ie)])])]),le,e("div",ae,[_(l.$slots,"default")])])])]),e("div",ne,[re,e("div",de,[e("div",ce,[pe,e("div",he,[e("button",{class:"flex",onClick:t[14]||(t[14]=s=>o.signoutmethod()),title:"Signout"},me)])])])])])}const ke=v(y,[["render",fe]]);export{ke as default};
