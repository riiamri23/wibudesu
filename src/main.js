import { createApp} from 'vue'
import App from './App.vue'
import './style/app.css'
import './assets/tailwind.css'
import router from './router/router'


// import VuePlayerVideo from 'vue3-player-video'
// import {VideoPlayer} from 'vue-videojs7'

createApp(App)
    .use(router)
    // .use(VuePlayerVideo)
    // .use(VideoPlayer)
    .mount('#app')
