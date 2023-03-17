<template>
<div class="header">
  <div class="container">
    <header class="main-header">
<!--      <v-nav-bar/>-->
      <div class="main-header__logo">
        <img src="../assets/logo.png" alt="logo" class="main-header__picture">
      </div>
      <div class="main-header__nav-bar">
        <ul class="main-header__bar">
          <li
              class="main-header__bar-items"
              v-for="(link, index) in links"
              :key="index"><a href="#"
          >
            {{link}}
          </a> </li>
        </ul>
      </div>
      <div class="main-header__search-block">
        <input type="text" class="main-header__search" placeholder="Поиск по названию картины">
        <button class="main-header__btn">Найти</button>
      </div>
    </header>
  </div>
</div>
</template>

<script>
export default {
  name: 'v-Header',
  data () {
    return {
      links: [
        'Каталог',
        'Доставка',
        'Оплата',
        'Контакты',
        'О галерее'
      ]
    }
  }
}
</script>