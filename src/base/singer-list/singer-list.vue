<template>
    <scroll class="singer-list" :data="data">
        <div>
            <ul class="item-box">
                <li class="item" v-for="(item,key) of data" :key="key">
                    <h1> {{ item.title }} </h1>
                    <ul>
                        <li class="list" v-for="(list,index) of item.lists" :key="index">
                            <img :src="list.img" alt="" width="50" height="50">
                            <span class="name"> {{ list.name  }} </span>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="list-scroll">
                <ul>
                    <li v-for="(item,index) of listScroll" :key="index" class="item">
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </scroll>
</template>

<script>
import Scroll from "base/scroll/scroll"
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
    }
    // created() {
    // },
    // methods: {
    // }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
    .singer-list
        width 100%
        // height 100%
        position fixed
        top 88px
        bottom 0
        z-index 100
        .item-box
            width 100% 
            height 100% 
            overflow hidden
            .item
                width 100%
                h1 
                    // width 100% 
                    height 25px
                    line-height 25px
                    background rgba(0, 0, 0, 0.1)
                    padding-left 5%
                    color white
                    font-size $font-size-small
                    margin-bottom 5px
                .list
                    display flex
                    border-bottom  1px solid $color-text-ggg
                    padding 5px 0
                    align-items center
                    .name
                        margin-left 20px
                        font-size $font-size-medium
                        color $color-text

</style>