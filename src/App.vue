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
            try {
                const res = await this.axios.get('/user')
                if (res) {
                    this.$store.dispatch('saveUserName', res.username)
                }
            } catch (error) {}
            //    TODO 保存到vuex里面
        },
        getCartCount() {
            this.axios
                .get('/carts/products/sum')
                .then((res = 0) => {
                    this.$store.dispatch('saveCartCount', res)
                })
                .catch(() => {})
        }
    }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/btn.scss';
</style>
