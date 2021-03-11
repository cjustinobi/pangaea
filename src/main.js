import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { formatCurrency } from './utils/common'
import { defaultClient} from './apolloSetup'
import VueApollo from 'vue-apollo'

// Common Css
import 'ant-design-vue/dist/antd.css'
import './assets/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueApollo)
Vue.filter('currency', formatCurrency)

const apolloProvider = new VueApollo({
  defaultClient
})

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
