<template>
	<div class="search">
		<div class="search-top">
		<span @click="back()"><</span>
		<input type="text" placeholder="搜索服务和店铺" v-model="music">
		<router-link @click="search()" to="/" style="width:0.8rem">搜索</router-link>
		</div> 
		<div class="search-contant">
			<h2>热门搜索</h2>
			<a href="">写死的</a>
		</div>
	</div>
</template>
<script scoped>
import axios from 'axios';
	export default{
		name:'search',
		data(){
			return{
				list:[]
			}
		},
		methods:{
			search:function(){

			}
		}
	}
</script>
<style scoped>
	.play{
		display:flex;
	}
	.search{
		background:#eee;
		position:fixed;
	}
	span{
		display:inline-block;
		font-size:0.13rem;
		width:0.4rem;
		height:0.4rem;
		line-height:0.4rem;
		text-align:center;
	}
	.search-top{
    display:flex;
    background:#fff;
	}
	.search-contant{
    padding: 0.2rem 0.15rem;
    height:7rem;
    color: #484848;
    background:#eee;
	}
	.search-contant h2{
font-size: 0.14rem;
	}
	input{

	width: 100%;
    margin-top:0.08rem;
    margin-right:0.3rem;
    padding-left:0.3rem;
    font-size: 0.13rem;
    color: #484848;
    background-color: #eee;
    border-radius: 0.16rem;
    box-sizing: border-box;
	height:0.26rem;
	line-height:0.26rem;
	}
	h2{
		    color: #868686;
    line-height: 0.25rem;
    margin-bottom: 0.1rem;
	}
	a{
		font-size:0.12rem;
		    display: block;
    float: left;
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
    background: #fff;

	}
	a{
		    padding: 0 12px;
    background: #fff;
    height: 37px;
    line-height: 38px;
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 10px;
    color: #333;
    text-align: center;
    cursor: pointer;
	}
</style>