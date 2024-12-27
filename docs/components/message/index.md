<script setup>
import demo1 from './demo1.vue'
</script>

# Message 消息通知

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

从顶部出现，3 秒后自动消失。

Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释。 文末有 options 列表，可以结合 Notification 的文档理解它们。 Element Plus 注册了一个全局的 $message 方法用于调用。 Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

<preview comp-name="layout" demo-name="demo1">
  <demo1/>
</preview>
