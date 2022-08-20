import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { DatePicker, Button } from 'ant-design-vue';

const app = createApp(App);
app.use(DatePicker);
app.use(Button);

app.mount('#app')
