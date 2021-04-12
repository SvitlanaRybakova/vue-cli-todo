<template>
  <div class="container">
    <form @submit.prevent="createTodo">
      <p class="error" v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, i) in errors" v-bind:key='i'>{{ error }}</li>
        </ul>
      </p>
      <div class="flex-wrapper">
        <div class="img-wrapper">
          <img v-bind:src="this.img" :alt="`${creator}'s image`" />
          <button @click="changeImg">change</button>
        </div>
        <div class="text-wrapper">
          <p>
            <label for="creator"> <span>*</span> Write your name</label>
            <input id="creator" type="text" v-model="creator" />
          </p>
          <p>
            <label for="task"> <span>*</span> Whats you need to do?</label>
            <textarea
              id="task"
              name="task"
              cols="30"
              rows="10"
              v-model="todo"
            ></textarea>
          </p>
        </div>
      </div>
      <div class="btns">
        <button type="reset" class="">Clear</button>
        <button class="btn-add">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
let lastChoosenImgURL = require("../assets/heroes/temporary-avatar.png");

export default {
  data() {
    return {
      errors: [],
      creator: "",
      todo: "",
      img: lastChoosenImgURL,
      completed: false,
    };
  },
  methods: {
    createTodo() {
      this.errors = [];
      if (this.creator && this.todo) {
        let todoItem = {
          creator: this.creator,
          task: this.todo,
          img: this.img,
          completed: this.completed,
        };
        this.$store.commit("createNewTodo", todoItem);
        this.creator = null;
        this.todo = null;
        this.$router.push("/");
      } else {
        if (!this.creator) this.errors.push("Name required");
        if (!this.todo) this.errors.push("TO-DO item required");
      }
    },
    changeImg() {
      let imgURL = prompt("Put the image address");
      if (imgURL) {
        lastChoosenImgURL = imgURL;
        this.img = lastChoosenImgURL;
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 700px;
  padding: 20px;
  color: #524b4b;
}

.img-wrapper {
  width: 100px;
  text-align: center;
}

img {
  width: 100%;
  border-radius: 50%;
}

.flex-wrapper {
  display: flex;
  justify-content: space-between;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}

p {
  margin-bottom: 20px;
}

.btns {
  margin-top: 50px;
  text-align: center;
}

button {
  border-radius: 6px;
  border: 1px solid gray;
  cursor: pointer;
  padding: 6px 24px;
}

.btn-add {
  box-shadow: inset 0px 1px 0px 0px #bee2f9;
  background: linear-gradient(to bottom, rgba(0, 128, 0, 0.582) 5%, green 100%);
  border: 1px solid green;
  display: inline-block;
  color: #ffff;
  font-family: Arial;
  text-shadow: 0px 1px 0px #7cacde;
  margin-left: 40px;
}

.btn-add:hover {
  background: linear-gradient(to bottom, green 5%, rgba(0, 128, 0, 0.582) 100%);
}

span {
  color: red;
}

@media (max-width: 600px) {
  .flex-wrapper {
    display: block;
  }

  .img-wrapper {
    margin: 0 auto;
    margin-bottom: 50px;
  }
}
</style>
