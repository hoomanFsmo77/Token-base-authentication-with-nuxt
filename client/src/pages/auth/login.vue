<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5">
        <form @submit.prevent="loginHandler">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="userInformation.email" type="email" class="form-control" id="email" >
            <template v-if="errorDebugger.flag && errorDebugger.message.email" >
              <p v-for="item in errorDebugger.message.email" class="text-danger" >{{item}}</p>
            </template>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="userInformation.password" type="password" class="form-control" id="password" >
            <template v-if="errorDebugger.flag && errorDebugger.message.password" >
              <p class="text-danger" v-for="item in errorDebugger.message.password">{{item}}</p>
            </template>
          </div>
          <div>
            <button :disabled="fetchFlag" class="btn btn-primary">
              <template v-if="fetchFlag">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </template>
              <template v-else>
                Login
              </template>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">
const {loginHandler,userInformation,errorDebugger,fetchFlag}=useLogin()
</script>

<style scoped>

</style>