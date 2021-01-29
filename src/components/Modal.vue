<template>
    <transition name="slide">
        <!-- name就是为类指定前缀 -->
        <div class="modal" v-show="showModal">
            <div class="mask"></div>
            <div class="modal-dialog">
                <div class="modal-header">
                    <span>标题</span>
                    <a
                        href="javascript:;"
                        class="icon-close"
                        @click="$emit('cancle')"
                    ></a>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer ">
                    <a
                        href="javascript:;"
                        class="btn"
                        v-if="btnType == 1"
                        @click="$emit('submit')"
                        >确定</a
                    >
                    <a
                        href="javascript:;"
                        class="btn"
                        v-if="btnType == 2"
                        @click="$emit('cancle')"
                        >取消</a
                    >
                    <div class="btn-group" v-if="btnType == 3">
                        <a href="javascript:;" class="btn">确定</a>
                        <a href="javascript:;" class="btn">取消</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: {
        modalType: {
            type: String,
            default: 'form'
        },
        title: String,
        btnType: String,
        sureText: {
            type: String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '确定'
        },
        showModal: Boolean
    },
    methods: {}
}
</script>
<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';

.modal {
    // 所有都加上动画效果
    transition: all 0.5s;
    &.slide-enter {
        top: -100%;
    }
    &.slide-enter-to {
        top: 0;
    }
    &.slide-leave-to {
        top: -100%;
    }
    @include position(fixed);
    z-index: 100;
    .mask {
        @include position(fixed);
        background-color: $colorI;
        opacity: 0.5;
    }
    .modal-dialog {
        @include position(absolute, 40%, 50%, 660px, auto);
        background-color: $colorG;
        // x y
        transform: translate(-50%, -50%);
        .modal-header {
            height: 60px;
            background-color: $colorJ;
            padding: 0 25px;
            line-height: 60px;
            font-size: $fontI;
            .icon-close {
                @include positionImg(
                    absolute,
                    23px,
                    25px,
                    14px,
                    14px,
                    '/imgs/icon-close.png'
                );
                transition: transform 0.3;
                &:hover {
                    transform: scale(1.5);
                }
            }
        }
        .modal-body {
            // 上 左右 下
            padding: 42px 40px 54px;
            font-size: 14px;
        }
        .modal-footer {
            height: 82px;
            line-height: 82px;
            text-align: center;
            background-color: $colorJ;
        }
    }
}
</style>
