<template>
  <v-card>
    <v-card-title>{{this.currentDay}}</v-card-title>
      <Event
        v-for="event in currentDateEvents"
        :key="event.id"
        :event="event"
        class="mb-4"
      />
    <v-btn
      class='ma-4'
      color='yellow darken-2'
    >
      Create an event
    </v-btn>
  </v-card>
</template>

<script>
import Event from './Event.vue'

export default {
  components: { Event },
  created() {
    console.log(this.$store.state.calendarEvents.selectedDate)
  },
  computed: {
    currentDateEvents() {
      return this.$store.getters.events.filter((item) => {
        return new Date(item.start) <= this.$store.state.calendarEvents.selectedDate &&
        this.$store.state.calendarEvents.selectedDate <= new Date(item.end)
      })
    },
    currentDay() {
      const currentDate = this.$store.state.calendarEvents.selectedDate
      return currentDate ? currentDate.toDateString() : ''
    }
  }
}
</script>
