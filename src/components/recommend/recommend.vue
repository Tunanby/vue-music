<template>
    <div class="recommend">
        <scroll class="recommend-conner">
            <div>
                <div class="slider-wrapper">
                    <slider></slider>
                </div>
                <div class="recommend-list">
                    <h4 class="list-title">推荐歌单</h4>
                    <ul>
                        <li class="item" v-for="(item,key) of recommendList" :key="key">
                            <div class="icon">
                                <img :src="item.picUrl" alt="歌曲封面">
                            </div>
                            <p class="count">
                                <i class="iconfont icon-search"></i> 
                                {{ Math.floor(item.playCount/10000) }} 万
                            </p>
                            <div class="text">
                                <p class="name">{{ item.name }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
import Slider from "base/slider/slider"
import { getRecommendList } from "api/recommend"
import { ERR_OK } from "common/js/config"
import Scroll from "base/scroll/scroll"
export default ({ 
    name: 'recommend',
    components:{
        Slider,Scroll
    },
    data(){
        return {
            recommendList: []
        }
    },
    created() {
        this._getRecommendList()
    },
    methods: {
        _getRecommendList() {
            getRecommendList().then((res) => {
                if (res.status === ERR_OK) {
                    this.recommendList = res.data.result
                }
            })
        }
    }
})
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
    .recommend
        position fixed
        top 88px
        bottom 0
        width 100%
        z-index 100
        .recommend-conner
            width 100%
            height 100%
            overflow hidden
            .slider-wrapper
                width 100%
                margin 0 auto
            .recommend-list
                position relative
                width 100%
                box-sizing border-box
                .list-title
                    color  $color-text
                    font-size  $font-size-large-s 
                    text-align left 
                    height 44px
                    line-height 44px
                    padding-left 1.5%
                    font-weight bold
                .item
                    display inline-block
                    position relative
                    box-sizing border-box
                    width 33%
                    padding 0 5px
                    .icon 
                        width 100%
                        display inline-block
                        margin-bottom 5px
                        img 
                            width 100%
                            height 100%
                    .count 
                        position absolute
                        top 5px
                        right 5px
                        font-size $font-size-small
                        color $color-text-l 
                    .text
                        height 40px
                        margin-bottom 5px
                        text-align left 
                        overflow hidden
                        float left
                        .name
                            font-size $font-size-small-x
                            overflow hidden
</style>
