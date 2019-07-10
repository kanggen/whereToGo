<template>
    <div class="like">
        <div class="liketit">
            <h3>猜你喜欢</h3>
        </div>
        <div class="likecont">
            <dl v-for="(item,index) in likelist" :key="index" @click="toDetalls">
                <dt>
                    <img :src="item.imgUrl" alt="">
                </dt>
                <dd>
                    <h5>{{item.title}}</h5>
                    <p>{{item.msg}}条评论</p>
                    <p><span>￥{{item.pre}}起</span><span>{{item.map}}</span></p>
                </dd>
            </dl>
        </div>
        <div class="lookAll">查看所有产品</div>
    </div>
</template>
<script>
export default {
    props:{
        likelist:Array
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
          toDetalls(){
            this.$router.push({
                path:'/detalls'
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
    .like{
        width :100%;
        background :#fff;
        .liketit{
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
        }
        .likecont{
            padding-left :pxTorem(10);
            dl{
                display :flex;
                height :pxTorem(158);
                dt{
                    width :pxTorem(100);
                    height :pxTorem(100);
                    img{
                        width: 100%;
                    }
                }
            }
        }
        .lookAll{
            width :100%;
            height :pxTorem(40);
            display :flex;
            justify-content :center;
            align-items :center;
            border-top :solid pxTorem(1px) #eee;
            font-size pxTorem(15);
            color :#00afc7;
        }
    }
</style>