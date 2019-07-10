<template>
    <div>
        <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) in changeList" :key="index">
                        <dl v-for="(v,i) in item" :key="i">
                            <dt><img :src="v.imgUrl" alt=""></dt>
                            <dd>{{v.title}}</dd>
                        </dl>
                </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
export default {
    props:{
        iconsList:Array 
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
        changeList(){
            let arr=[]
            this.iconsList.forEach((item,index) => {
                   let idx=Math.floor(index/8);
                   if(!arr[idx]){
                       arr[idx]=[]
                   }
                   arr[idx].push(item)
            });
            return arr
        }
    },
    methods:{

    },
    created(){
        // this.iconsList=[10]
    },
    mounted(){
        
    }
}
</script>
<style scoped lang="stylus">
    @import '~@/assets/common.styl'
    .swiper-slide{
        background :#fff;
        width: 100%;
        display :flex;
        flex-wrap :wrap;
        dl{
            width:25%;
            display :flex;
            flex-direction :column;
            align-items: center;
            dt{
                width:pxTorem(55);
                height :pxTorem(55);
                img{
                    width :100%;
                }
            }
            dd{
                font-size :pxTorem(13.5)
            }
        }
    }
 
        
    
</style>