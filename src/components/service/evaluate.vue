<template>
    <div class="eva">
        <p class="evaHeader">客户评价</p>
        <swiper class='wrap'>
            <swiper-item v-for="(item,index) in eval" :key="index" class="swiperitem">
                <div class="evaItem">
                    <div class="via fl"><img :src="item.viaImg"/></div>
                    <div class="title fl">
                        <p class="username">{{item.vianName}}<span class="usericon">如风用户</span></p>
                        <p><span class="userpr">如风保洁</span></p>
                        <p class="viaEval">{{item.viaEval}}</p>
                        <ul class="titleList">
                            <li>
                                <img :src="item.viaEvalImg[0]"/>
                            </li>
                            <li>
                                <img :src="item.viaEvalImg[1]"/>
                            </li>
                            <li>
                                <img :src="item.viaEvalImg[2]"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </swiper-item>
        </swiper>

            

    </div>
    

</template>

<script>
import Swiper from './Swiper.vue'
import SwiperItem from './SwiperItem.vue'
export default {
    components:{
        Swiper,
        SwiperItem
    },
    data(){
        return{
            eval:[
                {
                    viaImg:'imgs/maximg/life/u=4063123173,3853528551&fm=27&gp=0.png',
                    vianName:'钟阿姨',
                    viaEval:'保洁员的服务非常满意，有条不紊，工具都是统一，这点特别棒',
                    viaEvalImg:['imgs/maximg/life/via1.png',
                    'imgs/maximg/life/via2.png',
                    'imgs/maximg/life/via3.png']
                },
                {
                    viaImg:'imgs/maximg/life/u=1082688037,2137646686&fm=27&gp=0.png',
                    vianName:'李先生',
                    viaEval:'保洁员的服务非常满意，有条不紊，工具都是统一，这点特别棒',
                    viaEvalImg:['imgs/maximg/life/via4.png',
                    'imgs/maximg/life/via1.png',
                    'imgs/maximg/life/via2.png']
                },
                {
                    viaImg:'imgs/maximg/life/u=4063123173,3853528551&fm=27&gp=0.png',
                    vianName:'钟阿姨',
                    viaEval:'保洁员的服务非常满意，有条不紊，工具都是统一，这点特别棒',
                    viaEvalImg:['imgs/maximg/life/via3.png',
                    'imgs/maximg/life/via1.png',
                    'imgs/maximg/life/via4.png']
                },
                {
                    viaImg:'imgs/maximg/life/u=4063123173,3853528551&fm=27&gp=0.png',
                    vianName:'钟阿姨',
                    viaEval:'保洁员的服务非常满意，有条不紊，工具都是统一，这点特别棒',
                    viaEvalImg:['imgs/maximg/life/via3.png',
                    'imgs/maximg/life/via1.png',
                    'imgs/maximg/life/via4.png']
                },
                {
                    viaImg:'imgs/maximg/life/u=4063123173,3853528551&fm=27&gp=0.png',
                    vianName:'钟阿姨',
                    viaEval:'保洁员的服务非常满意，有条不紊，工具都是统一，这点特别棒',
                    viaEvalImg:['imgs/maximg/life/via3.png',
                    'imgs/maximg/life/via1.png',
                    'imgs/maximg/life/via4.png']
                },
                {
                    viaImg:'imgs/maximg/life/u=4063123173,3853528551&fm=27&gp=0.png',
                    vianName:'钟阿姨',
                    viaEval:'保洁员的服务非常满意，有条不紊，工具都是统一，这点特别棒',
                    viaEvalImg:['imgs/maximg/life/via3.png',
                    'imgs/maximg/life/via1.png',
                    'imgs/maximg/life/via4.png']
                }
            ]
        }
    }
}
</script>

<style scoped>
.eva{
    background: #fff;
    padding-top:0.3rem;
    padding-left: 0.16rem
}
.evaHeader{
    padding-bottom: 0.25rem;
    font-size: 0.18rem;
    color: #333333;
}
.fl{
    float: left;
}
.wrap{
    width:2.65rem;
    left:-0.50rem;
    overflow: visible;
    padding-bottom: 0.2rem
}
.evaItem{
    width:2.65rem;
    overflow: hidden;
}
.viaEval{
    width: 1.8rem;
    margin-top: 0.2rem
}
.via>img{
    width:0.53rem;
    height:0.51rem
}
.via{
    margin-right: 0.04rem
}
.username{
    font-size: 0.15rem;
    color: #666666;
    margin-top: 0.02rem;
}
.usericon{
    font-size: 0.11rem;
    color: #CDCDCD;
    line-height: 0.2rem;
    margin-left: 0.04rem
}
.userpr{
    display: block;
    width:0.48rem;
    height:0.13rem;
    font-size: 0.1rem;
    color:#F9B371;
    border:1px solid #F9B371;
    text-align: center;
    margin-top: 0.10rem
}

.titleList{
    margin-top:0.1rem
}
.titleList>li{
    float: left;
    width:0.5rem;
    height:0.5rem;
    margin-right: 0.15rem
}
.titleList>li>img{
    width:100%
}
</style>
