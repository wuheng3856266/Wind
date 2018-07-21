import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Home from '../page/home/index.vue'
import About from '../page/aboutme/index.vue'
import Chat from '../page/chat/index.vue'
import Service from '../page/service/index.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path:'/service',
      name:'service',
      component:Service
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: About
    }
  ]
})
