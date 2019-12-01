<template>
    <div class="tab">
        <router-link tag="div" class="item" to="/recommend">
            <span>推荐</span>
        </router-link>
        <router-link tag="div" class="item" to="/rank">
            <span>排行</span>
        </router-link>
        <router-link tag="div" class="item" to="/singer">
            <span>歌手</span>
        </router-link>
        <router-link tag="div" class="item" to="/singer">
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
export default ({
    name: 'tab'
})
</script>

<style lang="stylus">
@import "~common/stylus/variable"
.tab
    width 100%
    height 44px
    background $color-theme
    line-height 44px
    display flex 
    .item 
        flex 1
        text-align center
        color $color-theme-l
        span 
            padding-bottom 4px
        &.router-link-active
            span
                font-weight bold
                color $color-theme-l
                border-bottom 2px $color-theme-l solid
</style>
