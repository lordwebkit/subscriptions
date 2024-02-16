<script setup>
import { RouterView } from 'vue-router'
import GHeader from '@/components/Global/GHeader.vue'
import GFooter from './components/Global/GFooter.vue'
</script>

<template>
  <GHeader />
  <RouterView />
  <GFooter />
</template>

<style scoped></style>
