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
import store from '../store/index.js'

export default {
  name: 'Count',
  computed: {
    count() {
      return store.state.count
    } 
  },
  methods: {
    increment() {
      store.commit('increment')
    },
    decrement() {
      store.commit('decrement')
    }
  }
}
</script>
