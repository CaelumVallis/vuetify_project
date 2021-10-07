<template>
  <v-card>
    <v-card-title>{ Selected date }</v-card-title>
      <Event
        v-for="event in events"
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
  computed: {
    events() {
      return this.$store.getters.events
    }
  }
}
</script>
