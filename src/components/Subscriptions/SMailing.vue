<script setup>
import { ref } from 'vue'
import GSwithToggle from '@/components/Global/GSwithToggle.vue'

const isChecked = ref(true)

const toggle = () => {
  isChecked.value = !isChecked.value
}
</script>
<template>
  <div class="bg-gray-100 rounded-lg py-12 px-6">
    <h2 class="mailing__title roboto-medium text-center">
      Выберите рассылки, которые подходят именно вам
    </h2>
    <div class="">
      <form class="flex mx-6 bg-white rounded-tr-full rounded-br-full mt-6">
        <input class="flex-1 p-4" type="mail" placeholder="Электронная почта" />
        <button class="bg-blue-500 rounded-full text-white px-7 py-4">Подписаться</button>
      </form>
      <div class="flex items-center gap-2 px-6 mt-4">
        <GSwithToggle :is-checked="isChecked" @switch="toggle" />
        <p class="roboto-regular">Подписаться на все рассылки</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.mailing__title {
  font-size: 24px;
  line-height: 32px;
}
</style>
