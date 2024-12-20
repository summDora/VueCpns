<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
</script>

# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局

使用列创建基础网格布局。

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。

<preview comp-name="layout" demo-name="demo1">
  <demo1/>
</preview>

## 分栏间隔

支持列间距。

行提供 `gutter` 属性来指定列之间的间距，其默认值为0。

<preview comp-name="layout" demo-name="demo2">
  <demo2/>
</preview>

## 混合布局

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `small` 和 `mini` 两种值。

<preview comp-name="layout" demo-name="demo3">
  <demo3/>
</preview>

## 列偏移

使用 `icon` 属性传入图标的名称，所有的 icon 名称 请查看 `Icon` 组件

<preview comp-name="layout" demo-name="demo4">
  <demo4/>
</preview>

## 对齐方式

## 响应式布局

## 基于断点的隐藏类

## Row API

### Row Attributes

### Row Slots

## Col API
