# VueCpns

手把手封装 vue 组件库，从封装到发布安装流程，供学习使用

## 安装本地插件常见问题

- 如：pnpm i @fhlcpns/utils -w 没效果
- 可以使用 pnpm i @fhlcpns/utils --workspace
- "dependencies"表示开发和上线都需要的第三方包，用-S
- "devdependencies"表示仅在开发阶段需要的第三方包，用-D

## 代码提交规范使用 cz-customizable

npm run commit 进入 cz-config 文件配置的 commit 选项

## docs 文档编写

- 使用 vitepress 可以高效搭建[vitepress](https://vitepress.dev/)
- 或者 vuepress [vuepress - Vue 驱动的静态网站生成器](https://www.vuepress.cn/)
- 展示示例代码 [vite 将资源引入为字符串](https://cn.vitejs.dev/guide/assets#importing-asset-as-string)
- 
