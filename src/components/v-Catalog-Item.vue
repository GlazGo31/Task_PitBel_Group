<template>
<div class="catalog-item" :class="{status: showStatus}">
  <div class="catalog-item__images">
    <img
        :src="require('../assets/' + picture_data.image)"
        alt=""
        class="catalog-item__picture"
    >
  </div>
  <div class="catalog-item__name">{{picture_data.name}}</div>
  <div class="catalog-item__author">{{picture_data.author}}</div>
  <div class="old-price">{{picture_data.oldPrice}}</div>
  <div class="catalog-item__price"
       :class="{center: showStatus}"
  >
    {{picture_data.price ? picture_data.price:'Продано на аукционе'}}

    <button class="catalog-item__btn"
            :class='{active: isBuy, loading: load.value && load.id === picture_data.id, disable: load.value && load.id === picture_data.id}'
            v-if="showButton"
            @click="sendRequest"
            :disabled="load.value"
    >
      {{ isBuy ? 'В корзине':'Купить' }}
      
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: "v-Catalog-item",
  props: {
    picture_data: {
      type: Object,
      default() {
        return {}
      }
    },
    isBuy: {
      type: Boolean,
      required: true
    },
    load: {
      type: Object,
      required: true
    }
  },
  computed: {
    showStatus() {
      if (this.picture_data.price === '') {
        return true
      }
      return false
    },
    showButton() {
      if (this.picture_data.price === '') {
        return false
      }
      return true
    },
  },
  methods: {
    sendRequest() {
      this.$emit('sendRequest', this.picture_data.id)
    },
  }
}
</script>