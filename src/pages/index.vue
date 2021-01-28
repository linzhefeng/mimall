<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="item in slideList" :key="item.id">
                        <a :href="'/product/' + item.id"
                            ><img :src="item.img" alt=""
                        /></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar.vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'

export default {
    data() {
        return {
            swiperOptions: {
                // https://www.swiper.com.cn/api/pagination/363.html
                loop: true,
                autoplay: true,
                effect: 'cube',
                pagination: {
                    el: '.swiper-pagination',
                    // dynamicBullets: true,
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            slideList: [
                {
                    id: '42',
                    img: '/imgs/slider/slide-1.jpg'
                },
                {
                    id: '45',
                    img: '/imgs/slider/slide-2.jpg'
                },
                {
                    id: '46',
                    img: '/imgs/slider/slide-3.jpg'
                },
                {
                    id: '99999',
                    img: '/imgs/slider/slide-4.jpg'
                },
                {
                    id: '88888',
                    img: '/imgs/slider/slide-5.jpg'
                }
            ]
        }
    },
    components: {
        ServiceBar,
        Swiper,
        SwiperSlide
    },
    methods: {}
}
</script>
<style lang="scss">
.index {
    .swiper-box {
        .swiper-container {
            height: 451px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
