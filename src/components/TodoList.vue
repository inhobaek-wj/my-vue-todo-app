<template>
  <div>
    <ul>
      <li v-for="todoItem in todoItems" v-bind:key="todoItem" class="shadow">
        <span>{{ todoItem }}</span>
        <span class="removeBtn">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
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
            localStorage.key(i))
        }
      }
    }
  }
}
</script>
