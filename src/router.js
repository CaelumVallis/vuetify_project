import Vue from 'vue'
import Router from 'vue-router'
import Calendar from './views/SharedCalendar.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Profile from './views/ProfileContactCard.vue'
import Groups from './views/Groups.vue'
import Group from './views/Group.vue'
import EventDialog from './components/EventDialog.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
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
      path: '/groups',
      name: 'groups',
      component: Groups
    },
    {
      path: '/eventDialog',
      name: 'eventDialog',
      component: EventDialog
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
