<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @addTodoItem="addOneItem" />
    <TodoList v-bind:propsTodoItems="todoItems" />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  data: function () {
    return {
      todoItems: []
    }
  },

  created(){
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).indexOf("loglevel") === -1) {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          )
        }
      }
    }
  },

  methods: {
    addOneItem(newTodoItem) {
      let newObj = {
        item: newTodoItem,
        completed: false
      }

      localStorage.setItem(newTodoItem, JSON.stringify(newObj));

      this.todoItems.push(newObj);
    }
  },

  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }

}
</script>

<style>

body {
  text-align: center;
  background-color: #F6F6F8;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}

</style>
