import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Home from '../page/home/index.vue'
import About from '../page/aboutme/index.vue'
import Chat from '../page/chat/index.vue'
import Service from '../page/service/index.vue'
import Move from '../page/service/childpages/Move.vue'
import Clean from '../page/service/childpages/Clean.vue'
import Maintain from '../page/service/childpages/Maintain.vue'
import BedClean from '../page/service/childpages/detail/Bedclean.vue'
import DayClean from '../page/service/childpages/detail/Dayclean.vue'
import ChatDetail from '../page/chat/childpage/ChatDetail.vue'
import ChatWindsNews from '../page/chat/childpage/ChatWindsNews.vue'

export default new Router({
  routes: [
    {
      path: '/home',
      alias:'/',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      children:[
        {
          name:'windstory',
          path:'detail',
          component:ChatDetail
        },
        {
          name:'windsnews',
          path:'news',
          component:ChatWindsNews
        }
      ]
    },
    {
      path:'/service',
      name:'service',
      component:Service,
      children:[
        {
          name:'搬家',
          path:'movehome',
          component:Move
        },{
          name:'保洁',
          path:'clean',
          component:Clean,
          children:[
            {
              name:'卧室保洁',
              path:'bedroomclean',
              component:BedClean
            },
            {
              name:'日常保洁',
              path:'dayclean',
              component:DayClean
            }
          ]
        },{
          name:'维修',
          path:'maintain',
          component:Maintain
        }
      ]
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: About
    }
  ]
})
