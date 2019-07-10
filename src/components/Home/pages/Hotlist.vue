<template>
    <div class="hot">
        
            <div class="hottit">
                <h3>本周热门榜单</h3>
                <span>全部榜单</span>
            </div>
            <div class="hotcont">
                <div>
                    <dl v-for="(item,index) in hotlist" :key="index" @click="toDetalls(item)">
                        <dt>
                            <img :src="item.imgUrl" alt="">
                        </dt>
                        <dd>
                            <h5>{{item.title}}</h5>
                            <p>￥{{item.mark}}起</p>
                        </dd>
                    </dl>
                </div>
            </div>
        
    </div>
</template>
<script>
export default {
    props:{
        hotlist:Array
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        toDetalls(item){
            this.$router.push({
                path:'/detalls',
                query:item
            })
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="stylus">
  @import '~@/assets/common.styl'
    .hot{
        width :100%;
        background :#fff;
        .hottit{
            width :100%;
            height :pxTorem(47);
            display :flex;
            justify-content :space-between;
            align-items :center;
            padding :0 pxTorem(10)
            h3{
                font-size :pxTorem(18);
                font-weight :normal;
            }
            span{
                font-size :pxTorem(13)
            }
        }
        .hotcont{
            overflow :hidden;
            overflow-x:auto;
            div{
                display :flex;
                padding :0 pxTorem(2.5);
                dl{
                    margin :0 pxTorem(2.5)
                    dt{
                        width :pxTorem(100);
                        height :pxTorem(100)
                        img{
                            width :100%;
                        }
                    }
                    dd{
                        h5{
                           font-weight :normal;
                            width 100%;
                            word-wrap :normal;
                           overflow: hidden;
                        }
                        font-size :pxTorem(13)
                    }
                }
            }
        }
    }
</style>