<template>
<div id="user">
    <div id="app">
        <mine-header title="我的个人信息" showBackground="#fff"></mine-header>
        <div class="userInfo">
            <div class="userImage userInfoItem">
                头像
                <img :src="userImg" class="userImg" @click="changeUserImg()">
            </div>
            <div class="userName userInfoItem">
                昵称
                <span class="userNameContent" @click="changeUserName()">{{userName}}</span>
            </div>
            <div class="userPhone userInfoItem">
                手机号
                <span class="userPhoneContent">{{userPhone}}</span>
            </div>
        </div>
        <mt-actionsheet
        :actions="[
            {
                name:'拍照',
                method:photograph,
            },
            {
                name:'从手机相册选择',
                method:photoAlbum,
            }
        ]"
        v-model="sheetVisible" class="mineActionSheet">
        </mt-actionsheet>
    </div>
    <transition name="silde">
        <router-view></router-view>
    </transition>
</div>
</template>

<script>
import Vuex from 'vuex'
import mineHeader from './MineHeader.vue'
import { Actionsheet } from 'mint-ui';
export default {
    data(){
        return {
            sheetVisible:false,
        }
    },
    methods:{
        changeUserImg(){
            //修改头像
            this.sheetVisible = true;
        },
        photograph(){
            //拍照
            console.log('拍照')
//          mui.plusReady(function(){
//          	let camera = plus.camera.getCamera()
//          	camera.captureImage(function(capturedFile){
//          		let path = plus.io.convertLocalFileSystemURL( capturedFile )
//          	})
//          })
            
        },
        photoAlbum(){
            //相册中选择
            console.log('相册中选择')
        },
        changeUserName(){
            //修改昵称
            this.$router.push({
                name:'modifyName'
            })
        }
    },
    components:{
        mineHeader
    },
    computed:{
        ...Vuex.mapState({
             userName: state => state.user.userName,
             userId: state => state.user.userId,
             userImg: state => state.user.userImg,
             userPhone: state => state.user.userPhone,
        })
    },
    mounted(){
        
    }
}
</script>

<style scoped>
#user{
    width: 100%;
    background: #f5f5f5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
}

.userInfo{
    margin-top: 0.69rem;
    background: #fff;
}
.userInfoItem{
    position: relative;
    padding: 0 0.15rem 0 0.13rem;
    font-family: PingFangSC-Regular;
    font-size: 0.15rem;
    color: #333333;
    background: url('../../../public/imgs/ios/images/Mine/mine-right.png') no-repeat;
}

.userImage{
    line-height: 0.63rem;      
    padding-top: 0.3rem;  
    background-position: 3.51rem 0.56rem;
}
.userImg{
    margin-right: 0.34rem;
    height: 0.5rem;
    width: 0.5rem;
    position: absolute;
    right: 0;
    top: 0.36rem;
    border-radius: 50%;
}
.userName{
    line-height: 0.43rem; 
    background-position: 3.51rem center;
    border-bottom: 0.01rem solid #E5E5E5;
}
.userNameContent{
    padding-right: 0.37rem;
    position: absolute;
    top: 0;
    right: 0;
    color: #999999;
}
.userPhone{
    line-height: 0.44rem; 
    background-position: 3.51rem center;
    background: none;
}
.userPhoneContent{
    padding-right: 0.16rem;
    position: absolute;
    top: 0;
    right: 0;
    color: #999999;
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
