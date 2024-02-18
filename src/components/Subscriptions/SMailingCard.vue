<script setup>
import ICheck from '@/assets/icons/ICheck.vue'
import SSwithToggle from '@/components/Global/GSwithToggle.vue'
const props = defineProps(['mailing'])

</script>
<template>
  <div class="mailing-card roboto-regular bg-white p-6 rounded-lg flex gap-6">
    <div class="">
      <p class="mailing-card__time text-gray-400">{{ props.mailing.time }}</p>
      <h2 class="mailing-card__title roboto-medium">{{ props.mailing.title }}</h2>
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
      <p class="mt-4 flex gap-2"><SSwithToggle />Уже получает {{ props.mailing.subscription }} человек</p>
    </div>
    <div class="">
      <img :src="props.mailing.img" alt="картинка рассылки" />
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
}
</style>
