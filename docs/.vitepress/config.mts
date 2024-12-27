import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FSU Design Vue",
  description: "二次封装 by hl.fang",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/components/button/" },
    ],

    sidebar: {
      "/components/": [
        {
          text: "基本元素",
          items: [
            { text: "Icon 图标", link: "/components/button/" },
            { text: "button 按钮", link: "/components/button/" },
            { text: "layout 布局", link: "/components/layout/" },
            { text: "message 消息", link: "/components/message/" },
            { text: "Space 间距", link: "/components/button/" },
          ],
        },
        {
          text: "复杂组件",
          items: [
            // { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "九宫格", link: "/markdown-examples" },
            { text: "九宫格", link: "/markdown-examples" },
            { text: "九宫格", link: "/markdown-examples" },
            { text: "九宫格", link: "/markdown-examples" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/summDora/VueCpns" },
    ],
  },
});
