<template>
    <div class="flex flex-wrap mt-6">
     <div class=" grow"></div>
      <div class=" ml-10  py-4 grow ">
  
        <!-- Add branch and locaion -- code starts here  -->
        <div>
          <div class="bg-blue-500 text-white w-full px-2 mr-4 py-1   text-center">
            <h2 class="my-1 text-lg text-white px-2 mr-4 py-1">Add New Branch Details</h2>
          </div>
          
          <div class=" mx-auto p-5 bg-white border border-gray-300 rounded  w-full">
            <div class="">
              
              <label for="branch-name"  class="block font-semibold mb-1">Branch Name<span class="text-red-500 ml-2">*</span></label>
              <input id="branch-name"  type="text" placeholder="Branch Name" style="outline: none;"
                class="w-full p-2 border border-gray-300 rounded" v-model="branchandlocation.Branch">
            </div>
  
            <div class="mt-4">
              <label for="branch-location"  class="block font-semibold mb-1">Branch Location<span class="text-red-500 ml-2">*</span></label>
              <input id="branch-location"  type="text" placeholder="Branch Location" style="outline: none;"
                class="w-full p-2 border border-gray-300 rounded" v-model="branchandlocation.location">
            </div>
            
            <!-- <div class="mt-4 text-center">
              <button class="bg-blue-500 text-white  py-1 rounded-md  w-32 hover:bg-blue-600 button"
                @click.prevent="addBranchLocation">Add</button>
            
            </div> -->
            <div class="mt-3 text-center">
              <button class="bg-blue-500 text-white px-3 py-2 btn btn-success w-24"
                @click.prevent="addBranchLocation">Add</button>
            
            </div>
          </div>
        </div>
        <!-- add branch locaion code ends here  -->
      </div>
      <div class="grow "></div>
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
        branchandlocation: {
          Branch: '',
          location: ''
        }
      }
    },
    methods: {
    async addBranchLocation() {

      const hasAllValues = Object.values(this.branchandlocation).every(value => value !== '');

if (hasAllValues) {
       
        const response = await $fetch('/api/module1/BranchLocation/branchLocation', {
          method: 'POST',
          body:  this.branchandlocation 
        }).then((res) => {
            // const btncontent = document.getElementById('btntext');
            //  btncontent.innerHTML = "Branch and Location Saved Successfully !"
            alert(JSON.stringify(res))
            this.branchandlocation = ''
            location.reload();
          })
          .catch((err) => {
            console.log(err);
          });

        }else{
           alert("Please Fill All the Details.")
        }
      },
      
    }
  }
  </script>
    
  <style>
  /* .button {
    /* font-size: 15px; */
    /* height: 10px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #4211d2;
    border: none;
    border-radius: 15px;
    box-shadow: 0 2px #6f47bf; */
    
  /* }  */
  

  
  .button:active {
    background-color: dodgerblue;
  }
  
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