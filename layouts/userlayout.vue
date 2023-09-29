<template>
    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Page content here -->

            <div class="bg-slate-100">
                <!-- ------------- -->
                <!-- header  -->
                <div>
                    <div class="fixed w-full top-0 z-20 ">
                        <link rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                        <div>

                            <div class="flex text-white py-2 bg-blue-500" style="">
                                <div class="flex-1">

                                    <!-- below div will be enabled at breakpoint 370 -->


                                    <div class="inline-flex">
                                        <span class="bars mt-3 mx-3">
                                            <label for="my-drawer" class="drawer-button">
                                                <i class="fa fa-bars"></i>
                                            </label>
                                        </span>
                                        <span @click="senddata()">
                                            <img src="../assets/480px-V_logo.png" class="ml-2 rounded-full logo logo"
                                                alt="">
                                        </span>
                                        <p class="mt-3 ml-2 textvenus"><b>Venus Enterprises</b></p>
                                        <!-- <p class="mt-5 ml-2"><small>Refund List</small></p> -->
                                    </div>


                                </div>

                                <div class="flex-1 inline-flex text-right justify-end mt-5 mr-2" @mouseover="this.drpd = true" @mouseleave="this.drpd = false">
                                    <!-- <span class="mx-2"><i class="fa fa-bell" style="font-size:20;"></i></span> -->
                                    <p class="mx-2 text-white" > <i class="fa fa-user-circle-o mr-3"
                                            style="font-size:20px"></i> <span class="hideUname">{{ data.Username }}</span>
                                            <span>  <label tabindex="0" class=" mx-2" ><i class="fa fa-angle-down" ></i></label></span>
                                    </p>

                                    <div class="cursor-pointer absolute" @mouseover="this.drpd = true" v-show="drpd?'drpd':''">
                                      
                                        <ul tabindex="0" 
                                            class="py-3 px-2 shadow-xl bg-base-200 text-black mt-9 rounded-sm w-32 ">
                                            <li class="showname border-b-2 mr-4"> {{ data.Username }} </li>
                                            <li class="cursor-pointer py-2 shadow text-center hover:text-white hover:bg-blue-400 rounded-lg active:bg-blue-500"><i class='fa fa-sign-out' style='font-size:16px'
                                                    @click="signoutmethod"><span class="">Log Out</span></i></li>

                                        </ul>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                <!-- ---------------- -->

                <div class="mt-10">
                    <!-- side bar -->

                    <!-- The below sidebar will display none once screen sixe id 500px or less  -->
                    <!-- sidebar 1 starts here  -->
                    <div class="w-16 float-left fixed sidebar_desktop">
                        <!-- v-show="this.show ? 'navbarrHide' : 'navbarShow'" -->
                        <div class="grid grid-rows-2 pt-5 bg-blue-500" style=" height: 96vh;">
                            <div class="">

                                <span @click="selected = 'home'">
                                <button :class="{ 'bg-opacity-50': selected === 'home' }" class="bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50"
                                    @click="goToPage1" title="Home">
                                    <i class="fa fa-th text-white" style="font-size: 24px;"></i>
                                </button>
                            </span>
                            <span @click="selected = 'AR'">
                                <button :class="{ 'bg-opacity-50': selected === 'AR' }" class="bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50" 
                                    title="Approved Report" @click="goToPage2" >
                                    <img src="../assets/approvedreport.png" style="width: 24px;" alt="">
                                    <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: greenyellow;"></i> -->
                                </button>
                            </span>
                            <span @click="selected = 'RR'">
                                <button :class="{ 'bg-opacity-50': selected === 'RR' }" class="bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50"
                                    title="Rejected Report" @click="goTopage3">
                                    <img src="../assets/rejectedreports.png" style="width: 24px;" alt="">
                                    <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: red;"></i> -->
                                </button>

                            </span>
                            <span @click="selected = 'GR'">
                                <button :class="{ 'bg-opacity-50': selected === 'GR' }" class="bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50" title="Generate Report"
                                    @click="goTopage4">
                                    <i class="fa fa-file-text text-white" style="font-size: 24px;"></i>
                                </button>

                            </span>
                            <span @click="selected = 'QR'">
                                <button :class="{ 'bg-opacity-50': selected === 'QR' }" class="bg-slate-100 p-1 bg-opacity-20 mx-3 my-3 hover:bg-opacity-50"
                                    title="Recheck Requested" @click="goTopage5">
                                    <span><img src="../assets/reqrecheck.jpeg" style="width: 24px;" alt=""></span>
                                    <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: red;"></i>  -->
                                </button>
                            </span>

                            </div>
                            <div class="" style="margin-top: 190px;">

                                <button class="bg-slate-100 px-2 py-1  bg-opacity-20 mx-3 my-3 hover:bg-opacity-50"
                                    @click="signoutmethod()" title="Signout">
                                    <i class="fa fa-sign-out text-white" style="font-size: 18px;"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- side bar 1 ends here  -->
                    <!-- sidebar 2 starts here  -->



                    <!-- sidebar 2 ends here  -->

                    <hr>



                    <!-- code to toggle between componenet starts here  -->
                    <div class="ml-6 px-10 sidebarmain" >
                         <slot />
                    </div>
                </div>

            </div>

        </div>
        <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <div class="w-3/4 h-full bg-base-200 text-base-content">
                <!-- Sidebar content here -->
                <!-- v-show="this.show ? 'navbarrHide' : 'navbarShow'" -->
                <div class="flex flex-col pt-5 justify-between bg-blue-500" style=" height: 94vh;">
                    <!-- below is cancel button  -->
                    <div class="flex flex-col space-y-3">
                        <div class="flex items-center">
                            <a href="/User_DPage">
                            <button class="flex"  title="Home">
                                <i class="fa fa-th text-white bg-slate-100 p-1 bg-opacity-30 mx-3 mt-4"
                                    style="font-size: 24px;"></i>

                                <p class="text-white mt-5 font-light ">Home</p>
                            </button>
                        </a>
                        </div>
                       
                        <div class="flex items-center">
                            <a href="/User_ApprovedReports">
                            <button class="flex items-center" title="Approved Report">
                                <img class="bg-slate-100 p-1 bg-opacity-30 mx-3 my-2 h-9 w-9"
                                    src="../assets/approvedreport.png" style="font-size: 20px;" alt="">
                                <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: greenyellow;"></i> -->
                                <p class="text-white font-light ">Approved Reports</p>
                            </button>
                           </a>
                        </div>
                        <div class="flex items-center">
                            <a href="/User_RejectedReports">
                            <button class="flex items-center" title="Rejected Report"
                           >
                                <img src="../assets/rejectedreports.png" style="font-size: 20px;"
                                    class="bg-slate-100 p-1 bg-opacity-30 mx-3 my-2 h-9 w-9">
                                <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: red;"></i> -->
                                <p class="text-white font-light ">Rejected Reports</p>
                            </button>
                        </a>
                        </div>


                        <div class="flex items-center">
                            <a href="/User_createReport">
                            <button class="flex items-center"
                                title="Generate New Report" >
                                <!-- <img src="../assets/reqrecheck.jpeg" class=""> -->
                                <i class="fa fa-file-text text-white bg-slate-100 p-1 bg-opacity-30 mx-3 my-2 h-9 w-9" style="font-size: 24px;"></i>
                                <p class="text-white font-light">New Report</p>
                                <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: red;"></i> -->
                            </button>
                        </a>
                        </div>
                        <div class="flex items-center">
                            <a href="/User_RequestRecheck">
                              
                            <button class="flex items-center" 
                                title="Request Recheck" >
                                <!-- <img src="../assets/reqrecheck.jpeg" class=""> -->
                                <span><img src="../assets/reqrecheck.jpeg" class="bg-slate-100 p-1 bg-opacity-30 mx-3 my-2 h-9 w-9"  alt=""></span>
                                <!-- <i class="fa fa-file-text text-white " style="font-size: 18px;"></i> -->
                                <p class="text-white font-light ">Request Recheck</p>
                                <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: red;"></i> -->
                            </button>
                        </a>
                        </div>
                    </div>
                    <div class="mb-11">
                        <button class="flex" @click="signoutmethod()"
                            title="Signout">
                            <i class="fa fa-sign-out text-white bg-slate-100 px-2  py-1 rounded-lg bg-opacity-30 mx-3 my-3" style="font-size: 18px;"></i>
                            <p class="text-white font-light mt-4">Log out</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import cookie from 'js-cookie'
