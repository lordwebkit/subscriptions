<script setup>
import { ref } from 'vue'

const tabs = ref(['Рассылки', 'Соцсети', 'Мессенджеры'])

const activeTabIndex = ref(0)
</script>

<template>
  <div class="tabs">
    <div class="roboto-medium flex justify-center gap-5">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTabIndex = index"
        :class="{
          '': activeTabIndex === index,
          'border-blue-500': activeTabIndex === index,
          'text-blue-500': activeTabIndex === index,
          'text-gray-600': activeTabIndex !== index,
          'border-transparent': activeTabIndex !== index
        }"
        class="tabs__btn border-b-2 focus:outline-none"
      >
        {{ tab }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.tabs__btn {
  font-size: 17px;
  letter-spacing: -0.3px;
  padding-top: 0.75rem;
  padding-bottom: 0.9rem;
}
</style>
