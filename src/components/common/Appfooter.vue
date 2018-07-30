<template>
    <div class="footer">
      <router-link to="/home"><i class="iconfont footericon iconhome">&#xe62f;</i><span class="footerspan">首页</span></router-link>
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
    height:0.49rem;
    bottom: 0;
    left:0;
    display: flex;
    box-shadow: 0 0 0.08rem 1px rgba(0,0,0,0.1);
    background: #fff;
}
.footer>a{
    flex: 1;
    text-align: center;;
    line-height: 0.16rem;
    padding-top: 0.1rem
}
.router-link-exact-active .footerspan,.router-link-exact-active .footericon,
.router-link-active .footerspan, .router-link-active .footericon{
    color: #F9B371;
}
.footericon{
    font-size: 0.22rem;
}
.footerspan{
    display: block;
    font-family: PingFangSC-Regular;
    font-size: 0.1rem;
    color: #333333;
}
</style>
