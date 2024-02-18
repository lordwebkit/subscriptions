<script setup>
import STabs from '@/components/Subscriptions/STabs.vue'
import SMailing from '@/components/Subscriptions/SMailing.vue'
</script>

<template>
  <main class="container mx-auto">
    <h1 class="hero__title roboto-medium text-center mt-6 mb-3">Подписки «Клерка»</h1>
    <STabs />
    <SMailing />
  </main>
</template>

<style scoped>
.hero__title {
  font-size: 56px;
  line-height: 72px;
  letter-spacing: -0.6px;
}
</style>
