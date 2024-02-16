<template>
  <div class="">
    <div class="flex justify-center gap-5">
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
        class="py-2 border-b-2 focus:outline-none"
      >
        {{ tab }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ref(['Рассылки', 'Соцсети', 'Мессенджеры'])

const activeTabIndex = ref(0)
</script>
