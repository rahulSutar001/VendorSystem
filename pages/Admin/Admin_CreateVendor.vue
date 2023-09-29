<template>
    <div class="">

        <div class="flex flex-wrap">
            <div class="grow">

            </div>
            <div class=" bg-white  mt-10  ml-10 rounded-md contain grow  ">
                <!-- form starts from here -->
                <form @submit.prevent="CreaeVendor">

                    <div class="bg-blue-500 text-white py-2 px-2 ">
                        <h1 class="mb-2  sm:text-xl text-sm text-center">Create User</h1>
                    </div>

                    <div class="mx-4 my-3">

                        <!-- vendor name  -->
                        
                        <div class="text-black mt-5 flex flex-wrap">
                            <div class="grow">
                            <label for="" class=" ">User Name</label>
                            <input type="text" v-model.lazy="vendordata.Vendorname" placeholder="Enter name"
                                class="form-control bg-white w-full py-1 px-2 mt-2  " style="outline: none; border: 1px solid black;">
                            </div>
                        </div>


                        <div class="flex flex-wrap text-black mt-4 md:space-x-2 sm:space-x-2 space-x-0">
                            <div class="pb-1 grow ">
                                <label for="" class="">Branch Name</label>
                              
                                    <select name="" id="" v-model="vendordata.Branchname"
                                        class=" bg-white outline-none px-2 py-1  w-full mt-2"
                                        style="outline: none; border: 1px solid black;">
                                        <option value="" selected disabled>Select Branch Name</option>
                                        <option v-for="data in branchandlocation" :key="data.Id" :value="data.Branch">{{ capitalizeFirstLetter(data.Branch) }}</option>

                                    </select>

                                <!-- <div v-if="!vendordata.BranchLocation" class="error-message">Branch Location is required.</div> -->
                            </div>

                            <div class="pb-1 grow">
                                <label for="" class="">Branch Location</label>
                                <select name="" id="" v-model="vendordata.Branchlocation"
                                    placeholder="Please Select Branch Location"
                                    class="  bg-white outline-none px-2 py-1 mt-2 w-full"
                                    style="outline: none; border: 1px solid black;">
                                    <option value="" selected disabled>Select Branch Location</option>
                                    <option v-for="data in branchandlocation" :key="data.Id" :value="data.Location">{{ capitalizeFirstLetter(data.Location) }}</option>

                                </select>
                                <!-- <div v-if="!vendordata.Branchname" class="error-message">Branch Name is required.</div> -->
                            </div>
                        </div>


                        <!-- roles -->
                        <div class="text-black mt-2 ml-1">
                            <h2 class="">Select Role</h2>
                            <fieldset id="group1">
                                <fieldset id="group1">

                                    <div style="text-align: inline-flex;">

                                        <input type="radio" class="mr-3 bg-white" @change="selectRole('User')" name="group1"
                                            :checked="vendordata.User === 'True'" style="outline: none;">
                                        <label for="" class="text-lg">User</label>
                                    </div>


                                    <div style="text-align: inline-flex;">
                                        <input type="radio" class="mr-3 bg-white" @change="selectRole('Authoriser')"
                                            name="group1" :checked="vendordata.Authoriser === 'True'"
                                            style="outline: none;">
                                        <label for="" class="text-lg">Authoriser</label>
                                    </div>



                                    <div style="text-align: inline-flex;">
                                        <input type="radio" class="mr-3 bg-white" @change="selectRole('Verifier')"
                                            name="group1" :checked="vendordata.Verifier === 'True'" style="outline: none;">
                                        <label for="" class="text-lg">Verifier</label>
                                    </div>




                                    <div style="text-align: inline-flex;">
                                        <input type="radio" class="mr-3 bg-white" @change="selectRole('Admin')"
                                            name="group1" :checked="vendordata.Admin === 'True'" style="outline: none;">
                                        <label for="" class="text-lg">Admin</label>
                                    </div>

                                </fieldset>

                            </fieldset>
                        </div>
                        <!-- role ends here -->


                        <!-- vendor type and vendor category  -->
                        <div v-show="vendorExtraDetails" class="contain text-black mt-3 space-x-0 sm:space-x-2">

                            <div class=" pb-2">
                                <label for="" class="">Vendor Category</label>
                                <select name="" id="" v-model="vendordata.vendorCategory"
                                    placeholder="Please Select Vendor Category"
                                    style="outline: none; border: 1px solid black;"
                                    class=" form-control mt-2 w-full bg-white  py-1 px-2">
                                    <option value="" selected disabled text-sm>Select Category</option>
                                    <option v-for="data in backenddataVendorCandT" :key="data.Id"
                                        :value="data.vendorCategory">{{  data.vendorType }}</option>
                                    <option value="Other">Other</option>
                                </select>
                                <!-- <input type="text" id="inputOption" placeholder="Vendor Category"  v-if="vendordata.vendorCategory === 'Other'"
                                v-model="VendorCategory"
                                class="form-control  bg-white w-full my-1 py-2  border-b-2" style="outline: none;"> -->
                            </div>

                            <div class=" pb-2">
                                <label for="" class="">Sub-category</label>
                                <select name="" id="" v-model="vendordata.categorySubtype"
                                    placeholder="Please Select Vendor Type" style="outline: none; border: 1px solid black;"
                                    class="form-control mt-2 w-full bg-white  py-1 px-2">
                                    <option value="" selected disabled>Select Sub-Category</option>
                                    <option v-for="data in backenddataVendorCandT" :key="data.Id" :value="data.vendorType">
                                        {{data.vendorCategory }}</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div class=" pb-2">
                                <label for="">Vendor Type</label>
                                <select name="" id="" v-model="vendordata.vendorType"
                                    class="form-control mt-2 w-full bg-white  py-1 px-2"
                                    style="outline: none; border: 1px solid black;">
                                    <option value="" selected disabled>Select Type</option>
                                    <option value="Regular">Regular</option>
                                    <option value="One Time">One Time</option>
                                    <option value="ABC Supplier">ABC Supplier</option>
                                    <option value="Other">Other</option>
                                </select>

                            </div>

                        </div>

                       
                        <div class="flex flex-wrap text-black sm:space-x-2 space-x-0">
                            <div class="pb-2 grow ">
                                <label for="" class="">Bank Name</label>
                                <input type="text" placeholder="Bank Name" v-model="vendordata.Bankname"
                                    class="form-control mt-2 w-full bg-white  py-1 px-1 "
                                    style="outline: none; border: 1px solid black;">
                                <!-- <div v-if="!vendordata.Bankname" class="error-message">Bank Name is required.</div> -->
                            </div>
                            <div class="pb-2 grow">
                                <label for="" class=" ">Bank Account Number</label>
                                <input type="text" placeholder="Bank Account Number" v-model="vendordata.BankAccountNumber"
                                    class="form-control  mt-2 bg-white w-full  py-1 px-1"
                                    style="outline: none; border: 1px solid black;">
                                <!-- <div v-if="!vendordata.BankAccountNumber" class="error-message">Bank Account Number is required. -->
                                <!-- </div> -->
                            </div>
                            <div class="pb-2 grow ">
                                <label for="">Bank IFSC Code</label>
                                <input type="text" placeholder="Bank IFSC code" v-model="vendordata.BankIFCcode"
                                    class="form-control px-2 mt-2 w-full bg-white  py-1  "
                                    style="outline: none; border: 1px solid black;">
                                <!-- <div v-if="!vendordata.BankIFCcode" class="error-message">Bank IFSC Code is required.</div> -->
                            </div>
                        </div>

                        <!-- pannumber gst number  -->
                        <div class="flex flex-wrap sm:space-x-2 space-x-0 text-black">
                            <div class="grow pb-2 ">
                                <label for="">PAN Number</label>
                                <input type="text" placeholder="PAN Number" v-model="vendordata.PanNumber"
                                    class="form-control  mt-2 w-full bg-white  py-1 px-1 "
                                    style="outline: none; border: 1px solid black;">
                                <!-- <div v-if="!vendordata.PanNumber" class="error-message">PAN Number is required.</div> -->
                            </div>
                            <div class=" grow pb-2">
                                <label for="">GST Number</label>
                                <input type="text" placeholder="GST Number" v-model="vendordata.GSTnumber"
                                    class="form-control mt-2 w-full bg-white  py-1 px-1 "
                                    style="outline: none; border: 1px solid black;">
                                <!-- <div v-if="!vendordata.GSTnumber" class="error-message">GST Number is required.</div> -->
                            </div>
                        </div>
                        <!-- ---------------- -->

                        <div class="flex flex-wrap sm:space-x-2 space-x-0 text-black">
                            <div class="grow pb-2 ">
                                <label for="">Username</label>
                                <input type="text" placeholder="Username" v-model="vendordata.Username"
                                    class="form-control mt-2 w-full bg-white py-1 px-1 "
                                    style="outline: none; border: 1px solid black;">
                                <!-- <div v-if="!vendordata.Username" class="error-message">User Name is required.</div> -->
                            </div>

                            <div class="grow pb-2 ">
                                <label for="">Enter Password</label>
                                <input type="password" placeholder="Password" v-model="vendordata.Password"
                                    class="form-control mt-2 w-full bg-white   py-1 px-1 "
                                    style="outline: none; border: 1px solid black;">
                                <!-- <div v-if="!vendordata.Password" class="error-message">Password is required.</div> -->
                            </div>

                        </div>

                        <br>

                        <div class="text-center">
                            <button class="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-md btntext"
                                id="submitbtn" type="submit" name="myButton" value="Submit">Submit</button>
                        </div>

                    </div>
                </form>

                <!-- form ends here -->

            </div>
            <div class="grow">

            </div>
        </div>

        <div>

        </div>

    </div>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        definePageMeta({
            layout: "adminlayout",
        });
        return {
            vendordata: {

                action: "signup",
                create: "User",
                Vendorname: '',
                Branchlocation: '',
                Branchname: '',
                vendorType: '',
                vendorCategory: '',
                categorySubtype: '',
                User: "False",
                Admin: "False",
                Authoriser: "False",
                Verifier: "False",
                Bankname: '',
                BankAccountNumber: '',
                BankIFCcode: '',
                PanNumber: '',
                GSTnumber: '',
                Username: '',
                Password: ''
            },
            branchandlocation: {},
            BranchLocation: '',
            backenddataVendorCandT: {},
            BranchName: '',
            VendorCategory: '',
            VendorType: '',
            vendorExtraDetails: false
        }
    },
    methods: {

        capitalizeFirstLetter(string) {
      // Capitalize the first letter of the branch name
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

        selectRole(role) {
            this.vendordata = {
                ...this.vendordata,
                User: role === 'User' ? 'True' : 'False',
                Admin: role === 'Admin' ? 'True' : 'False',
                Authoriser: role === 'Authoriser' ? 'True' : 'False',
                Verifier: role === 'Verifier' ? 'True' : 'False',
            };
            if (this.vendordata.User === 'True') {
                this.vendorExtraDetails = true;
            } else {
                this.vendorExtraDetails = false;
            }
        },
        // mehtod to create vendor 
        async CreaeVendor() {

            const hasAllValues = Object.values(this.vendordata).every(value => value !== '');

            if (hasAllValues) {
                const body = this.vendordata
                // console.log(this.vendordata);
                const response = await axios.post('/api/auth/signup', body)
                    .then((res) => {

                        //     const btncontent = document.getElementById("btntext");
                        // btncontent.innerHTML = "Submitted Successfully !"
                        for (let key in this.vendordata) {
                            if (key !== 'action' && key !== 'create') {
                                this.vendordata[key] = null;
                            }
                        }
                   
                        alert("User Created Successfully!");
                    }).catch((err) => {

                        console.log(err)
                    })

            } else {
                alert('Please Fill Complete Details.');
            }


        },


    },

    mounted() {
        // method to get the bank and branch details 

        const response = $fetch('/api/module1/BranchLocation/branchLocation')
            .then((res) => {
                //    console.log("this is branchlocation data ------------>");
                this.branchandlocation = res
                // console.log(res);

            }).catch((err) => {
                console.log(err)
            })

        // below code is to display data from select tag to input field 

        const response1 = $fetch('/api/module1/vendorCategoy_Api/vendorcategoy')
            .then((res) => {
                this.backenddataVendorCandT = res
                // console.log(res);

            }).catch((err) => {
                console.log(err)
            })


    }




};

</script>


<style>
.contain {
    display: grid;
    grid-template-columns:
        repeat(auto-fit, minmax(10rem, 1fr));
}

.dd {
    width: 100vw;
}

.sidebar {
    flex-basis: 0;
    flex-grow: 0;
    width: 0;
    transition: width 0.3s ease-in-out;
    overflow: hidden;
}

.sidebar-content {
    padding: 20px;
}

.sidebar-visible {
    flex-basis: auto;
    width: 300px;
}</style>