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
        let scroll = new IScroll(this.$refs.content, {
            
        });
  
    }
}
</script>

<style scoped>
.content{
    width:100%;
    top:0.44rem;
    bottom: 0.49rem;
    background: #f5f5f5;
    position: absolute;
    left:0;
    z-index: -1 
}
</style>
