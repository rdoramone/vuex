<template>
<div>
  <h1>Estado</h1>
  <p>{{ count }}</p>
  <div>
    <button @click="increment(2)">+</button>
    <button @click="incrementAfter({ amount: 10 })">async</button>
    <button @click="decrement(2)">-</button>
  </div>
  <div class="action-using-promise">
    <button @click="incrementAsyncAction">Action A using Promise</button>
  </div>
</div>
</template>
  
<script>
/*
  Como já injetamos a store na instância do Vue para que a Store possa ser acessada por todos os filhos, não precisamos importar a Store aqui, basta fazer a chamada da store da seguinte forma 'this.$store'.
*/
import { mapActions } from 'vuex';

export default {
  name: 'Count',
  computed: {
    count() {
      return this.$store.state.count
    } 
  },
  methods: {
    ...mapActions(['increment', 'incrementAsync', 'decrement']),
    ...mapActions({ incrementAfter: 'incrementAsync' }),
    incrementAsyncAction() {
      this.$store.dispatch('actionA', 5).then(() => {
        this.$store.dispatch('incrementAsync', { amount: -1 })
      })
    }
  }
}
</script>
