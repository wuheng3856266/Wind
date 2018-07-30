<template>
    <header class="header" :style="{'background':showBackground}">
        <span @click="pageReturn()"></span>
            {{title}}
    </header>
</template>

<script>
export default {
    props:{
        title:String,
        showBackground:String
    },
    methods:{
        pageReturn(){
            //返回上一页
            this.$router.go(-1)
        },
    }
}
</script>

<style scoped> 
.header{
    position: absolute;
    top: 0;
    left: 0;
    height: 0.44rem;
    text-align: center;
    width: 100%;
    line-height: 0.44rem;
    font-family: PingFangSC-Regular;
    font-size: 0.18rem;
    color: #333333;
}
.header>span{
    display: inline-block;
    height: 0.11rem;
    width: 0.11rem;
    transform: rotate(-315deg);
    border-left: 2px solid #333333;
    border-bottom: 2px solid #333333;
    position: absolute;
    top: 0.16rem; 
    left: 0.15rem; 
}
</style>
