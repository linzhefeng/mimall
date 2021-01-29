<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item, i) in menuList" :key="i">
                                    <li v-for="(sub, j) in item" :key="j">
                                        <a
                                            :href="
                                                sub
                                                    ? '/#/product/' + sub.id
                                                    : ''
                                            "
                                        >
                                            <img
                                                :src="
                                                    sub
                                                        ? sub.img
                                                        : '/imgs/item-box-1.png'
                                                "
                                                alt=""
                                            />
                                            {{ sub ? sub.name : '小米9' }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            <div class="children">
                                <ul v-for="(item, i) in dynMenuList" :key="i">
                                    <li v-for="(obj, j) in item" :key="j">
                                        <a :href="'/#/product/' + obj.id">
                                            <img :src="obj.mainImage" alt="" />
                                            {{ obj.name }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="item in slideList" :key="item.id">
                        <a :href="'/#/product/' + item.id"
                            ><img :src="item.img" alt=""
                        /></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a
                    v-bind:href="'/#/product/' + item.id"
                    v-for="(item, index) in adsList"
                    v-bind:key="index"
                >
                    <img v-lazy="item.img" alt="" />
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img v-lazy="'/imgs/banner-1.png'" alt=""
                /></a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35">
                            <!-- 指令下放的是变量 -->
                            <img v-lazy="'/imgs/mix-alpha.jpg'" alt="" />
                        </a>
                    </div>
                    <div class="list-box">
                        <div
                            class="list"
                            v-for="(arr, i) in phoneList"
                            :key="i"
                        >
                            <div class="item" v-for="(item, j) in arr" :key="j">
                                <span
                                    :class="j % 2 == 0 ? 'new-pro' : 'kill-pro'"
                                    >新品</span
                                >
                                <div class="item-img">
                                    <img v-lazy="item.mainImage" alt="" />
                                </div>
                                <div class="item-info">
                                    <h3>{{ item.name }}</h3>
                                    <p>{{ item.subtitle }}</p>
                                    <p class="price" @click="addCart(item.id)">
                                        {{ item.price }} 元
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <modal
            title="提示"
            sureText="查看购物车"
            btnType="1"
            modalType="middle"
            :showModal="showModal"
            @submit="goToCart"
            @cancle="showModal = false"
        >
            <template v-slot:body>
                <div>
                    sss
                </div>
            </template>
        </modal>
    </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar.vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'
import Modal from '../components/Modal.vue'

export default {
    data() {
        return {
            showModal: false,
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
            ],
            menuList: [
                [
                    {
                        id: 30,
                        img: '/imgs/item-box-1.png',
                        name: '小米CC9'
                    },
                    {
                        id: 31,
                        img: '/imgs/item-box-2.png',
                        name: '小米8青春版'
                    },
                    {
                        id: 32,
                        img: '/imgs/item-box-3.jpg',
                        name: 'Redmi K20 Pro'
                    },
                    {
                        id: 33,
                        img: '/imgs/item-box-4.jpg',
                        name: '移动4G专区'
                    }
                ],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
            ],
            dynMenuList: [],
            adsList: [
                {
                    id: 33,
                    img: '/imgs/ads/ads-1.png'
                },
                {
                    id: 48,
                    img: '/imgs/ads/ads-2.jpg'
                },
                {
                    id: 45,
                    img: '/imgs/ads/ads-3.png'
                },
                {
                    id: 47,
                    img: '/imgs/ads/ads-4.jpg'
                }
            ],
            phoneList: [
                [1, 1, 1, 1],
                [1, 1, 1, 1]
            ]
        }
    },
    components: {
        ServiceBar,
        Swiper,
        SwiperSlide,
        Modal
    },

    methods: {
        async getProductList() {
            const res = await this.axios.get('/products', {
                params: {
                    categoryID: '100012',
                    pageSize: 27
                }
            })
            res.list.splice(0, 4)
            for (let i = 0; i < 6; i++) {
                let temp = res.list.splice(0, 4)
                this.dynMenuList.push(temp)
            }
        },
        async getPhoneList() {
            const res = await this.axios.get('/products', {
                params: {
                    categoryID: 100012,
                    pageSize: 12
                }
            })
            // 因为接口前几个数据有问题,所以要截掉
            res.list.splice(0, 4)
            this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)]
        },
        async addCart(id) {
            this.showModal = true
            // try {
            //     await this.axios.post('/carts', {
            //         productId: id,
            //         selected: true
            //     })
            // } catch (error) {
            //     alert(error)
            // }
        },
        goToCart() {
            // 通过push就不用加#
            this.$router.push('/cart')
        }
    },
    mounted() {
        this.getProductList()
        this.getPhoneList()
    }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.index {
    .swiper-box {
        .nav-menu {
            position: absolute;
            width: 264px;
            height: 451px;
            z-index: 9;
            // padding: 26px 0;
            background-color: #55585a52;
            box-sizing: border-box;
            .menu-wrap {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                height: 100%;
                .menu-item {
                    height: 50px;
                    line-height: 50px;
                    &:hover {
                        background-color: $colorA;
                        .children {
                            display: block;
                        }
                    }
                    a {
                        display: block;
                        position: relative;
                        font-size: 16px;
                        color: #ffffff;
                        padding-left: 30px;
                        &::after {
                            content: ' ';
                            @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
                            position: absolute;
                            right: 30px;
                            top: 17.5px;
                        }
                    }
                    .children {
                        display: none;
                        width: 962px;
                        height: 451px;
                        background: $colorG;
                        position: absolute;
                        top: 0;
                        left: 264px;
                        border: 1px solid $colorH;
                        ul {
                            display: flex;
                            // justify-content: space-between;
                            height: 75px;
                            li {
                                height: 75px;
                                line-height: 75px;
                                // flex: 1;
                                width: 25%;
                                a {
                                    color: $colorB;
                                    font-size: 14px;
                                    img {
                                        width: 42px;
                                        height: 35px;
                                        vertical-align: middle;
                                        margin-right: 15px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .swiper-container {
            height: 451px;
            img {
                width: 100%;
                height: 100%;
            }
            .swiper-button-prev {
                left: 274px;
            }
        }
    }
    .ads-box {
        @include flex();
        margin-top: 14px;
        margin-bottom: 31px;
        a {
            width: 296px;
            height: 167px;
        }
    }
    .banner {
        margin-bottom: 50px;
    }
    .product-box {
        background-color: $colorJ;
        padding: 30px 0 50px;
        h2 {
            font-size: $fontF;
            height: 21px;
            line-height: 21px;
            color: $colorB;
            margin-bottom: 20px;
        }
        .wrapper {
            display: flex;
            .banner-left {
                margin-right: 16px;
                img {
                    width: 224px;
                    height: 619px;
                }
            }
            .list-box {
                .list {
                    @include flex();
                    width: 986px;
                    margin-bottom: 14px;
                    &:last-child {
                        margin-bottom: 0;
                    }
                    .item {
                        width: 236px;
                        height: 302px;
                        background-color: $colorG;
                        text-align: center;
                        span {
                            display: inline-block;
                            width: 67px;
                            height: 24px;
                            font-size: 14px;
                            line-height: 24px;
                            color: $colorG;
                            &.new-pro {
                                background-color: #7ecf68;
                            }
                            &.kill-pro {
                                background-color: #e82626;
                            }
                        }
                        .item-img {
                            img {
                                width: 100%;
                                height: 195px;
                            }
                        }
                        .item-info {
                            h3 {
                                font-size: $fontJ;
                                color: $colorB;
                                line-height: $fontJ;
                                font-weight: bold;
                            }
                            p {
                                color: $colorD;
                                line-height: 13px;
                                margin: 6px auto 13px;
                            }
                            .price {
                                color: #f20a0a;
                                font-size: $fontJ;
                                font-weight: bold;
                                cursor: pointer;
                                &:after {
                                    @include bgImg(
                                        22px,
                                        22px,
                                        '/imgs/icon-cart-hover.png'
                                    );
                                    content: ' ';
                                    margin-left: 5px;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
