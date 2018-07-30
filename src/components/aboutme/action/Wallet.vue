<template>
<div id="app">
    <mine-header title="钱包" showBackground = "#fff"></mine-header>
    <div class="walletContent">
        <p class="title">账户余额</p>
        <div class="content">
            <span class="money">¥{{money}}元</span>
            <span class="withdrawDeposit" @click="withdrawDepositAction()">提现到银行卡</span>
            <p v-if="card">{{card}}</p>
        </div>
    </div>
</div>
</template>

<script>
import mineHeader from '../MineHeader.vue'
import {getUserMoney} from '../../service/aboutme/index.js'
export default {
    data(){
        return {
            card:'',
            money:''
        }
    },
    methods:{
        withdrawDepositAction(){
            console.log('提现')
        }
    },
    components:{
        mineHeader
    },
    mounted(){
        //请求用户钱包
        getUserMoney(this.$store.state.user.userId).then(result=>{
            if((result.money)*100%100 == 0){
                result.money = result.money+".00"
            }else if((result.money)*100%10 == 0){
                result.money = result.money+"0"
            }
            this.money = result.money
            this.card = result.card
        })
    }
}
</script>

<style scoped>
#app{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #f5f5f5;
    z-index: 1;
}
.walletContent{
    padding-top:0.44rem; 
    background: #F9B371;
    width: 100%;
    height: 1.05rem;
    font-family: PingFangSC-Regular;
    color: #333333;
    font-size: 0.13rem;
}
.title{
    padding-left:0.16rem;
    line-height: 0.34rem; 
}
.content{
    padding: 0 0.15rem 0 0.31rem;
    line-height: 0.31rem;
}
.money{
    font-weight: bold;
    font-size: 0.15rem;
}
.withdrawDeposit{
    float: right;
    color: #4A4A4A;
}

</style>