<template>
     <div class="wrap">
        <header class="top">
            <span class='fl'><img src="../../../../public/imgs/ios/images/WindChat/arr_03.png" /></span>
            <p class="title">{{dataSorce.name}}</p>
            <span class='fr'><img src="../../../../public/imgs/ios/images/WindChat/share@2x.png" class="head-right-img"/></span>
        </header>
          <app-content :moduleBoom='true'>
              <div class="contentModule">
                  <div class="News">
                      <p class="News_title">来源:<span>{{dataSorce.author}}</span> <span>{{dataSorce.time}}</span></p>
                      <p>7月的楼市延续了6月的热情，成交量和入市楼盘都想对比较活跃，其中网红三期更是引起市场抢购热潮，成为深圳楼市的一大看点，6月全市新房住宅成交2700套，环比增加5.5%。成交均价4221元/平，比上月跌了18元/平，也是深八条之后21连跌。</p>
                      <img src="../../../../public/imgs/maximg/chat/banner_03.png"/>
                  </div>
              </div>
          </app-content>
    </div>
</template>

<script>
import {getStoryList} from '../../../srequest/servicepage.js'
export default {
    data(){
        return{
            dataSorce:[]
        }
    },
    mounted(){
        getStoryList().then((value)=>{
            this.dataSorce = value[0]
        })
    }
}
</script>

<style scoped>
.head-right-img{
    width:0.22rem;
}
.top{
    position: absolute;
    top:0;
    width:100%;
    height:0.44rem;
    background:#fff;
    z-index: 2;
    border-bottom: 1px solid #f5f5f5
}
.top>span{
   height:0.44rem;
   display: block;
   line-height: 0.6rem;
   width:0.44rem;
    margin-left: 0.2rem;
}
.top>span>img{
   
    display: inline-block
}
.title{
    height: 0.44rem;
    position: absolute;
    top:0;
    left:0.44rem;
    right:0.44rem;
    text-align: center;
    color: #333333;;
    font-size: 0.18rem;
    line-height: 0.44rem;
    font-family: PingFangSC-Medium;
}
.contentModule{
    background: #fff;
    padding: 0.15rem
}
.fr{
    float: right
}
.fl{
    float: left;
}
.News_title{
    font-size: 0.11rem;
    color: #CDCDCD;
}
</style>
