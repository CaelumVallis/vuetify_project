<template>
    <v-container>
      <v-dialog
        v-model="dialog"
        width="1200"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            color="yellow darken-2"
            dark
            v-on="on">
            Create an event
          </v-btn>
        </template>
        <v-card class="pa-8 d-flex">
          <div class="event-dialog-info d-flex flex-column jus px-3">
            <v-text-field
              v-model="eventInfo.name"
              placeholder="Title"
              filled
              dense></v-text-field>
            <div
              class="event-dialog-date font-weight-bold align-self-start">{{ currentDate }}</div>
              <div class="event-dialog-time-picker d-flex">
                <div align-self="start" class="time-picker-start time-picker-scale mt-3" style="width: 350px;">
                  <h2 align="start">From:</h2>
                  <v-time-picker
                    v-model="eventInfo.start"
                    :max="eventInfo.end"
                  ></v-time-picker>
                 </div>
                 <div align-self="start" class="time-picker-end time-picker-scale mt-3" style="width: 350px;">
                   <h2 align="start">To:</h2>
                  <v-time-picker
                    v-model="eventInfo.end"
                    :min="eventInfo.start"
                  ></v-time-picker>
                </div>
            </div>
            <v-row>
              <v-col cols="4" class="pa-0 pl-0">
                <v-select
                  v-model="eventInfo.group"
                  :items="groups"
                  :menu-props="{ maxHeight: '400' }"
                  label="Group"
                  persistent-hint
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" class="pa-0 pl-0">
                <v-select
                  v-model="eventInfo.invited"
                  :items="persons"
                  :menu-props="{ maxHeight: '400' }"
                  label="Invites"
                  multiple
                  persistent-hint
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-textarea
                v-model="eventInfo.description"
                outlined
                name="input-7-4"
                label="Description"
                ></v-textarea>
            </v-row>
          </div>
          <div class="dialog-calendar d-flex flex-column align-center">
            <v-row justify="space-around" class="mt-0">
              <v-date-picker
                v-model="initialDatePicker"
                :show-current="true"
              ></v-date-picker>
            </v-row>
            <v-btn
              v-on:click="onCreate"
              class="align-self-end mr-3 mb-5"
              depressed
              color="primary"
              >
              Create
            </v-btn>
          </div>
        </v-card>
      </v-dialog>
    </v-container>
</template>

<script>
export default {
  name: 'eventDialog',
  created() {
    this.$store.dispatch('fetchGroups')
  },
  computed: {
    groups() {
      return this.$store.state.calendarEvents.groups
    }
  },
  data() {
    return {
      dialog: false,
      eventInfo: {
        name: null,
        start: null,
        end: null,
        group: null,
        invited: [],
        description: null
      },
      currentDate: `${(new Date()).getDate()}.${(new Date()).getMonth() + 1}.${(new Date()).getFullYear()}`,
      initialDatePicker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      persons: []
    }
  },
  methods: {
    onCreate() {
      this.closeDialog()
      const event = {
        ...this.eventInfo,
        start: `${this.initialDatePicker}T${this.eventInfo.start}:00`,
        end: `${this.initialDatePicker}T${this.eventInfo.end}:00`,
        color: 'blue'
      }
      this.$emit('create', event)
    },
    closeDialog() {
      this.dialog = false
    }
  }
}

</script>

<style scoped>
.event-dialog-info {
  width: 50%;
}

.dialog-calendar {
  width: 50%;
}

.event-dialog-time-picker {
  height: 375px;
}

.time-picker-scale {
  transform: scale(0.7);
  transform-origin: top left;
}
</style>
