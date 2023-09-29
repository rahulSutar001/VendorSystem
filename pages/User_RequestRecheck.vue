<template>
    <div class="">

        <div class=" sm:hidden grow ml-7 mt-8 text-center bg-white pb-1 ">
            <button class="border-b-2 cursor-default font-semibold text-md lg:text-lg md:text-base  ">Recheck Requested Reports</button>
        </div>

        <div class="flex flex-wrap flex-row  w-full py-2 sm:mt-8 mt-0">

            <div class=" sm:inline-flex hidden grow ml-5 mt-1">
                <button class="border-b-2 cursor-default font-semibold text-sm lg:text-lg md:text-base  ">Recheck Requested Reports</button>
            </div>

            <div class="ml-8 grow ">
                <!-- <input type="text" placeholder="Type here" class="input input-ghost w-full max-w-xs" /> -->
                <!-- the search bar logic starts here  -->
                <div class="float-right w-auto">
                    <!-- search bar  -->
                    <div class="rounded-full border-2 bg-white flex searchbar  mt-4 sm:mt-0">
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

        <!-- Recheck Requested Reports -->

        <div>
            <!-- The table code starts here  -->
            <div class="bg-white sm:bg-none ml-5 w-full rounded-2xl">

                <div class="">

                    <div class="overflow-x-auto border-2 bigscreentable">
                        <table class="table w-full table-compact min-w-full ">
                            <thead>
                                <tr>
                                    <th class="w-1/12">Sr no</th>
                                    <th class="w-2/12">Party Name</th>
                                    <th class="w-2/12">Location</th>
                                    <th class="w-2/12">Amount</th>
                                    <th class="w-2/12">Date</th>
                                    <th class="w-2/12">Status</th>
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
                                    <td>{{ data.Location }}</td>
                                    <td>{{ data.Total }}</td>
                                    <td>{{ data.BillDate }}</td>

                                    <td>
                                        <div class="flex">

                                            <div><button
                                                    class=" flex justify-center bg-red-600  text-gray-100 px-1 py-1 mx-1 cursor-default  rounded-sm tracking-wide font-sm  shadow-sm  ">{{
                                                        data.Authoriser }}</button></div>

                                        </div>
                                    </td>
                                    <td>
                                        <div class="flex flex-wrap text-center">
                                            <div>
                                                <button @click="openEditModel(data)"
                                                    class=" flex justify-center bg-blue-600  hover:bg-blue-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm  shadow-sm cursor-default transition ease-in duration-200 ">
                                                    <label class="cursor-pointer" for="my-modal-5">Edit</label>
                                                </button>
                                            </div>
                                            <div>
                                                <button @click="requestrecheck(data.Id)"
                                                    class=" flex justify-center bg-yellow-600  hover:bg-yellow-400 text-gray-100 px-1 py-1 mx-1 rounded-sm tracking-wide font-sm  shadow-sm cursor-default transition ease-in duration-200 ">
                                                    <label class="cursor-pointer" for="my-modal-5">Resubmit</label>
                                                </button>
                                            </div>
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

                <!-- screeen size design starts here for table -->
                <!-- below after 500px the main table will display none and below table will show up -->
                <!-- mx-16 -->
                <div class="overflow-x-auto border-2 my-5 px-5 py-3 sm:text-xs smallscreentable"
                    v-for="( data, index) in paginatedData" :key="index">

                    <div class="flex text-left my-2 py-1 border-b-2">
                        <div class="basis-2/4 font-semibold text-sm">
                            <p>Sr No</p>
                        </div>
                        <div class="basis-2/4">
                            <p>{{ index + 1 }}</p>
                        </div>
                    </div>

                    <div class="flex text-left my-2 py-1 border-b-2">
                        <div class="basis-2/4 font-semibold text-sm">Party Name</div>
                        <div class="basis-2/4">{{ data.Vendorname }}</div>
                    </div>

                    <div class="flex text-left my-2 py-1 border-b-2">
                        <div class="basis-2/4 font-semibold text-sm">
                            <p>Location</p>
                        </div>
                        <div class="basis-2/4">
                            <p>{{ data.Location }}</p>
                        </div>
                    </div>

                    <div class="flex text-left my-2 py-1 border-b-2">
                        <div class="basis-2/4 font-semibold text-sm">Amount</div>
                        <div class="basis-2/4">{{ data.Total }}</div>
                    </div>

                    <div class="flex text-left my-2 py-1 border-b-2">
                        <div class="basis-2/4 font-semibold text-sm">
                            <p>Date</p>
                        </div>
                        <div class="basis-2/4">
                            <p>{{ data.BillDate }}</p>
                        </div>
                    </div>

                    <div class="flex text-left my-2 py-1 border-b-2">
                        <div class="basis-2/4 font-semibold text-sm">
                            <p>Status</p>
                        </div>
                        <div class="basis-2/4">
                            <div>
                                <button
                                    class=" flex justify-center bg-red-600  hover:bg-red-400 text-gray-100 px-1 py-1 mx-1   rounded-sm tracking-wide font-sm  shadow-sm  transition ease-in duration-200 ">{{
                                        data.Authoriser }}</button>
                            </div>
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


                        <div class=" flex flex-wrap justify-center text-center">
                            <div class="">
                                <button @click="openEditModel(data)"
                                    class=" flex justify-center bg-blue-600  hover:bg-blue-400 text-gray-100 px-1 py-1 mx-1   rounded-sm tracking-wide font-sm  shadow-sm cursor-pointer transition ease-in duration-200 ">
                                    <label class="cursor-pointer" for="my-modal-5">Edit</label>
                                </button>
                            </div>
                            <div class="">
                                <button @click="requestrecheck(data.Id)"
                                    class=" flex justify-center bg-yellow-600  hover:bg-yellow-400 text-gray-100 px-1 py-1 mx-1   rounded-sm tracking-wide font-sm  shadow-sm cursor-pointer transition ease-in duration-200 ">
                                    <label class="sm:text-sm cursor-pointer" for="my-modal-5">Resubmit</label>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- screen size dsign ends here for table  -->



                <!-- model starts here  -->
                <div class="">
                    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                    <label for="my-modal-4" class="modal cursor-pointer" style="overflow: scroll;">
                        <label class="modal-box relative rounded-none" for="">
                            <div class="sticky top-0 z-20" title="Close">
                                <label for="my-modal-4" class="btn btn-sm btn-circle absolute right-2 top-0">✕</label>
                            </div>
                            <!-- Table stars here    -->
                            <br>
                            <br>
                            <hr>
                            <div class="overflow-x-auto">
                                <table class="table table-compact w-full">
                                    <tbody>
                                        <tr>
                                            <th>Bill No</th>
                                            <td>{{ specificData.Id }}</td>
                                        </tr>
                                        <tr>
                                            <th>Borrower/Project Name</th>
                                            <td>{{ specificData.Vendorname }}</td>
                                        </tr>
                                        <tr>
                                            <th>GST Number</th>
                                            <td>{{ specificData.VendorGSTnumber }}</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Type</th>
                                            <td>{{ specificData.Paymenttype }}</td>
                                        </tr>

                                        <tr>
                                            <th>Basic Amount</th>
                                            <td>{{ specificData.Basicamount }}</td>
                                        </tr>
                                        <tr>
                                            <th>GST Amount</th>
                                            <td>{{ specificData.GSTamount }}</td>
                                        </tr>
                                        <tr>
                                            <th>TDS</th>
                                            <td>{{ specificData.TDS }}</td>
                                        </tr>
                                        <tr>
                                            <th>Total Amount</th>
                                            <td>{{ specificData.Total }}</td>
                                        </tr>
                                        <tr>
                                            <th>Advance Payment</th>
                                            <td>{{ specificData.AdvancePayment }}</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Amount</th>
                                            <td>{{ specificData.PaymentAmount }}</td>
                                        </tr>
                                        <tr>
                                            <th>Location</th>
                                            <td>{{ specificData.Location }}</td>
                                        </tr>
                                        <tr>
                                            <th>Verifier Decision</th>
                                            <td>{{ specificData.Verifier }}</td>
                                        </tr>
                                        <tr>
                                            <th>Authoriser Decision</th>
                                            <td>{{ specificData.Authoriser }}</td>
                                        </tr>
                                        <tr>
                                            <th>Admin Decision</th>
                                            <td>{{ specificData.Admin }}</td>
                                        </tr>
                                        <tr>
                                            <th>Report Status</th>
                                            <td>{{ specificData.status }}</td>
                                        </tr>

                                        <tr>
                                            <th>Branch Name</th>
                                            <td>{{ specificData.BranchName }}</td>
                                        </tr>
                                        <tr>
                                            <th>Branch Location</th>
                                            <td>{{ specificData.BranchLocation }}</td>
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


                <!-- update user model starts here report  -->

                <div v-show="show">
                    <div v-if="updataData" class="modal1">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg mb-2">Update Report</h3>


                            <hr class="">
                            <!-- vendor name  -->
                            <br>
                            <div class="">
                                <label for="" class="text-sm">Vendor Name</label>
                                <input type="text" v-model.lazy="updataData.Vendorname" placeholder="Enter Vendor Name"
                                    class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" style="outline: none;">
                            </div>

                            <!-- location  -->
                            <br>
                            <div class="">
                                <label for="" class="text-sm">Location</label>
                                <input type="text" v-model.lazy="updataData.Location" placeholder="Enter Location"
                                    class="form-control bg-white w-full my-1 py-2 px-1 border-b-2" style="outline: none;">
                            </div>


                            <!-- branch location -->
                            <div class="contain mt-4">

                                <div class="mr-2">
                                    <label for="" class="text-sm">Branch Location</label>
                                    <input type="text" v-model.lazy="updataData.BranchLocation"
                                        placeholder="Enter Branch Location"
                                        class="form-control bg-white w-full my-1 py-2 px-1 border-b-2"
                                        style="outline: none;">
                                </div>

                                <!-- branch name -->

                                <div class="">
                                    <label for="" class="text-sm">Branch Name</label>
                                    <input type="text" v-model.lazy="updataData.BranchName" placeholder="Enter Branch Name"
                                        class="form-control bg-white w-full my-1 py-2 px-1 border-b-2"
                                        style="outline: none;">
                                </div>
                            </div>

                            <!-- GST number  -->
                            <br>
                            <div>
                                <label for="">GST number</label>
                                <input type="text" v-model.lazy="updataData.VendorGSTnumber"
                                    class="form-control bg-white w-full my-1 py-2 px-1 border-b-2"
                                    placeholder="Enter GST Number " style="outline: none;">
                            </div>
                            <br>

                            <!-- GST amount  -->
                            <div>
                                <label for="">GST Amount</label>
                                <input type="text" v-model.lazy="updataData.GSTamount"
                                    class="form-control bg-white w-full my-1 py-2 px-1 border-b-2"
                                    placeholder="Enter GST Amount" style="outline: none;">
                            </div>


                            <br>
                            <div>
                                <label for="">TDS Amount</label>
                                <input type="text" v-model.lazy="updataData.TDS"
                                    class="form-control bg-white w-full my-1 py-2 px-1 border-b-2"
                                    placeholder="Enter TDS Amount" style="outline: none;">
                            </div>

                            <!-- basic amount  -->
                            <br>
                            <div>
                                <label for="">Basic Amount</label>
                                <input type="text" v-model.lazy="updataData.Basicamount"
                                    class="form-control bg-white w-full my-1 py-2 px-1 border-b-2"
                                    placeholder="Enter Basic Amount" style="outline: none;">
                            </div>

                            <!-- payment type  -->
                            <br>
                            <label class="" for="">Payment Type</label>
                            <br>
                            <div class="inline-flex form-group w-full">
                                <!-- <input type="text" disabled class="form-control w-full py-2 px-1   border-b-2" v-model.lazy="formdata.Paymenttype" placeholder="Select Payment Type" style="outline: none;"> -->
                                <select name="" id="" class="w-full bg-white form-control border-b-2 mt-2"
                                    v-model.lazy="updataData.Paymenttype" style="outline: none;">
                                    <option value="" selected></option>
                                    <option value="Advance">Advance</option>
                                    <option value="AgainstBill">Against Bill</option>
                                    <option value="PurchaseOrder">Purchase Order</option>
                                </select>
                            </div>
                            <br>
                            <!-- Advance Payment -->
                            <br>
                            <div>
                                <label for="">Advance Payment</label>
                                <input type="text" v-model.lazy="updataData.AdvancePayment"
                                    class="form-control bg-white w-full my-1 py-2 px-1 border-b-2"
                                    placeholder="Enter amount" style="outline: none;">
                            </div>



                            <!-- payment amount  -->
                            <br>
                            <div>
                                <label for="">Balance Payment Amount</label>
                                <input type="text" v-model.lazy="updataData.PaymentAmount"
                                    class="form-control bg-white w-full my-1 py-2 px-1 border-b-2"
                                    placeholder="Enter amount" style="outline: none;">
                            </div>

                            <!-- total amount  -->
                            <br>
                            <div>
                                <label for="">Total Amount</label>
                                <input type="text" v-model.lazy="updataData.Total"
                                    class="form-control bg-white w-full my-1 py-2 px-1 border-b-2"
                                    placeholder="Enter amount" style="outline: none;">
                            </div>


                            <div class="modal-action">
                                <button class="btn" @click="updateReport">Update</button>
                                <button class="btn" @click="closeEditModel">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div class="flex w-full" v-if="Data.length > limit">
        <div class="flex mx-auto space-x-8">
          <button class="w-20"
            @click="previousPage" :disabled="page == 1">
            <span><img src="../assets/prev-img-removebg-preview.png" :class="{'opacity-20': page == 1}" alt=""></span>
          </button>
          <!-- <span>Page {{ currentPage }} of {{ totalPages }}</span> -->
          <button class="w-20 "
            @click="nextPage" :disabled="page == totalPages">
            <span><img src="../assets/next-img-removebg-preview.png" :class="{'opacity-20': page == totalPages}" alt=""></span>
            
          </button>
        </div>
      </div>

        <!-- below code is to display message if there is no data  -->

        <div v-if="Data.length == 0" class="mt-10 font-semibold w-full text-2xl text-black flex">
            <div class="mx-auto">
                No Data to Display
            </div>
        </div>




    </div>
