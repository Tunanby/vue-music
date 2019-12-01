<template>
    <transition>
        <div class="singer-detail">singer detil</div>
    </transition>
</template>

<script>
import { mapGetters } from "vuex"
import { getSingerDetail } from "api/singer"
import { songSetting } from "common/js/song"
export default {
    name : "singer-detail",
    data() {
        return {
            songs: []
        }
    },
    computed: {
        ...mapGetters([ // 取数据
            'singer'
        ])
    },
    created() {
        this._getSingerDetail()
    },
    methods: {
        _getSingerDetail() {
            if (!this.singer.mid) {
                this.$router.push('/singer')
                return
            }
            getSingerDetail(this.singer.mid).then((res)=> {
                if (res.code === 0) {
                    this.songs = this._songsDetailSetting(res.data.list)
                }
                console.log(this.songs,'111')
            })
        },
        _songsDetailSetting(list) {
            let receive = []
            list.forEach((element) => {
                let { musicData } = element
                if (musicData.songid && musicData.albummid) {
                    receive.push(songSetting(musicData))
                }
            })
            return receive
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
    .singer-detail
        position fixed
        width 100%
        top 88px
        left 0
        bottom 0
        z-index 100
        background $color-background
</style>
