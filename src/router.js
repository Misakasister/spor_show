import Vue from 'vue'
import Router from 'vue-router'
import Schedule from './views/Schedule'
import Notice from './views/Notice';
import Medal from './views/Medal'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: 'http://localhost:8088/sp/sport/',
  routes: [
    {
      path: '/',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/medal',
      name: 'medal',
      component: Medal
    }
  ]
})
