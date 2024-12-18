import DefaultTheme from "vitepress/theme";
import FcpnsUI from "@fhlcpns/components";
import "@fhlcpns/theme-chalk/index.less";
import Preview from './preview/index.vue'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(FcpnsUI);
    app.component('preview', Preview);
  },
};
