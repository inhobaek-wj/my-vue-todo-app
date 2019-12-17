import Vue from 'vue';
import Vuex from 'vuex';

// registration globally
// it makes possible for every component to access it.
Vue.use(Vuex);

const storage = {
  fetch() {
    const tmpArr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).indexOf("loglevel") === -1) {
          tmpArr.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }

    return tmpArr;
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },

  mutations: {

    addOneItem(state,newTodoItem) {
      let newObj = {
        item: newTodoItem,
        completed: false
      };

      localStorage.setItem(newTodoItem, JSON.stringify(newObj));

      state.todoItems.push(newObj);
    },

    removeOneItem(state,payload) {
      localStorage.removeItem(payload.todoItem.item);

      state.todoItems.splice(payload.index, 1);
    },

    toggleOneItem(state,payload) {
      /*       todoItem.completed = !todoItem.completed; */
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },

    clearAllItems(state) {
      localStorage.clear();

      state.todoItems = [];
    }

  }

});
