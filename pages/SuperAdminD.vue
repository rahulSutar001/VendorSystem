<template>
    <div class="bg-slate-100">
        <div class="w-16 float-left md:display-none fixed ">
            <div class="grid grid-rows-2 " style="background-color: #0400AF;  height: 96vh;">
                <div class="mt-2">
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Home">
                        <i class="fa fa-th text-white" style="font-size: 15px;" @click="ActiveTab = 'home'"></i>
                    </button>
                    <!-- @click="ActiveTab ='addtypeCategory'"
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" >
                        <i class="fa fa-cog text-white" style="font-size: 15px;" @click="ActiveTab = 'addtypeCategory'"></i>
                    </button> -->
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Approved Report">
                        <i class="fa fa-file-text text-white" style="font-size: 15px; color: greenyellow;"
                            @click="ActiveTab = 'approvedreports'"></i>
                    </button>
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Rejected Report">
                        <i class="fa fa-file-text text-white" style="font-size: 15px; color: red;"
                            @click="ActiveTab = 'rejectedreports'"></i>
                    </button>

                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Add Branch Details">
                        <i class="fa fa-bank bank-icon text-white" style="font-size: 15px;" @click="ActiveTab = 'addtypeCategory'"></i>
                    </button>
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Add Vendor Type">
                        <i class="fa fa-user vendor-icon text-white" style="font-size: 15px;" @click="ActiveTab = 'addVendorType'"></i>
                    </button>
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" title="Generate Report">
                        <i class="fa fa-file-text text-white" style="font-size: 15px;"
                            @click="ActiveTab = 'generateReport'"></i>
                    </button>
                </div>
                <div class="mt-40">

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



