<template>
    <div>
        order
        <order-header></order-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
import orderHeader from '../components/orderHeader.vue'
export default {
    components: { orderHeader, NavFooter },
    data() {
        return {}
    },
    methods: {}
}
</script>
<style></style>
