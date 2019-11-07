<template>
    <div class="slider">

    </div>
</template>

<script>
import { getBanner }  from "../../api/recommend"
import {ERR_OK} from "../../common/js/config";
export default ({
    name: 'slider',
    data() {
        return {
            data:  []
        }
    },
    created () {
        this._getBanner()
    },
    methods: {
        _getBanner() {
            // console.log(11,getBanner)
            getBanner().then((res)=>{
                console.log(res)
            })
        }
    }
})
</script>

<style scoped>

</style>
