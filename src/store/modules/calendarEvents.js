import axios from 'axios'
import { events } from '@/store/urls.js'

export default {
  state: {
    events: [],
    selectedDate: new Date()
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
    },
    deleteEvent(store, serverId) {
      axios.delete(`${events}/${serverId}`).then(({ data: { id } }) => {
        this.commit('setEvents', store.state.events.filter(item => item.id !== id))
      })
    }
  },

  mutations: {
    setEvents(store, events) {
      store.events = events || []
    },
    setCurrentDate(store, date) {
      store.selectedDate = new Date(date)
    }
  }
}
