<template>
  <div class="">

    <div class="mt-10 w-auto mx-8">

      <div>
        <div class="flex justify-left self-center  z-10">
          <div class="sm:p-4 p-10 border-2 bg-slate-100 mx-auto rounded-2xl w-100 ">
            <div class="mb-4">
              <h3 class="font-semibold pb-2 text-2xl text-gray-800">Login </h3>
              <p class="text-gray-500">Please Log in to your account.</p>
            </div>


            <form action="" method="POST" @submit.prevent="checkForm">
              <div class="space-y-3">
                <div class="space-y-1">
                  <label class="text-sm font-medium text-gray-700 tracking-wide">Username</label>
                  <input
                    class=" w-full text-base px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="text" placeholder="Enter username" v-model.lazy="userData.Username">
                </div>
                <div class="space-y-2">
                  <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input type="password"
                    class="w-full content-center text-base bg-white px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    placeholder="Enter password" v-model.lazy="userData.Password">
                </div>

                <div class="pt-4">

                  <input type="submit" :name="button" value="Submit"
                    class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3 sm:p-1 rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 btn">
                </div>
              </div>
            </form>
            <div id="mes"></div>

          </div>
        </div>
      </div>


    </div>

  </div>
</template>
  
<script setup lang="ts">

import axios from 'axios';

const submitted = ref(false)
const resDataSuccess = ref();
const userData = ref({
  Username: '',
  Password: ''
});

const button = ref()


const checkForm = async () => {


  const response = await $fetch('/api/auth/signin', {
    method: 'POST',
    body: userData.value

  }).then(async (res) => {
    const user = await axios.post('api/auth/testToken')
      .then(() => {
        const role = res.users
        navigateTo(role)

      }).catch((err) => {
        alert(err.statusMessage)
      })
    return
  }).catch((err) => {
    alert(err.statusMessage)
  })



}
</script>


<style >
.body {
  margin-inline: 10px;
}

.body input {
  margin-inline: 10px;
  padding-block: 5px;
  margin-block: 8px;
}
</style>