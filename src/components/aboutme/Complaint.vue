<template>
<div id="complaint">
    <mine-header title="投诉建议" showBackground="#fff"></mine-header>
    <div class="complaint">
        <h3>内容描述</h3>
        <textarea class="complaintContent" placeholder="请输入您的投诉建议" ref="content"></textarea>
    </div>
    <span id="confirmComplaint" @click="submitAction()">提交</span>
</div>
</template>

<script>
import mineHeader from './MineHeader.vue'
export default {
    components:{
       mineHeader 
    },
    methods:{
        submitAction(){
            //提交
            console.log("提交:"+this.$refs.content.value)
            this.$refs.content.value = ''
        }
    }
}
</script>

<style scoped>
#complaint{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #f5f5f5;
    z-index: 1;
}
.complaint{
    width: 100%;
    height: 1.9rem;
    background: #fff;
    margin-top: 0.84rem;
}
.complaint>h3{
    font-family: PingFangSC-Regular;
    font-size: 0.15rem;
    color: #333333;
    padding-left:0.15rem;
    font-weight: normal;
    line-height: 0.42rem; 
}
.complaintContent{
    margin-left: 0.15rem;
    border: none;
    opacity: 0.57;
    background: #D8D8D8;
    border-radius: 0.04rem;
    width: 3.32rem;
    height: 1.02rem;
    padding: 0.08rem;
    font-size: 0.13rem;
    color: #999999;
    line-height: 0.18rem;
    outline: none;
}
#confirmComplaint{
    font-family: PingFangSC-Regular;
    font-size: 0.18rem;
    line-height: 0.49rem;
    text-align: center;
    color: #FFFFFF;
    display: block;
    width: 100%;
    height: 0.49rem;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(-90deg, #F9B371 47%, #F9B371 100%);
}
</style>
