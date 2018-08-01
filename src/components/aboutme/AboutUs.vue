<template>
<div id="aboutUs">
    <mine-header title="关于我们" showBackground="#F9B371"></mine-header>
    <img src="../../../public/imgs/logo/logo font@2x.png" class="aboutUsLogo">
    <p class="aboutUsContent">如风是一款提供高品质公寓和平价房源托管和租后服务的app，网上预约，线下看房，品质保证，入住无忧！</p>
</div>
</template>

<script>
import mineHeader from './MineHeader.vue'
export default {
    components:{
       mineHeader 
    }
}
</script>

<style scoped>
#aboutUs{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #f5f5f5;
    z-index: 1;
}
.aboutUsLogo{
    width: 1.8rem;
    height: 1.18rem;
    position: absolute;
    top: 1.67rem;
    left: 0.98rem;
}
.aboutUsContent{
    width: 3.45rem;
    position: absolute;
    top: 4.29rem;
    left: 0.17rem;
    font-family: PingFangSC-Regular;
    font-size: 0.15rem;
    color: #333333;
    line-height: 0.21rem
}
</style>
