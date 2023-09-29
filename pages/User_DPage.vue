<template>
  <div class="">

    <div class=" sm:hidden grow ml-7 mt-8 text-center bg-white pb-1 ">
            <button class="border-b-2 cursor-default font-semibold text-md lg:text-lg md:text-base  ">Dashboard</button>
        </div>

        <div class="flex flex-wrap flex-row  w-full py-2 sm:mt-8 mt-0">

            <div class=" sm:inline-flex hidden grow ml-5 mt-1">
                <button class="border-b-2 cursor-default font-semibold text-sm lg:text-lg md:text-base  ">Dashboard</button>
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

    <!-- The table code starts here  -->
    <div class="bg-white sm:bg-none ml-5 w-full rounded-2xl">

      <div class="">

        <div class="overflow-x-auto  border-2 bigscreentable">
          <table class="table w-full table-compact min-w-full ">
            <thead>
              <tr>

                <th class="w-1/12">Sr No</th>
                <th class="w-2/12">Party Name</th>
                <th class="w-2/12">Location</th>
                <th class="w-2/12">Amount</th>
                <th class="w-2/12">Date</th>
                <th class="w-2/12">Report Status</th>
                <th class="w-1/12"> View </th>
              </tr>
            </thead>
            <tbody>

              <tr v-for="( data, index) in paginatedData" :key="index">


                <td>{{ (page - 1) * limit + index + 1 }}</td>

                <td>{{ data.Vendorname }}</td>
                <td>{{ data.Location }}</td>
                <td>{{ data.Total }}</td>
                <td> {{ data.BillDate }}</td>

                <td><button class="cursor-default px-3 py-1 w-24 rounded-sm" id="status"
                    style=" font-family: Roboto;" :class="{
                      'bg-green-600 , text-white': data.status == 'Approved',
                      'bg-red-600 , text-white': data.status == 'Rejected',
                      'bg-yellow-600 , text-white': data.status == 'Pending'
                    }">{{ data.status }}</button></td>
                <td>
                  <div class="icon">
                    <span><label for="my-modal-4" class="cursor-pointer"><i class="fa fa-eye"
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
            <p>{{ (page - 1) * limit + index + 1 }}</p>
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


          <div class=" text-center">
            <div>
              <button
                class=" flex justify-center bg-green-600  hover:bg-green-400 text-gray-100 px-1 py-1 mx-1   rounded-sm tracking-wide font-sm  shadow-sm cursor-pointer transition ease-in duration-200 ">{{
                  data.status }}</button>
            </div>
          </div>
        </div>

      </div>


      <!-- screen size dsign ends here for table  -->


      <!-- model starts here  -->

      <div class="">

        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer model-dialog-scrollable">
          <label class="modal-box relative rounded-none" for="">

            <div class="sticky top-0 z-20 ">

              <label for="my-modal-4" class=" btn btn-sm btn-circle absolute right-3 top-3">✕</label>
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
         

          </label>
        </label>
      </div>


    </div>

    <div class="flex w-full " v-if="Data.length > limit">
        <div class="flex mx-auto space-x-8">
          <button class="w-20 "
            @click="previousPage"  :disabled="page == 1">
            <span><img src="../assets/prev-img-removebg-preview.png" :class="{'opacity-20': page == 1}" alt=""></span>
          </button>
          <!-- <span>Page {{ currentPage }} of {{ totalPages }}</span> -->
          <button class="w-20 "
            @click="nextPage" :disabled="page == totalPages">
            <span><img src="../assets/next-img-removebg-preview.png" :class="{'opacity-20': page == totalPages}" alt=""></span>
            
          </button>
        </div>
      </div>


    <!-- message when no data  -->
    <div v-if="Data.length == 0" class="mt-10 font-semibold w-full text-2xl text-black flex">
      <div class="mx-auto">
        No Data to Display
      </div>
    </div>

  </div>
</template>
  
<script>
import axios from "axios"

export default {

  data() {
    definePageMeta({
      // set custom layout
      layout: "userlayout"

    });
    return {
      name: 'Rahul',
      search: '',
      page: 1,
      limit: 8,
      Data: [],
      specificData: {},
      data: {},
      json: {},
      lang: "en",
      searchQuery: '',
      setdata: [],
      secondsearchbar: false

    };
  },
  async mounted() {

    const resDataSuccess = await axios.get('/api/module1/UserAPI/GetAllReports')
      .then((res) => {
        this.Data = res.data
        this.Data.map(data => {
          data.BillDate = data.BillDate.split("T", 1)[0]

        })
      })



    const start = (this.page - 1) * this.limit;
    const end = start + this.limit;
    const total = start + end;

    watch(this.Data, () => {
      this.page = 1;
    })


  },
  computed: {

    filteredData() {
      if (!this.searchQuery) {
        return this.Data;

      }
      const searchTerm = this.searchQuery.toLowerCase();
      return this.Data.filter((item) => {
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

    async update() {
      await axios.get('/api/module1/UserAPI/Update', {
        method: 'PUT',
      })
    },


    getSpecificData(value) {

      this.specificData = value

    },


  }
}


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

.disabled-img {
  opacity: 0.5; /* Example: Reduce opacity for disabled effect */
  /* Add any other styles to visually indicate the image is disabled */
}
</style>