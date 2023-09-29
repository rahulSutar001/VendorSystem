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

                            <div class="flex text-white py-2 " style="background-color: #0400AF;">
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

                                <div class="flex-1 inline-flex text-right justify-end mt-5 mr-2">
                                    <!-- <span class="mx-2"><i class="fa fa-bell" style="font-size:20;"></i></span> -->
                                    <p class="mx-2 text-white"> <i class="fa fa-user-circle-o mr-3"
                                            style="font-size:20px"></i> <span class="hideUname">{{ data.Username }}</span>
                                    </p>

                                    <div class="dropdown dropdown-end">
                                        <label tabindex="0" class=" m-1"><i class="fa fa-angle-down"></i></label>
                                        <ul tabindex="0"
                                            class="dropdown-content menu p-2 shadow bg-base-200 text-black mt-9 rounded-sm w-32">
                                            <li class="showname border-b-2 mr-4"> {{ data.Username }} </li>
                                            <li class=""><i class='fa fa-sign-out' style='font-size:16px'
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
                        <div class="grid grid-rows-2 pt-5" style="background-color: #0400AF; height: 96vh;">
                            <div class="">
                                <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3"
                                    @click="ActiveTab = 'Home'" title="Home">
                                    <i class="fa fa-th text-white" style="font-size: 18px;"></i>
                                </button>
                                <button class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3"
                                    title="Approved Report" @click="ActiveTab = 'approvedreports'">
                                    <img src="../assets/approvedreport.png" style="width: 19px;" alt="">
                                    <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: greenyellow;"></i> -->
                                </button>
                                <button class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3"
                                    title="Rejected Report" @click="ActiveTab = 'rejectedreports'">
                                    <img src="../assets/rejectedreports.png" style="width: 20px;" alt="">
                                    <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: red;"></i> -->
                                </button>
                                <button class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3"
                                    title="Recheck Requested" @click="ActiveTab = 'RRR'">
                                    <span><img src="../assets/reqrecheck.jpeg" style="width: 22px;" alt=""></span>
                                    <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: red;"></i> -->
                                </button>

                            </div>
                            <div class="" style="margin-top: 190px;">

                                <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3"
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
                    <div class="ml-10 px-10 sidebarmain" >
                        <!-- <button class="btn" @click="togglesidebar()">{{ data }}</button> -->
                        <AuthoriserDashboard v-if="ActiveTab === 'Home'" />
                        <Authoriser_Requestrecheck v-if="ActiveTab === 'RRR'" />
                        <Authoriser_ApprovedReports v-if="ActiveTab === 'approvedreports'" />
                        <Authoriser_RejectedReports v-if="ActiveTab === 'rejectedreports'" />
                    </div>
                </div>

            </div>

        </div>
        <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <div class="w-3/4 h-full bg-base-200 text-base-content">
                <!-- Sidebar content here -->
                <!-- v-show="this.show ? 'navbarrHide' : 'navbarShow'" -->
                <div class="flex flex-col pt-5 justify-between" style="background-color: #0400AF; height: 94vh;">
                    <!-- below is cancel button  -->
                    <div class="flex flex-col space-y-3">
                        <div class="flex items-center">
                            <button class="flex" @click="ActiveTab = 'Home'" title="Home">
                                <i class="fa fa-th text-white bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-4"
                                    style="font-size: 18px;"></i>

                                <p class="text-white mt-5 font-light text-sm">Home</p>
                            </button>
                        </div>
                        <div class="flex items-center">
                            <button class="flex items-center" title="Approved Report"
                                @click="ActiveTab = 'approvedreports'">
                                <img class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-4 h-9 w-9"
                                    src="../assets/approvedreport.png" alt="">
                                <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: greenyellow;"></i> -->
                                <p class="text-white font-light text-sm">Approved Reports</p>
                            </button>
                        </div>
                        <div class="flex items-center">
                            <button class="flex items-center" title="Rejected Report"
                                @click="ActiveTab = 'rejectedreports'">
                                <img src="../assets/rejectedreports.png"
                                    class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-4 h-9 w-9">
                                <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: red;"></i> -->
                                <p class="text-white font-light text-sm">Rejected Reports</p>
                            </button>

                        </div>

                        <div class="flex items-center">
                            <button class="flex items-center"
                                title="Recheck Requested" @click="ActiveTab = 'RRR'">
                                <img src="../assets/reqrecheck.jpeg" class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-4 h-9 w-9">
                                <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: red;"></i> -->
                            </button>
                            <p class="text-white font-light text-sm">Recheck Requested</p>
                        </div>
                    </div>
                    <div class="mb-11">
                        <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" @click="signoutmethod()"
                            title="Signout">
                            <i class="fa fa-sign-out text-white" style="font-size: 18px;"></i>
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
        definePageMeta({
            layout: "display",
        });
        return {
            ActiveTab: "Home",
            branchandlocation: {},
            data: {},
            value: '',
            show: false,

            // dataStore: useDataStore()
        }
    },

    methods: {
        async signoutmethod() {

            const response = await $fetch('api/signoutapi/signout', {
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


    },



    mounted() {
        this.data = JSON.parse(cookie.get('user'))
        // document.body.addEventListener("click", this.handleOutsideClick);

    },


}

</script>  

<style>
/* the below code is to hide and show side bar  */

@media screen and (width <=500px) {
    .sidebar_desktop {
        width: 0px;
        transition: width 1s ease-in-out;
        overflow: hidden;
        margin: 0%;
        padding: 0%;
        /* display: none; */
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
       


 