</template>
  
<script setup lang="ts">
definePageMeta({
    // set custom layout
    layout: "userlayout"

});

import axios from 'axios';

let show = ref(false)
const page = ref<number>(1);
const limit = ref<number>(9);
let Data = ref<any>([]);
const updataData = ref<any>();
const secondsearchbar = ref(false);


onMounted(() => {
    const resDataSuccess = $fetch('api/fetchreport/reqrechkforuser', {
        method: 'POST',
        body: {
            "recheck": "Rejected"
        }

    }).then((res) => {
        
        Data.value = res
        Data.value.map((data: { BillDate: string; }) => {
            data.BillDate = data.BillDate.split("T", 1)[0]

        })

    })

});

const openEditModel = (value: any) => {


    updataData.value = {
        Id: value.Id,
        Vendorname: value.Vendorname,
        VendorGSTnumber: value.VendorGSTnumber,
        Paymenttype: value.Paymenttype,
        Basicamount: value.Basicamount,
        GSTamount: value.GSTamount,
        TDS: value.TDS,
        Total: value.Total,
        AdvancePayment: value.AdvancePayment,
        PaymentAmount: value.PaymentAmount,
        Location: value.Location,
        BranchName: value.BranchName,
        BranchLocation: value.BranchLocation
    }

    show.value = !show.value

}

