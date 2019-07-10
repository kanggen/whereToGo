
if(!localStorage.getItem("city")){
    localStorage.setItem("city","北京")
}

const state ={
    city:localStorage.getItem("city")
}

export default state;