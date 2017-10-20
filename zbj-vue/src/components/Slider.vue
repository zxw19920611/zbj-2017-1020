<template>
	
		<mt-swipe :auto="4000"  class="lunbo">
		  <mt-swipe-item><a href="#"><img src="http://homesiteres.zbjimg.com/homesite%2Fres%2Fbanner%E6%A8%A1%E7%89%881.jpg%2Forigine%2Feadeb92e-1b8d-4179-9bd4-3b1ef114de83"></a></mt-swipe-item>
		  <mt-swipe-item><a href="#"><img src="http://homesiteres.zbjimg.com/homesite%2Fres%2Fbanner%E6%A8%A1%E7%89%881.jpg%2Forigine%2Feadeb92e-1b8d-4179-9bd4-3b1ef114de83"></a></mt-swipe-item>
		  <mt-swipe-item><a href="#"><img src="http://homesiteres.zbjimg.com/homesite%2Fres%2Fbanner%E6%A8%A1%E7%89%881.jpg%2Forigine%2Feadeb92e-1b8d-4179-9bd4-3b1ef114de83"></a></mt-swipe-item>
		  <mt-swipe-item><a href="#"><img src="http://homesiteres.zbjimg.com/homesite%2Fres%2Fbanner%E6%A8%A1%E7%89%881.jpg%2Forigine%2Feadeb92e-1b8d-4179-9bd4-3b1ef114de83"></a></mt-swipe-item>
		</mt-swipe>
</template>
<script>
	export default{
		name:'sliderr'
	}
</script>
<style>
	.lunbo{
		height:0.88rem;
	}
	.lunbo a img{
		position:absolute;
		height:100%;
		display:block;
		top:0;
		left:0;

		width:100%;
	}
	.mint-swipe-indicators{
		bottom:0.05rem;
	}
</style>