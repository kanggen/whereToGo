<template>
    <div>
        <Header :cityName="this.cityName"></Header>
        <Swiper :swiperList="this.swiperList"></Swiper>
        <Icon :iconsList="this.iconsList"></Icon>
        <Address></Address>
        <Hotlist :hotlist="this.hotlist"></Hotlist>
        <Likelist :likelist="this.likelist"></Likelist>
        <Vacationlist :vacationlist="this.vacationlist"></Vacationlist>
    </div>
</template>
<script>
import Header from './pages/Header'
import Swiper from './pages/Swiper'
import Icon from './pages/Icon'
import Address from './pages/Address'
import Hotlist from './pages/Hotlist'
import Likelist from './pages/Likelist'
import Vacationlist from './pages/Vacationlist'
import {mapState} from 'vuex'
export default {
    props:{

    },
    components:{
        Header,
        Swiper,
        Icon,Address,Hotlist,Likelist,Vacationlist
    },
    data(){
        return {
            cityName:'',
            swiperList:[],
            iconsList:[],
            hotlist:[],
            likelist:[],
            vacationlist:[]
        }
    },
    computed:{
       ...mapState(['city'])
    },
    methods:{
        getHttp(){
            this.axios.get('/api/dataHome.json')
                .then((res)=>{
                    res.data.data.forEach((item,index) => {
                        if(item.city==localStorage.getItem("city")){
                            let data=item;
                            this.swiperList=data.swiperList
                            this.iconsList=data.iconsList
                            this.hotlist=data.hotList
                            this.likelist=data.likeList
                            this.vacationlist=data.vacationList
                            console.log(data)
                        }
                });
            })
        }
    },
    created(){
        
    },
    mounted(){
        this.changeCityName= this.city;
        this.getHttp()
        
    },
    activated(){
        if(this.changeCityName!==this.city){
            this.getHttp()
        }
    }
}
</script>
<style scoped lang="stylus">

</style>