<template>
	<div>
		<div class="detail-top">
			<div class="top-bar">
				<img src="https://y.gtimg.cn/mediastyle/mod/mobile/img/logo.svg?max_age=2592000">
				<div>
					<h6>QQ音乐</h6>
					<p>打开APP收藏,下载</p>
				</div>
			</div>
			<div class="contant-bar">
				<div class="contant">
					<img :src="list.pic_album">
				</div>
			
			</div>
			<div class="play">
				<a href="#">播放</a>
			</div>
		</div>
		<img :src="list.pic_album" class="bg">
		
		<ul>
			<li v-for="(item,index) in listt.slice(0,11)">
				<a href="">
					<span>{{index+1}}</span>
					<div>					
						<h3>{{item.data.songname}}</h3>
						<p v-for="item1 in item.data.singer">{{item1.name}}</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios';
	export default{
	name:'detail',
	data(){
		return{
			list:[],
			listt:[],
		}
	},
	mounted:function(){
		// console.log(this.$route.params.id);
		var that = this;
		axios.get(`/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=${this.$route.params.id}&_=1508311097300`)
		.then(function(res){
			// console.log(res)
			that.list = res.data.topinfo;
			that.listt = res.data.songlist
			console.log(that.listt)
			// console.log(that.listtt)

		})
	}
	}
</script>
<style scoped>
	.play{
		padding: 0 0.16rem;
		text-align:center;
		display:flex;
	}
	.play a{
    margin:0.20rem 0.56rem;
    width: 1.7rem;
    height: 0.4rem;
    line-height:0.4rem;
    overflow: hidden;
    text-align: center;
    font-size: 0.16rem;
    color: #fff;
    border-radius: 0.2rem;
    background: #31c27c;
    display:inline-block;
	}
	.bg{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 2.6rem;
    object-fit: cover;
    -webkit-transform: scale(1.1) translateZ(0);
    -webkit-filter: blur(1.5rem);
	}
	.detail-top{
		    background: rgba(0,0,0,.5);
		    height:2.6rem;
	}
	.top-bar{
		    padding: 0 0.16rem 0 0.14rem;
		    height:0.38rem;
		    background:rgba(0,0,0,.2);;
		}
	.top-bar img{
		width:0.36rem;
		display:block;
		float:left;
	}
	.top-bar div{
		color:#fff;
		font-size:0.14rem;
		float:left;
	}
/*	.contant-bar img{
		width:0.4rem;
		display:block;
	}*/
	.contant{
/*	-webkit-box-pack: center;
    -webkit-box-align: center;
    -webkit-box-sizing: border-box;*/
    height:1.25rem;
    width: 100%;
    margin-top: 17px;
    padding: 0 16px;
    overflow: hidden;
	}
	.contant img{
		width:1.25rem;
		height:1.25rem;
	}
	li{
		width:100%;
		/*height:0.4rem;*/
		/*background:rgb(85, 1, 1);*/
		list-style:none;
		font-size:0.12rem;
	}
	li a{
		display:inline-block;
		padding-left:0.15rem;
		/*color:yellow;*/
	}
	li a span{
		display:inline-block;
		height:0.4rem;
		line-height:0.4rem;
		margin-right:0.15rem;
		float:left;
		color:#FF400B;
	}
	li a div{
		float:left;
		height:0.4rem;
	}
	li a h3{
		display:block;
		margin-top:0.08rem;
		font-weight:300;
		color:#000;
	}
	li a p{
		display:inline-block;
	}
	li a p{
		color:#777;
	}

</style>
