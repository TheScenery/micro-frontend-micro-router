import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

let instance = null;
function render(props = {}) {
  const { container } = props;
  instance = createApp(App);
  instance.use(router);
  instance.use(ElementPlus);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
  }
  
  export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
  }
  export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
  }
  export async function unmount() {
    console.log('[vue] vue app unmounted');
    instance.unmount();
    instance = null;
  }
