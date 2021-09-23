import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../components/home/Home.vue')
const Find = () => import('../components/home/Find.vue')
const ListView = () => import('../components/home/children/ListView.vue')
const PlayMusicList = () => import('../components/home/playmusic/PlayMusicList.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home,
    redirect: 'find',
    children: [
      {
        path: '/find',
        component: Find
      }, {
        path: '/listview',
        component: ListView,

      },

    ]
  }, {
    path: '/playmusiclist',
    component: PlayMusicList
  }

]
const router = new VueRouter({
  routes
})
export default router
