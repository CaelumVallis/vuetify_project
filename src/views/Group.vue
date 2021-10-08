<template>
    <v-container class="d-flex flex-column justify-center">
      <v-row class="mt-9">
        <v-col cols="8">
          <v-card >
            <SharedCalendar height="350" />
          </v-card>
        </v-col>
        <v-col class="members-block d-flex flex-column">
          <v-row>
            <v-col>
              <v-card class="pa-7" height="350">
                <v-list class="members-list">
                  <v-list-item v-for="(member, index) in groupMembers" v-bind:key="index">
                    <Member @selectUser="selectUser" :member="member"/>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              class="text-center d-flex flex-column align-center">
                <v-btn
                  @click="inviteMembers"
                  class="justify-self-end"
                  color="yellow darken-2"
                  dark
                >
                  Invite a new member
                </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <Events />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import SharedCalendar from '@/views/SharedCalendar.vue'
import Events from '@/components/events/Events.vue'
import Member from '@/components/Member.vue'

export default ({
  name: 'group',
  props: ['group'],
  computed: {
    groupMembers() {
      return this.$store.state.calendarEvents.users
    }
  },
  data() {
    return {
      users: []
    }
  },
  components: { SharedCalendar, Events, Member },
  methods: {
    selectUser(user) {
      this.users = this.users.map((item) => {
        return item.id === user.id ? user : item
      })
    },
    inviteMembers() {
      const selectedUsers = this.users.filter(item => item.memberSelected)
      this.$store.dispatch('inviteUsers', selectedUsers, this.group.id)
    }
  }
})
</script>

<style scoped>
.members-list {
  max-height: 300px;
  overflow-y: auto;
}
</style>
