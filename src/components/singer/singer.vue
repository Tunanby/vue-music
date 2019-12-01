<template>
    <transition>
        <div class="singer">
            <singer-list :data="singerList" @singer="goSingerSon"></singer-list>
             <router-view></router-view>
        </div>

    </transition>
</template>

<script>
import { getSingerList, getArtist } from "api/singer"
import SingerList from "base/singer-list/singer-list"
import { mapMutations } from "vuex"
const HOT_NAME = "热门"
const HOT_LENGTH = 10

export default ({
    name: 'singer',
    components: {
        SingerList
    },
    data() {
        return {
            singerList: []
        }
    },
    created() {
        this._getSingerList()
        this._getArtist()
    },
    methods: {
        goSingerSon(list){
            this.$router.push({
                path: `/singer/${list.mid}`
            })
            this.setSinger(list)
        },
        ...mapMutations({
            setSinger: 'SET_SINGER' //  映射成 this.setSingerr 
        }),
        _getArtist() {
            // getArtist().then((res)=>{
            //     // console.log(res,'111111111111')
            // })
        },
        _getSingerList() {
            getSingerList().then((res) => {
                if (res.code === 0) {
                    this.singerList = this._singListSettings(res.data.list)
                    // console.log(this.singerList,'2212')
                }
            })
        },
        _singListSettings(list) {
            let page = {
                hot: {
                    title: HOT_NAME,
                    lists: []
                }
            }
            list.forEach((item,index) => {
                if (index < HOT_LENGTH) {
                    page.hot.lists.push({
                        id: item.Fsinger_id,
                        mid: item.Fsinger_mid,
                        name: item.Fsinger_name,
                        img: `//y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000` 
                    })
                }
                const key = item.Findex
                if (!page[key]) {
                    page[key] = {
                        title: key,
                        lists: []
                    }
                }
                page[key].lists.push({
                    id: item.Fsinger_id,
                    mid: item.Fsinger_mid,
                    name: item.Fsinger_name,
                    img: `//y.gtimg.cn/music/photo_new/T001R150x150M000${item.Fsinger_mid}.jpg?max_age=2592000`
                })
            })
            let hot = []
            let nohot = []
            for (let k in page) {
                if (page[k].title === HOT_NAME) {
                    hot.push(page[k])
                } else if (page[k].title.match(/['a-zA-z']/)) {
                    nohot.push(page[k])
                }
            }
            // A-Z 进行排序: charCodeAt 把 字符串(a-z)转码 , sort 进行升序
            nohot.sort((a, b) => {
                return a.title.charCodeAt(0) - b.title.charCodeAt(0)
            })
            // 数组合并 concat
            return hot.concat(nohot)
        }
    },

})
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"
        .v-enter-active,.v-leave-active
            transition all 0.3s
        .v-enter,.v-leave-to
            transform translate3d(50%,0,0)
        .singer
            width 100%
            position fixed
            top 88px
            bottom 0px
</style>
