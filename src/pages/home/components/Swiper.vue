<template>
	<div class="wrapper">
	<swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1806/a1/e645466a5a1c9a02.jpg_750x200_9c489fbd.jpg"></swiper-slide>
    <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1804/22/0e335ab3af3e3f02.jpg_750x200_cf284e05.jpg"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {

  name: 'HomeSwiper',
  data () {
      return {
      	swiperOption:{
      		loop:true,
      		pagination:'.swiper-pagination',
            autoplay:5000
      	}
      }
  	
  }
}
</script>

<style lang="css" scoped>
  .swiper-img{
  	width: 100%;
  }
  .wrapper{
  	width: 100%;
  	height: 0;
  	padding-bottom: 27.2%;
  	background-color: rgb(240,240,240);
  }
  .swiper-pagination-bullets >>> .swiper-pagination-bullet-active{
  	background-color: #fff;
  }
</style>