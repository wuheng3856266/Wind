<template>
<div id="login">
    <mine-header></mine-header>
    <img src="../../../public/imgs/maximg/mine/4.png" class="banner">
    <input type="Number" placeholder="手机号" oninput="if(value.length>5)value=value.slice(0,11)" id="userPhone" ref="userPhone">
    <input type="Number" placeholder="动态码" oninput="if(value.length>5)value=value.slice(0,4)" id="userCode" ref="userCode">
    <span class="getCode" @click="getCode()">获取动态码</span>
    <button id="confirmLogin" @click="confirmLogin()">登录</button>
    <div class="elseLogin">
        <span></span>
        <p>其他方式登录</p>
        <ul class="elseLogin-ul">
            <li v-for="(item,index) in elseLoginList" :key="index" class="elseLogin-li">
                <img :src="item.path">
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import { Toast } from 'mint-ui';
import mineHeader from './MineHeader.vue'
export default {
    data(){
            return {
                elseLoginList:[
                    {
                        name:'微信',
                        path:'imgs/ios/images/Mine/7@2x.png'
                    },
                    {
                        name:'QQ',
                        path:'imgs/ios/images/Mine/6@2x.png'
                    },
                    {
                        name:'微博',
                        path:'imgs/ios/images/Mine/5@2x.png'
                    }
                ]
            }
        },
    methods:{
        getCode(){
            if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.$refs.userPhone.value))){
                Toast({
                    message:'请输入正确的电话号码'
                });
            }else{
                //发送动态码 
            }
        },
        //登录
        confirmLogin(){
            if((/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.$refs.userPhone.value))){
                //判断动态码是否正确
                if(true){
                    //登录发送请求
                    let name = '张三'
                    let userid = 111
                    let imgPath = null
                    let userPhone = this.$refs.userPhone.value
                    this.$store.dispatch('user/login',{
                        name,
                        userid,
                        imgPath,
                        userPhone
                    })
                    this.$router.push({
                        name:'aboutme'
                    })
                }
            }  
        }
    },
    components:{
        mineHeader
    }
}
</script>

<style scoped>
#login{
    width: 100%;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
}
.banner{
    width: 100%;
    height: 1.81rem;
}
#userPhone,#userCode{
    display: block;
    margin: 0.6rem 0 0 0.3rem;
    height: 0.5rem;
    width: 3.15rem;
    line-height: 0.5rem;
    border: none;   
    outline: none;
    font-family: PingFangSC-Regular;
    font-size: 0.13rem;
    color: #999999;
    border-bottom: 0.01rem solid #E5E5E5;
}
#userCode{
    margin: 0 0.3rem;
}
.getCode{
    position: absolute;
    top: 3.08rem;
    right: 0.3rem;
    font-family: PingFangSC-Regular;
    font-size: 0.13rem;
    color: #F9B371;
}
#confirmLogin{
    display: block;
    background: #F9B371;
    border: none;
    border-radius: 1px;
    width: 2.71rem;
    height: 0.45rem;
    margin-left:0.52rem;
    margin-top: 0.5rem;
    font-family: PingFangSC-Regular;
    font-size: 0.18rem;
    color: #FFFFFF;
}
.elseLogin{
    height: 1.24rem;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;  
}
.elseLogin>span{
    display: block;
    border-top:0.01rem solid #979797;
    opacity: 0.22;   
}
.elseLogin>p{
    background: #fff;
    position: absolute;
    padding: 0 0.04rem;
    top: -0.07rem;
    left: 1.54rem;
    font-family: PingFangSC-Regular;
    font-size: 0.1rem;
    line-height: 0.14rem;
    color: #999999;
}
.elseLogin-ul{
    display: flex;
    padding: 0 0.8rem;
}
.elseLogin-li{
    flex: 1;
    text-align: center;
}
.elseLogin-li>img{
    display: inline-block;
    margin-top:0.36rem; 
}
</style>
