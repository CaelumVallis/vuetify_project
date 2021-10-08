import axios from 'axios'
import { events } from '@/store/urls.js'

export default {
  state: {
    events: [],
    selectedDate: new Date(),
    users: [{
      id: '_drjg2t3',
      name: 'Allan',
      memberSelected: false
    }, {
      id: '_wweqeqw',
      name: 'Jhonny',
      memberSelected: false
    }, {
      id: '_aaaaa',
      name: 'Lizy',
      memberSelected: false
    }]
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
    fetchUsers() {
      // Api.post('/getUsers').then(res => {
      //   this.commit('setUsers', res)
      // }).catch(error => {
      //   this.message = error
      // })
    },
    addUsers(store, users, groupId) {
      // users.map((user) => {
      //   Api.post('/inviteUser', { UserId: user.id, groupId }).then(res => {
      //     this.commit('setUsers', res)
      //   }).catch(error => {
      //     this.message = error
      //   })
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
    setUsers(store, users) {
      store.users = users
    }
  }
}
