<template>
    <div>
        <order-header></order-header>
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
