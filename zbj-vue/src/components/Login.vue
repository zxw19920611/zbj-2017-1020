<template>
	<div class="login">
		<div class="head">账户登录</div>
		<div>username：<input type="text" name="" placeholder="请输入账号" v-model="account"></div>
		<div>password：<input type="text" name="" placeholder="请输入密码" v-model="password"></div>	

		<button  class="button" @click="login">登录</button>

		
		<router-link to="/">返回主页</router-link>	
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
		name:'login',
		data(){
			return{
				account:'',
				password:''
			}
		},
		methods:{
			login:function(){
				let params = { 
              account : this.account,
              password : this.password
            };
            axios.post('/api/login/loginAccount', params)
            .then(function(res){
            	if(res.data){
            		location.href='/'
            	}else{
            		alert('用户名或密码错误')
            	}
            })       
			}
		}

	}

</script>	
<style>
	.login{
		font-size:0.12rem;
		background:#eee;
		height:5.7rem;
	}
	.login .head{
		height:0.44rem;
		line-height: 0.44rem;
		background:#f7f7f8;
		font-size:0.14rem;
		text-align: center;
		border-bottom:0.01rem solid #dedede;
	}
	.login .button{
		display: block;
		width:2.8rem;
		height:0.33rem;
		line-height: 0.33rem;
		background:#ff0036;
		color:#fff;
		font-size:0.14rem;
		text-align: center;
		margin-left: 0.2rem;
		margin-bottom:0.2rem;
	}
	.login div{
			height:0.44rem;
			line-height:0.44rem;
			font-size:0.12rem;
	}
	.login a{
		text-decoration: none;
		padding: 0 0.2rem;
	}
</style>		
