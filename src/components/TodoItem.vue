<template>
  <div class="item-wrapper">
    <div class="main-wrapper">
      <div class="img-wrapper">
        <figure>
          <img v-bind:src="item.img" :alt="item.creator" />
          <figcaption>{{ item.creator }}</figcaption>
        </figure>
      </div>
      <!-- img-wrapper -->
      <div class="task">
        <p class="date">{{ item.date }}</p>
        <span
          v-bind:class="{ done: item.completed }"
          v-show="!item.inEditMode"
          >{{ item.task }}</span
        >
        <input
          v-bind:placeholder="item.task"
          v-show="item.inEditMode"
          v-model="item.task"
        />
      </div>
      <!-- task -->
    </div>
    <!-- main-wrapper -->

    <div class="btn-main">
      <div class="btn-wrapper">
        <div
          class="btn btn-edit"
          type="button"
          v-show="!item.inEditMode"
          @click="editItem(item)"
        ></div>

        <div
          class="btn btn-save"
          type="button"
          v-show="item.inEditMode"
          @click="editItemComplete(item)"
        ></div>

        <div
          class="btn btn-done"
          type="checkbox"
          v-on:click="item.completed = !item.completed"
          @click="isDone"
        ></div>

        <div class="btn btn-delete" @click="removeTask"></div>
      </div>

      <div class="btn-priority">
        <div class="btn btn-high-priority" @click="moveUp"></div>
        <div class="btn btn-low-priority" @click="moveDown"></div>
      </div>
    </div>
    <!-- btn-main -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["item"],
  methods: {
    removeTask() {
      this.$store.commit("removeToDo", this.item);
    },
    isDone() {
      this.$store.commit("isDone", this.item);
    },
    moveUp() {
      this.$store.commit("moveUp", this.item);
    },
    moveDown() {
      this.$store.commit("moveDown", this.item);
    },
    editItem() {
      this.$store.commit("editItem", this.item);
    },
    editItemComplete() {
      this.$store.commit("editItemComplete", this.item);
    },
  },
};
</script>

<style scoped>
.item-wrapper {
  border-bottom: 1px solid #b6b5b5;
  color: #524b4b;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.main-wrapper {
  width: 80%;
  display: flex;
  justify-content: space-between;
}

.img-wrapper {
  max-width: 50px;
}

img {
  border-radius: 50%;
  width: 100%;
}

figcaption {
  overflow: hidden;
  text-align: center;
  font-style: italic;
  height: 40px;
}

.date {
  font-family: "Noto Sans JP", sans-serif;
  font-size: 0.8rem;
  text-align: left;
  padding-bottom: 5px;
}
.task {
  width: 80%;
  height: 100%;
  overflow: auto;
  font-weight: bold;
  text-align: center;
  align-self: center;
  font-family: "Noto Sans JP", sans-serif;
}

.btn-wrapper {
  width: 60%;
  display: flex;
  justify-content: space-between;
}

.btn-main {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  border-radius: 50px;
  padding: 10px;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.btn:hover {
  background-color: #a1dffb5e;
}
.btn-done {
  background-image: url("../assets/icons/check.svg");
}
.btn-delete {
  background-image: url("../assets/icons/delete.svg");
}
.btn-high-priority {
  background-image: url("../assets/icons/arrow-up.svg");
}

.btn-low-priority {
  background-image: url("../assets/icons/arrow-down.svg");
}

.btn-edit {
  background-image: url("../assets/icons/edit.svg");
}

.btn-save {
  background-image: url("../assets/icons/content-save.svg");
}

input {
  width: 50%;
  height: 30px;
  padding-left: 10px;
  border: 1px solid rgb(180, 177, 177);
}

span {
  display: block;
  height: 30px;
}

.done {
  text-decoration: line-through;
}

@media (max-width: 1000px) {
  .main-wrapper {
    flex-direction: column;
    align-items: center;
    width: 80%;
  }

  .date {
    text-align: center;
    padding-bottom: 50px;
  }

  .btn-wrapper {
    width: 75%;
  }

  .btn-priority {
    align-self: center;
  }

  input {
    width: 100%;
    height: 30px;
  }

  .btn-main {
    width: 20%;
  }
}
</style>