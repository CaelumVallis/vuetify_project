import axios from 'axios'
import { events } from '@/store/urls.js'

export default {
  state: {
    events: []
  },

  getters: {
    events(store) {
      return store.events
    }
  },

  actions: {
    fetchEvents() {
      axios.get(events).then(({ data }) => {
        this.commit('setEvents', data)
      })
    }
    // syncWithStorage(store) {
    //   localStorage.setItem('tasks', JSON.stringify(store.state.tasks))
    // }
  },

  mutations: {
    setEvents(store, events) {
      store.events = events || []
    }
    // addTask(store, task) {
    //   store.tasks.push(task)
    // },
    // editTask(store, task) {
    //   store.tasks = store.tasks.map((item) => item.id === task.id ? task : item)
    // },
    // deleteTask(store, id) {
    //   store.tasks = store.tasks.filter(item => item.id !== id)
    // }
  }
}
