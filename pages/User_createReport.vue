<template>
  <div>
    <br>
    <div class="flex flex-wrap">
      <div class="grow">

      </div>
      <div class=" bg-white  rounded-md contain mt-2 ml-10 grow">
        <!-- form starts from here -->
        <form @submit.prevent="submitFormDetails">

          <div class="bg-blue-500 text-white  py-2 px-2">
            <h1 class="mb-2  sm:text-xl text-sm text-center">Generate Report</h1>
          </div>
          <div class="px-3 py-3">
            <br>
            <div class="contain space-x-0 sm:space-x-1 my-1 ">
              <div class="">
                <label for="" class="text-sm ">Vendor Name</label>
                <input type="text" v-model.lazy="formdata.Vendorname" placeholder="Enter Vendor Name"
                  class="form-control bg-white  w-full  my-2 py-1 px-2" style="outline: none; border: 1px solid black;">
              </div>

              <!-- location  -->

              <div class=" ">
                <label for="" class="text-sm">Location</label>
                <input type="text" v-model.lazy="formdata.Location" placeholder="Enter Location"
                  class="form-control bg-white  w-full  my-2 py-1 px-2 " style="outline: none; border: 1px solid black;">
              </div>
            </div>

            <!-- branch location -->
            <div class="contain space-x-0 sm:space-x-1 my-1">

              <div class=" ">
                <label for="">Branch Name</label>

                <select name="" id="" v-model="formdata.BranchName" class=" bg-white outline-none px-2 my-2 py-1 w-full "
                  style="border: 1px solid black; outline: none;">
                  <option value="" selected disabled>Select Branch Name</option>
                  <option v-for="data in branchandlocation" :key="data.Id" :value="data.Branch">{{
                    data.Branch }}</option>

                </select>

              </div>

              <!-- branch name -->

              <div class="   ">
                <label for="">Branch Location</label>
                <select name="" id="" v-model="formdata.BranchLocation" style="border: 1px solid black; outline: none;"
                  placeholder="Please Select Branch Location" class="  bg-white outline-none my-2 py-1 w-full px-2">
                  <option value="" selected disabled>Select Branch Location</option>
                  <option v-for="data in branchandlocation" :key="data.Id" :value="data.Location">{{
                    data.Location }}</option>

                </select>
                <!-- <div v-if="!vendordata.Branchname" class="error-message">Branch Name is required.</div> -->
              </div>
            </div>

            <!-- GST number  -->
            <div class="contain space-x-0 sm:space-x-1 my-1">
              <div class="">
                <label for="">GST number</label>
                <input type="text" v-model.lazy="formdata.GSTnumber" class="form-control bg-white w-full my-2 py-1 px-2"
                  placeholder="Enter GST Number " style="outline: none; border: 1px solid black;">
              </div>


              <!-- GST amount  -->
              <div class="">
                <label for="">GST Amount</label>
                <input type="text" v-model.lazy="formdata.GSTamount" class="form-control bg-white w-full my-2 py-1 px-2 "
                  placeholder="Enter GST Amount" style="outline: none; border: 1px solid black;">
              </div>
            </div>


            <div class="contain space-x-0 sm:space-x-1">
              <div class="">
                <label for="">TDS Amount</label>
                <input type="text" v-model.lazy="formdata.TDSamount" class="form-control bg-white my-2 w-full py-1 px-2 "
                  placeholder="Enter TDS Amount" style="outline: none; border: 1px solid black;">
              </div>

              <!-- basic amount  -->

              <div class="">
                <label for="">Basic Amount</label>
                <input type="text" v-model.lazy="formdata.Basicamount"
                  class="form-control bg-white my-2 w-full py-1 px-2 " placeholder="Enter Basic Amount"
                  style="outline: none; border: 1px solid black;">
              </div>
            </div>
            <!-- payment type  -->

            <label class="" for="">Payment Type</label>

            <div class=" ">
              <!-- <input type="text" disabled class="form-control w-full py-2 px-1   border-b-2" v-model.lazy="formdata.Paymenttype" placeholder="Select Payment Type" style="outline: none;"> -->
              <select name="" id="" class=" bg-white my-2 w-full  py-1 px-2  " v-model.lazy="formdata.Paymenttype"
                style="outline: none; border: 1px solid black; ">
                <option value="" selected disabled> Select Payment Type</option>
                <option value="Advance">Advance</option>
                <option value="AgainstBill">Against Bill</option>
                <option value="PurchaseOrder">Purchase Order</option>
              </select>
            </div>

            <div class="contain space-x-0 sm:space-x-1">

              <!-- Advance Payment -->

              <div class="">
                <label for="">Advance Payment</label>
                <input type="text" v-model.lazy="formdata.Advanceamount"
                  class="form-control bg-white w-full my-2 py-1 px-2  " placeholder="Enter Amount"
                  style="outline: none; border: 1px solid black;">
              </div>



              <!-- payment amount  -->

              <div class="">
                <label for="">Balance Payment Amount</label>
                <input type="text" v-model.lazy="formdata.Paymentamount"
                  class="form-control bg-white w-full my-2 py-1 px-2 " placeholder="Enter Amount"
                  style="outline: none; border: 1px solid black;">
              </div>

            </div>
            <!-- total amount  -->

            <div class="">
              <label for="">Total Amount</label>
              <input type="text" v-model.lazy="formdata.Totalamount"
                class="form-control my-2 bg-white w-full   py-1 px-1 " placeholder="Enter Amount"
                style="outline: none; border: 1px solid black;">
            </div>

            <button class="bg-blue-500 text-white my-2 px-3 py-2  hover:bg-green-500" type="submit" id="btntext"
              name="myButton" value="Submit">Submit</button>

          </div>
        </form>
        <!-- form ends here -->

        <!-- form ends here -->
      </div>
      <div class="grow"></div>
    </div>
  </div>
</template>
  
<script>



export default {

  data() {
    definePageMeta({
      // set custom layout
      layout: "userlayout"

    });
    return {

      formdata: {
        Vendorname: '',
        Location: '',
        BranchLocation: '',
        BranchName: '',
        GSTnumber: '',
        GSTamount: '',

        TDSamount: '',
        Basicamount: '',
        Paymenttype: '',
        Advanceamount: '',
        Paymentamount: '',
        Totalamount: '',


      },
      resDataSuccess: {},
      slectedpaymentType: "",
      branchandlocation: {}


    }
  },
  methods: {


    async submitFormDetails() {


      const hasAllValues = Object.values(this.formdata).every(value => value !== '');

      if (hasAllValues) {
       
        const body = this.formdata


        const response = await $fetch('/api/report_Api/report',
          {
            method: "POST",
            body: body
          },

        )
          .then((res) => {
            // for (let key in this.formdata) {
            //   this.formdata[key] = null;
            // }
            alert(res.statusMessage);
            // location.reload();
          }).catch((err) => {
            console.log(err);
          })

      } else {

        alert('Please Fill Complete Details.');
      }

    }

  },

  mounted() {
    // method to get the bank and branch details 

    const response = $fetch('/api/module1/BranchLocation/branchLocation')
      .then((res) => {
        //    console.log("this is branchlocation data ------------>");
        this.branchandlocation = res


      }).catch((err) => {
        console.log(err)
      })

    // below code is to display data from select tag to input field 


  },


  watch: {
    slectedpaymentType(newVal) {
      this.formdata.Paymenttype = newVal;
    }
  }
}
</script>
  
<style>
.contain {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(10rem, 1fr));
}
</style>
  
 