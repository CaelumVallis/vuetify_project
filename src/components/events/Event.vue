<template>
  <v-card class='mx-4'>
    <v-card-title class='justify-space-between align-start flex-nowrap'>
      <h5>{{this.event.name}}</h5>
      <v-icon
        right
        >
        mdi-close-circle-outline
      </v-icon>
    </v-card-title>
      <v-card-text>
        <p>{{this.event.description}}</p>
        <p>Invited:
          <span
          v-for="invited in this.event.invited"
          :key="invited"
          >{{invited}}, </span>
        </p>
        <p>Group: {{this.event.group}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['event'],
  created() {
    console.log(this.event)
  }
}
</script>
