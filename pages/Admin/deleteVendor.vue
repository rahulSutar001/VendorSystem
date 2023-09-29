<template>
    <div class="ml-4">

        <div class="mobileView">
            <div class=" sm:hidden grow ml-7 mt-6 text-center bg-white  title">
                <button class="border-b-2 cursor-default font-semibold text-md lg:text-lg md:text-base  ">Delete
                    User</button>
            </div>

            <div class="flex flex-wrap w-full py-1 sm:mt-8 -mt-3 sbar">

                <div class=" sm:inline-flex hidden grow  my-2">
                    <button class="border-b-2 cursor-default font-semibold text-sm lg:text-lg md:text-base  ">Delete
                        User</button>
                </div>

                <div class="ml-8 grow ">
                    <div class="float-right w-auto">
                        <!-- search bar  -->
                        <div class="rounded-full border-2 bg-white flex searchbar  mt-4 sm:mt-0  ">
                            <div class="overflow-hidden flex">
                                <span v-show="secondsearchbar"><i class="fa fa-search text-black ml-3 mt-2 "
                                        style=""></i></span>
                                <input type="text" v-model="searchQuery" placeholder="Search"
                                    class=" my-1 ml-5 outline-none bg-white sm:w-auto w-full  searchbarinput"
                                    @focusin="secondsearchbar = true" @focusout="secondsearchbar = false">
                            </div>
                            <div>
                                <i
                                    class="fa fa-search mx-1 w-full bg-blue-500 pl-4 pr-3 sm:pl-5 sm:pr-4 py-2 text-white rounded-full searchbaricon"></i>
                            </div>


                        </div>
                    </div>

                </div>

            </div>

            <!-- search query ends here  -->

            <!-- The below is the code for header section displaying role  -->
            <div class="flex flex-wrap overflow-x-auto   border-b-2 bg-white header  mb-6 selectbar">
                <div class="flex flex-nowrap px-3 mt-2 mb-2 space-x-5">

                    <div class="grow">
                        <button @click="searchQuery = ''" :class="{ 'font-semibold': searchQuery === '' }"
                            class="outline-none sm:text-base text-sm hover:border-b-1">All Users</button>
                    </div>
                    <!-- @click="changesearchtype('User')" -->
                    <div class="grow">
                        <button @click="searchQuery = 'User'" :class="{ 'font-semibold': searchQuery === 'User' }"
                            class="outline-none hover:border-b-1">Users</button>
                    </div>
                    <div class="grow"><button @click="searchQuery = 'Authoriser'"
                            :class="{ 'font-semibold': searchQuery === 'Authoriser' }"
                            class="outline-none hover:border-b-4 ">Authoriser</button></div>
                    <div class="grow"><button @click="searchQuery = 'Verifier'"
                            :class="{ 'font-semibold': searchQuery === 'Verifier' }"
                            class="outline-none hover:border-b-4 ">Verifier</button></div>
                    <div class="grow"><button @click="searchQuery = 'Admin'"
                            :class="{ 'font-semibold': searchQuery === 'Admin' }"
                            class="outline-none hover:border-b-4 ">Admin</button></div>
                </div>
                <div>

                </div>
            </div>
        </div>
        <!-- User and Vendor will be displayed here  -->

        <div class="">

            <div class="overflow-x-auto border-2 bigscreentable">
                <table class="table w-full table-compact min-w-full ">
                    <thead>
                        <tr>
                            <th class="w-1/12">Sr no</th>
                            <th class="w-2/12">Name</th>
                            <th class="w-2/12">Branch Location</th>
                            <th class="w-2/12">Branch Name</th>
                            <th class="w-2/12">Role</th>
                            <th class="w-2/12">Action</th>
                            <th class="w-1/12"> View </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="( data, index) in paginatedData" :key="index">
                            <td>{{ (page - 1) * limit + index + 1 }}</td>

                            <!-- <td v-for="billnumber in data.billNumber" :key="billnumber.id">{{ billnumber.ReportId }}
                  </td> -->

                            <td>{{ data.Vendorname }}</td>
                            <td>{{ data.BranchLocation }}</td>
                            <td>{{ data.Branchname }}</td>
                            <td>
                                <button v-if="data.User === 'True'">User</button>
                                <button v-if="data.Admin === 'True'">Admin</button>
                                <button v-if="data.Authoriser === 'True'">Authoriser</button>
                                <button v-if="data.Verifier === 'True'">Verifier</button>
                            </td>

                            <td>
                                <div class="flex">
                                    <div><button
                                            class=" flex w-20 justify-center bg-green-500  hover:bg-green-400 text-gray-100 px-1 py-1 mx-1   rounded-sm tracking-wide font-sm  shadow-sm cursor-pointer transition ease-in duration-200 "
                                            @click.prevent="DeleteVendor(data.Id)">Delete</button></div>
                                    <!-- <div><button class=" flex justify-center bg-red-600  hover:bg-red-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm  shadow-sm cursor-pointer transition ease-in duration-200 "  @click.prevent="rejectreport(data.Id)">Edit</button></div> -->
                                </div>
                            </td>
                            <td>
                                <div class="icon">
                                    <span><label for="my-modal-4" class=""><i class="fa fa-eye cursor-pointer"
                                                @click="getSpecificData(data)"></i></label></span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <!-- the table ends here  -->

        <!-- screeen size design starts here for table -->
        <!-- below after 500px the main table will display none and below table will show up -->
        <!-- mx-16 -->
        <div class="overflow-x-auto bg-white border-2 my-5 px-5  py-3 sm:text-xs header smallscreentable"
            v-for="( data, index) in paginatedData" :key="index">

            <div class="flex text-left my-2 py-1 border-b-2">
                <div class="basis-2/4 font-semibold text-sm">
                    <p>Sr No</p>
                </div>
                <div class="basis-2/4">
                    <p>{{ (page - 1) * limit + index + 1 }}</p>
                </div>
            </div>

            <div class="flex text-left my-2 py-1 border-b-2">
                <div class="basis-2/4 font-semibold text-sm">Party Name</div>
                <div class="basis-2/4">{{ data.Vendorname }}</div>
            </div>

            <div class="flex text-left my-2 py-1 border-b-2">
                <div class="basis-2/4 font-semibold text-sm">
                    <p>Branch Location</p>
                </div>
                <div class="basis-2/4">
                    <p>{{ data.BranchLocation }}</p>
                </div>
            </div>

            <div class="flex text-left my-2 py-1 border-b-2">
                <div class="basis-2/4 font-semibold text-sm">Branch Name</div>
                <div class="basis-2/4">{{ data.Branchname }}</div>
            </div>

            <div class="flex text-left my-2 py-1 border-b-2">
                <div class="basis-2/4 font-semibold text-sm">
                    <p>Bank Name</p>
                </div>
                <div class="basis-2/4">
                    <p>{{ data.BankName }}</p>
                </div>
            </div>

            <div class="flex text-left my-2 py-1 border-b-2">
                <div class="basis-2/4 font-semibold text-sm">
                    <p>Bank Account Number</p>
                </div>
                <div class="basis-2/4">
                    <p>{{ data.BankAccountNumber }}</p>
                </div>
            </div>

            <div class="flex text-left my-2 py-1 border-b-2">
                <div class="basis-2/4 font-semibold text-sm">
                    <p>Bank IFSC Code</p>
                </div>
                <div class="basis-2/4">
                    <p>{{ data.BankIFCcode }}</p>
                </div>
            </div>

            <div class="flex text-left my-2 py-1 border-b-2">
                <div class="basis-2/4 font-semibold text-sm">
                    <p>Role</p>
                </div>
                <div class="basis-2/4">
                    <button v-if="data.User === 'True'">User</button>
                    <button v-if="data.Admin === 'True'">Admin</button>
                    <button v-if="data.Authoriser === 'True'">Authoriser</button>
                    <button v-if="data.Verifier === 'True'">Verifier</button>
                </div>
            </div>

            <div class="flex text-left my-2 py-1 border-b-2">
                <div class="basis-2/4 font-semibold text-sm">
                    <p>View</p>
                </div>
                <div class="basis-2/4">
                    <div class="icon">
                        <span><label for="my-modal-4" class=""><i class="fa fa-eye cursor-pointer"
                                    @click="getSpecificData(data)"></i></label></span>
                    </div>
                </div>
            </div>
            <div class="text-center mt-5">


                <div class="flex flex-wrap justify-center">

                    <div>
                        <button
                            class=" flex w-20 justify-center bg-green-500  hover:bg-green-400 text-gray-100 px-1 py-1 mx-1   rounded-sm tracking-wide font-sm  shadow-sm cursor-pointer transition ease-in duration-200 "
                            @click.prevent="DeleteVendor(data.Id)">Delete</button>
                    </div>
                    <!-- <div><button class=" flex justify-center bg-red-600  hover:bg-red-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm  shadow-sm cursor-pointer transition ease-in duration-200 "  @click.prevent="rejectreport(data.Id)">Edit</button></div> -->

                </div>

            </div>

        </div>
        <!-- screen size dsign ends here for table  -->

       

        <!-- model starts here  -->
        <div>
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
                <label class="modal-box relative rounded-none" for="">

                    <div class="sticky top-0 z-20" title="Close">
                        <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-3 top-3">✕</label>
                    </div>
                    <!-- Table stars here    -->
                    <br>
                    <br>
                    <hr>
                    <div class="overflow-x-auto">
                        <table class="table table-compact w-full">
                            <tbody>
                                <tr>
                                    <th>Sr no.</th>
                                    <td>{{ specificData.Id }}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{{ specificData.Vendorname }}</td>
                                </tr>
                                <tr>
                                    <th>Role</th>
                                    <td>
                                        <button v-if="specificData.User === 'True'">User</button>
                                        <button v-if="specificData.Admin === 'True'">Admin</button>
                                        <button v-if="specificData.Authoriser === 'True'">Authoriser</button>
                                        <button v-if="specificData.Verifier === 'True'">Verifier</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Branch Location</th>
                                    <td>{{ specificData.BranchLocation }}</td>
                                </tr>
                                <tr>
                                    <th>Branch Name</th>
                                    <td>{{ specificData.Branchname }}</td>
                                </tr>
                                <tr>
                                    <th>Bank Name</th>
                                    <td>{{ specificData.BankName }}</td>
                                </tr>
                                <tr>
                                    <th>Bank Account Number</th>
                                    <td>{{ specificData.BankAccountNumber }}</td>
                                </tr>
                                <tr>
                                    <th>Bank IFSC Number</th>
                                    <td>{{ specificData.BankIFCcode }}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <!-- table ends here  -->
                    <hr>
                    <br>

                </label>
            </label>
        </div>
        <!-- model ends here  -->

        <div class="text-center my-5 " v-if="successdata.length > limit">

            <div class="grow ">

                <div class="mr-5">
                    <button class=" rounded-full" @click="previousPage" :disabled="currentPage === 1">
                        <img src="../../assets/prev-img-removebg-preview.png" :class="{'opacity-20': page == 1}" alt="">
                    </button>

                    <button class=" ml-5" @click="nextPage" :disabled="currentPage === totalPages">
                        <img src="../../assets/next-img-removebg-preview.png" :class="{'opacity-20': page == totalPages}" alt="">
                    </button>
                </div>


            </div>
        </div>

        <div v-if="successdata.length == 0" class="mt-10 font-semibold w-full text-2xl text-black flex">
            <div class="mx-auto">
                No Data to Display
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {

    data() {
        definePageMeta({
            layout: "adminlayout",
        });
        return {
            successdata: [],
            specificData: [],
            searchQuery: '',
            searchQuery2: '',
            secondsearchbar: false,
            page: 1,
            limit: 6,
        }

    },


    methods: {

        nextPage() {
            if (this.page < this.totalPages) {
                this.page++;
            }
        },
        previousPage() {
            if (this.page > 1) {
                this.page--;
            }
        },

        async getAllVendor() {
            const data = await $fetch('/api/Edit_vendor_APi/vendor')
                .then((res) => {
                    console.log(res);
                    this.successdata = res
                }).catch((err) => {
                    console.log();
                })
        },
        getSpecificData(value) {

            this.specificData = value

        },
        // changesearchtype(value) {
        //     this.searchQuery = value
        // },


        DeleteVendor(value) {
            // console.log("delete method hit--" + value);
            const id = value
            // console.log(id);
            const response = $fetch('/api/Edit_vendor_APi/vendordelete', {
                method: 'DELETE',
                body: { id: id }
            })
                .then((res) => {
                    // console.log("Deleted successfully!");
                    // console.log(res);
                    alert("Deleted successfully!")
                    this.getAllVendor();
                }).catch((err) => {
                    // console.log("Failed to  Delete");
                    // console.log(err);


                })
        }
    },

    computed: {

        filteredData() {

            if (!this.searchQuery) {
                return this.successdata;

            }
            const searchTerm = this.searchQuery.toLowerCase();
            return this.successdata.filter((item) => {
                return Object.values(item).some((value) => {
                    if (typeof value === 'string') {
                        return value.toLowerCase().includes(searchTerm);
                    }
                    return false;
                });
            });
        },

        // the pagination code starts here 

        totalPages() {
            return Math.ceil(this.filteredData.length / this.limit);
        },

        paginatedData() {
            const startIndex = (this.page - 1) * this.limit;
            const endIndex = startIndex + this.limit;
            return this.filteredData.slice(startIndex, endIndex);
        },

        // the pagination code ends here
    },


    mounted() {
        this.getAllVendor();

        const start = (this.page - 1) * this.limit;
        const end = start + this.limit;
        const total = start + end;

        watch(this.Data, () => {
            this.page = 1;
        })

    }

}
</script>

<style>
.smallscreentable {
    display: none;
}

@media screen and (max-width: 500px) {
    .bigscreentable {
        display: none;
    }

    .smallscreentable {
        display: block;
        /* padding-inline: 40px; */
    }

    .header {
        margin-left: 20px;
    }

}

/* @media screen and (max-width: 500px) {
    .mobileView{
       position: fixed;
       display: block;
       top: 50px;
    }
    .title{
       position: relative;
       right: 52px;
       top: -10px;
       padding-block: 5px;
    }
    .sbar{
        position: relative;
       right: 109px;
    }
    .selectbar{
        position: relative;
       right: 95px;
    }
} */
</style>