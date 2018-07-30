<template>
        <div class="wrap">
            <header class="top">
                <span><img :src="topicon" /></span>
            </header>
            <app-content :module='true' class="content">
                <div class="banner">
                    <img :src="bannerimg" />
                </div>
                <div class="plus">
                    <img :src="plusimg"/>
                </div>
                <service/>
            </app-content> 
         </div>
</template>

<script>
import service from '../../../components/service/evaluate.vue'
export default {
    components:{
        service
    },
    data(){
        return{
            topicon:'imgs/ios/images/IndexImg/Group Copy 26@2x.png',
            bannerimg:'imgs/maximg/life/VCG213ec3b05be.png',
            plusimg:'imgs/maximg/life/westore_02.png'
        }
    }
}
</script>

<style scoped>
.banner>img{
    width:100%
}
.plus{
    width:100%;
    padding-top:0.2rem;
    background: #fff
}

</style>
