<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/basic">Basic</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinghtml">Data binding html</router-link> |
    <router-link to="/inputbinding">Input Binding</router-link> |
    <router-link to="/selectbinding">Select Binding</router-link> |
    <router-link to="/attrbinding">Attribute Binding</router-link> |
    <router-link to="/classBinding">class/style Binding</router-link> |
    <router-link to="/listrendering">List Rendering</router-link> |
    <router-link to="/renderinggrammer">Rendering Grammer</router-link> |
    <router-link to="/event">Event</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/watch">Watch</router-link> |
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
