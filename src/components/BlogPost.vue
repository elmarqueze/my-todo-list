<script setup>

    defineProps({
        title: String,
        id: Number,
        body: {
            type: String,
            default: "Without description",
        },
    });

    const emit = defineEmits(['changeFavorite'])

</script>


<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" > {{ id }} - {{ title }} </h5>
            <p>{{ body }}</p>
            <button @click="emit('changeFavorite', title)" class="btn btn-outline-primary">Favorite</button>
        </div>
    </div>
</template>