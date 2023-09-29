<template>
    <div class="bg-slate-100">
        <div class="w-16 float-left md:display-none fixed">
            <div class="grid grid-rows-2 " style="background-color: #0400AF; height: 96vh;">

                <div class="">
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3">
                        <i class="fa fa-th text-white" style="font-size: 15px;" @click="ActiveTab = 'UserDashboard'"></i>
                    </button>

                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3">
                        <i class="fa fa-cog text-white" style="font-size: 15px;"></i>
                    </button>
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3">
                        <i class="fa fa-file-text text-white" style="font-size: 15px;"
                            @click="ActiveTab = 'UserCreateReport'"></i>
                    </button>
                </div>
                <div class="mt-20">
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3">
                        <i class="fa fa-chevron-right text-white" style="font-size: 15px;"></i>
                    </button>

                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3">
                        <i class="fa fa-files-o text-white" style="font-size: 15px;" @click="pagerout"></i>
                    </button>
                    <button class="bg-slate-100 px-2 py-1 rounded-lg bg-opacity-30 mx-3 my-3" @click="signoutmethod()">
                        <i class="fa fa-sign-out text-white" style="font-size: 15px;"></i>
                    </button>
                </div>
            </div>
        </div>



        <hr>
        <br>


        <!-- code to toggle between componenet starts here  -->
        <div class="ml-16 px-10 " style="width: 93vw;">
            <!-- <AdminDashboard /> -->
            <!-- <AuthoriserD /> -->
            <!-- <Requestrecheck /> -->
        </div>


    </div>
</template>
    
    
    
<script>



</script>  
    
    
    
    
<style></style>