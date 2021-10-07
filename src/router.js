import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Calendar from './views/SharedCalendar.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Profile from './views/ProfileContactCard.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/auth',
    name: 'auth',
    component: Login
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }

  ]
})
