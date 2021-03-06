import Vue from 'vue'
import Router from 'vue-router'
import PostListPage from '@/pages/PostListPage'
import PostViewPage from '@/pages/PostViewPage'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'
import AppHeader from '@/components/AppHeader'

// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'PostListPage',
      components: {
        header: AppHeader,
        default: PostListPage
      }
    },
    {
      path: '/posts/:postId',
      name: 'PostViewPage',
      components: {
        header : AppHeader,
        default : PostViewPage,
      },
      props: true
    },
    {
      path: '/signup',
      name: 'Signup',
      components : {
        header : AppHeader,
        default : Signup
      }
    },
    {
      path: '/signin',
      name: 'Signin',
      components: {
        header: AppHeader,
        default: Signin
      }
    }
  ]
})
