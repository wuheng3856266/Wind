<template>
   <div>
        <div class="wrap">
        <header class="top">
            <span class='fl'><img src="../../../public/imgs/ios/images/WindChat/arr_03.png" /></span>
            <p class="title">如风客故事</p>
            <span class='fr'><img src="../../../public/imgs/ios/images/WindChat/Combined Shape@2x.png" /></span>
        </header>
          <app-content :moduleBoom='true'>
              <div class="chat-news pding_16" @click='gooStoryDetail(dataObj)'>
                  <div class="chat-news-img fl">
                      <img :src="dataObj.imgUrl" class="img_240"/>
                  </div>
                  <div class="chat-news-title fr">
                      <div class="chat-news-title-head">
                          {{dataObj.name}}
                      </div>
                      <div class="chat-news-title-detail">
                          {{dataObj.storyDetail}}
                      </div>
                  </div>
              </div>
              <div class="chat-adv">
                  <img src='/imgs/maximg/chat/img1.png'/>
              </div>
              
              <ul class="chat-list">
                  <li class="pding_16 chat-list-item" v-for='(item,index) in dataListSorce' :key="index"
                    @click="gooNewsDetail">
                      <div class="chat-news-img fl">
                          <img :src='item.imgUrl' class="img_240"/>
                      </div>
                      <div class="chat-news-title fr">
                          <div class="chat-news-title-head">
                                {{item.name}}
                          </div>
                      </div>    
                  </li>
              </ul>
          </app-content>
    </div>
    <router-view></router-view>
   </div>
    
</template>

<script>
import {getStoryList} from '../../srequest/servicepage.js'
export default {
    data(){
        return {
            dataSorce:[],
            dataObj:{},
            dataListSorce:[]
        }
    },
    methods:{
        //跳转如风故事页面
        gooStoryDetail(item){
            this.$router.push({
                name:'windstory'
            })
        },

        //跳转如风新闻页面
        gooNewsDetail(){
            this.$router.push({
                name:'windsnews'
            })
        }
    },
    mounted(){
        getStoryList().then((value)=>{
            this.dataSorce = value
            this.dataObj = value[0]
            this.dataListSorce = value.splice(1)
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
    font-size: 0.18rem;
    line-height: 0.44rem;
    font-family: PingFangSC-Medium;
}
.fl{
    float: left;
}
.fr{
    float: right
}
.pding_16{
    padding:0.16rem
}
.img_240{
    width:1.2rem;
    height:0.9rem;
}
.chat-news{
    overflow: hidden;
    border-bottom: 1px solid #f5f5f5;
    background: #fff
}
.chat-news-title{
    width:2.12rem;
}
.chat-news-title-head{
    font-size: 0.15rem;
    color: #000000;
}
.chat-news-title-detail{
    overflow: hidden;
    height:0.65rem;
    margin-top: 0.06rem;
    line-height: 0.16rem;
    font-size: 0.12rem;
    color: #333333;
}
.chat-adv{
    padding:0.14rem 0;
    background: #fff
}
.chat-adv>img{
    width: 100%
}
.chat-list{
    background: #fff
}
.chat-list-item{
    overflow: hidden;
    border-top: 1px solid #f5f5f5;
}
</style>
