<template>
	<div class="formation-header">
		<div class="formation-c">
			<span class="left"></span>
				我要创办公司
			<span class="right"></span>
		</div>
	<ul class="formation-ul">
<!-- 		<li class="item" v-for="item in list.slice(0,9)">
			<a href="#">
				<div class="server-logo"><img :src="item.imgUrl"></div>
				
			</a>
		</li> -->
	</ul>
	</div>

</template>
<script>
import axios from 'axios';
	export default{
		name:'formation',
		data: function () {
      return {
        list:[],
      }
    },mounted(){
      this.getData()},
    methods: {
      getData: function() {
        var that = this;

        axios.get('/shunt/favorite?size=50')
          .then(function (response) {
            // console.log(response);
            that.list = response.data.data.list;
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
	html{
		font-size:100px;
	}
	ul.formation-ul li{
		padding: 0.15rem;
    	border-bottom: 0.01rem solid #eee;
    	display:block;
	}
	ul.formation-ul li a{
		background:red;
		display:block;
	}
	ul.formation-ul li a .server-logo img{
	height: 0.85rem;
    width: 0.85rem;
    padding-right: 0.1rem;
	}

	.formation-header{
		height:0.4rem;
		line-height:0.4rem;
		text-align:center;
		border-top:0.1rem solid #eee;;
	}
	.formation-c{
		display:block;
		position:relative;
		font-size:0.16rem;
	}
	.formation-header .left{
		width:0.14rem;
		height:0.02rem;
		background:#ccc;
		position:absolute;
		top:0.19rem;
		left:0.8rem;
	}
	.formation-header .right{
		width:0.14rem;
		height:0.02rem;
		background:#ccc;
		position:absolute;
		top:0.19rem;
		right:0.8rem;
	}
	.server-logo{
		height:0.85rem;
	}
</style>
