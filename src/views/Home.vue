<template>
  <div class="container">
    <div class="page-title">
      <h1>TO-DO List</h1>
    </div>
    <TodoItem
      v-for="(todoItem, id) in todosCollection"
      :key="id"
      :item="todoItem"
    />
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem";

export default {
  name: "Home",
  components: {
    TodoItem,
  },
  data() {
    return {
      creator: null,
      task: null,
      date: null,
      loading: true,
    }
  },
  computed: {
    todosCollection() {
      return this.$store.state.todosCollection;
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: "Noto Sans JP", sans-serif;
  text-align: center;
  color: #ffff;
}

.page-title {
  width: 100%;
  background-color: #524b50;
  padding: 20px 0px;
}
</style>
