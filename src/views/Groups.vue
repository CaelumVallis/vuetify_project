<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
            <v-img
              @click="createNewGroup"
              contain
              src="../assets/img/createnew.png"
            ></v-img>
            <v-card-title>
              Create New
            </v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
            <v-img
              @click="navigateToGroup('family')"
              contain
              src="../assets/img/family.jpg"
            ></v-img>
            <v-card-title>
              Family
            </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
            <v-img
              @click="navigateToGroup('football')"
              contain
              src="../assets/img/football.jpg"
            ></v-img>
            <v-card-title>
              Football
            </v-card-title>
        </v-card>
      </v-col>
      <v-col>
          <v-card>
            <v-img
              @click="navigateToGroup('work')"
              contain
              src="../assets/img/work.jpg"
            ></v-img>
            <v-card-title>
              Work
            </v-card-title>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    navigateToGroup(groupName) {
      this.$router.push(`/userGroups/${groupName}`)
    },
    createNewGroup() {

    }
  }
}
</script>

<style scoped>

</style>
