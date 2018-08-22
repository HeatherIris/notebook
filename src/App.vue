<template>
  <div id="app">
    <Toolbar></Toolbar>
    <Notelist></Notelist> 
    <Editor></Editor>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Toolbar from './components/Toolbar.vue';
import Notelist from './components/Notelist.vue';
import Editor from './components/Editor.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Toolbar,
    Notelist,
    Editor
  }
}
</script>

<style>
#app {
  padding: 0px;

  /* display: table;
  width: 100%; */
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
