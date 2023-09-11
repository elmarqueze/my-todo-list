<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <main class="app">
    <section class="apptitle">
      <h2 class="text-center">What do you want to do today?</h2>
      <div class="text-center">
          <router-link class="btn btn-outline-primary me-2" to="/todo">Do to do</router-link>
          <router-link class="btn btn-outline-primary" to="/articules">Read an article</router-link>
      </div>
      <div class="container">
        <RouterView />
      </div>
    </section>
  </main>

</template>