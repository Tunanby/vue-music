<template>
    <div class="loading">
        <img src="./loading.gif" alt="loading" width="40" height="40">
        <p class="desc"> {{ title }} </p>
    </div>
</template>

<script>
export default {
    name: "loading",
    props: {
        title: {
            type: String,
            default: "正在载入..."
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import "~common/stylus/variable"
    .loading
        width 100%
        text-align center
        .desc
            line-height 20px
            color $color-text-l 
            font-size $font-size-small
</style>
