<template>
<div>
	<div class="header">
			<div class="header-left"><div class="iconfont">&#xe624;</div></div>
			<div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
	        <div class="header-right">城市<span class="iconfont icon-size ">&#xe61f;</span></div>
	</div>

</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped>
  .header{
  	display: flex;
  	background: #00bcd4;
  	height: .64rem;
  	color: #fff;
  	vertical-align:middle;
  	line-height: 30px
  }

  .header-left{
      width: 40px;
      float: left;
      text-align: center;
      font-size: 20px;
     
  }
  .header-input{
     flex: 1;
     background: #fff;
     border-radius: 8px;
     margin-top: 3px;
     margin-bottom: 3px;
     color: #ccc;
     padding-left: 10px;
  }
  .header-right{
  	float: right;
  	width: 50px;
  	text-align: center;
  }
  .icon-size{
  	font-size: 12px;
  }
</style>