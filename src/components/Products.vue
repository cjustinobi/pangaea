<template>
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="d-flex justify-content-center">
        <img alt="pangaea image" :src="product.image_url"/>
      </div>
      <p class="center-item">{{ product.title }}</p>
      <p class="center-item">From {{ product.price | currency }}</p>
      <div class="d-flex justify-content-center">
        <PlusMinusItem v-if="itemInCart(product.id)" :product="product"/>
        <button v-else @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>

  import {GET_PRODUCTS} from '../../queries'
  import PlusMinusItem from '../components/guest/PlusMinusItem'
  import toggleNav from '@/mixins/toggleNav'

  export default {
    name: 'Product',
    mixins: [toggleNav],
    components: {
      PlusMinusItem
    },
    apollo: {
      products: {
        query: GET_PRODUCTS,
        variables() {
          return {
            currency: this.currency
          }
        },
        error(error) {
          console.log(error.message);
        }
      }
    },
    methods: {
      addToCart(item) {
        this.openNav()
        this.$store.dispatch('cart/addItem', item)
      },
      itemInCart(itemId) {
        return this.carts.some(item => item['id'] === itemId)
      },
    },
    computed: {
      currency() {
        return this.$store.getters['cart/currency']
      },
      carts() {
        return this.$store.getters['cart/items']
      }
    },
    watch: {
      products: {
        handler: function (products) {
          this.$store.dispatch('cart/updatePrices', products)
        }
      },
      immediate: true
    }
  }
</script>

<style scoped>
  .products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }


  @media (max-width: 767px) {
    .products {
      grid-gap: 12px;
      grid-template-columns: 1fr 1fr;
    }
  }
  .product {
    margin-top: 70px;
  }

  img {
    width:160px;
    height:160px;
    margin-bottom: 50px;
  }

  .center-item {
    text-align: center;
  }



</style>