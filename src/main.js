// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from "fastclick"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "./assets/styles/reset.css"
import "./assets/styles/border.css"
import "./assets/styles/iconfont.css"
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body)
/*使用vue轮播插件*/
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
