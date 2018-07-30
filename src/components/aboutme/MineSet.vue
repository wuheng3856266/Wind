<template>
<div class="mineSet">
    <div id="mineSet">
        <mine-header title="设置" showBackground="#fff"></mine-header>
        <ul class="mineSetList">
            <li class="mineSetItem" @click="mineSetItemAction('消息管理')">消息管理</li>
            <li class="mineSetItem" @click="mineSetItemAction('清空缓存')">清空缓存</li>
            <li class="mineSetItem noBorder" @click="mineSetItemAction('检查更新')">检查更新</li>
        </ul>
    </div>
    <keep-alive>
        <transition name="silde">
            <router-view></router-view>
        </transition>
    </keep-alive>
</div>
</template>

<script>
import mineHeader from './MineHeader.vue'
export default {
    components:{
       mineHeader 
    },
    methods:{
        mineSetItemAction(val){
            if(val == '消息管理'){
                this.$router.push({
                    name:'informationSet'
                })
            }
        }
    }
}
</script>

<style scoped>
#mineSet,.mineSet{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #f5f5f5;
    z-index: 1;
}
.mineSetList{
    background: #fff;
    margin-top: 0.84rem;
    padding: 0 0.15rem;
}
.mineSetItem{
    height: 0.42rem;
    line-height: 0.42rem;
    font-family: PingFangSC-Regular;
    font-size: 0.15rem;
    color: #333333;
    background: url('../../../public/imgs/ios/images/Mine/mine-right.png') no-repeat right center;
    border-bottom: 0.01rem solid #E5E5E5;
}
.noBorder{
    border-bottom: none;
}
/* 动画 */
@keyframes sildeDown{
    0%{transform: translateX(100%)}
    100%{transform: translateX(0%)}
}
@keyframes fadeOut{
    0%{transform: translateX(0%)}
    100%{transform: translateX(100%)}
}


.silde-enter-active{
    animation: sildeDown 0.5S;
}

.silde-leave-active{
    animation: fadeOut 0.5S;
}
</style>
