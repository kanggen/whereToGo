<template>
    <div>
        <div v-for="(item,index) in quanrList" :key="index">
            <p @click="toChild(index)">{{item.name}}</p>
            <Qunar v-if='arr[index]' :quanrList="item.child">

            </Qunar>
        </div>
    </div>
</template>
<script>
export default {
    name:'Qunar',
    props:{
        quanrList:Array
    },
    components:{

    },
    data(){
        return {
            arr:[]
        }
    },
    computed:{

    },
    methods:{
        toChild(index){
            if(this.arr[index]===false){
                this.$set(this.arr,index,false)
            }else{
                this.$set(this.arr,index,true)
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>