// import { boolean } from 'superstruct'
// import { useDataStore } from '~/store/dataStore';
// import { defineStore } from 'pinia';

export default {

    data() {
      
        return {
            ActiveTab: "Home",
            branchandlocation: {},
            data: {},
            value: '',
            show: false,
            selected:'',
            drpd:false

            // dataStore: useDataStore()
        }
    },

    methods: {

          showbtn(){
             this.drpd != this.drpd
          },

        async signoutmethod() {

            const response = await $fetch('/api/signoutapi/signout', {
                method: 'POST',

            }).then((res) => {

                window.location.href = '/'
            }).catch((err) => {
                console.log(err)
            })
        },

        togglesidebar() {
            this.show = !this.show
        },

    goToPage1() {
      this.$router.push('/User_DPage');
    },

     goToPage2(){
        this.$router.push('/User_ApprovedReports');
     },
     goTopage3(){
        this.$router.push('/User_RejectedReports');
     },
     goTopage4(){
        this.$router.push('/User_createReport');
     },
     goTopage5(){
        this.$router.push('/User_RequestRecheck')
     }


    },



    mounted() {
        this.data = JSON.parse(cookie.get('user'))
        

    },


}

</script>  

<style>


.drpd{
    position: fixed;
    right: 10px;
    top: 40px;
}

/* the below code is to hide and show side bar  */

@media screen and (width <=500px) {
    .sidebar_desktop {
        /* width: 0px; */
        transition: width 1s ease-in-out;
        overflow: hidden;
        margin: 0%;
        padding: 0%;
        display: none;
    }

    .sidebarmain {
        margin-left: 0px;
        padding-left: 0px;
    }

    .sidebar_show {
        display: block;
    }
}

@media screen and (width >=500px) {
    .small_scree_sidebar {
        display: none;
    }
}

.navbarrHide {
    width: 0px;
    content-visibility: hidden;
    /* transition-property: width; */
    transition-duration: width 5s ease;
}

.navbarShow {
    width: 15vh;
}

.logo {
    width: 42px;
}

.bars {
    display: none;
}

.showname {
    display: none;
}

@media only screen and (width <=500px) {
    .bars {
        display: inline;
        transition: ease all .5s;
    }

    .textvenus {
        /* font-size: 15px; */
        font-size: min(5vh, 2.7vw);
        margin-top: 23px;

    }

    .logo {
        width: 34px;
        margin-top: 11px;
    }

    .hideUname {
        display: none;
    }

    .showname {
        display: inline;
    }

}
</style>
       


 



