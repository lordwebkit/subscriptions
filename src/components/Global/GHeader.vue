<script setup>
import ILogo from '../../assets/icons/ILogo.vue'
</script>
<template>
  <header class="container mx-auto pt-12">
    <div class="flex items-center flex-col">
      <ILogo />
      <nav class="roboto-regular list-none flex text-gray-500 mt-6">
        <li class="nav__item">Хлебные крошки</li>
        <li class="nav__item">Хлебные крошки</li>
        <li class="nav__item">Хлебные крошки</li>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.nav__item {
  font-size: 13px;
  line-height: 16px;
}

.nav__item:not(:last-child)::after {
  content: '→';
  margin: 0 0.5rem;
}
</style>
