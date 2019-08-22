import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible';
import {get, post, put} from './http'

import {Loading, Toast} from 'vant'
Vue.use(Loading)
Vue.use(Toast)

const devUrl = ''
const proUrl = ''

const url = process.env.NODE_ENV !== 'production' ? devUrl : proUrl
process.env.NODE_ENV !== 'production' ? '' : axios.defaults.baseURL = url


axios.defaults.timeout = 100000;
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8'
axios.interceptors.request.use((config) => {
    store.commit('loading', true)
    config.headers['token'] = localStorage.getItem('token') // 请求头带上token
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});
axios.interceptors.response.use((response) => {
    // Do something before request is sent
    if (response.data && response.data.code !== 0) {
        Toast(response.data.msg)
        if (response.data.code === 401) { // 401, token失效
            sessionStorage.removeItem('token')
            router.push({name: 'login'})
        }
    }
    store.commit('loading', false)

    return response;
}, (error) => {
    console.log(error)
    store.commit('loading', false)

    return Promise.reject(error);
})
Vue.config.productionTip = false

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$put = put

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
