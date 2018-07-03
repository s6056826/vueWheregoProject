<template>
    	<div class="icon-main">
    		<swiper :options="swiperOption">
    		<swiper-slide v-for="(page,index) in pages" :key="index">
	        <div v-for="item in page" class="icon-cell" :key="item.id">
		      <div>
		 	    <img class="icon-cell-img" height="55" width="55" :src="item.imgUrl">
		      </div>
		       <p class="icon-desc">{{item.text}}</p>
	       </div>
    		</swiper-slide>	
    		</swiper>
       </div>
</template>

<script>
export default {

  name: 'HomeIcon',

  data () {
    return {
        items:[
          {id:"0001",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",text:"景点门票"},
          {id:"0002",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",text:"自然风光"},
          {id:"0003",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",text:"夏日玩水"},
          {id:"0004",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",text:"动植物园"},
          {id:"0005",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",text:"景点门票"},
          {id:"0006",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",text:"自然风光"},
          {id:"0007",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",text:"夏日玩水"},
          {id:"0008",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",text:"动植物园"},
          {id:"0009",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",text:"游乐场"}
        ],
        swiperOption:{
      		loop:false,
      		autoplay:false
        }
     }
  },
  computed: {
    pages () {
      const pages=[];
      this.items.forEach((item,index)=>{
      	//获取页码
      	const page=Math.floor(index/8);
      	//判断该页是否数组没有初始化
      	if(!pages[page]){
      		pages[page]=[];
      	}
      	pages[page].push(item);
      })
      return pages;
    }
  }
}
</script>

<style lang="css" scoped>
.wrapper{
	width: 100%;
	height: 0;
	padding-bottom: 50%;;
}
.icon-main{

	width: 100%;
	height: 0;
	padding-bottom: 50%;
}
.icon-cell{
	width:25%;
	height:0;
	padding-bottom: 25%;
    position: relative;
    top: 0; 
    left: 0;
    display: block;
    float: left;
    text-align: center;
}
.icon-cell-img{
margin-top: 10px;
}
.icon-desc{
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
</style>