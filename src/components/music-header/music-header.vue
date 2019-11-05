<template>
    <div class="music-header"> 
        <h4 class="text">小Z的音乐</h4>
        <div class="search">
            <i class="iconfont icon-search"></i>
        </div>
    </div>
</template>

<script>
export default ({
    name: 'music-header'
})
</script>

<style lang="stylus" scoped>
// 引入 stylus 
@import '~common/stylus/variable'
.music-header
  position relative
  width 100%
  height 44px
  text-align center
  background $color-theme
  .text
    font-size bold
    line-height 44px
    color $color-theme-l 
    letter-spacing 3px
  .search
    position absolute
    top 0
    right 5px
    .iconfont
      display block
      color $color-theme-l 
      font-size 20px
      padding 12px
</style>
