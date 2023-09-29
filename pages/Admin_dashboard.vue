<template>
    <div class="bg-slate-100">
        <div class="w-16 float-left md:display-none fixed top-14">
            <div class="grid grid-rows-2" style="background-color: #0400AF;  height: 96vh;">
                <div class="mt-2">
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Home"  @click="ActiveTab = 'home'">
                        <i class="fa fa-th text-white " style="font-size: 18px;"></i>
                    </button>
                    <!-- @click="ActiveTab ='addtypeCategory'"
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" >
                        <i class="fa fa-cog text-white" style="font-size: 15px;" @click="ActiveTab = 'addtypeCategory'"></i>
                    </button> -->
                    <button class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3" title="Approved Report" @click="ActiveTab = 'approvedreports'">
                        <img src="../assets/approvedreport.png" style="width: 19px;" alt="">
                        <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: greenyellow;"
                            ></i> -->
                    </button>
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Rejected Report" @click="ActiveTab = 'rejectedreports'">
                        <img src="../assets/rejectedreports.png" style="width: 23px;" alt="">
                        <!-- <i class="fa fa-file-text text-white" style="font-size: 18px; color: red;"
                           ></i> -->
                    </button>

                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Add Location Details" @click="ActiveTab = 'addtypeCategory'">
                        <img src="../assets/bLBT.png" style="width: 21px;" alt="">
                        <!-- <i class="fa fa-bank bank-icon text-white" style="font-size: 18px;" ></i> -->
                    </button>
                    <button class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3" title="Add Vendor Type" @click="ActiveTab = 'addVendorType'">
                        <img src="../assets/vendorType.jpeg" style="width: 22px;" alt="">
                        <!-- <i class="fa fa-user vendor-icon text-white" style="font-size: 18px;" ></i> -->
                    </button>
                    <button class="bg-slate-100 px-2 py-2 rounded-lg bg-opacity-30 mx-3 my-3" title="Create User" @click="ActiveTab = 'generateReport'">
                        <img src="../assets/User3.jpeg" style="width: 24px;" alt="">
                        <!-- <i class="fa fa-file-text text-white" style="font-size: 18px;"
                            ></i> -->
                    </button>
                </div>
                <div class="" style="margin-top: 200px;">

                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" @click="signoutmethod()">
                        <i class="fa fa-sign-out text-white" style="font-size: 15px;"></i>
                    </button>
                </div>
            </div>
        </div>


        <!-- code ends here  -->
        
        <hr>
        <br>


        <!-- code to toggle between componenet starts here  -->
        <div class="ml-16 px-10 " style="width: 93vw;">
            <SuperAdmin v-if="ActiveTab === 'home'" />
            <Create_Vendor v-if="ActiveTab === 'generateReport'" />
            <Admin_ApprovedReports v-if="ActiveTab === 'approvedreports'" />
            <Admin_RejectedReports v-if="ActiveTab === 'rejectedreports'" />
            <AddBranchLocation v-if="ActiveTab === 'addtypeCategory'" />
            <AddCategory v-if="ActiveTab==='addVendorType'"/>
        </div>


    </div>
</template>

<script >
 export default{
    data(){
        return{
            ActiveTab : "home",
            branchandlocation: {}
        }
    },
    methods:{
       async signoutmethod (){
          
            const response = await $fetch('api/signoutapi/signout', {
            method: 'POST',

        }).then((res) => {
           
            window.location.href = '/'
        }).catch((err) => {
            console.log(err)
        })
        },

        getDat(){
        let cookie = Cookie.get('user')
        this.data = JSON.parse(cookie)

        this.dataStore.setsahredcookie(data)

        } ,

       


    },
 }



</script>

