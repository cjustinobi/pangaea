
import { persistData } from '../../utils/common'

// States
const state = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
  currency: JSON.parse(localStorage.getItem('currency') || '{}')
}

// mutations
const mutations = {
  ADD_ITEM(state, item) {

    // Check if this particular item has been added.
    if (state.items.length) {
      const itm = state.items.find(itm => itm.id == item.id)
      if (itm) {
        // Item exist already, so increase the quantity.
        itm.qty++
        itm.subTotal = itm.price * itm.qty
        const itemIndex = state.items.findIndex(product => product.id == item.id)
        state.items[itemIndex] = itm

        // Persist the item
        return persistData('cart', state.items)
      }
    }
    // This item has not been added yet.
    item.qty = 1
    item.subTotal = item.price
    state.items.push(item)

    // Persist the item
    persistData('cart', state.items)
  },

  REMOVE_ITEM (state, itemId) {
    state.items = state.items.filter(item => item.id != itemId)
    persistData('cart', state.items)
  },

  PLUS_MINUS_ITEM(state, { itemId, action }) {
    const itemIndex = state.items.findIndex(item => item.id == itemId)
    if (action == 'plus') {
      state.items[itemIndex].qty++
      persistData('cart', state.items)
    } else {
      if (state.items[itemIndex].qty === 1) {
        state.items = state.items.filter(item => item.id != itemId)
        persistData('cart', state.items)
      } else {
        state.items[itemIndex].qty--
        persistData('cart', state.items)
      }
    }
  },
  SET_CURRENCY(state, currency) {

    state.currency = currency
    persistData('currency', state.currency)
  },
  UPDATE_PRICES(state, products) {
    state.items.forEach(item => {
      products.forEach(product => {
        if (item.id == product.id) {
          item.price = product.price
          item.subTotal = item.qty * product.price
        }
      })
    })

  }
}

// actions
const actions = {
  addItem({ commit }, item) {
    commit('ADD_ITEM', item)
  },

  removeItem({ commit }, itemId) {
    commit('REMOVE_ITEM', itemId)
  },

  plusMinusItem({ commit }, data) {
    commit('PLUS_MINUS_ITEM', data)
  },

  setCurrency({ commit }, currency) {
    commit('SET_CURRENCY', currency)
  },

  updatePrices({ commit }, products) {

    commit('UPDATE_PRICES', products)
  }
}

// Getters
const getters = {
  items: state => state.items,
  currency: state => state.currency,
  totalPrice: state => {
    let sum = 0
    state.items.forEach(item => {
      sum += item.price * item.qty
    })
    return sum
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}