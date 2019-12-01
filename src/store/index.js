import Vue from "vue"
import Vuex from "vuex"
import * as  actions from "./actions" 
import * as getters from "./getters" // 取数据
import state from "./state" // 存数据 类似 vue data()
import mutations from "./mutations" // Vuex 中的 mutation 非常类似于事件 变更数据
Vue.use(Vuex)
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})
