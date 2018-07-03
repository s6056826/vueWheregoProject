<template>
<div class="wrapper">
	<div class="recommend-title">热销推荐</div>
	 <ul>
	 	<li class="recommend-item border-bottom">
	 		<img class="recommend-img" src="http://img1.qunarzz.com/sight/p0/1707/a3/a3924161475dee37a3.img.jpg_200x200_5ba00364.jpg">
	 		<div class="recommend-content">
	 			<p>青岛海昌极地海洋世界</p>
	 		</div>
	 	</li>
	 </ul>
</div>
</template>

<script>
export default {

  name: 'HomeRecommend',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>


.wrapper{
	width: 100%;
}

.recommend-title{
	background-color: #eee;
	line-height: 30px;
	text-indent: 20px;
}
.recommend-item{
display: flex;
height: 2.3rem;
}
.recommend-img{
	height:99px;
	width:101px;
	padding: 5px 5px;
}

ui li{
	list-style: none;
}
</style>