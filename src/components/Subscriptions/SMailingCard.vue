<script setup>
import ICheck from '@/assets/icons/ICheck.vue'
import SSwitchToggle from '@/components/Global/GSwitchToggle.vue'
import { useMailingStore } from '@/stores/mailing'

const store = useMailingStore()
const props = defineProps(['mailing'])

const toggle = () => {
  store.mailing[props.mailing.id].selected = !store.mailing[props.mailing.id].selected
}
</script>
<template>
  <div class="mailing-card roboto-regular bg-white py-6 px-3 rounded-lg flex gap-6">
    <div class="flex-1">
      <div class="flex justify-between">
        <div class="">
          <p class="mailing-card__time text-gray-400">{{ props.mailing.time }}</p>
          <h2 class="mailing-card__title roboto-medium">{{ props.mailing.title }}</h2>
        </div>
        <img
          class="mailing-card__image md:hidden"
          :src="props.mailing.img"
          alt="картинка рассылки"
        />
      </div>
      <p class="mailing-card__description text-gray-500 mt-2 mb-4">
        {{ props.mailing.description }}
      </p>
      <ul class="">
        <li
          class="flex items-center gap-2 mt-2"
          v-for="advantage in props.mailing.advantage"
          :key="advantage"
        >
          <ICheck />
          <p>{{ advantage }}</p>
        </li>
      </ul>
      <p class="mt-7 sm:mt-4 flex gap-2">
        <SSwitchToggle
          :size="12"
          :is-checked="store.mailing[props.mailing.id].selected"
          @switch="toggle"
        />Уже получает {{ props.mailing.subscription }} человек
      </p>
    </div>
    <div class="mailing-card__image-container hidden md:block">
      <img class="mailing-card__image" :src="props.mailing.img" alt="картинка рассылки" />
    </div>
  </div>
</template>
<style scoped>
.mailing-card {
  font-size: 14px;
  line-height: 20px;
}
.mailing-card__time {
  font-size: 13px;
  line-height: 16px;
}

.mailing-card__title {
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.1px;
}

.mailing-card__image {
  width: 80px;
}

@media (max-width: 766px) {
  .mailing-card__image {
    width: 40px;
  }
}
</style>
