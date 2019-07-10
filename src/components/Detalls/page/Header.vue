<template>
    <header class="header" >
        <div>
            <div class="Dback" v-show="!isShow">
                <span class="icon iconfont black">&#xe63f;</span>
            </div>
            <div class="headerTop" v-show="isShow" :style="opacityObj">
                <span class="icon iconfont black">&#xe63f;</span>
                <div class="title">
                        {{title}}
                </div>
                <div class="kb"></div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    props:{
        title:String
    },
    components:{

    },
    data(){
        return {
            isShow:false,
            opacityObj:{
                opacity:0
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
        let that=this

        this.opacityObj.opacity
        window.onscroll=function(){
            let top=document.documentElement.scrollTop
            // console.log(top)
            let scrollTopVal=top/300;
            scrollTopVal= scrollTopVal>1?1:scrollTopVal
            that.opacityObj.opacity=scrollTopVal
            if(top>20){
                that.isShow=true
                //  console.log(that)
            }else{
                that.isShow=false
            }
        }
    }
}
</script>
<style scoped lang="stylus">
  @import '~@/assets/common.styl'
    .header{
         color #fff;
         width: 100%;
         position: fixed;
         top:0;
         left:0;
         z-index :999
        .headerTop{
            background : $headerColor;
            width: 100%;
            height pxTorem(44);
            font-size :pxTorem(10.5);
            display :flex;
            justify-content space-between;
            align-items center;
            padding :0 pxTorem(5);
            .black{
                width :pxTorem(40);
                font-size :pxTorem(13.5);
                display :flex;
                justify-content: center;
                flex-shrink:0;
            }
            &>>>.title{
                    font-size :pxTorem(18)
                    text-align center;
            }
            .kb{
                width :pxTorem(40);
                font-size :pxTorem(13.5);
                display :flex;
                justify-content: center;
                flex-shrink:0;
            }
        
        }
        .Dback{
            position :absolute;
            width :pxTorem(36);
            height :pxTorem(36);
            border-radius: 50%;
            background :rgba(0,0,0,0.5);
            display :flex;
            justify-content center;
            align-items center;
            left :pxTorem(10);
            top:pxTorem(10);
            
        }
     }
</style>