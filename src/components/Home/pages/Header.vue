 <template>
     <header class="header">
        <span class="icon iconfont black">&#xe63f;</span>
        <div class="input">
            <span class="icon iconfont">&#xe606;</span>
            <span>输入城市/景点/游玩主题</span>
        </div>
        <div class="address" @click="toCity">
            <span>{{city}}</span>
            <span class="icon iconfont">&#xe612;</span>
        </div>
     </header>
 </template>
 <script>
 import {mapState} from 'vuex'
 export default {
     props:{
        //  cityName:String
     },
     components:{
 
     },
     data(){
         return {
 
         }
     },
     computed:{
         ...mapState(['city'])
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
        width: 100%;
        height pxTorem(44);
        font-size :pxTorem(10.5);
        display :flex;
        justify-content space-between;
        align-items center;
        color #fff;
        padding :0 pxTorem(5);
        .black{
            width :pxTorem(40);
            font-size :pxTorem(13.5);
            display :flex;
            justify-content: center;
            flex-shrink:0;
        }
       &>>>.input{
            width: 80%;
            height :pxTorem(30);
            background :#fff;
            color:#ccc;
            flex :1;
            border-radius: pxTorem(5)
            display flex;
            align-items :center;
            padding-left :pxTorem(5)
        }
        .address{
            display flex;
            width :pxTorem(64);
            height :pxTorem(16);
            align-items center;
            flex-shrink :0;
            justify-content: center;
            >.icon.iconfont{
                font-size :pxTorem(20)
            }
        }
     }
 </style> 