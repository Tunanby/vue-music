<template>
    <div class="recommend">
        <div class="recommend-conner">
            <div class="slider-wrapper">
                <slider></slider>
            </div>
        </div>
    </div>
</template>

<script>
import Slider from "base/slider/slider"
export default ({ 
    name: 'recommend',
    components:{
        Slider
    }
})
</script>

<style scoped>

</style>
