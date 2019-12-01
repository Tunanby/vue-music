<template>
    <transition>
        <div class="rank">
            <scroll class="list">
                <ul >
                    <li class="item" v-for="(item,key) in rankList" :key="key" @click="selectRank(item)">
                        <div class="icon">
                            <img :src="item.coverImgUrl" alt="" width="100" height="100">
                        </div>
                        <div class="songList">
                            <ul>
                                <li class="song" v-for="(index,key) in item.rank" :key="key">
                                    {{ key += 1 }}.  {{ index.name }} - {{ index.ar[0].name }}
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <router-view></router-view>
            </scroll>
        </div>
    </transition>
</template>

<script>
import { getRank } from "api/rank.js"
import Scroll from "base/scroll/scroll"
import { mapMutations } from "vuex"
const rank_number_api = [0, 1, 2, 3, 4, 22, 23]
export default ({
    name: 'rank',
    components: {
        Scroll
    },
    data() {
        return {
            rankList: []
        }
    },
    created() {
        this._getRank()
    },
    methods: {
        selectRank(item) {
            this.$router.push({
                path: `/rank/${item.id}`
            })
            this.setRank(item)
        },
        ...mapMutations({
            setRank: 'SET_RANK'
        }),
        _getRank() {
            for (let index = 0; index < rank_number_api.length; index++) {
                const element = rank_number_api[index];
                getRank(element).then((res) => {
                    let list = res.data.playlist
                    // list.rank = res.data.playlist.tracks.slice(0,3)
                    this.rankList.push(list)
                    // console.log(this.rankList)
                    list.rank = res.data.playlist.tracks.slice(0,3)  // push 后面执行也能到对应的数据中/
                })
            }
        }
    }
})
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"
    // .fade-enter-active, .fade-leave-active 
    //     transition all 0.5s
    // .fade-enter, .fade-leave-to 
    //     transform translate3d(50%,0,0)
    //     opacity 0
    .v-enter-active,.v-leave-active
        transition all 0.3s
    .v-enter,.v-leave-to
        transform translate3d(50%,0,0)
        opacity: 0;
    .rank
        width 100%
        position fixed
        top 88px
        bottom 0px
        .list
            height 100%
            padding-top 10px
            overflow hidden
            .item
                display flex
                margin 0 10px
                border-bottom 1px solid #e4e4e4
                padding 3px 0
                .icon 
                    flex 0 0 100px
                    width 100%
                    height 100%
                .songList
                    flex 1
                    display flex
                    flex-direction column
                    justify-content  center
                    padding 0 20px
                    color $color-text 
                    font-size $font-size-small-x
                    .song 
                        line-height 30px
                        text-overflow ellipsis
                        overflow hidden
                        white-space nowrap
</style>
