<template>
  <div class="about">
    <div class="container">
      <div class="about-text">
        <h1>How to use</h1>
        <p>
          In this application, you can add tasks to be done. <br />
          For this, go to the "Create" tab and fill in all the fields. <br />
          The form should be validated and does not allow creating a task if the
          field is empty. <br />
          A message about errors is displayed on the screen. <br />
          The user's avatar is set by default, but you can change it if
          necessary. The picture must have an absolute path.
        </p>

        <p>
          After creating and adding a task, you will be redirected to the main
          page (Home), where you will see all the tasks you need to do. <br />
          On the main page (Home), you can edit the task, delete it or mark it
          as completed. <br />
          In the last case, the task will move to the end of the list. If you
          click on the button again, the task will be displayed as urgent, with
          a high priority, and will move to the beginning of the list. <br />
          Moreover, some buttons move the task up or down, depending on its
          priority.
        </p>
        <p>
          The to-do list is written to the local storage and is saved when the
          page is reloaded. If the local storage has no items to display, then a
          test to-do list is displayed
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital@0;1&display=swap");
.about {
  font-family: "Ubuntu", sans-serif;
  font-size: 1.2rem;
  color: #524b4b;
  padding: 20px;
}

h1 {
  text-align: center;
  color: brown;
  margin-bottom: 40px;
}

p {
  margin-bottom: 30px;
}
</style>