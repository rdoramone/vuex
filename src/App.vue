<template>
  <div id="app">
    <Count />
    <Getters />
  </div>
</template>

<script>
import Count from './components/Count.vue'
import Getters from './components/Getters.vue'

export default {
  name: 'App',
  components: {
    Count,
    Getters
  }
}
</script>

<style>
</style>
