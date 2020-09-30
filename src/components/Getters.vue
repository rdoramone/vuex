<template>
  <div>
      <h1>Getters</h1>
      <p v-for="todo of doneTodos" :key="todo.id">{{ todo.description }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    doneTodos() {
      return this.$store.getters.doneTodos;
    }
  }
}
</script>
