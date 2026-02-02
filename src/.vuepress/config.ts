import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "AI悦创·Python一对一辅导",
  description: "跟 AI悦创一起学习 Python 编程，实现你的编程梦想！官方网站：https://bornforthis.cn",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});