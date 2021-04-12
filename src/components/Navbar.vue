<template>
  <div class="navbar">
    <div class="container">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/create">Create</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  padding: 0.6rem 0 0.6rem;
}

a {
  color: navy;
  font-size: 1.5rem;
  text-decoration: none;
  margin: 0 1rem;
  transition: 0.3s;
  font-weight: bold;
}

a:hover {
  color: brown;
}
</style>

