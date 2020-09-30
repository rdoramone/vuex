<template>
<div>
  <p>{{ count }}</p>
  <div>
    <button @click="increment()">+</button>
    <button @click="decrement">-</button>
  </div>
</div>
</template>
  
<script>
/*
  Como já injetamos a store na instância do Vue para que a Store possa ser acessada por todos os filhos, não precisamos importar a Store aqui, basta fazer a chamada da store da seguinte forma 'this.$store'.
*/

export default {
  name: 'Count',
  computed: {
    count() {
      return this.$store.state.count
    } 
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>
