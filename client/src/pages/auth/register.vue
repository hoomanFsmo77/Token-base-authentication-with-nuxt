<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5">
        <form @submit.prevent="registerHandler">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="userInformation.name" type="text" class="form-control" id="name" >
            <template v-if="errorDebugger.flag && errorDebugger.message.name" >
              <p v-for="item in errorDebugger.message.name" class="text-danger" >{{item}}</p>
            </template>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input v-model="userInformation.email" type="email" class="form-control" id="email" >
            <template v-if="errorDebugger.flag && errorDebugger.message.email" >
              <p class="text-danger" v-for="item in errorDebugger.message.email">{{item}}</p>
            </template>

          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="userInformation.password" type="password" class="form-control" id="password" >
            <template v-if="errorDebugger.flag && errorDebugger.message.password">
              <p class="text-danger" v-for="item in errorDebugger.message.password">{{item}}</p>
            </template>

          </div>
          <div class="mb-3">
            <label for="c_password" class="form-label">Confirm Password</label>
            <input v-model="userInformation.c_password" type="password" class="form-control" id="c_password" >
            <template v-if="errorDebugger.flag && errorDebugger.message.c_password">
              <p class="text-danger" v-for="item in errorDebugger.message.c_password">{{item}}</p>
            </template>
          </div>
          <div>
            <button :disabled="fetchFlag" class="btn btn-primary">
              <template v-if="fetchFlag">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </template>
              <template v-else>
                Register
              </template>

            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {userInformation,registerHandler,errorDebugger,fetchFlag}=UseRegister()
</script>

<style scoped>

</style>