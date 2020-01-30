<template>
  <div id="app">
    <router-view name = "header"/>
    <router-view/>
  </div>
</template>

<script>

import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',
}
</script>

<style>

@import 'http://localhost:8000/assets/index.css';

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
