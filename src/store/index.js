import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let todoList = window.localStorage.getItem('todo');

let findAndDeleteElement = function (state, todo) {
  let index = state.todosCollection.indexOf(todo);
  let removedItem = state.todosCollection.splice(index, 1)[0];
  return [removedItem, index]
};

let moveElement = function (state, todo, isMoveUp) {
  let elementWithIndex = findAndDeleteElement(state, todo);
  let index = elementWithIndex[1];
  let elementToMove = elementWithIndex[0];
  let indexToMove = isMoveUp ? index - 1 : index + 1;
  indexToMove = Math.min(Math.max(indexToMove, 0), state.todosCollection.length);
  state.todosCollection.splice(indexToMove, 0, elementToMove);
}

export default new Vuex.Store({
  state: {
    todosCollection:
      todoList && JSON.parse(todoList).length > 0 ? JSON.parse(todoList) :
        [{
          creator: 'Bat woman',
          task: 'Save the sity',
          date: '2021/01/14',
          img: require('../assets/heroes/bat-woman.png'),
          completed: false,
          inEditMode: false,
        },
        {
          creator: 'Super man',
          task: 'Save the World!!!',
          date: '2021/01/23',
          img: require('../assets/heroes/superman.png'),
          completed: false,
          inEditMode: false,
        },
        {
          creator: 'Iron man',
          task: 'Fix the car',
          date: '2020/11/28',
          img: require('../assets/heroes/iron-man.png'),
          completed: false,
          inEditMode: false,
        },
        {
          creator: 'Super woman',
          task: 'Cook the soup for children',
          date: '2020/12/31',
          img: require('../assets/heroes/catwoman.png'),
          completed: false,
          inEditMode: false,
        }
        ]
  },

  mutations: {
    createNewTodo(state, todoItem) {
      todoItem.date = new Date().toISOString().substr(0, 10),
        todoItem.inEditMode = false,
        state.todosCollection.unshift(todoItem);

      this.commit('saveData');
    },

    saveData(state) {
      window.localStorage.setItem('todo', JSON.stringify(state.todosCollection));
    },

    removeToDo(state, todo) {
      findAndDeleteElement(state, todo)
      this.commit('saveData');
    },

    isDone(state, todo) {
      if (todo.completed) {
        state.todosCollection.push(findAndDeleteElement(state, todo)[0])
      } else {
        state.todosCollection.unshift(findAndDeleteElement(state, todo)[0])
      }
      this.commit('saveData');
    },

    moveUp(state, todo) {
      moveElement(state, todo, true);
    },

    moveDown(state, todo) {
      moveElement(state, todo);
    },

    editItem(state, todo) {
      let index = state.todosCollection.indexOf(todo);
      state.todosCollection[index].inEditMode = true;
    },

    editItemComplete(state, todo) {
      let index = state.todosCollection.indexOf(todo);
      state.todosCollection[index].inEditMode = false;
      state.todosCollection[index].task = todo.task;
      this.commit('saveData');
    },
  },
  actions: {
  },
  modules: {
  }
})
