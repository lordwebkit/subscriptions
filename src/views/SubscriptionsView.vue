<script setup>
import STabs from '@/components/Subscriptions/STabs.vue'
import SMailing from '@/components/Subscriptions/SMailing.vue'
import SThanksPopup from '@/components/Subscriptions/SThanksPopup.vue'
</script>

<template>
  <main class="lg:container">
    <h1 class="hero__title roboto-medium text-center mt-2 sm:mt-6 mb-3">Подписки «Клерка»</h1>
    <STabs />
    <SMailing />
    <SThanksPopup />
  </main>
</template>

<style scoped>
.hero__title {
  font-size: 32px;
  line-height: 42px;
}

@media (min-width: 640px) {
  .hero__title {
    font-size: 56px;
    line-height: 72px;
    letter-spacing: -0.6px;
  }
}
</style>
