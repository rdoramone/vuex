<template>
  <div>
      <h1>Getters</h1>
      <p v-for="todo of doneTodos" :key="todo.id">{{ todo.description }}</p>
      <p><strong>{{ totalDoneTodos }}</strong></p>
      <p v-for="pId of getTodoById" :key="pId.id">{{ pId.description }}</p>
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
    },
    getTodoById() {
      return this.$store.getters.getTodoById(2);
    }
  }
}
</script>
