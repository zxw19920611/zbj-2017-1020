<template>
  <div class="header">
    <img src="../assets/logo (2).png">
    <div class="search">
      <router-link to="/search">搜索您需要的专业人才，如：餐饮logo设计</router-link>
    </div>
    <div class="location">
      <a href="javascript:">全国</a>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'headerr',
}
</script>

<style>
  #app .header{
    position:relative;
  }
  #app .header img{
    width:100%;
  }
  #app .header .search{
    width:100%;
    padding:0 0.1rem;
    box-sizing: border-box;
    position:absolute;
    bottom:0.19rem;
  }
  #app .header .search a{
    display: block;
    width: 100%;
    height: 0.32rem;
    line-height: 0.32rem;
    color: #999;
    font-size: 0.14rem;
    background: rgba(245, 245, 245, 0.9);
    border-radius: 0.05rem;
    padding-left: 0.1rem;
    box-sizing: border-box;
  }
  #app .header .location{
    position: absolute;
    top: 0.17rem;
    left: 0.1rem;
    margin-right: 0.1rem;
    height: 0.3rem;
    z-index: 1;
  }
  #app .header .location a{
    display: block;
    padding: 0 0.12rem;
    height: 0.28rem;
    border-radius: 0.16rem;
    border: 0.01rem solid black;
    font-size: 0.12rem;
    line-height: 0.28rem;
    text-align: center;
    color: #fff;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background: rgba(0, 0, 0, 0.6);
    border: none;
  }
</style>