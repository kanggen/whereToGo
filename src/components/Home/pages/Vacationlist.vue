<template>
    <div class="vacation">
        <div class="vacationtit">
            <h3>周末去哪玩</h3>
        </div>
        <div class="vacationcont">
            <dl v-for="(item,index) in vacationlist" :key="index" @click="toDetalls">
                <dt>
                    <img :src="item.imgUrl" alt="">
                </dt>
                <dd>
                    <h5>{{item.title}}</h5>
                    <p>{{item.msg}}</p>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        vacationlist:Array
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
    .vacation{
        .vacationtit{
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
        .vacationcont{
            dl{
                width :100%;
                height :100%;
                dt{
                    width :100%
                    img{
                        width :100%;
                    }
                }
                dd{
                    box-sizing :border-box;
                    height :pxTorem(62);
                    padding-left :pxTorem(5)
                    h5{
                        font-weight :normal;
                        width 100%;
                        word-wrap :normal;
                        overflow: hidden;
                        font-size :pxTorem(15);
                        margin :pxTorem(5) 0;
                     }
                        font-size :pxTorem(13)
                    }
            }
        }
    }
</style>