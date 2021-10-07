<template>
  <v-card>
    <v-card-title>{ Selected date }</v-card-title>
      <Event />
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
  components: { Event }
}
</script>
