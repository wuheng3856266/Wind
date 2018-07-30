<template>
<div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>


<script>
export default {
    methods: {
        updateDOM(){
            // console.log('调用了更新');
            this.swiper.update();
            this.swiper.reLoop();
            this.swiper.slideTo(1, 0);
            this.swiper.startAutoplay();
        }
    },
    mounted(){
        this.swiper = new Swiper(this.$refs.swiper,{ 
                    autoplay: 1500,
                    autoplayDisableOnInteraction:false,
                    loop:true});
        // console.log('创建');
       }
}
</script>



