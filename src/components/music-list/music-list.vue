<template>
    <div class="music-list">
        <div class="back">
            <span class="iconBack" @click="back"> < </span>
        </div>
        <h1 class="title">{{ title }}</h1>
        <div class="bg-image" :style="bgImage" ref="bgImg"></div>

        <scroll class="list" ref="list">
            <div class="song-list-wrapper">
                <song-list :songs="songs"></song-list>
            </div>
            <div class="loading-content"  v-if="!songs.length">
                <loading></loading>
            </div>
        </scroll>
        
    </div>
</template>

<script>
import SongList from "base/song-list/song-list"
import Scroll from "base/scroll/scroll"
import Loading from "base/loading/loading"

export default {
    name: 'music-list',
    components: {
        SongList, Scroll, Loading
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        bgImg: {
            type: String,
            default: ''
        },
        songs: {
            type: Array,
            default: []
        }
    },
    computed:{
        bgImage() {
            return `background-image: url(${this.bgImg})`
        }
    },
    methods: {
        back() {
            return this.$router.back()
        }
    },
    mounted() {
        this.$refs.list.$el.style.top = `${this.$refs.bgImg.clientHeight}px`
    }
}
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"
        .music-list
            position fixed
            width 100%
            top 0
            left 0
            bottom 0
            right 0
            z-index 100
            background $color-background
            .back 
                position absolute
                left 10px
                top 0
                z-index 50                
                .iconBack
                    display block
                    padding 10px
                    color #ffffff
                    font-size $font-size-large-x
            .title
                position absolute 
                text-align center 
                width 80%
                left 10% 
                top 2px
                line-height 40px
                z-index 40
                text-overflow ellipsis
                overflow hidden
                white-space nowrap
                color #ffffff
                font-size $font-size-large-s    
            .bg-image
                position relative
                width 100%
                height 0
                padding-top 70% 
                background-size cover
                transform-origin top
            .list
                position fixed
                top 0
                bottom 0 
                left 0
                right 0
                overflow hidden
                background $color-background
                .song-list-wrapper
                    padding 20px
                 .loading-content
                    position absolute
                    width 100%
                    top 50%
                    transform translateY(-50%)
</style>
