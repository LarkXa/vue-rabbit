import { createRouter, createWebHistory } from 'vue-router'
//createRouter作用 创建路由实例
//createWebHistory作用 创建history模式的路由
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和组件的映射关系
  routes: [{path:'/',
    //配置二级路由嵌套
    component:Layout,children:[{
      path:'',
      component:Home},
      {
        path:'/category',
        component:Category
      },


    ]
  },{
    path:'/login',
    component:Login
  }

  ],
})

export default router

