
  const formatCurrency = val => {
    if (!val) return ''
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: JSON.parse(localStorage.getItem('currency')) }).format(val)
  }

  const persistData = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val))
  }

  export {
    formatCurrency,
    persistData
  }
