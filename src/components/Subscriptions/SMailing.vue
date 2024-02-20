<script setup>
import { useMailingStore } from '@/stores/mailing'
import GSwitchToggle from '@/components/Global/GSwitchToggle.vue'
import SMailingCard from './SMailingCard.vue'

const store = useMailingStore()

const toggle = () => {
  if (!store.selectedAllMailing) {
    store.selectAllMailing()
  } else {
    store.unselectAllMailing()
  }
}

store.getMailing()
</script>
<template>
  <div class="bg-gray-100 rounded-lg py-12 px-6">
    <h2 class="mailing__title roboto-medium text-center">
      Выберите рассылки, которые подходят именно вам
    </h2>
    <div class="">
      <form class="mailing__form flex mx-6 bg-white rounded-tr-full rounded-br-full mt-6">
        <input
          class="roboto__medium form__input flex-1 p-4"
          type="mail"
          placeholder="Электронная почта"
        />
        <button class="bg-blue-500 rounded-full text-white px-8 py-4">Подписаться</button>
      </form>
      <div
        class="mailing__subscription flex items-center gap-2 px-6 mt-4"
        v-if="store.mailing.length"
      >
        <GSwitchToggle
          :size="8"
          class="subscription__button"
          :is-checked="store.selectedAllMailing"
          @switch="toggle"
        />
        <p class="subscription__title roboto-regular">Подписаться на все рассылки</p>
      </div>
      <div class="mt-8 flex-col flex flex-wrap sm:flex-row gap-6">
        <SMailingCard
          v-if="store.mailing"
          v-for="mailing in store.mailing"
          :key="mailing.id"
          :mailing="mailing"
          class="mailing__card"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.mailing__title {
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.25px;
}

@media (min-width: 640px) {
  .mailing__card {
    width: calc(50% - 0.75rem);
  }
}

.subscription__title {
  font-size: 14px;
  letter-spacing: -0.08px;
}

.form__input::placeholder {
  font-size: 16px;
}
</style>
