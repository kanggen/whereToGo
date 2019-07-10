<template>
    <div>
        <Header :title="title"></Header>
        <div class="img">
            <img :src="imgUrl" alt="">
            <p>{{title}}</p>
        </div>
        <qunar :quanrList="quanrList"></qunar>
    </div>
</template>
<script>
import Header from './page/Header'
import Qunar from './page/Qunar'
export default {
    props:{

    },
    components:{
        Header,
        Qunar
    },
    data(){
        return {
            title:"",
            imgUrl:"",
            quanrList:[]
        }
    },
    computed:{
        
    },
    methods:{

    },
    created(){

    },
    mounted(){
        console.log(this.$route.query)
        this.title=this.$route.query.title;
        this.imgUrl=this.$route.query.imgUrl;
        this.axios.get("/api/qunar.json")
        .then(res => {
            console.log(res.data.qunar)
            this.quanrList=res.data.qunar
        })
    }
}
</script>
<style scoped lang="stylus">
  @import '~@/assets/common.styl'
    .scTop{
        width :100%
        height: 100000px;
    }
    .img{
        width :100%;
        height :pxTorem(350)
        position relative;
        img{
            width :100%
            height 100%
        }
        p{
            width 100%;
            height pxTorem(40);
            color :#fff;
            background :rgba(0,0,0,0.5);
            display: flex;
            justify-content :flex-start;
            align-items center;
            padding-left :pxTorem(10);
            position :absolute;
            left :0;
            bottom :0;
        }
    }
</style>