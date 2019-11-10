<template>
  <div class="slider">
    <swiper :options="swiperOption" ref="mySwiper"  v-if="bannerList.length">
      <!-- slides -->
      <swiper-slide v-for="(item,key) of bannerList" :key="key">
        <img :src="item.imageUrl" alt="banner" class="slider-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { getBanner }  from "../../api/recommend"
import { ERR_OK } from "../../common/js/config";
export default ({
  name: 'slider',
  data() {
    return {
      bannerList: [],
      swiperOption: {  // some swiper options/callbacks
        loop: true, // 循环模式选项
        autoplay: {
          delay: 4000
        },
        pagination: { // 如果需要分页器
          el: '.swiper-pagination',
        }
      }
    }
  },
  created () {
    this._getBanner()
  },
  methods: {
    _getBanner() {
      getBanner().then((res)=>{
        if (res.status == ERR_OK) {
          this.bannerList = res.data.banners.slice(1)
        }
      })
    }
  }
})
</script>

<style scoped lang="stylus">
@import '~common/stylus/variable'
.slider >>> .swiper-pagination-bullet
  background $color-background
  opacity 0.9
.slider >>> .swiper-pagination-bullet-active
  background $color-theme
.slider-img
  width 100%
</style> 
