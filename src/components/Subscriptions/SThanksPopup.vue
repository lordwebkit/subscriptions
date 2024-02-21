<script setup>
import { useMailingStore } from '@/stores/mailing'
const store = useMailingStore()
</script>

<template>
  <div>
    <div
      v-if="store.popupIsOpen"
      class="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center"
    >
      <div @click="store.popupIsOpen = false" class="fixed inset-0 bg-black opacity-25 z-40"></div>
      <div class="relative bg-white mx-2 sm:mx-0 sm:w-1/2 p-6 rounded shadow-lg z-50">
        <button
          @click="store.popupIsOpen = false"
          class="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 z-50"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div class="mb-4">
          <h2 class="popup__title roboto-medium text-center">
            Спасибо за вашу подписку на рассылку "Клерка"!
          </h2>
        </div>
        <div class="text-center roboto-regular text-gray-600">
          <p class="leading-relaxed">
            Мы ценим ваш интерес к нашим рассылкам и обещаем предоставлять вам только самую
            актуальную и полезную информацию из выбранной вами категории.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup__title {
  font-size: 20px;
}
</style>
