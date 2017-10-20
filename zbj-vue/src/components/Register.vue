<template>
	<div class="register">
<!-- 		<input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="account">  
		<input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password">  --> 
    <input  placeholder="请输入账号" v-model="account">
    <input  placeholder="请输入密码" v-model="password">
		<button type="submit" class="btn btn-default" @click="register">登录</button>  
	</div>
</template>
<script type="text/javascript">
import axios from 'axios';
	  export default {  
	name:'register',
    data() {
        return {
            account : '',
            password : ''
        }
    },
  methods:{
    register:function(){
       let params = { 
              account : this.account,
              password : this.password
            };        
         axios.post('/api/login/createAccount', params)
                  .then(function (response) {
                    if(response.data){
                      alert(1)
                    }else{
                      alert(2)
                    }
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                }
             }
            }  
  
</script>
<style>
.register{
  text-align:center;
}
	input{
    display:block;
    width:2.8rem;
    height:0.3rem;
    font-size:0.14rem;
    border:1px solid #ccc;
    margin-left:0.2rem;
    margin-top:0.4rem;
  }
  button{
    width:0.8rem;
    height:0.5rem;
    line-height:0.5rem;
    text-align:center;
  }
</style>