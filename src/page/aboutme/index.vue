<template>
    <div>
        <app-content :module="true">
            <div id="mineHeader">
                <div class="mineUser">
                    <div class="mineUserImg" @click="mineUserImgAction()">
                        <img :src="userImg">
                    </div>
                    <div class="mineUserInfo">
                        <p class="mineUserName">
                            {{userId?userName:"昵称"}}
                        </p>
                        <p class="mineUserOperation" v-if="!$store.getters['user/userLogin']">
                            <span @click="login()">登录</span>
                        </p>
                    </div>
                </div>
            </div>
            <div id="mineTabs">
                <div class="mineTabsHeader">
                    <div class="mineTabsHeader-item" @click="goMineTabsPage('/aboutme/')">
                        <img src="../../../public/imgs/ios/images/Mine/iPhone 8 Copy 15@2x.png">
                        <p>我的合同</p>
                    </div>
                    <div class="mineTabsHeader-item" @click="goMineTabsPage('/aboutme/')">
                        <img src="../../../public/imgs/ios/images/Mine/iPhone 8 Copy 17@2x.png">
                        <p>我的委托</p>
                    </div>
                    <div class="mineTabsHeader-item" @click="goMineTabsPage('/aboutme/wallet')">
                        <img src="../../../public/imgs/ios/images/Mine/iPhone 8 Copy 18@2x.png">
                        <p>钱包</p>
                    </div>
                </div>
                <div class="mineTabsFootr">
                    <div class="mineTabsFootr-item" @click="goMineTabsPage('/aboutme/enshrine')">
                        <img src="../../../public/imgs/ios/images/Mine/Star Copy 2@2x.png">
                        <p>我的收藏</p>
                    </div>
                    <div class="mineTabsFootr-item" @click="goMineTabsPage('/aboutme/mineComment')">
                        <img src="../../../public/imgs/ios/images/Mine/3@2x.png">
                        <p>我的评论</p>
                    </div>
                    <div class="mineTabsFootr-item" @click="goMineTabsPage('/aboutme/mineShare')">
                        <img src="../../../public/imgs/ios/images/Mine/2@2x.png">
                        <p>我的分享</p>
                    </div>
                    <div class="mineTabsFootr-item" @click="goMineTabsPage('/aboutme/minePublish')">
                        <img src="../../../public/imgs/ios/images/Mine/1 @2x.png">
                        <p>我的发布</p>
                    </div>
                </div>
            </div>
            <img src="../../../public/imgs/maximg/mine/3.png" class="mineBanner">
            <ul id="mineList" v-for="(item,index) in mineListInfo" :key="index">
                <li class="mineItem" @click="mineItemAction(item.path)">{{item.name}}</li>
            </ul>
        </app-content>
        <keep-alive>
            <transition  name="silde">
                <router-view></router-view>
            </transition>
        </keep-alive>
        <mt-actionsheet
        :actions="[
            {
                name:'周一至周日 9:00-20:00'
            },
            {
                name:'呼叫 80080820',
                method:phoneCall,
            }
        ]"
        v-model="sheetVisible" class="mineActionSheet Call">
        </mt-actionsheet>
    </div>
</template>

<script>
import Vuex from 'vuex'
import {Toast,Actionsheet} from 'mint-ui'
export default {
    data(){
        return {
            mineListInfo:[
                {
                    name:'入住指南',
                    path:'/aboutme/dwellGuide'
                },
                {
                    name:'个人设置',
                    path:'/aboutme/mineSet'
                },
                {
                    name:'我的客服',
                    path:'call'
                },
                {
                    name:'投诉建议',
                    path:'/aboutme/complaint'
                },
                {
                    name:'关于我们',
                    path:'/aboutme/aboutUs'
                }
            ],
            sheetVisible:false,
            userId:11
        }   
    },
    computed:{
        ...Vuex.mapState({
             userName: state => state.user.userName,
            //  userId: state => state.user.userId,
             userImg: state => state.user.userImg,
        })
    },
    methods:{
        goMineTabsPage(path){
            //跳转到功能页面 先判断是否登录
            if(this.userId){
                this.$router.push(path)
            }else{
                Toast({
                    message:'请先登录',
                    className:'mineToastFrame',
                });
            }
              
        },
        login(){
            //跳转登录页面
            this.$router.push({
                name:'login'
            })
        },
        mineUserImgAction(){
            //头像点击事件
            if(this.userId){
                //用户已登录进入用户信息页
                this.$router.push({
                    name:'userInfo'
                })
            }else{
                //用户未登录进入登录页
                this.login()
            }
        },
        mineItemAction(path){
            if(path=='call'){
                this.sheetVisible = true
            }else{
                this.$router.push(path)
            }
        },
        phoneCall(){
            //打电话
            console.log('打电话')
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
#mineHeader{
    height: 1.11rem;
    width: 100%;
    font-size: 0.16rem;background: #ccc;
    background: url('../../../public/imgs/maximg/mine/2.png') no-repeat ;
    background-size:100% 100%; 
    position: relative;
}
.mineUser{
    width: 100%;
    position: absolute;
    top: 0.29rem;
    left: 0.16rem;
    display: flex;
}
.mineUserImg{
    height: 0.5rem;
    width: 0.5rem;
    margin-right:0.2rem; 
}
.mineUserImg>img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.mineUserInfo{
    color: #fff;
    font-family: PingFangSC-Regular;
    margin-top: 0.06rem; 
}
.mineUserName{
    font-size: 0.15rem;
    line-height: 0.21rem;
}
.mineUserOperation{
    font-size: 0.13rem;
    line-height: 0.18rem;
    margin-top: 0.03rem;
}
#mineTabs{
    height: 1.76rem;
    width: 100%;
    position: relative;
}
.mineTabsHeader{
    width: 2.78rem;
    height: 0.65rem;
    padding: 0 0.21rem;
    border-radius: 0.02rem;
    box-shadow: 0 1px 0.02rem 0 rgba(0, 0, 0, 0.2);
    background: #FFFFFF;
    position: absolute;
    top: -0.11rem;
    left: 0.28rem;
    display: flex;
}
.mineTabsHeader-item{
    flex: 1;
    font-family: PingFangSC-Regular;
    font-size: 0.13rem;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    line-height: 0.18rem;
}
.mineTabsHeader-item>img{
    display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
    margin: 0.11rem 0  0.09rem;
}

.mineTabsFootr{
    width: 100%;
    height: 1.01rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #fff;
    display: flex;
}
.mineTabsFootr-item{
    flex: 1;
    font-family: PingFangSC-Regular;
    font-size: 0.13rem;
    line-height: 0.18rem;
    color: #4A4A4A;
    letter-spacing: 0;
    text-align: center;
}
.mineTabsFootr-item>img{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    margin: 0.26rem 0 0.11rem 0;
}

.mineBanner{
    width: 100%;
    height: 1.1rem;
    margin: 0.21rem 0;
}
#mineList{
    padding: 0 0.19rem 0 0.16rem; 
    background: #fff;
}
.mineItem{
    height: 0.45rem;
    width: 100%;
    text-align: left;
    line-height: 0.45rem;
    border-bottom: 0.02rem solid #f5f5f5;
    font-size: 0.15rem;
    color: #333333;
    box-sizing: border-box;
    background: url('../../../public/imgs/ios/images/Mine/mine-right.png') no-repeat right center;
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
