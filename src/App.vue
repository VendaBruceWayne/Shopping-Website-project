<template>
  <div class="main-layout">
    <aside class="sidebar">
      <h2>Product Categories</h2>
      <!-- Styled router-links -->
      <router-link to="/products" class="sidebar-link">All Products</router-link>
      <router-link to="/cart" class="sidebar-link">Shopping Cart</router-link>
    </aside>
    <section class="content">
      <h1>Tambani Site</h1>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
.main-layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  overflow-y: auto;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

/* Styling for the router-links */
.sidebar-link {
  display: block;
  padding: 10px 15px;
  margin-bottom: 10px;
  color: #333;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;
}

.sidebar-link:hover {
  background-color: #6200ea;
  color: #fff;
}

.sidebar-link:active {
  background-color: #3700b3;
  color: #fff;
}
</style>
