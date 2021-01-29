<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    mounted() {
        this.getUser()
        this.getCartCount()
    },
    methods: {
        async getUser() {
            await this.axios.get('/user')
            //    TODO 保存到vuex里面
        },
        async getCartCount() {
            await this.axios.get('/carts/products/sum')
        }
    }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/btn.scss';
</style>
