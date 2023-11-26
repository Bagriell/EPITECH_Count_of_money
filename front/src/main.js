import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import GAuth from 'vue-google-oauth2'


Vue.use(GAuth, {
    clientId: '25848149372-6mai5l55b30cac7rfq8aqtvnomgstsal.apps.googleusercontent.com',
    scope: 'email',
    prompt: 'consent',
    fetch_basic_profile: false
})

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
