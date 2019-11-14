<template>
    <div class="rank">

    </div>
</template>

<script>
import { getRank } from "api/rank.js"
const rank_number_api = [0, 1, 2, 3, 4, 22, 23]

export default ({
    name: 'rank',
    data() {
        return {
            rankList: []
        }
    },
    created() {
        this._getRank()
    },
    methods: {
        _getRank() {
            for (let index = 0; index < rank_number_api.length; index++) {
                const element = rank_number_api[index];
                getRank(element).then((res) => {
                    let list = res.data.playlist
                    list.rank = res.data.playlist.tracks.slice(0,3)
                    this.rankList.push(list)
                    // list.rank = res.data.playlist.tracks.slice(0,3) push 后面执行也能到对应棠数据中/
                })
            }
        }
    }
})
</script>

<style scoped>

</style>
