<template>
    <transition>
        <music-list
            :songs="songs"
            :title="title"
            :bgImg="bgImg"
        ></music-list>
    </transition>
</template>

<script>
import { mapGetters } from "vuex"
import { getSingerDetail } from "api/singer"
import { songSetting } from "common/js/song"
import MusicList from "components/music-list/music-list"
export default {
    name : "singer-detail",
    components: {
        MusicList
    },
    data() {
        return {
            songs: []
        }
    },
    computed: {
        ...mapGetters([ // 取数据
            'singer'
        ]),
        title() {
           return this.singer.name
        },
        bgImg() {
            return this.singer.img
        }
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
                console.log(this.singer, '11')
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
</style>
