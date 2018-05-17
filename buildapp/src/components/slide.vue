<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../assets/images/img_1.jpg"></div>
      <div class="swiper-slide"><img src="../assets/images/img_2.jpg"></div>
      <div class="swiper-slide"><img src="../assets/images/img_3.jpg"></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>
<script>
import Swiper from '../../static/js/swiper.min.js'
export default {
  mounted () {
    this.slide()
  },
  methods: {
    slide () {
      Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: 2000,
        speed: 500,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        observer: true,
        observeParents: true
      })
    }
  }
}

</script>
<style scoped>
@import '../../static/css/swiper.min.css';
.swiper-slide img {
  width: 8.0rem;
  height: 4.8rem
}

</style>
