<template>
  <div class="hello">
    <h1 class="ch1" style="font-size:0.1rem"></h1>
    <headerr></headerr>
    <contentt></contentt>
    <sliderr></sliderr>
    <company></company>
    <formation></formation>
    <footer_c></footer_c>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    getData:function(){
      function getCookie(name) {
        var cookie = document.cookie;
        var cookieReg = new RegExp(name + '=/d');
        if(cookieReg.test(cookie)) {
            return RegExp.$1;
        } else {
            return null;
    }

    var h1 = document.querySelector('.ch1');
    if(getCookie('zhengxuwen')) {
        h1.innerHTML =  getCookie('zhengxuwen') + '已登录';
    } else {
        h1.innerHTML = '游客';
    }
    }
  },
  watch:{
    '$route':'getData'
  },
  mounted:function(){
    this.getData()
  }
}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@font-face {
    font-family: 'iconfont';
    src: url('../font/iconfont.eot');
    src: url('../font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../font/iconfont.woff') format('woff'),
    url('../font/iconfont.ttf') format('truetype'),
    url('../font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}

</style>
