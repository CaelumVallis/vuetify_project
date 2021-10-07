<template>
  <v-card class='mx-4'>
    <v-card-title class='justify-space-between'>
      <h5>{ xx-xx } event</h5>
      <v-icon
        right
        >
        mdi-close-circle-outline
      </v-icon>
    </v-card-title>
      <v-card-text>
        <p>{ description }</p>
        <p>Invited: { invited members }</p>
        <p>Status: { my status }</p>
    </v-card-text>
  </v-card>
</template>
