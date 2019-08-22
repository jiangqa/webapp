<template>
  <div id="app">
    <router-view/>
    <div class="loading" v-show="loading">
      <van-loading class="demo-loading" color="white"/>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      loading() {
        return this.$store.state.loading
      }
    },
  }
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
