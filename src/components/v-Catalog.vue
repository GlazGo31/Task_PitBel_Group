<template>
<div class="catalog">
  <div class="container">
    <h1 class="catalog__title">Картины эпохи Возрождения</h1>
    <main class="catalog__items">
      <v-catalog-item
          v-for="picture in pictures"
          :key="picture.id"
          :picture_data="picture"
          :is-buy="isBought(picture.id)"
          :load="isLoading"
          @sendRequest="sendRequest"
      />
    </main>
  </div>
</div>
</template>

<script>
import VCatalogItem from "@/components/v-Catalog-Item.vue";
import axios from "axios";
export default {
  name: "v-Catalog",
  components: {
    VCatalogItem
  },
  data() {
    return {
      pictures: [
        {
          id: 1,
          image:'рождение-венеры.png',
          name: '«Рождение Венеры»',
          author: 'Сандро Боттичелли',
          oldPrice: '3 000 000 $',
          price: '1 000 000 $'
        },
        {
          id: 2,
          image:'тайное-вечерие.png',
          name: '«Тайное вечеря»',
          author: 'Леонардо Да Винчи',
          oldPrice: '5 500 000 $',
          price: '3 000 000 $'
        },
        {
          id: 3,
          image:'сотворение-адама.png',
          name: '«Сотворение Адама»',
          author: 'Микеланджело',
          oldPrice: '6 000 000 $',
          price: '5 000 000 $'
        },
        {
          id: 4,
          image:'урок-анатомии.png',
          name: '«Урок анатомии»',
          author: 'Рембранд',
          oldPrice: '',
          price: ''
        }
      ],
      boughtItems: [],
      isLoading: {
        id: 0,
        value: false
      }
    }
  },
  computed: {},
  methods: {
    isBought(itemId) {
      return this.boughtItems.includes(itemId)
    },
    sendRequest(itemId) {
      if(!this.boughtItems.includes(itemId))
        this.isLoading = {
          id: itemId,
          value: true
        }
          axios.get('https://dummyjson.com/products', {
            onDownloadProgress: ()=> {}
          }).then((response) => {
            console.log(response)
            if(response.status === 200){
              console.log(this.isLoading)
              let localStorageBoughtItems = localStorage.getItem('boughtItems') ? JSON.parse(localStorage.getItem('boughtItems')) : null
              if(localStorageBoughtItems) {
                localStorageBoughtItems.push(itemId)
                this.boughtItems = localStorageBoughtItems
                localStorage.setItem('boughtItems', JSON.stringify(localStorageBoughtItems))
                this.isLoading = {
                  id: itemId,
                  value: false
                }
              }else{
                localStorageBoughtItems = []
                localStorageBoughtItems.push(itemId)
                this.boughtItems = localStorageBoughtItems
                localStorage.setItem('boughtItems', JSON.stringify(localStorageBoughtItems))
                this.isLoading = {
                  id: itemId,
                  value: false
                }
              }
            }else{
              this.isLoading = {
                id: itemId,
                value: false
              }
              console.error('request failed')
            }
          })
    },
  },
  created() {
    const localStorageBoughtItems = localStorage.getItem('boughtItems') ? JSON.parse(localStorage.getItem('boughtItems')) : null
    if(localStorageBoughtItems) {
      this.boughtItems = localStorageBoughtItems
    }
  }
}
</script>
