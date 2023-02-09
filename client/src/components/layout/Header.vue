<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <NuxtLink :to="{name:'index'}" class="navbar-brand" >Hooman.ir</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink active-class="active" :to="{name:'index'}" class="nav-link " aria-current="page">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :to="{name:'posts'}" active-class="active" class="nav-link" >Posts</NuxtLink>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink active-class="active" :to="{name:'profile'}" class="nav-link " aria-current="page">Profile</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink active-class="active" :to="{name:'auth-logout'}" class="nav-link " aria-current="page">Log out</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink active-class="active" :to="{name:'auth-register'}" class="nav-link " aria-current="page">Register</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink active-class="active" :to="{name:'auth-login'}" class="nav-link " aria-current="page">Log in</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>