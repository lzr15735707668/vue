import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home/sy'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:"/home/my",
          component:()=>import('./views/my')
        },
        {
          path:"/home/sy",
          component:()=>import('./views/sy')
        },
        {
          path:"/home/car",
          component:()=>import('./views/car')
        }
      ]
    },
    {
      path:'/detail/:id',
      name:"detail",
      component:()=>import('./views/detail')
    }
  ]
})
