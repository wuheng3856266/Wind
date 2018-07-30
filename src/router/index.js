import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Home from '../page/home/index.vue'
import About from '../page/aboutme/index.vue'
import Chat from '../page/chat/index.vue'
import Service from '../page/service/index.vue'
import Login from '../components/aboutme/Login.vue'
import UserInfo from '../components/aboutme/UserInfo.vue'
import AboutUs from '../components/aboutme/AboutUs.vue'
import DwellGuide from '../components/aboutme/DwellGuide.vue'
import Complaint from '../components/aboutme/Complaint.vue'
import MineSet from '../components/aboutme/MineSet.vue'
import InformationSet from '../components/aboutme/InformationSet.vue'
import ModifyName from '../components/aboutme/ModifyName.vue'

import Enshrine from '../components/aboutme/action/Enshrine.vue'
import MineComment from '../components/aboutme/action/MineComment .vue'
import MinePublish from '../components/aboutme/action/MinePublish.vue'
import MineShare from '../components/aboutme/action/MineShare.vue'
import Wallet from '../components/aboutme/action/Wallet.vue'



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
      component: About,
      children:[
        {
          name:'login',
          path:'login',
          component:Login
        },
        {
          name:'userInfo',
          path:'userInfo',
          component:UserInfo,
          children:[
            {
              name:'modifyName',
              path:'modifyName',
              component:ModifyName
            }
          ]
        },
        {
          name:'aboutUs',
          path:'aboutUs',
          component:AboutUs
        },
        {
          name:'dwellGuide',
          path:'dwellGuide',
          component:DwellGuide
        },
        {
          name:'complaint',
          path:'complaint',
          component:Complaint
        },
        {
          name:'mineSet',
          path:'mineSet',
          component:MineSet,
          children:[
            {
              name:'informationSet',
              path:'informationSet',
              component:InformationSet
            }
          ]
        },
        {
          name:'enshrine',
          path:'enshrine',
          component:Enshrine
        },
        {
          name:'mineComment',
          path:'mineComment',
          component:MineComment
        },
        {
          name:'minePublish',
          path:'minePublish',
          component:MinePublish
        },
        {
          name:'mineShare',
          path:'mineShare',
          component:MineShare
        },
        {
          name:'wallet',
          path:'wallet',
          component:Wallet
        }
      ]
    }
  ]
})
