import Vue from 'vue'
import App from './App.vue'
//vuex store para manejo de estado
import store from './store'
//font-awesome para íconos
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMale, faFemale, faTty, faMobileAlt, faAngleDown, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//vue material para styling
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

library.add(faMale, faFemale, faTty, faMobileAlt, faAngleDown, faCamera)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueMaterial)

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')