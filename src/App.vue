<template>
  <div id="app">
    <mu-container>
      <mu-tabs full-width>
        <mu-tab to='/'>赛程</mu-tab>
        <mu-tab to='/notice'>公告</mu-tab>
        <mu-tab to='/medal'>奖牌榜</mu-tab>
      </mu-tabs>
    </mu-container>
    <router-view>
        <router-link to="/"></router-link>|
        <router-link to="/notice"></router-link>
      <router-link to="/medal"></router-link>
    </router-view>
    <p class="youth">内容仅供参考，具体以学校官方数据为准</p>
    <p class="youth">&copy;2019 青春在线</p>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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

.youth{
  color: #999;
  font-size: 12px;
}
</style>

<script>
export default {
  data: function() {
    return {
      msg: "hhhh"
    };
  }
};
</script>

