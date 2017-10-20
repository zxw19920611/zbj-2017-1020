import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Music from '@/components/Music'
import Detail from '@/components/Detail'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Search from '@/components/Search'

// import Header from '@/components/Header'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
    	path:'/music',
    	name:'Music',
    	component:Music
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
        {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
  ]
})
