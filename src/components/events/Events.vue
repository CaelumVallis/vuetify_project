<template>
  <v-card>
    <v-card-title>{{this.currentDay}}</v-card-title>
      <Event
        v-for="event in currentDateEvents"
        :key="event.id"
        :event="event"
        class="mb-4"
      />
      <EventDialog @create="createEvent"/>
  </v-card>
</template>

<script>
import Event from './Event.vue'
import EventDialog from '@/components/EventDialog.vue'

export default {
  components: { Event, EventDialog },
  computed: {
    currentDateEvents() {
      return this.$store.getters.events.filter((item) => {
        return new Date(item.start).toDateString() === this.$store.state.calendarEvents.selectedDate.toDateString()
        // return new Date(item.start) <= this.$store.state.calendarEvents.selectedDate &&
        // this.$store.state.calendarEvents.selectedDate <= new Date(item.end)
      })
    },
    currentDay() {
      return this.$store.state.calendarEvents.selectedDate.toDateString()
    }
  },
  methods: {
    createEvent(data) {
      this.$store.dispatch('createEvent', data)
    }
  }
}
</script>
