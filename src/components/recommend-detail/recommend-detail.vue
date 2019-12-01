<template>
    <transition>
        <music-list
            :songs="songs"
            :bgImg="bgImg"
        ></music-list>
        <!-- <div class="recommend-detail">recommend-detail</div> -->
    </transition>
</template>

<script>
import { mapGetters } from "vuex"
import { getRecommendDetail } from "api/recommend"
import { ERR_OK } from "common/js/config"
import MusicList from "components/music-list/music-list"
export default {
   name: 'recommend-detail',
   data() {
       return {
           songs: []
       }
   },
   components: {
       MusicList
   },
   computed: {
        ...mapGetters([
           'recommend'
        ]),
        bgImg() {
           return this.recommend.picUrl
        }
   },
   created() {
       this._getRecommendDetail()
   },
   methods: {
       _getRecommendDetail() {
           if (!this.recommend.id) {
               this.$router.push('/recommend')
               return
           }
           getRecommendDetail(this.recommend.id).then((res)=> {
               if (res.data.code === ERR_OK) {
                   this.songs = this._recommendSetting(res.data.playlist.tracks)
               }
           })
        },
        _recommendSetting(list) {
            let result = []
            list.forEach((musciData) => {
                result.push(this._fromMusicData(musciData))
            })
            return result
        },
        _fromMusicData(musciData) {
            return ({
                id: musciData.id,
                singer: musciData.ar[0].name,
                name: musciData.name,
                ablum: musciData.al.name
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
        .recommend-detail
            position fixed
            width 100%
            top 0
            left 0
            bottom 0
            right 0
            z-index 100
            background $color-background
</style>
