<template>
    <div class="wrap">
            <header class="top">
                <span><img :src="topicon" /></span>
            </header>
            <app-content :module='true' class="content">
                <div class="banner">
                    <img :src="bannerimg" />
                </div>
                <div class="title">
                    <div class="title-head">
                        <h1 class="title-head-name">卧室保洁</h1>
                        <p class="title-head-info">为友家如风客提供卧室内表面清洁、床铺整理及物品归纳整理。</p>
                        <p class="title-head-price">50 <span class="unit">元/小时</span></p>
                    </div>
                    <div class="title-body">
                        <h2 class="title-body-name">说明</h2>
                        <p class="title-body-title">按小时收费，若是及所需清洁时长超过预约时长，请与保洁员沟通增加预约时间；</p>

                        <p class="title-body-title">室外玻璃、天花板及附属物、做饭洗衣服等不在服务范围内；</p>

                        <p class="title-body-title">保洁前请收好个人贵重物品，请提前告知不可触碰物品，保洁员不会在未经允许的情况下触碰您的贵重及隐私物品；</p>

                        <p class="title-body-title">服务范围 : 深圳全区。</p>
                    </div>
                </div>
                
                
            </app-content> 
                <div class="btn">
                    立即预约
                </div>
         </div>
</template>

<script>
export default {
    data(){
        return{
            topicon:'imgs/ios/images/IndexImg/Group Copy 26@2x.png',
            bannerimg:'imgs/maximg/life/VCG21e16ff44fe.png',
        }
    }
}
</script>

<style scoped>
.banner>img{
    width:100%  
}
.title{
    padding:0 0.16rem
}
.unit{
    font-size: 0.14rem;
}
.title-head{
    padding:0.2rem 0 0.2rem 0;
    border-bottom:1px solid #e5e5e5;
    position: relative;
}
.title-head-name{
    font-size: 0.24rem;
    color: #F9B371;
    margin-bottom: 0.2rem
}
.title-head-info{
    font-size: 0.15rem;
    color: #666666;
}
.title-head-price{
    font-size: 0.18rem;
    color: #F9B371;
    position: absolute;
    top:0.25rem;
    right:0.1rem
}
.title-body{
    padding:0.21rem 0 0.19rem 0
}
.title-body-name{
    font-size: 0.18rem;
    color: #333333;
    margin-bottom: 0.2rem
}
.title-body-title{
    font-size: 0.15rem;
    color: #666666;
    margin-bottom: 0.29rem
}
.btn{
    width:100%;
    height:0.5rem;
    background: #f9b371;
    text-align: center;
    position: absolute;
    bottom: 0;
    z-index:1;
    font-size: 0.18rem;
    color: #FFFFFF;
    line-height: 0.5rem
}
</style>
