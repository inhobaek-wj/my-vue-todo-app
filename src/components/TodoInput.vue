<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        Warning!
      </h3>
      <span slot="body">
        Please type somethings to do.
      </span>
      <i slot="footer" class="closeModalBtn fa fa-times"
         aria-hidden="true"
         @click="showModal = false">
      </i>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue"

export default {
  data: function() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },

  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = true;
      }
    },

    clearInput(){
      this.newTodoItem = '';
    }
  },

  components: {
    Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  cursor: pointer;
}
</style>
