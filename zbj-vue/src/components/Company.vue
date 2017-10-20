<template>
	<div class="clearfix">
		<div class="clearfix-c">
			<span class="left"></span>
				我要创办公司
			<span class="right"></span>
		</div>
		<div class="clearfix-second">
			<a href="#" class="l"><img src="../assets/1.jpg"></a>
			<a href="#" class="r"><img src="../assets/2.png"></a>
		</div>
		<ul>
			<li><a href="">公司起名</a></li>
			<li><a href="" style="color:#f60">LOGO设计</a></li>
			<li><a href="">代理记账</a></li>
			<li><a href="">商标购买</a></li>
		</ul>
		<ul>
			<li><a href="">经营贷款</a></li>
			<li><a href="">政府扶持宝</a></li>
			<li><a href="">免费合同</a></li>
			<li><a href="">办公室设计</a></li>
		</ul>
		<div class="clear-both"></div>
	</div>
</template>
<script>
	export default{
		name:'company'
	}
</script>
<style>
	.clearfix{
		text-align:center;
		border-bottom: 0.01rem solid #eee;
	}
	.clearfix-c{
		height:0.4rem;
		line-height:0.4rem;
		display:block;
		position:relative;
		font-size:0.16rem;
	}
	.clearfix .left{
		width:0.14rem;
		height:0.02rem;
		background:#ccc;
		position:absolute;
		top:0.19rem;
		left:0.8rem;
	}
	.clearfix .right{
		width:0.14rem;
		height:0.02rem;
		background:#ccc;
		position:absolute;
		top:0.19rem;
		right:0.8rem;
	}
	.clearfix .clearfix-second{
		display:flex;
	}
	.clearfix .clearfix-second a:nth-of-type(1){
		display:inline-block;
		width:50%;
    	border-right: 0.01rem solid #eee;
	}
	.clearfix .clearfix-second a:nth-of-type(2){
		width:50%;
	}
	img{
		max-width: 100%;
		display:block;
	}
	.clearfix ul{
		display:flex;
	}
	.clearfix ul:nth-of-type(2){
		border-bottom:0.01rem solid #eee;
	}
	.clearfix ul li{
		width:25%;
		float:left;
		height:0.45rem;
		line-height:0.45rem;
		list-style:none;
		border-right: 0.01rem solid #eee;
    border-top: 0.01rem solid #eee;
	}
	.clearfix ul li a{
		font-size: 0.13rem;
    	color: #484848;
    	display: block;
	}
	.clearfix .clear-both{
		clear:both;
		 height: 0; 
		 line-height: 0; 
		 font-size: 0
	}
</style>