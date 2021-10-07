<template>
  <v-card class='mx-4'>
    <v-card-title class='justify-space-between align-start flex-nowrap'>
      <h5>{{this.event.name}}</h5>
      <v-icon @click="deleteEvent">mdi-close-circle-outline</v-icon>
    </v-card-title>
      <v-card-text>
        <p>{{this.event.description}}</p>
        <p>Invited: {{this.invitedListString}}</p>
        <p>Group: {{this.event.group}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['event'],
  computed: {
    invitedListString() {
      return this.event.invited.join(', ')
    }
  },
  created() {
    console.log(this.event)
  },
  methods: {
    deleteEvent() {
      this.$store.dispatch('deleteEvent', this.event.serverId)
    }
  }
}
</script>
