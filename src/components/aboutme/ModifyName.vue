<template>
<div id="app">
    <header class="header">
        <span class="goBack" @click="goBack()">取消</span>
        <h2 class="title">昵称</h2>
        <span class="preserve" @click="preserve">保存</span>
    </header>
    <input type="text" class="content" ref="content" :value=$store.state.user.userName>
    <span class="cancel" @click="clearInput">×</span>
</div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    methods:{
        clearInput(){
            this.$refs.content.value = ''
        },
        preserve(){
            //保存昵称
            if(!this.$refs.content.value){
                Toast({
                    message:'不能为空',
                    className:'mineToastFrame',
                });
            }else{
                this.$store.dispatch('user/modifyName',this.$refs.content.value)
                this.$router.back()
            }
        },
        goBack(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
#app{
    width: 100%;
    background: #f5f5f5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
}
.header{
    height: 0.44rem;
    width: 100%;
    text-align: center;
    position: relative;
    font-family: PingFangSC-Regular;
    line-height: 0.44rem;
    color: #333333;
    background: #fff;
}
.title{
    font-size: 0.18rem;
}
.goBack,.preserve{
    position: absolute;
    line-height: 0.44rem;
    font-size: 0.15rem;
    top: 0;
}
.goBack{
    left: 0.15rem;
}
.preserve{
    right: 0.15rem;
}
.content{
    width: 100%;
    border: none;
    outline: none;
    height: 0.45rem;
    line-height: 0.45rem;
    font-size: 0.15rem;
    color: #333333;
    margin-top: 0.2rem;
    background: #fff;
    padding-left: 0.15rem;
    box-sizing: border-box;
}
.cancel{
    display: block;
    text-align: center;
    width: 0.16rem;
    height: 0.16rem;
    line-height: 0.16rem;
    background: #d8d8d8;
    border-radius: 50%;
    position: absolute;
    right: 0.15rem;
    top: 0.8rem;
}
</style>
