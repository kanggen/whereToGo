<template>
    <div class="address">
        <div class="Dw">定位</div>
        <div class="By">必游榜单</div>
    </div>
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

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="stylus">
  @import '~@/assets/common.styl'
    .address{
        background :#fff;
        width :100%;
        height :pxTorem(49);
        font-size :pxTorem(15);
        display:flex;
        margin-top:pxTorem(5)
        div{
            width :50%;
            height 100%;
            display :flex;
            justify-content :center;
            align-items :center;
            border-top:solid pxTorem(1) #eee;
            &.By{
                border-left:pxTorem(1) solid #eee;
            }
        }
    }
</style>