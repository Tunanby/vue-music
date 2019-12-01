// 类似 vue methods 方法事件
import * as types from "./mutation-types" // 存储 mutations 字符常量
// console.log([types.SET_SINGER], 'ssss')
const mutations = {
    [types.SET_SINGER](state, singer){
        state.singer  = singer
    },
    [types.SET_RECOMMEND](state, recommend) {
        state.recommend = recommend
    },
    [types.SET_RANK](state, rank) {
        state.rank = rank
    }
}
// console.log(mutations,'22')
export default mutations
