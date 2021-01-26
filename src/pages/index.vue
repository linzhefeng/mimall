<template>
    <div>
        index
    </div>
</template>

<script>
export default {
    data() {
        return {
            res: {}
        }
    },
    methods: {},
    mounted() {
        this.axios.get('user/login').then(res => {
            this.res = res
        })
    }
}
</script>
<style></style>
