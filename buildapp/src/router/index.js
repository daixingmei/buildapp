import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Concern from '../components/concern.vue'
import Column from '../components/column.vue'
import My from '../components/my.vue'
import userLogin from '../components/userLogin.vue'
import userReg from '../components/userReg.vue'
import sub from '../components/sub.vue'
Vue.use(Router)
export default new Router({
  routes: [
    { path: '/home', component: Home },
    { path: '/concern', component: Concern },
    { path: '/column', component: Column },
    { path: '/my', component: My },
    {
      path: '/userLogin',
      component: userLogin
    }, {
      path: '/userReg',
      component: userReg
    }, {
      path: '/sub/:id',
      component: sub
    },
    { path: '*', redirect: '/home' }

  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 })
})
