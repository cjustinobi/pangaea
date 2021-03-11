<template>
  <div slot="actions">
    <a-icon :style="{color: '#bf5555', marginRight: '20px'}" @click="removeItem(product.id)" slot="actions" type="delete"/>
    <a-icon @click="plusMinusItem(product.id, 'minus')" slot="actions" type="minus"/>
    <a-badge
        slot="actions"
        :count="getItemQty(product.id)"
        :number-style="{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset', margin: '0 10px' }"
    />
    <a-icon @click="plusMinusItem(product.id, 'plus')" slot="actions" type="plus"/>
  </div>
</template>

<script>
  export default {
    name: 'PlusMinusItem',
    props: ['product'],
    methods: {
      getItemQty(itemId) {
        const item = this.carts.find(itm => itm.id == itemId)
        return item.qty
      },
      plusMinusItem(itemId, action) {
        this.$store.dispatch('cart/plusMinusItem', { itemId, action })
      },
      removeItem(itemId) {
        this.$store.dispatch('cart/removeItem', itemId)
      }
    },
    computed: {
      carts() {
        return this.$store.getters['cart/items']
      }
    },
  }
</script>

<style scoped>
</style>