<template>
	<div>
	<home-header></home-header>
	<home-swiper></home-swiper>
	<home-icon></home-icon>
	<home-recommend></home-recommend>
	</div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper"
import HomeIcon from "./components/Icons"
import HomeRecommend from "./components/Recommend"
export default {
		name:"Home",
		components:{
			HomeHeader,
            HomeSwiper,
            HomeIcon,
            HomeRecommend
		}
	}
</script>

<style >
</style>