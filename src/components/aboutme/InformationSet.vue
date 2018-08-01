<template>
<div id="informationSet">
    <mine-header title="消息管理" showBackground="#fff"></mine-header>
    <div class="informationSetContent">
        <div class="informationSetContentOne">
            <mt-switch v-model="systemValue">
                <p>系统消息</p> 
                <p>系统通知、聊天消息等必要提醒</p>　
            </mt-switch>
            <mt-switch v-model="hotValue">
                <p>热门推荐</p>
                <p>为您推荐精准帖子、热门活动及内容</p>　
            </mt-switch>
        </div>
        <div class="informationSetContentTwo">
            <mt-switch v-model="voiceValue">
                声音
            </mt-switch>
            <mt-switch v-model="shakeValue">
                振动　
            </mt-switch>
        </div>
    </div>
</div>
</template>

<script>
import { Switch } from 'mint-ui';
import mineHeader from './MineHeader.vue'
export default {
    data () {
        return {
            systemValue:true,
            hotValue:true,
            voiceValue:true,
            shakeValue:true
        }
    },
    components:{
       mineHeader 
    },
}
</script>

<style scoped>
#informationSet{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #f5f5f5;
    z-index: 1;
    font-family: PingFangSC-Regular;
}
.informationSetContent{
    position: absolute;
    top: 0.44rem;
    width: 100%;
}

.mint-switch{
    height: 0.59rem;
    border-bottom: 0.01rem solid #E5E5E5;
    background: #fff;
    padding-left: 0.17rem;
}
.informationSetContentOne{
    margin: 0.2rem 0;
}
.informationSetContentOne p:nth-child(1){
    line-height: 0.21rem;
    font-size: 0.15rem;
    color: #333333;
}
.informationSetContentOne p:nth-child(2){
    font-size: 0.13rem;
    color: #999999;
}
.informationSetContentTwo{
    font-size: 0.15rem;
    color: #333333;
}
</style>
<style>
.informationSetContent span.mint-switch-core{
    position: absolute;
    right: 0.62rem;
    width: 0.5rem;
    height: 0.28rem;
    border-radius: 0.4rem;
}
.informationSetContent span.mint-switch-core::after{
    width: 0.26rem;
    height: 0.26rem;
    border-radius: 0.4rem;
    transform: translateX(-0.15rem);
    left: 0.14rem;
}
.informationSetContent span.mint-switch-core::before{
    width: 0;
    height: 0;
}
.informationSetContent .mint-switch-input:checked + .mint-switch-core{
    background-color: #F9B371 !important;
}
</style>

