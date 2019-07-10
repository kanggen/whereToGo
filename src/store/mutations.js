const mutations ={
    changeCity(state,value){
            state.city=value
            localStorage.setItem("city",value)
    }
}
export default mutations;