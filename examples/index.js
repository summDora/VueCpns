import { createApp } from "vue";
import App from "./app.vue";


const app = createApp(App);

import FcpnsUI from "@fhlcpns/components";
// 全局注册 引用 
app.use(FcpnsUI);


app.mount("#app");
