import DefaultTheme from "vitepress/theme";
import FcpnsUI from "@fhlcpns/components";
import "@fhlcpns/theme-chalk/index.less";
import Preview from "./preview/index.vue";
import "highlight.js/styles/base16/summerfruit-light.css"; // 主题
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "./style/var.less";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(FcpnsUI);
    app.use(hljsVuePlugin);
    app.component("preview", Preview);
  },
};
