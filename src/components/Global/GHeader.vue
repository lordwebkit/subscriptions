<script setup>
import ILogo from '../../assets/icons/ILogo.vue'
const route = ['Хлебные крошки', 'Хлебные крошки', 'Хлебные крошки']
</script>
<template>
  <header class="container mx-auto pt-6 sm:pt-12">
    <div class="flex items-center flex-col">
      <ILogo />
      <nav
        class="roboto-regular list-none flex flex-wrap gap-3 items-center text-gray-400 mt-7 sm:mt-6"
      >
        <div class="flex" v-for="(routeItem, index) in route" :key="index">
          <li
            class="nav__item flex items-center border-gray-400 border-solid hover:text-blue-500 cursor-pointer hover:border-blue-500"
          >
            {{ routeItem }}
          </li>
          <span class="nav__item-decor" v-if="index !== route.length - 1">→</span>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
.nav__item {
  font-size: 13px;
  line-height: 16px;
  border-bottom-width: 1px;
}

.nav__item-decor {
  content: '';
  font-size: 11px;
  margin-left: 0.6rem;
}
</style>
