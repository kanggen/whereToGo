<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in swiperList" :key="index">
            <img :src="item.imgUrl" alt="">
        </swiper-slide>
    </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
export default {
    props:{
        swiperList:Array
    },
    components:{

    },
    data(){
        return {
            swiperOption:{
                pagination:{
                    el:'.swiper-pagination'
                }
            }
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        
    },
    mounted(){
       
    }
}
</script>
<style scoped lang="stylus">
    .swiper-slide{
        background :#fff;
        img{
            width :100%
        }
    }
</style>