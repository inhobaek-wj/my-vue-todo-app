<template>
  <div>
    <transition-group name="list" tag="ul">
      <!-- <li v-for="( todoItem, index ) in this.$store.state.todoItems" -->
      <li v-for="( todoItem, index ) in this.storedTodoItems"
          v-bind:key="todoItem.item"
          class="shadow list-item">
        <i class="checkBtn fas fa-check" @click="toggleComplete({todoItem,index})"
           v-bind:class="{checkBtnCompleted: todoItem.completed}"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo({todoItem,index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
// use helpers.
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(["storedTodoItems"])
  },

  methods: {
    ...mapMutations({
      removeTodo: "removeOneItem",
      toggleComplete: "toggleOneItem"
    }),

    /*
     * removeTodo: function(todoItem,index) {
     *        //  this.$emit('removeTodoItem', todoItem,index);
     *   this.$store.commit("removeOneItem",{todoItem,index});
     * },

     * toggleComplete: function(todoItem,index) {
     *         // this.$emit('toggleTodoComplete', todoItem,index);
     *   this.$store.commit("toggleOneItem",{todoItem,index});
     * } */
  }
}
</script>

<style scoped>

ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* list transition */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
