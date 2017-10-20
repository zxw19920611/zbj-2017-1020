<template>
  <div class="foot_wrap">
      <router-link to="/login">
            <i class="iconfont pick">&#xe692;</i>
            <p class="itemtext pick">登入</p>
      </router-link>
      <router-link to="/register">
            <i class="iconfont">&#xe676;</i>
            <p class="itemtext">注册</p>
      </router-link>
      <router-link to="/brand">
            <i class="iconfont">&#xe674;</i>
            <p class="itemtext">品牌特惠</p>
      </router-link>
      <router-link to="/detail">
            <i class="iconfont">&#xe700;</i>
            <p class="itemtext">分类</p>
      </router-link>
      <router-link to="/mine">
            <i class="iconfont">&#xe79c;</i>
            <p class="itemtext">我的</p>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'footer_c',
}
</script>
<style>
@font-face {
    font-family: 'iconfont';
    src: url('../../static/font/iconfont.eot');
    src: url('../../static/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../../static/font/iconfont.woff') format('woff'),
    url('../../static/font/iconfont.ttf') format('truetype'),
    url('../../static/font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
  .foot_wrap{
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    height:0.495rem;
    background:#fff;
    border-top:0.01rem solid #eee;
  }
  .foot_wrap a{
    padding-top:0.1rem;
    display:inline-block;
    float: left;
    height:0.495rem;
    width:0.64rem;
    text-align:center;
    font-size:0.12rem;
    text-decoration: none;
  }
  .foot_wrap a .iconfont{
    font-size:0.16rem;
    color:#000;
  }
  .foot_wrap a .itemtext{
    font-size:0.12rem;
    color:#000;
  }
  .foot_wrap a .pick{
    color:#11BB55;
  }
</style>