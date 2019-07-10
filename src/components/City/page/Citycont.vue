<template>
    <div>
        <div class="hotCity">
            <p class="tit">热门城市</p>
            <div class="namelist">
                <span v-for="(item,index) in hotCities" :key="index" @click="toHome(item.name)">{{item.name}}</span>
            </div>
        </div>
        <div class="zm">
            <p class="tit">字母排序</p>
            <div class="namelist">
                <span v-for="(key,item,index) in cities" :key="index">{{item}}</span>
            </div>
        </div>
        <div class="Dcity">
            <div v-for="(key,item,index) in cities" :key="index">
                <p class="tit">{{item}}</p>
                <div class="namelist">
                    <span v-for="(v,i) in key" :key="i"  @click="toHome(v.name)">{{v.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props:{
        hotCities:Array,
        cities:Object
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
        ...mapMutations(["changeCity"]),
        toHome(val){
            this.changeCity(val)
            this.$router.push({
                path:'/'
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
  @import '~@/assets/common.styl';
    .hotCity{
        
    }
    .tit{
            height :pxTorem(30)
            font-size :pxTorem(10)
            display flex;
            align-items center;
            padding-left pxTorem(5)
        }
    .namelist{
        display :flex;
        flex-wrap :wrap;
        span{
                width :pxTorem(124);
                height :pxTorem(45)
                font-size pxTorem(15)
                background #fff
                display flex;
                align-items center;
                justify-content center;
                margin-right pxTorem(1);
                margin-top pxTorem(1)

        }
    }
    .Dcity{
        width 100%
    }
</style>