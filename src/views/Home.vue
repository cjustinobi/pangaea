<template>
  <div >
    <button class="checkout-btn" @click="openNav">Checkout</button>
    <div id="mySidenav" class="sidenav">
      <Cart @closeNav="closeNav"/>
    </div>

    <div id="main" >
      <Products />
    </div>

  </div>
</template>

<script>
  import toggleNav from '@/mixins/toggleNav'
  import Cart from '@/components/guest/Cart'
  import Products from '@/components/Products'

  export default {
    name: 'Home',
    mixins: [toggleNav],
    components: {
      Cart,
      Products
    }
  }
</script>

<style scoped>
  .checkout-btn {
    position: absolute;
    top: 20px;
    right: 40px;
  }
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #c1bcbc;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }

  #main {
    transition: margin-left .5s;
    padding: 16px;
  }

  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
  }
</style>
