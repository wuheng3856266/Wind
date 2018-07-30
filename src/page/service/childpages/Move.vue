<template>
    <div class="wrap">
        <header class="top">
            <span><img :src="topicon" /></span>
        </header>
        <app-content :module='true'>
            <div class="banner">
                <img :src="bannerimg" />
                <img src='/imgs/logo/logo font1x.png' class="logol logo"/>
                <img src='/imgs/logo/logo font1x.png' class="logor logo"/>
            </div>
            <ul class="contain">
                <li v-for="(item,index) in containList" :key="index" @click="goDetail(item)"
                 class="containItem">
                    <div class="containImg fl">
                        <img :src="item.imageUrl" :class="'imgs'+index"/>
                    </div>
                    <div class="containTitle fr">
                        <p class="containTitleName">{{item.name}}</p>
                        <p class="containTitleInfo">{{item.title}}</p>
                        <p class="containTitlePrice">{{item.price}}</p>
                    </div>
                </li>
            </ul>
        </app-content> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            topicon:'imgs/ios/images/IndexImg/Group Copy 26@2x.png',
            bannerimg:'imgs/maximg/life/VCG41182178254.png',
            containList:[{
                name:'如风小搬',
                title:'全程搬运，适合简约生活，行李较少的搬家',
                imageUrl:'imgs/maximg/life/VCG41482833831.png',
                price:'99元起'
            },{
                name:'如风中搬',
                title:'全程搬运，免费收纳箱，适合行李繁多，但无较大型电器的搬家',
                imageUrl:'imgs/maximg/life/VCG41482833831 Copy 2.png',
                price:'199元起'
            },{
                name:'如风大搬',
                title:'全程搬运，提供各项打包服务，适合大型电器较多的搬家',
                imageUrl:'imgs/maximg/life/VCG41482833831 Copy.png',
                price:'349元起'
            }]
        }
    }
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
    width:100%;
    position: relative;
}
.banner img{
    width:100%
}
.banner .logo{
    width:0.62rem;
    height:0.45rem;
    position: absolute
}
.logol{
    top:0.7rem;
    left:0.7rem
}
.logor{
    top:0.7rem;
    right:1.2rem
}
.fl{
    float: left;
}
.fr{
    float: right;
}
.contain{
    background: #fff
}
.containItem{
    overflow: hidden;
    padding:0.2rem 0.21rem 0.2rem 0.15rem
}
.containTitle{
    width:2.25rem;
    position: relative;
}
.containTitleName{
    font-size: 0.18rem;
    color: #333333;
}
.containTitleInfo{
    font-size: 0.15rem;
    color: #666666;
    margin-top: 0.15rem
}
.containTitlePrice{
    font-size: 0.18rem;
    color: #F9B371;
    position: absolute;
    top: 0.82rem;
    right:0
}
.containImg{
    width:1rem;
    height:1rem;
    border:1px solid #f9b371;
}
.containImg>img{
    width:0.72rem;
    height:0.98rem;
}
.imgs0{
    margin-left:0.18rem;
    margin-top:0.009rem

}
.imgs1{
    margin-left: 0.07rem;
    margin-top:0.01rem;
}
.imgs2{
     margin-left:0.20rem
}
</style>
