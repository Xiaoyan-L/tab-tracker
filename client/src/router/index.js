import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import AddSong from '@/components/AddSong'
import ViewSong from '@/components/ViewSong'
// import SearchSong from '@/components/SongsSearchPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/add',
      name: 'add-song',
      component: AddSong
    },
    {
      path: '/songs/:songId',
      name: 'view-song',
      component: ViewSong
    }
  ]
})
