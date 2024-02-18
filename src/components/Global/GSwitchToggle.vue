<script setup>
const props = defineProps(['isChecked', 'size'])
const emit = defineEmits(['switch'])

const toggle = () => {
  emit('switch')
}
</script>
<template>
  <label
    class="switch-toggle relative inline-block"
    :style="[{ width: `${props.size * 4}px` }, { height: `${props.size * 2}px` }]"
    @click="toggle"
  >
    <input type="checkbox" :checked="props.isChecked" class="switch-toggle__checkbox hidden" />
    <button
      class="switch-toggle__slider absolute cursor-pointer border-none top-0 left-0 right-0 bottom-0 bg-gray-200 rounded-full p-0 duration-400"
    >
      <span
        class="switch-toggle__circle"
        :style="[
          { width: `${props.size * 2 - 2}px` },
          { height: `${props.size * 2 - 2}px` },
          { transform: `translateX(${props.isChecked ? props.size * 2 : 0}px)` }
        ]"
      ></span>
    </button>
  </label>
</template>
<style scoped>
.switch-toggle__circle {
  position: absolute;
  content: '';
  left: 1px;
  bottom: 1px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.switch-toggle__checkbox:checked + .switch-toggle__slider {
  background-color: #3b82f6;
}
</style>
