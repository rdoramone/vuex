import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, description: 'Descrição para o primeiro paragráfo.', done: true },
      { id: 2, description: 'Descrição para o segundo paragráfo.', done: false },
      { id: 3, description: 'Descrição para o terceiro paragráfo.', done: true },
    ]
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done === true)
    },
    totalDoneTodos: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.filter(todo => todo.id === id)
    }
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {
  },
  modules: {
  }
})
