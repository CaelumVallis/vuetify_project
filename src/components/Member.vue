<template>
    <div class="d-flex">
      <v-checkbox
      v-model="memberSelected"
      @change="$emit('selectUser', memberSelected)"
      ></v-checkbox>
      <v-list-item-content>
          <v-list-item-title>{{ member.name }}</v-list-item-title>
      </v-list-item-content>
    </div>
</template>

<script>
export default {
  props: ['member'],
  data() {
    return {
      memberSelected: false
    }
  }
}
</script>
