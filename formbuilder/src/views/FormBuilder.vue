<script setup>
import { ref } from 'vue'
import Fields from './Fields.vue';
import Elements from './Elements.vue';
import Layouts from './Layouts.vue';

const activeTab = ref('Fields');
const manageActiveTab = (tab) => {
  activeTab.value = tab;
}
</script>

<template>
  <h1 class="heading">Form Builder</h1>
  <div class="container">
    <div class="left-side">
      <div class="tabs">
        <div :class="['tab', { active: activeTab === 'Fields' }]" @click="manageActiveTab('Fields')">Fields</div>
        <div :class="['tab', { active: activeTab === 'Elements' }]" @click="manageActiveTab('Elements')">Elements</div>
        <div :class="['tab', { active: activeTab === 'Layouts' }]" @click="manageActiveTab('Layouts')">Layouts</div>
      </div>
      <div>
        <div v-if="activeTab == 'Fields'">
          <Fields />
        </div>
        <div v-else-if="activeTab == 'Elements'">
          <Elements />
        </div>
        <div v-else-if="activeTab == 'Layouts'">
          <Layouts />
        </div>
      </div>
    </div>
    <div class="middle-side"></div>
    <div class="right-side"></div>
  </div>
</template>

<style scoped>
.heading {
  margin: 10px 20px;
  font-size: 30px;
  text-transform: capitalize;
  font-weight: bold;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);
}

.left-side {
  width: 40rem;
  background-color: #f0f0f0;
  padding: 20px;
  margin: 4px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);
}

.tabs {
  display: flex;
  justify-content: space-between;
  background-color: gray;
  font-size: 20px;
  border-radius: 10px;
}

.tab {
  padding: 10px;
  width: 100%;
}

.tab:hover {
  border-radius: 10px;
  background-color: black;
  cursor: pointer;
}

.tab.active {
  border-radius: 10px;
  background-color: black;
  cursor: pointer;
}

.middle-side {
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  margin: 4px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  height: 90vh;
}

.right-side {
  width: 40rem;
  background-color: #f0f0f0;
  padding: 20px;
  margin: 4px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);
}
</style>
