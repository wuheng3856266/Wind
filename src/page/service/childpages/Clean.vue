<template>
     <div>
         <div class="wrap">
            <header class="top">
                <span><img :src="topicon" /></span>
            </header>
            <app-content :module='true'>
                <div class="banner">
                    <img :src="bannerimg" />
                </div>
                <ul class="cleanList">
                    <li class="cleanselect" v-for="(item,index) in cleanselectList" :key = "index"
                        @click=goCleanSelectDetail(item)>
                        <img :src = 'item.imgUrl'/>
                        <span>{{item.name}}</span>
                    </li>
                </ul>
                <service/>
            </app-content> 
         </div>
     <router-view></router-view>
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
            bannerimg:'imgs/maximg/life/VCG4178487692.png',
            cleanselectList:[
                {name:'卧室保洁',imgUrl:'/imgs/ios/images/LifeService/Group 2@2x.png',path:'/service/clean/bedroomclean'},
                {name:'日常保洁',imgUrl:'/imgs/ios/images/LifeService/Group 2 Copy 14@2x.png',path:'/service/clean/dayclean'},
                {name:'深度保洁',imgUrl:'/imgs/ios/images/LifeService/Group 2 Copy 12@2x.png'},
                {name:'家电清洗',imgUrl:'/imgs/ios/images/LifeService/Group 2 Copy 13@2x.png'},
                {name:'擦玻璃',imgUrl:'/imgs/ios/images/LifeService/Group 2 Copy 14@2x.png'},
                {name:'专业除螨',imgUrl:'/imgs/ios/images/LifeService/Group 2 Copy 15@2x.png'},
                {name:'消杀保洁',imgUrl:'/imgs/ios/images/LifeService/Group 2 Copy 14@2x.png'},
                {name:'开荒保洁',imgUrl:'/imgs/ios/images/LifeService/Group 2 Copy 17@2x.png'}
            ]
        }
    },
    methods:{
        goCleanSelectDetail(item){
            this.$router.push({
                name:item.name
            })
        }
    }
}
</script>

<style scoped>
.banner>img{
    width:100%
}
.cleanList{
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.3rem;
    background: #fff
}
.cleanselect{
    width:25%;
    text-align: center;
    margin-bottom: 0.14rem
}
.cleanselect>img{
    margin:0 auto
}
.cleanselect>span{
    display: block;
    margin-top: 0.115rem
}

</style>
