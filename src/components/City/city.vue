<template>
    <div>
        <Header></Header>
        <Citycont :hotCities="hotCities" :cities="cities"></Citycont>
    </div>
</template>
<script>
import Header from './page/Header'
import Citycont from './page/Citycont'
export default {
    props:{

    },
    components:{
        Header,
        Citycont
    },
    data(){
        return {
            hotCities:[],
            cities:{}
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        this.axios.get("/api/city.json")
        .then(res => {
            console.log(res.data.data)
            this.hotCities=res.data.data.hotCities
            this.cities=res.data.data.cities
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>