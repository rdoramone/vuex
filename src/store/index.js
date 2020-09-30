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
    /*
      Na maioria das vezes é utilizado um objeto para o payload para que
      fiquei mais descritivo qual o tipo de alteração que está sendo feita.

      Abaixo temos um exemplo com o payload usando um objeto e sem o objeto.
    */
    increment: (state, payload) => state.count += payload.amount,
    decrement: (state, payload) => state.count -= payload
  },
  actions: {
  },
  modules: {
  }
})
