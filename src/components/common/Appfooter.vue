<template>
    <div class="footer">
      <router-link to="/"><i class="iconfont footericon iconhome">&#xe62f;</i><span class="footerspan">首页</span></router-link>
      <router-link to="/chat"><i class="iconfont footericon">&#xeee9;</i><span class="footerspan">风聊</span></router-link>
      <router-link to="/service"><i class="iconfont footericon">&#xe61f;</i><span class="footerspan">生活服务</span></router-link>
      <router-link to="/aboutme"><i class="iconfont footericon">&#xe620;</i><span class="footerspan">我的</span></router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    width:100%;
    position: absolute;
    height:49px;
    bottom: 0;
    left:0;
    display: flex
}
.footer>a{
    flex: 1;
    text-align: center;;
    line-height: 16px;
    padding-top: 10px
}
.router-link-exact-active .footerspan,.router-link-exact-active .footericon {
    color: #F9B371;
}
.footericon{
    font-size: 22px;
}
.footerspan{
    display: block;
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #333333;
}
</style>
