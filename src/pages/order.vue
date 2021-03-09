<template>
    <div>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavFooter from '../components/NavFooter.vue'
import OrderHeader from '../components/OrderHeader'
export default {
    components: { OrderHeader, NavFooter },
    data() {
        return {}
    },
    methods: {}
}
</script>
<style></style>
