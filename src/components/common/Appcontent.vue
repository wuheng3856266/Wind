<template>
<div class="content" :class="{active:module}" ref="content">
    <div>
        <slot></slot>
    </div>
</div>
</template>


<script>
export default {
    props:{
        module:Boolean,
    },
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
.active{
    top: 0;
    z-index: 0; 
}
</style>
