<template>
<div class="content" :class="{active:module,activeBoom:moduleBoom}" ref="content">
    <div>
        <slot></slot>
    </div>
</div>
</template>


<script>
export default {
    props:{
        module:Boolean,
        moduleBoom:Boolean
    },
    methods: {
        refreshDOM(){
            this.scroll.refresh();
            console.log(this.scroll.maxScrollY)
        }
    },
    mounted(){
        scroll = new IScroll(this.$refs.content, {
            probeType: 3
        });
        this.scroll = scroll
        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
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
    z-index: -1;
    overflow: hidden; 
}
.active{
    top: 0;
    z-index: 0; 
}
.activeBoom{
    bottom: 0;
    z-index: 1; 
}
</style>
