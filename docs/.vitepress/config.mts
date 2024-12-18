import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fsu Design Vue",
  description: "二次封装 by hl.fang",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/components/button/" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          // { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "组件", link: "/components/button/" },
          { text: "示例", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/summDora/VueCpns" },
    ],
  },
});
