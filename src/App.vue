<template>
  <div id='app'>
    <v-app>
      <div id='nav'>
        <Header />
      </div>
      <div class='pa-4 pt-12'>
        <router-view />
      </div>
    </v-app>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: { Header },
  created() {
    // uncomment (&& modify) when backend will be ready
    // if (!localStorage.getItem('jwt')) {
    //   if (this.$route.name !== 'auth') this.$router.push({ path: 'auth' })
    // } else {
    //   this.$router.push({ path: 'home' })
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
