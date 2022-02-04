const { createStore } = require("vuex");

const store= createStore({
    state:{
       user:{
        data:{name:"sushil"},
        token:null
       }
    },
    getters:{},
    actions:{},
    mutations:{},
    modules:{}
})

export default store;