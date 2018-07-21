<template>
<div class="content" ref="content">
    <div>
        <slot></slot>
    </div>
</div>
</template>


<script>
export default {
    methods: {
        refreshDOM(){
            this.scroll.refresh();
        }
    },
    mounted(){
        console.log(IScroll)
        let scroll = new IScroll(this.$refs.content, {
            
        });
  
    }
}
</script>

<style scoped>
.content{
    width:100%;
    top:44px;
    bottom: 49px;
    background: greenyellow;
    overflow: hidden;
    position: absolute;
    left:0
}
</style>
