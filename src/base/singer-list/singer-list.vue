<template>
    <scroll 
        class="singer-list"     
        :data="data" 
        ref="singerList"
    >
        <ul>
            <!-- <li v-for="(index,key) of 100" :key="key"> {{ index }} </li> -->
            <li 
                class="list" v-for="(item,key) of data" 
                :key="key"
                ref="list"
            >
                <h1 class="title-item"> {{ item.title }} </h1>
                <ul>
                    <li class="list-item" v-for="(list,index) of item.lists" :key="index">
                        <img :src="list.img" alt="" width="50" height="50">
                        <span class="name"> {{ list.name  }} </span>
                    </li>
                </ul>
            </li>
        </ul>
        <div 
            class="list-scroll"
            @touchstart="scrollTouchStart"
            @touchmove="sceollTouchMove"
        >
            <ul>
                <!-- <li>sss</li> -->
                <li 
                    v-for="(item,index) of listScroll"
                    :key="index" 
                    class="item"
                    :data-index="index"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
    </scroll>
</template>

<script>
import Scroll from "base/scroll/scroll"
import { getIndex } from "common/js/dom"
export default {
    name: "singer-list",
    components: {
        Scroll
    },
    computed: {
        listScroll() {
            // map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
            // substr 截取
            return this.data.map((item,index)=> {
                return item.title.substr(0,1)
            })
        }
    },
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    created() {
        // 不在data 里面设置this.touch 是因为 在vue 里 data 有 get set 对属性监听（数据绑定）
        this.touch = {}
    },
    methods: {
        scrollTouchStart(e) {
            let targetIndex =  getIndex(e.target , 'index')
            this.$refs.singerList.scrollToElement(this.$refs.list[targetIndex])
            this.touch.one = e.touches[0].pageY
            this.touch.targetIndex = targetIndex 
        },
        sceollTouchMove(e) {
            // 1. 获取 初始位置 与 滑动位置 的偏移 2. 获取初始位置的锚点 3 更新最新的锚点改变位置
            this.touch.two = e.touches[0].pageY 
            // let offset = Math.floor((this.touch.two - this.touch.one) / 20)
            let offset = (this.touch.two - this.touch.one) / 20 | 0
            let targetIndex =  parseInt(this.touch.targetIndex) + offset
            this.$refs.singerList.scrollToElement(this.$refs.list[targetIndex])
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"
        .singer-list
            position relative
            width 100%
            height 100%
            overflow hidden
            background $color-background 
            .list
                .title-item
                    height 25px
                    line-height 25px
                    background rgba(0, 0, 0, 0.1)
                    padding-left 5%
                    color white
                    font-size $font-size-small
                    margin-bottom 5px
                   
                .list-item
                    display flex
                    border-bottom  1px solid $color-text-ggg
                    padding 5px 0
                    align-items center
                    &:last-child
                        border none 
                        margin-bottom 10px
                    .name
                        margin-left 20px
                        font-size $font-size-medium
                        color $color-text
            .list-scroll
                position absolute
                top 50% 
                transform translateY(-50%)
                right 5px
                z-index 50
                padding 200px 0
                width 20px
                border-right 5px
                text-align center
                .item   
                    padding 5px
                    color $color-text-g
                    line-height 1
                    font-size $font-size-small
                    font-weight bold
</style>