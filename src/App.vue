<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>


    <h1 class="title text-center">What do you wanna do today?</h1>
    <div class="text-center">
        <router-link class="btn btn-outline-primary me-2" to="/todo">Make Todo</router-link>
        <router-link class="btn btn-outline-primary" to="/articules">Read Articule</router-link>
    </div>
    <div class="container">
      <RouterView />
    </div>


</template>