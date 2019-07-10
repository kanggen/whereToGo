 <template>
     <header class="header">
        <div class="headerTop">
            <span class="icon iconfont black">&#xe63f;</span>
            <div class="title">
                城市选择
            </div>
            <div class="kb"></div>
        </div>
        <div class="type">
            <span class="active">境内</span>
            <span>境外·港澳台</span>
        </div>
     </header>
 </template>
 <script>
 
 export default {
     props:{
         
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
         toCity(){
             this.$router.push({
                 path:'/city'
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
     .header{
         background : $headerColor;
         color #fff;
        .headerTop{
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
        .type{
            width :100%;
            height :pxTorem(40)
            font-size :pxTorem(15);
            display :flex;
            align-items :center;
            justify-content center;
            span{
                border:solid pxTorem(1) #fff;
                width :pxTorem(136.5);
                text-align center;
            }
            .active{
                background :#fff;
                color : $headerColor;
            }
        }
     }
 </style> 