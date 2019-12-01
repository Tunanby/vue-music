<template>
    <div class="song-list"> 
        <ul>
            <li class="item" v-for="(song,index) in songs" :key="index">
                <div class="list">
                    <h2 class="name"> {{ song.name }} </h2>
                    <p class="desc"> {{ getDesc(song) }} </p>
                </div>
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    name: 'song-list',
    props:{
        songs: {
            type: Array,
            default: []
        }
    },
    methods: {
        getDesc(song) {
            return `${song.singer} • ${song.ablum}`
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"
        .song-list
            .item
                display flex
                align-items center
                height 60px
                box-sizing border-box
                border-bottom 1px solid #cccccc
                font-size $font-size-medium
                .list   
                    display 1
                    line-height 22px
                    overflow hidden 
                    // width 90% 
                    // margin auto 
                    .name
                        color $color-text
                    .desc
                        color $color-text-g
                        font-size $font-size-small-x
                        margin-top 4px
                        text-overflow ellipsis
                        overflow hidden
                        white-space nowrap
                &:last-child
                    border none 
                    margin-bottom 10px
</style>
