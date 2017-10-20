<template>
	<div class="content">
		<div class="talents-major">
			<div class="major-header">
				<div class="major-header-top">
				<span class="left"></span>
				按专业找人才
				<span class="right"></span>
				</div>
			</div>
		</div>
		<div class="swiper-wrapper">
			<ul>
				<li>
					<router-link to="/Music">
						<img src="../assets/pic1.png">
						<p>企业服务</p>
					</router-link>
				</li>
				<li>
					<a href="javascript:">
						<img src="../assets/pic2.png">
						<p>品牌设计</p>
					</a>
				</li>
				<li>
					<a href="javascript:">
						<img src="../assets/pic3.png">
						<p>软件开发</p>
					</a>
				</li>
				<li>
					<a href="javascript:">
						<img src="../assets/pic4.png">
						<p>企业营销</p>
					</a>
				</li>
				<li>
					<a href="javascript:">
						<img src="../assets/pic5.png">
						<p>电商服务</p>
					</a>
				</li>
				<li>
					<a href="javascript:">
						<img src="../assets/pic6.png">
						<p>游戏</p>
					</a>
				</li>
				<li>
					<a href="javascript:">
						<img src="../assets/pic7.png">
						<p>动画动漫</p>
					</a>
				</li>
				<li>
					<a href="javascript:">
						<img src="../assets/pic8.png">
						<p>装修服务</p>
					</a>
				</li>
				<li>
					<a href="javascript:">
						<img src="../assets/pic9.png">
						<p>网站建设</p>
					</a>
				</li>
				<li>
					<a href="javascript:">
						<img src="../assets/pic10.png">
						<p>全部分类</p>
					</a>
				</li>
			</ul>
		</div>
		<require></require>
	</div>
</template>
<script>
	 export default {
  name: 'contentt',
}
</script>
<style>
	#app .content .talents-major .major-header{
    border: none;
    height: 0.28rem;
    text-align: center;
    position: relative;
	}
	#app .content .talents-major .major-header .major-header-top{
	/*display: inline-block;*/
    position: relative;
    font-size: 0.15rem;
    height: 0.4rem;
    line-height: 0.4rem;
    color: #333;
	}
	#app .content .talents-major .major-header .left{
    display: block;
    position: absolute;
    width: 0.14rem;
    height: 0.02rem;
    background: #ccc;
    top: 0.19rem;
    left:0.8rem;
	}
	#app .content .talents-major .major-header .right{
		    display: block;
    position: absolute;
    width: 0.14rem;
    height: 0.02rem;
    background: #ccc;
    top: 0.19rem;
    right:0.8rem;
	}
	#app .content .swiper-wrapper{
		position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    
	}
	#app .content .swiper-wrapper ul{
		display: block;
	}
	#app .content .swiper-wrapper ul li{
		width: 20%;
		float: left;
    	height:0.88rem;
    	list-style: none;
	}
	#app .content .swiper-wrapper ul li a{
		    text-align: center;
    width: 100%;
    display: block;
    position: relative;
	}
	#app .content .swiper-wrapper ul li a img{
    top: inherit;
    width: 0.5rem;
    height: 0.5rem;
    margin: 0.1rem auto 0 auto;
	}
	#app .content .swiper-wrapper ul li a p{
		font-size:0.12rem;
		color:#333333;
	}
	#app .content .swiper-wrapper ul::before{
		    display: table;
    content: "";
    line-height: 0;
	}
	#app .content .swiper-wrapper ul::after{
		    display: table;
    content: "";
    line-height: 0;
    clear:both;
	}
</style>