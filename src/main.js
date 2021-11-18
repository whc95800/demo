import {createApp} from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);
app.config.productionTip = false;
app.use(store).use(router).use(Antd).mount('#app')
