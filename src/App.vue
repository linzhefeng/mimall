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
            const res = await this.axios.get('/user')
            //    TODO 保存到vuex里面
            this.$store.dispatch('saveUserName', res.username)
        },
        getCartCount() {
            this.axios.get('/carts/products/sum').then(res => {
                this.$store.dispatch('saveCartCount', res)
            })
        }
    }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/btn.scss';
</style>
