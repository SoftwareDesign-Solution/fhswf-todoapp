import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import TaskList from "@/views/TaskList.vue";
import TaskEdit from "@/views/TaskEdit.vue";
import TaskCreate from "@/views/TaskCreate.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '//',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Startseite',
      showInSidebar: true,
    }
  },
  {
    path: '/tasks',
    name: 'TaskList',
    component: TaskList,
    meta: {
      title: 'Aufgaben anzeigen',
      showInSidebar: true,
    }
  },
  {
    path: '/tasks/:id/edit',
    name: 'TaskEdit',
    component: TaskEdit,
    meta: {
      title: 'Aufgabe bearbeiten',
      showInSidebar: false,
    }
  },
  {
    path: '/tasks/new',
    name: 'TaskCreate',
    component: TaskCreate,
    meta: {
      title: 'Aufgabe erstellen',
      showInSidebar: true,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
