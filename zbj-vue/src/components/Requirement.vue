<template>
	<div class="require">
		<div class="sel-content">
			<p class="first">
				<span class="left"></span>
				发需求 吸引人才
				<span class="right"></span>
				<p class="sec">已为101,371,108名雇主找到了专业人才</p>
			</p>
		</div>
		<div class="tab-content">
		<div class="form-select" @click="have">
				选择您需要的专业人才，如logo设计
				<i class="iconfont">&#xe61d;</i>
		</div>

		<mt-popup v-model="popupVisible" position="bottom" class="hid">
			<ul>
				<li class="item" v-for="item in list">
					{{item.category1Name}}
				</li>
<!-- 				<router-link to="/design">设计策划</router-link>
				<router-link to="/wz">网站,APP</router-link>
				<router-link to="/wz">营销，推广</router-link>
				<router-link to="/wz">电商，网店</router-link>
				<router-link to="/wz">动漫，影视</router-link>
				<router-link to="/wz">工业装修</router-link> -->
			</ul>
			<div class="popright">
				</router-view>
			</div>
		</mt-popup>
		<textarea placeholder="请用一句话简要描述您的需求" class="form-textarea"></textarea>
		<div class="form-login-box">
			<div class="left">
				<input placeholder="请输入您的手机号" class="linput">
			</div>
			<div class="right">
			<input class="form-code" placeholder="输入6位验证码">
			<button>获取验证码</button>
			</div>	
			<button class="bottom-button">立即发布</button>
		</div>
		</div>
	</div>
</template>
<script>
import { Popup } from 'mint-ui';
import axios from 'axios';
	export default {
  name: 'require',
  data(){
  	return{
  		popupVisible:false,
  		list:[],
  		listt:[]
  	}
  },
  methods:{
  	have:function(){
  		var that = this;
  		
  		this.popupVisible = true;
  		
  		axios.get('/task/getDate4perfectTask')
          .then(function (response) {
            console.log(response);
            
            that.list = response.data.data;
            // console.log(that.list)
            console.log(that.listt)
            
          })
          .catch(function (error) {
            console.log(error);
          });
  	}
  }
}
</script>
<style>

  @font-face {
    font-family: "iconfont";
    src: url('../font/iconfont.eot'); /* IE9*/
    src: url('../font/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('../font/iconfont.woff') format('woff'), /* chrome, firefox */ url('../font/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/ url('../font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
	.require{
		border-top: 10px solid #eee;
	}
	.require div.sel-content{
		text-align: center;
    	background: #fff;
	}
	.require div.sel-content p.first{
		display: block;
	    position: relative;
	    font-size: 0.15rem;
	    height: 0.4rem;
	    line-height: 0.4rem;
	    color: #333;
	}
	.require div.sel-content p.first .left{
		display: block;
	    position: absolute;
	    width: 0.14rem;
	    height: 0.02rem;
	    background: #ccc;
	    top: 0.18rem;
	    left:0.8rem;
	}
	.require div.sel-content p.first .right{
		display: block;
	    position: absolute;
	    width: 0.14rem;
	    height: 0.02rem;
	    background: #ccc;
	    top: 0.18rem;
	    right:0.8rem;
	}
	.require div.sel-content p.sec{
		font-size: 0.12rem;
	    color: #b3b3b3;
	    margin-top: -0.07rem;
	    padding-bottom: 0.05rem;
	}
	.require .tab-content{
		background: #fff;
    	padding-top: 0.01rem;
    	height: 2.04rem;
	    font-size: 0.12rem;
	    box-sizing: border-box;
	    padding: 0 0.1rem 0.05rem 0.1rem;
	}
	.require .tab-content .form-select{
		display: inline-block;
	    width: 100%;
	    background: #f2f2f2;
	    border: none;
	    height: 0.38rem;
	    margin-top: 0.05rem;
	    padding-left: 0.08rem;
	    line-height: 0.38rem;
	    color: #4d4d4d;
	    box-sizing: border-box;
	    border-radius: 0.05rem;
	}
	.require .tab-content .form-select i{
		float: right;
	    margin-right: 0.15rem;
	    font-size: 0.12rem;
	    color: #666;
	}
	.require .hid{
		font-size: 0.14rem;
	    background: rgba(0, 0, 0, 0.7);
	    /*position: fixed;*/
	    width: 100%;
	    /*max-width: 6.4rem;*/
	    bottom: 0;
	    height: 70%;
	    box-sizing: border-box;
	}
.require .hid ul:nth-of-type(1){
	width: 1.5rem;
    border-right: 0.01rem solid #eee;
    padding: 0.1rem;
    display: inline-block;
    text-align: left;
    background-color: #fff;
    overflow-y: scroll;
    height: 100%;
    float: left;
    box-sizing: border-box;
}
.require .hid ul:nth-of-type(1) li{
	height: 0.3rem;
    line-height: 0.3rem;
    border-bottom: 0.005rem solid #eee;
    padding-left: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.require .hid .popright{
	width:2rem;
	height:2rem;
	background:red;
}
.require .form-textarea{
	display: inline-block;
    width: 100%;
    background: #f2f2f2;
    border: none;
    resize: none;
    margin-top: 0.05rem;
    box-sizing: border-box;
    height: 0.65rem;
    padding: 0.04rem 0.08rem;
    margin-bottom: -0.03rem;
    font-size: 0.12rem;
    border-radius: 0.05rem;
}
.require .form-login-box{
	margin-top: 0.05rem;
}
.require .form-login-box .left{
	display:inline-block;
	width:50%;
}
.require .form-login-box .left .linput{
	height: 0.3rem;
    background: #f2f2f2;
    width: 100%;
    padding: 0 0.08rem;
    box-sizing: border-box;
    border-radius: 0.05rem;
    font-size:0.12rem;
}
.require .form-login-box .right{
	width:50%;
	float:right;
    height: 0.3rem;
    background: #f2f2f2;
    border-radius: 0.05rem;
}
.require .form-login-box .right .form-code{
	height: 0.15rem;
    background: #f2f2f2;
    width: 55%;
    padding: 0 0.08rem;
    box-sizing: border-box;
    border-top-left-radius: 0.05rem;
    border-bottom-left-radius: 0.05rem;
    border-right: 0.01rem solid #ccc;
    vertical-align: middle;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.require .form-login-box .right button{
	height: 0.3rem;
    background: #f2f2f2;
    width: 42%;
    padding: 0 0.06rem;
    box-sizing: border-box;
    color: #ff6900;
    border-top-right-radius: 0.05rem;
    border-bottom-right-radius: 0.05rem;
    font-size: 0.12rem;
    vertical-align: middle;
}
.require .bottom-button{
	width: 100%;
    color: #fff;
    background: #ff6900;
    height: 0.33rem;
    border-radius: 0.05rem;
    margin-top: 0.1rem;
    line-height: 0.33rem;
    font-size: 0.14rem;
}
</style>