// 类似 vue methods 方法事件
import * as types from "./mutation-types" // 存储 mutations 字符常量
// console.log([types.SET_SINGER], 'ssss')
const mutations = {
    [types.SET_SINGER](state, singer){
        // console.log(singer,'11')
        state.singer  = singer
    }
}
// console.log(mutations,'22')
export default mutations
