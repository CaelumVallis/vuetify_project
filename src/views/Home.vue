<template>
  <div>
      <v-container>
      <v-row>
        <v-col cols='8'>
          <v-card>
            <SharedCalendar />
          </v-card>
        </v-col>
        <v-col cols='4'>
          <v-card>
            <Events />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import SharedCalendar from '@/views/SharedCalendar.vue'
import Events from '@/components//events/Events.vue'

export default {
  name: 'home',
  data() {
    return {
      message: 'none'
    }
  },
  components: { SharedCalendar, Events },
  methods: {
    getMessage() {
      Api.get('/')
        .then((response) => {
          this.message = response.data.message
        })
        .catch((error) => {
          this.message = error
        })
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
