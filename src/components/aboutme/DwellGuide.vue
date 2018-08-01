<template>
<div class="dwellGuide">
<mine-header title="如风入住指南" showBackground="#fff"></mine-header>
<app-content id="dwellGuide">    
    <div class="dwellGuideContent">
        <div class="dwellGuideLife dwellGuideContentItem">
            <h3>关于生活</h3>
            <ul class="dwellGuideLife-ul">
                <li>
                    <p class="dwellGuideLife-title">a.如风信用很重要</p>
                    <p class="dwellGuideLife-content">如风将为良好的居住行为增加如风信用分，违反如风公约事项导致邻里或管家投诉，将列入黑名单，将不再允许继续居住</p>
                </li>
                <li>
                    <p class="dwellGuideLife-title">b.及时办理居住的登记</p>
                    <p class="dwellGuideLife-content">租客自7日起需到公安机关委托的机构登记入住</p>
                </li>
                <li>
                    <p class="dwellGuideLife-title">c.生活费用收取</p>
                    <p class="dwellGuideLife-content">如风默认按签约户数平均分摊水费、电费、燃气费、卫生费以及公共照明费，如有特殊需求请与室友自行沟通解决。</p>
                </li>
            </ul>
        </div>
        <div class="dwellGuideSafety dwellGuideContentItem">
            <h3>关于安全</h3>
            <p class="dwellGuideLife-title">Wi-Fi密码</p>
            <p class="dwellGuideSafety-content">
                深圳如风房初始密码；40066666<br>
                以屋内卡片显示为准，如已被修改，请咨询管家
            </p>
        </div>
        <div class="dwellGuideCommunity dwellGuideContentItem">
            <h3>关于社区</h3>
            <p class="dwellGuideLife-title">如风客一起玩</p>
            <p class="dwellGuideSafety-content">租住不止是一间房子的使用权或者安家的权宜之计，更是年轻一代的生活方式和社交平台，我们信奉探索、健康和分享的生活方式</p>
        </div>
        <div class="QRCode">
            <p class="QRCodeImg">
                <img src="../../../public/imgs/maximg/mine/QRCode.jpg">
            </p>
            <p class="QRCodeContent">扫码深圳圈让我们一起玩！</p>
        </div>
    </div>
</app-content>
</div>
</template>

<script>
import mineHeader from './MineHeader.vue'
export default {
    components:{
        mineHeader
    }
}
</script>

<style scoped>
#dwellGuide,.dwellGuide{
    width: 100%;
    position: absolute;
    top: 0.44rem;
    left: 0;
    bottom: 0;
    background: #f5f5f5;
    z-index: 1;
}
.dwellGuide{
    top:0;
}
.dwellGuideContent{
    padding: 0 0.21rem 0 0.21rem;
    font-family: PingFangSC-Medium;
}
.dwellGuideContentItem{
    padding-bottom: 0.25rem;
    border-bottom:1px solid #E5E5E5;
}
.dwellGuideContentItem>h3{
    font-size: 0.18rem;
    line-height: 0.5rem;
    color: #F9B371;
}
.dwellGuideLife-title{
    font-size: 0.13rem;
    color: #333333;    
    line-height: 0.2rem;
}
.dwellGuideLife-content,.dwellGuideSafety-content{
    padding-left: 0.1rem;
    margin-bottom: 0.1rem;
    font-size: 0.13rem;
    color: #999999;
}
.dwellGuideSafety-content{
    padding-left: 0;
    position: relative;
    left: -0.03rem;
}
.QRCode{
    padding: 0.77rem 0;
}
.QRCodeImg,.QRCodeContent{
    text-align: center;
}
.QRCodeImg>img{
    display: inline-block;
    width: 0.54rem;
    height: 0.54rem;
}

</style>
