import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'

// mock开关 不是所有情况都要mock 只是在开发阶段需要
const mock = false
if (mock) {
    // import是预加载 不要用import
    // require执行的时候才会加载
    require('./mock/api')
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 错误拦截
let path = location.hash
axios.interceptors.response.use(function(response) {
    let res = response.data
    if (res.status == 0) {
        return res.data
    } else if (res.status == 10) {
        if (path != '#/index' && path != '#/') {
            window.location.href = '/#/login'
        }
        return Promise.reject('请登录')
    } else {
        // alert(res.msg)
        return Promise.reject(res.msg)
    }
})

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
    // 图片加载的动画
    loading: '/imgs/loading-svg/loading-bars.svg'
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
