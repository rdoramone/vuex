<template>
  <div>
      <h1>Getters</h1>
      <p v-for="todo of doneTodos" :key="todo.id">{{ todo.description }}</p>
      <p><strong>{{ totalDoneTodos }}</strong></p>
      <p v-for="pId of getTodoById" :key="pId.id">{{ pId.description }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // doneTodos() {
    //   return this.$store.getters.doneTodos;
    // },
    // totalDoneTodos() {
    //   return this.$store.getters.totalDoneTodos;
    // },
    getTodoById() {
      return this.$store.getters.getTodoById(2);
    },
    /*
      Aqui estou usando o auxiliar mapGetters para mapear 2 getters que estão na Store,
      basta passar o nome dados a eles dentro da Store através de uma string e usá-los
      com o mesmo nome dentro do template.
    */
    ...mapGetters([
      'doneTodos',
      'totalDoneTodos'
    ])

    /*
      Aqui eu posso nomear o meu getter que está sendo mapeado, sendo assim, basta
      passar um objeto para o mapGetters e dentro dele a propriedade com o nome
      desejado e passar o valor do getter que está na store.

      ...mapGetters({
        totalDone: 'totalDoneTodos'
      })
    */
  }
}
</script>
