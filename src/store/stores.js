import Vuex from 'vuex'
import Vue from 'vue'

import toolModule from './modules/toolModule'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        tools:toolModule
    }
})

export default store
