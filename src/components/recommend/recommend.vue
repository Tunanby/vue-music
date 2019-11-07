<template>
    <div class="recommend">
        <div class="recommend-conner">
            <div class="slider-wrapper">
                <slider></slider>
            </div>
            <div class="recommend-list">
         
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "base/slider/slider"
import { getRecommendList } from "api/recommend"
import { ERR_OK } from "common/js/config"
export default ({ 
    name: 'recommend',
    data(){
        return {
            recommendList: []
        }
    },
    created() {
        this._getRecommendList()
    },
    methods: {
        _getRecommendList() {
            getRecommendList().then((res) => {
                if (res.status === ERR_OK) {
                    this.recommendList = res.data.result
                    console.log(this.recommendList)
                }
            })
        }
    },
    components:{
        Slider
    }
})
</script>

<style lang="stylus" scoped>

</style>
