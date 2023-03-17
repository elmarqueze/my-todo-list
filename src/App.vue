<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <main class="app">
    <section class="apptitle">
      <h2 class="text-center">Que veux-tu faire aujourd'hui?</h2>
      <div class="text-center">
          <router-link class="btn btn-outline-primary me-2" to="/todo">Faire à faire</router-link>
          <router-link class="btn btn-outline-primary" to="/articules">Lire l'article</router-link>
      </div>
      <div class="container">
        <RouterView />
      </div>
    </section>
  </main>

</template>