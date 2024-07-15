// import { createApp } from 'vue/dist/vue.esm-bundler.js'
// const app = createApp({
//     components: {
//         App
//     },
//     template: `
//     <App/>
//     `
// })

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App)
app.mount("#app")