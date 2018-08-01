import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)


Vue.config.productionTip = false

import Appcontent from './components/common/Appcontent.vue'

Vue.component("app-content",Appcontent)

new Vue({
  el: '#app',
  router,
  store,
  components:{
    App
  },
  render: h => h(App)
})
