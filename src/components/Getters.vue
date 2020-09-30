<template>
  <div>
      <h1>Getters</h1>
      <p v-for="todo of doneTodos" :key="todo.id">{{ todo.description }}</p>
      <p><strong>{{ totalDoneTodos }}</strong></p>
  </div>
</template>

<script>
export default {
  computed: {
    doneTodos() {
      return this.$store.getters.doneTodos;
    },
    totalDoneTodos() {
      return this.$store.getters.totalDoneTodos;
    }
  }
}
</script>
