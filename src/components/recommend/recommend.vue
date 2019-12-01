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
                        <li class="item" v-for="(item,key) in recommendList" :key="key" @click="selectItem(item)">
                            <div class="icon">
                                <img v-lazy="item.picUrl" alt="">
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
                <div class="recommend-music">
                    <h4 class="musci-title">推荐歌曲</h4>
                    <ul>
                        <li class="item" v-for="(item,key) in recommendMusic" :key="key">
                            <div class="icon">
                                <img v-lazy="item.song.album.picUrl" alt="">
                            </div>
                            <p class="text"> {{ item.name }} </p>
                            <p class="singer"> {{ item.song.artists[0].name }} </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loading-content" v-if="!recommendList.length">
                <loading></loading>
            </div>
            <router-view></router-view>
        </scroll>
    </div>
</template>

<script>
import Slider from "base/slider/slider"
import { getRecommendList, getRecommendMusic } from "api/recommend"
import { ERR_OK } from "common/js/config"
import Scroll from "base/scroll/scroll"
import Loading from "base/loading/loading"
import { mapMutations } from "vuex"
export default ({ 
    name: 'recommend',
    components:{
        Slider, Scroll, Loading
    },
    data(){
        return {
            recommendList: [],
            recommendMusic: []
        }
    },
    created() {
        this._getRecommendList()
        this._getRecommendMusic()
    },
    methods: {
        selectItem(item) {
            this.$router.push({
                path: `/recommend/${item.id}`
            })
            this.recommend(item)
        },
        ...mapMutations({
            recommend: "SET_RECOMMEND"
        }),
        _getRecommendList() {
            getRecommendList().then((res) => {
                if (res.status === ERR_OK) {
                    this.recommendList = res.data.result
                }
            })
        },
        _getRecommendMusic() {
            getRecommendMusic().then((res) => {
                if (res.status === ERR_OK) {
                    this.recommendMusic = res.data.result.splice(1)
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
            .recommend-music
                position relative
                width 100%
                box-sizing border-box
                .musci-title
                    font-weight bold
                    font-size $font-size-large-s
                    height 44px
                    line-height 44px
                    padding 0 1.5%
                    color $color-text
                    text-align left
                .item
                    display inline-block
                    position relative
                    box-sizing border-box
                    width 33%
                    padding 0 5px
                    .icon
                        margin-bottom 5px
                        width 100%
                        img 
                            width 100%
                    .text
                        text-align left 
                        font-size $font-size-small
                        color $color-text
                        line-height 16px
                        text-overflow ellipsis
                        white-space nowrap
                        overflow hidden
                    .singer
                        text-align left 
                        font-size $font-size-small
                        text-overflow ellipsis
                        white-space nowrap
                        overflow hidden
                        color $color-text-g
                        line-height 16px
                        margin-bottom 8px
            .loading-content
                position absolute
                width 100%
                top 50%
                transform translateY(-50%)
</style>
