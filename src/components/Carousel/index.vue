<template>
    <div class="swiper-container" id="mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="carouse in carouselList" :key="carouse.id">
                <img :src="carouse.imgUrl" />
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import "swiper/swiper-bundle.css"
import Swiper, { Navigation, Pagination, Autoplay } from "swiper"

Swiper.use([Navigation, Pagination, Autoplay])

export default {
    name: "Carousel",
    props: {
        carouselList: {
            type: Array,
            required: true,
        },
    },
    watch: {
        carouselList() {
            this.$nextTick(() => {
                new Swiper(".swiper-container", {
                    loop: true,
                    autoplay: true,
                    // If we need pagination
                    pagination: {
                        el: ".swiper-pagination",
                    },

                    // Navigation arrows
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                })
            })
        },
    },
}
</script>

<style lang="less" scoped>
</style>
