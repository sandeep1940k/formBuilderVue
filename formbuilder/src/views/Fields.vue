<script setup>
import { FIELDS } from '@/constants/Fields';

</script>

<template>
    <div class="fields">
        <div v-for="field in FIELDS" :key="field.id">
            <div class="field">
                <i :class="field.icon"></i>
                <div class="field-name">{{ field.tabName }}</div>
            </div>
        </div>

        
        

    </div>
</template>

<style scoped>
.fields {
    background-color: gray;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0);
    .field{
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
    }
    .field-name{
        margin-left: 10px;
    }
}

</style>
