<template>
    <transition>
        <music-list :songs="songs" :bgImg="bgImg"></music-list> 
        <!-- <div class="rank-detail">1</div> -->
    </transition>
</template>

<script>
import { mapGetters } from "vuex"
import MusicList from "components/music-list/music-list"
export default {
    data(){
        return {
            songs: []
        }
    },
    components: {
        MusicList
    },
    computed: {
        ...mapGetters([
            'rank'
        ]),
        bgImg() {
            return this.rank.coverImgUrl
        }
    },
    created() {
        this.getSongs()
    },
    methods: {
        getSongs() {
            if (!this.rank.id) {
                this.$router.push('/rank')
                return
            }
            let ary = this.rank.tracks
            let result = []
            ary.forEach((musicData) => {
                result.push(this._rankSetting(musicData))
            })
            this.songs = result
        },
        _rankSetting(musicData){
            return ({
                id: musicData.id,
                singer: musicData.ar[0].name,
                name: musicData.name,
                ablum: musicData.al.name
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
    .v-enter-active,.v-leave-active
        transition all 0.3s
    .v-enter,.v-leave-to
        transform translate3d(100%,0,0)
    .rank-detail 
        position fixed
        width 100% 
        z-index 100
        top 0
        left 0
        bottom 0
        right 0
        background $color-background
</style>