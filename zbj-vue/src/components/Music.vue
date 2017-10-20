<template>
	<div class="music">
		<nav>
			<h2>排行榜</h2>
		</nav>
	<div class="ul">
		<router-link :to="{name:'Detail', params: {id:item.id}}" v-for="item in list" :key="item.picUrl">
				<div class="l">
				<img :src="item.picUrl">
				</div>
				<div class="r">
					<!-- <h3>{{item.songList}}</h3> -->
					<h3>{{item.topTitle}}</h3>

					<p v-for="item1 in item.songList ">
					<!-- 	{{index}} -->
						<span>{{item1.songname}}-{{item1.singername}}</span>
					</p>
				</div>
		</router-link>
	</div>

	</div>

</template>
<script>
import axios from 'axios';
	export default{
		name:'music',
		data(){
			return{
			list:[],
			listt:[]
			}
		},mounted(){
      this.getData()},
    methods: {
      getData: function() {
        var that = this;
        axios.get('/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1508256911059')
          .then(function (response) {
            // console.log(response);
            that.list = response.data.data.topList;
            // console.log(that.list)
            // console.log(list.id)
            // console.log(that.list)
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
	}
</script>
<style>
	.music{
		background:#f4f4f4;
	}
	nav{
		background: #fff;
		text-align:center;
	}
	h2{
		font-size:0.16rem;
	}
	.ul{
		margin: 0.1rem
	}
	.ul a{
		display:block;
		margin-top: 0.1rem;
		overflow:hidden;
		background:#ffffff;
	}
/*	ul li a{
		float:left;
	}*/
	.ul a img{
		width:1rem;
		height:1rem;
		display:block;
	}
	.ul .r{
		float:left;
		margin: 0 0.05rem 0 0.11rem;
		width:1.5rem;
	}
	.ul .r p span{
		color: #000;
	    margin-left: 0.06rem;
	    margin-right: 0.04rem;
	    width:1.5rem;
	}
	.ul .l{
		float:left;
	}
	.ul a h3{
		font-size:0.16rem;
		margin-bottom: 0.05rem;
		color: #000;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-weight: normal;
	}
	.ul a p{
		font-size: 0.14rem;
	    color: #000;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
</style>