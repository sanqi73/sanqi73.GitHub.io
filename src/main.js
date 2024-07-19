import { createApp } from "vue";
import naive from "naive-ui";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue"; // 导入 App.vue 组件

const app = createApp(App);
app.use(naive);
app.mount("#app");
