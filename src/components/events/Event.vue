<template>
  <v-card
    :class="this.event.color"
    class='mx-4'
    >
    <v-card-title class='justify-space-between align-start flex-nowrap'>
      <h5>{{this.event.name}}</h5>
      <v-icon @click="deleteEvent">mdi-close-circle-outline</v-icon>
    </v-card-title>
      <v-card-text>
        <p class="font-weight-bold text-decoration-underline">
          {{new Date(this.event.start).toDateString()}} to {{new Date(this.event.end).toDateString()}}
        </p>
        <p>{{this.event.description}}</p>
        <p><span class="font-weight-bold">Invited: </span>{{this.invitedListString}}</p>
        <p><span class="font-weight-bold">Group: </span>{{this.event.group}}</p>
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
