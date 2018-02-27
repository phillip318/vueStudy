<template>
  <div id="app">
      <Hello></Hello>
  </div>
</template>

<script>
//1 引入 hello.vue
import Hello from './components/hello'

export default {
  name: 'App',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