const closeEditModel = () => {
    updataData.value = null;
}

const updateReport = async () => {
    let body = updataData.value
    const response = await axios.put('api/report_Api/report', body)
        .then((res) => {
            alert(res.data.statusMessage)
            closeEditModel();
        }).catch((err) => {
            console.log("Failed to update data");
            alert("Failed to update data")
            console.log(err);


        })
}

const requestrecheck = async (value: any) => {
    try {
        await $fetch('/api/Decision_Api/decision_user_approve', {
            method: 'POST',
            body: {
                "ReportId": value,
                "Approve": "True",
                "Comment": "XYZ",
            }
        }).then((res) => {
            alert(res.statusMessage);
            location.reload();
        })

    } catch (err) {
        return alert(err);
    }
}

const specificData: Ref<any> = ref({})



// search logic starts here 
// import { computed } from 'nuxt/dist/app/compat/capi';
const searchQuery = ref('');

const filteredData = computed(() => {
    if (!searchQuery.value) {
        return Data.value;
    }

    const searchTerm = searchQuery.value.toLowerCase();

    return Data.value.filter((item: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        return Object.values(item).some((value) => {
            if (typeof value === 'string') {
                return value.toLowerCase().includes(searchTerm);
            }
            return false;
        });
    });
});



const getSpecificData = (value: any) => {

    specificData.value = value

}


// the pagination code starts here 

const totalPages = computed(() => Math.ceil(filteredData.value.length / limit.value));

const paginatedData = computed(() => {
    const startIndex = (page.value - 1) * limit.value;
    const endIndex = startIndex + limit.value;
    return filteredData.value.slice(startIndex, endIndex);
});

const nextPage = () => {
    if (page.value < totalPages.value) {
        page.value++;
    }
};

const previousPage = () => {
    if (page.value > 1) {
        page.value--;
    }
};


// the pagination code ends here 

</script>
  
<style scoped>
.table tr th {
    font-size: small;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.icon i {
    margin-inline: 5px;
}

.priviewIcon {
    color: grey
}

.dp select,
option {
    width: 50px;
}

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


}

.modal1 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-box {
    background-color: #fff;
    padding: 2rem;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.modal-action {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
}
</style>
  