<script setup>

</script>

<template>
    <h1 class="heading">form builder</h1>
    <div class="container">
        <div class="left-side"></div>
        <div class="middle-side"></div>
        <div class="right-side"></div>
    </div>
</template>

<style scoped>
    .heading{
        margin: 10px 20px;
        font-size: 40px;
        text-transform: capitalize;
        font-weight: bold;
    }
    .container{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border: 1px solid black;
        box-shadow: 0 0 10px rgba(0,0,0,0);
    }
    .left-side{
        width: 20%;
        background-color: #f0f0f0;
        padding: 20px;
        margin: 4px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0);
    }
    .middle-side{
        width: 60%;
        background-color: #f0f0f0;
        padding: 20px;
        margin: 4px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0);
        height: 90vh;
    }
    .right-side{
        width: 20%;
        background-color: #f0f0f0;
        padding: 20px;
        margin: 4px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0);
    }
</style>
