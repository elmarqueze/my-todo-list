<script setup>

    defineProps(['start', 'end', 'maxLength'])

    const emit = defineEmits(["next","previus"])

</script>

<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button @click="emit('previus')" type="button" class="btn btn-outline-primary" :disabled="start <= 0">Preview {{ start }}</button>
        <button @click="emit('next')" type="button" class="btn btn-outline-primary" :disabled="end >= maxLength">Next {{ end}}</button>
    </div>
</template>