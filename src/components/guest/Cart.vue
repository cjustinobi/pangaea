<template>
  <div class="cart-container">
    <a href="javascript:void(0)" class="close-btn" @click="$emit('closeNav')">&times;</a>
    <h6 class="text-center">Your Cart</h6>
    <select class="currency" v-model="curency">
      <option v-for="(currencyCode, i) in currency" :value="currencyCode" :key="i">{{ currencyCode }}</option>
    </select>
   <div class="pd-lr">
     <div class="item" v-for="product in carts">
       <p class="product-name">{{ product.title }}</p>
       <div class="cart-details">
         <PlusMinusItem slot="actions" :product="product"/>
         <b>{{ product.price | currency }}</b>
         <img :src="product.image_url"/></div>
     </div>
   </div>
    <a-divider />
    <div class="cart-details sub-total pd-lr">
      <span>Subtotal</span>
      <span>{{ totalPrice | currency }}</span>
    </div>
    <button class="btn btn-primary proceed-checkout">PROCEED TO CHECKOUT</button>
  </div>
</template>

<script>
  import PlusMinusItem from '@/components/guest/PlusMinusItem'
  import { GET_CURRENCIES } from '../../../queries'
  import toggleNav from '@/mixins/toggleNav'

  export default {
    name: 'Cart',
    mixins: [toggleNav],
    components: {
      PlusMinusItem,
    },
    apollo: {
      currency: {
        query: GET_CURRENCIES
      }
    },
    data() {
      return {
        curency: 'NGN'
      }
    },
    computed: {
      carts() {
        return this.$store.getters['cart/items']
      },
      totalPrice() {
        return this.$store.getters['cart/totalPrice']
      },
    },
    watch: {
      curency: {
        handler: function (val) {
          this.$store.dispatch('cart/setCurrency', val)
        },
        immediate: true
      }
    }
  }
</script>

<style scoped>
  .cart-container {
    position: relative;
  }
  .item {
    margin: 12px 0;
  }
  .cart-details {
    display: flex;
    justify-content: space-around;
  }
  img {
    height: 70px;
    width: 70px;
  }
  .pd-lr {
    padding: 0 23px;
  }
  .currency {
    margin-left: 23px;
    margin-bottom: 30px;
  }
  .sub-total {
    justify-content: space-between;
  }
  .proceed-checkout {
    width: 100%;
    margin: 10px 23px;
    box-sizing: border-box;
  }
  .close-btn {
    position: absolute;
    top: 0;
    right: 30px;
    font-size: 30px;
    text-decoration: none;
  }
</style>
