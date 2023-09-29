<template>
       <div class="flex flex-wrap mt-10">
     <div class=" grow"></div>
      <div class=" ml-10 bg-white  grow ">
  
        <!-- Add branch and locaion -- code starts here  -->
     
          <div class="bg-blue-500 text-white w-full px-2 mr-4 py-1 text-center">
            <h2 class="my-1 text-lg text-white px-2 mr-4 py-1">Add Vendor Category</h2>
          </div>
          
          <div class="  p-5 bg-white  border-gray-300 rounded  w-full">
           
                <label for="" class="block font-semibold " >Enter Vendor Type<span class="text-red-500 ml-2">*</span></label>
                <select name="" id="" v-model="vendorcategory.Type" style="" class="-ml-0 w-full p-1  border border-gray-300 rounded ">
                    <option value="" selected>Vendor Type</option>
                    <option value="A/V vendor">A/V vendor</option>
                    <option value="MBT Vendor">MBT Vendor</option>
                </select>
              
          
  
            <div class="mt-2">
                <label for="" class="block font-semibold mb-1">Vendor Category<span class="text-red-500 ml-2">*</span></label>
                <input type="text" v-model.lazy="vendorcategory.Vendor" placeholder="Enter Vendor Category" style=" outline: none;" class=" w-full  p-2 border border-gray-300 rounded">
            </div>

            <div class="mt-3 text-center">
              <button class="bg-blue-500 text-white px-3 py-1 btn btn-success w-24"
                @click.prevent="addVendorCategory">Add</button>
            
            </div>
            </div>
     
        </div>
        <div class="grow "></div>
        <!-- add branch locaion code ends here  -->
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
            vendorcategory: {
                Type: '',
                Vendor: '',
            },
            SelectVendorCategoryType: {
                type: ''
            }
        }
    },
    watch: {
        'SelectVendorCategoryType.type': function (newvalue) {
          this.vendorcategory.Type = newvalue;
          
        }
      },
    methods: {
        async addVendorCategory() {
          const hasAllValues = Object.values(this.vendorcategory).every(value => value !== '');

       if (hasAllValues) {
            const data = this.vendorcategory;    
            const response = await $fetch('/api/module1/vendorCategoy_Api/vendorcategeorydata', {
                method: 'POST',
                body:  this.vendorcategory,
                })
            .then((res) => {
              alert("Vendor Category and Type Added Successfully!");
              this.vendorcategory = ''
            location.reload();
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
               
          } else {
            alert("Please Fill All the Details.")
            location.reload();
          }
          
        }
    }
}
</script>
<style>

  
  .designLableAndInput input,
  select {
    margin-block: 10px;
    margin-inline: 5px;
    padding-block: 5px;
    padding-inline: 5px;
    outline: none;
    border: 1px solid black;
  }
</style>
