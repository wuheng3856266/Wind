<template>
    <div>
        <div class="wrap">
            <header class="top">
                <span><img src="../../../public/imgs/ios/images/IndexImg/Group Copy 26@2x.png" /></span>
            </header>
            <app-content :module='true' ref="banner" class="mode">
                <div class="banner">
                    <img src="../../../public/imgs/maximg/life/VCG21gic16878362.png" />
                </div>
                <ul class="contain">
                    <li v-for="(item,index) in containList" :key="index" @click="goDetail(item)">
                        <img :src='item.imgUrl' />
                        <span class="containtitle">{{item.title}}</span>
                    </li>
                </ul>
                
           
                <!-- <swiper>
                    <swiper-item>
                        
                    </swiper-item>
                </swiper>-->
                <service/> 
              
            </app-content> 
         </div>
         <router-view></router-view>
    </div>
</template>

<script>
import service from '../../components/service/evaluate.vue'
import {getservicepage} from '../../srequest/servicepage.js'
export default {
    components:{
        service
    },
    data(){
        return{
           containList:[
               {title:"搬家",imgUrl:"imgs/maximg/life/VCG2141c695bcc.png",path:"/service/movehome"},
{title:"保洁",imgUrl:"imgs/maximg/life/VCG21cefcad91b.png",path:"/service/clean"},
{title:"维修",imgUrl:"imgs/maximg/life/VCG21642d7a097.png",path:"/service/maintain"} 
           ]
        }
    },
    methods:{
        goDetail(item){
            this.$router.push(item.path)
        }
    },
    // mounted(){
    //         getservicepage().then(
    //             (value)=>{
    //                 console.log(value)
    //             }
    //         )
    // }
}
</script>

<style scoped>

.top{
    position: absolute;
    top:0;
    width:100%;
    height:0.44rem;
    background: rgba(255, 255, 255, 0.5);
    z-index: 1
}
.top>span{
   height:0.44rem;
   display: block;
   line-height: 0.6rem;
}
.top>span>img{
    margin-left: 0.2rem;
    display: inline-block
}
.banner{
    width:100%
}
.banner>img{
    width:100%
}
.contain{
    display: flex;
    background: #fff;
    padding-top: 0.35rem
}
.contain li{
    flex: 1;
    position: relative;
    text-align: center
}
.contain>li>img{
    width:1.01rem;
    height:1.1rem;
    display: inline-block;
}
.containtitle{
    font-size: 0.15rem;
    color:#F9B371;
    font-family: PingFangSC-Regular;
    position: absolute;
    top:0.13rem;
    left:0.05rem
}
</style>
