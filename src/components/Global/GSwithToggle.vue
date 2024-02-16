<script setup>
const props = defineProps(['isChecked'])
const emit = defineEmits(['switch'])

const toggle = () => {
  emit('switch')
}
</script>
<template>
  <label class="switch-toggle relative inline-block w-8 h-4" @click="toggle">
    <input type="checkbox" :checked="props.isChecked" class="switch-toggle__checkbox hidden" />
    <button
      class="switch-toggle__slider absolute cursor-pointer border-none top-0 left-0 right-0 bottom-0 bg-gray-200 rounded-full p-0 duration-400"
    ></button>
  </label>
</template>
<style scoped>
.switch-toggle__slider::before {
  position: absolute;
  content: '';
  height: 14px;
  width: 14px;
  left: 1px;
  bottom: 1px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.switch-toggle__checkbox:checked + .switch-toggle__slider {
  background-color: #3b82f6;
}

.switch-toggle__checkbox:checked + .switch-toggle__slider::before {
  transform: translateX(16px);
}
</style>
