<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="bg-slate-100 ">
        <div>
            <div class="fixed w-full top-0 z-20 ">
                <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <div>

                    <div class="flex text-white py-2 " style="background-color: #0400AF;">
                        <div class="flex-1">

                            <!-- below div will be enabled at breakpoint 370 -->


                            <div class="inline-flex">
                                <span class="bars mt-3 mx-3"> <button><i
                                            class="fa fa-bars"></i></button></span>
                                <span  @click="senddata()">
                                    <img src="../assets/480px-V_logo.png" class="ml-2 rounded-full logo logo" alt="">
                                </span>
                                <p class="mt-3 ml-2 textvenus"><b>Venus Enterprises</b></p>
                                <!-- <p class="mt-5 ml-2"><small>Refund List</small></p> -->
                            </div>


                        </div>
                        <div class="flex-1 inline-flex text-right justify-end mt-5 mr-2">
                            <!-- <span class="mx-2"><i class="fa fa-bell" style="font-size:20;"></i></span> -->

                            <p class="mx-2 text-white"> <i class="fa fa-user-circle-o mr-3" style="font-size:20px"></i> <span class="hideUname">{{ data.Username }}</span> </p>

                            <div class="dropdown dropdown-end">
                                <label tabindex="0" class=" m-1"><i class="fa fa-angle-down"></i></label>
                                <ul tabindex="0"
                                    class="dropdown-content menu p-2 shadow bg-base-200 text-black mt-9 rounded-sm w-32">
                                    <li class="showname border-b-2 mr-4"> {{ data.Username }} </li>
                                    <li class=""><i class='fa fa-sign-out' style='font-size:16px' @click="signoutmethod"><span
                                                class="">Log Out</span></i></li>

                                </ul>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
        </div>
        <!-- sidebar  -->


        <div class="mt-14">
            <slot  />
           
        </div>

    </div>
</template>
<script>
import axios from 'axios';
import cookie from 'js-cookie'
export default {
    data() {
        return {
            data: {},
            navba: false,
            show: false,
            value1: true

        }
    },
    watch(newValue){
     this.value1 = newValue
   },
    mounted() {
        const response1 = axios.get('api/Decision_Api/decision_Appovestatus');
        const response2 = axios.get('api/Decision_Api/decision_Rejectedstatus');
        this.data = JSON.parse(cookie.get('user'))
        localStorage.setItem('data', JSON.stringify(this.value1));
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
        senddata(){
            this.value1 = !this.value1
            
        }
    },
}




</script>

<style>
.logo {
    width: 42px;
}
.bars{
    display: none;
}
.showname{
        display: none;
    }
@media only screen and (width <= 500px) {
    .bars{
        display: inline;
        transition: ease all .5s;
    }
    .textvenus {
        /* font-size: 15px; */
        font-size: min(5vh, 2.7vw);
        margin-top: 28px;

    }

    .logo {
        width: 34px;
        margin-top: 11px;
    }
    .hideUname{
        display: none;
    }
    .showname{
        display: inline;
    }

}
</style>