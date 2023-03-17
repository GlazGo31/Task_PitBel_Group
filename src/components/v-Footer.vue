<template>
<div class="footer">
  <div class="container">
    <div class="footer__block">
        <div>
          <img src="../assets/logo-footer.png" alt="logo" class="footer__picture">
        </div>
            <div class="footer__nav-bar">
              <ul class="footer__bar">
                <li
                    class="footer__bar-items"
                    v-for="(link, index) in links"
                    :key="index"><a href="#"
                >
                  {{link}}
                </a> </li>
              </ul>
            </div>
      <div class="footer__info">
          <div class="footer__phone">
            <span>
              <img src="../assets/icon-phone.png">
            </span>
            +7 (495) 555-55-55
          </div>

          <div class="footer__address">
            <span>
              <img src="../assets/addres-icon.png">
            </span>
            г. Москва, ул. Расплетина, 24
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "v-Footer",
  data() {
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
