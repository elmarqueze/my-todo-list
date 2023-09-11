<script setup>
import { onMounted, ref } from 'vue';

import BlogPost from '../components/BlogPost.vue'
import PaginatePost from '../components/PaginatePost.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'

const posts = ref([]);
const postXpage = 10;
const start = ref(0);
const end = ref(postXpage);
const loading = ref(true);

const favorite = ref('')
const changeFavorite = (title) => {
  favorite.value = title
}

const next = () => {
  start.value = start.value + postXpage
  end.value = end.value + postXpage
}

const previus = () => {
  start.value = start.value - postXpage
  end.value = end.value - postXpage
}

onMounted(async() => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts.value = await res.json()
  } catch (error) {
    console.log(error)
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 1500)
  }
})

</script>


<template>
  <LoadingSpinner v-if="loading"/>
  <div class="container" v-else>
    <h3>My favorite article: {{ favorite }}</h3>
    <PaginatePost @next="next" @previus="previus" :start="start" :end="end" :maxLength="posts.length" class="mb-2"/>

    <BlogPost
      v-for="post in posts.slice(start, end)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @changeFavorite="changeFavorite"
      class="mb-2"
    ></BlogPost>
  </div> 
</template>