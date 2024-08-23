<script setup>
import { defineProps, ref } from 'vue'
const props = defineProps({
  container: Array // Define the type of the prop
});
</script>

<template>
  <div class="drop-target">
    <!-- Dropped items will be handled here -->
    Drop Here
    <pre>{{ props.container }}</pre>
  </div>
</template>

<style scoped>
 h1{
        background-color: gray;
    }
</style>
