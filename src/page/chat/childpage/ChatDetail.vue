<template>
     <div class="wrap">
        <header class="top">
            <span class='fl'><img src="../../../../public/imgs/ios/images/WindChat/arr_03.png" /></span>
            <p class="title">{{dataSorce.name}}</p>
            <span class='fr'><img src="../../../../public/imgs/ios/images/WindChat/share@2x.png" class="head-right-img"/></span>
        </header>
          <app-content :moduleBoom='true'>
              <div class="contentModule">
                <h1 class="windstr_bar">{{dataSorce.name}}</h1>
                <p class="windstr_title"><span class="windstr_name">{{dataSorce.author}}</span>
                <span class="windstr_time">{{dataSorce.time}}</span></p>
                <div class="mainbody">
                    <img class="windstr_banner" :src="dataSorce.bannerimgUrl"/>
                    <p class="windstr_main">{{dataSorce.mainA}}</p>
                    <img class="windstr_illuimg" :src="dataSorce.illuimgUrl"/>
                    <p class="windstr_main">{{dataSorce.mainB}}</p>
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
            console.log(this.dataSorce)
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
.top .title{
    height: 0.44rem;
    position: absolute;
    top:0;
    left:0.44rem;
    right:0.44rem;
    text-align: center;
    color: #333333;;
    font-size: 0.15rem;
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

.windstr_bar{
    font-size: 0.18rem;
    color: #333333;
}
.windstr_title{
    margin-top:0.11rem;
    margin-bottom:0.12rem
}
.windstr_name{
    font-size: 0.12rem;
    color: #F5A623;
    padding-right: 0.11rem
}
.windstr_time{
    font-size: 0.12rem;
    color: #666666;
}
.windstr_main{
    font-size: 0.13rem;
    color: #666666;
    line-height: 0.195rem;
    margin-top: 0.16rem;
    text-indent:2em
}
.windstr_illuimg{
    width: 100%;
    height:1.6rem;
    margin-top: 0.16rem
}
</style>
