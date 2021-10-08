import axios from 'axios'
// import { Api } from '@/Api'
import { events } from '@/store/urls.js'

export default {
  state: {
    events: [],
    selectedDate: new Date(),
    groups: ['Group 1', 'Group 2', 'Group 3', 'Group 4']
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
    },
    createEvent(store, event) {
      axios.post(events, event).then(({ data }) => {
        this.commit('setEvents', [...store.state.events, data])
      })
    },
    fetchGroups() {
      // Api.post('/getGroups').then(res => {
      //   this.commit('setGroups', res)
      // }).catch(error => {
      //   this.message = error
      // })
    }
  },

  mutations: {
    setEvents(store, events) {
      store.events = events || []
    },
    setCurrentDate(store, date) {
      store.selectedDate = new Date(date)
    },
    setGroups(store, groups) {
      store.groups = groups
    }
  }
}
