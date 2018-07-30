<template>
<div id="app">
    <mine-header title="我的收藏" showBackground = "#fff"></mine-header>
    <div class="default">
        <img src="../../../../public/imgs/ios/images/Mine/10@2x.png" class="defaultImg">
        <p class="defaultTitle">暂无收藏</p>
        <p class="defaultContent">快去收藏吧！</p>
    </div>
</div>
</template>

<script>
import mineHeader from '../MineHeader.vue'
export default {
    components:{
        mineHeader
    }
}
</script>

<style scoped>
#app{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #f5f5f5;
    z-index: 1;
}
.default{
    width: 100%;
    position: absolute;
    top: 2.45rem;
    text-align: center;
}
.defaultImg{
    display: inline-block;
}
.defaultTitle{
    margin-top:0.15rem;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #666666; 
    line-height: 0.22rem;
}
.defaultContent{
    font-family: PingFangSC-Regular;
    font-size: 11px;
    color: #979797;
}
</style>
