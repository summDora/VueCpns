<template>
  <div class="preview">
    <slot />
    <div class="code" :class="{ show_code: showCode }">
      <div class="code__reference">
        <div class="copy_btn">COPY!</div>
        <highlightjs autodetect :code="sourceCode" />
      </div>
    </div>
    <div @click="state.showCode = !state.showCode" class="opt_btn">
      {{ showCode ? "隐藏" : "展示" }}代码
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, toRefs } from "vue";
import "highlight.js";
const props = defineProps({
  compName: "",
  demoName: "",
});
const state = reactive({
  sourceCode: "",
  showCode: false,
  demoHtml: "",
});
// 获取组件代码 字符串转译

const componentCode = async () => {
  const data = await import(
    `../../../components/${props.compName}/${props.demoName}.vue?raw`
  );
  state.sourceCode = data.default;
};
onMounted(() => {
  componentCode();
});

const { sourceCode, showCode, demoHtml } = toRefs(state);
</script>

<style scoped lang="less">
.preview {
  font-size: 12px;
  .opt_btn {
  position: relative;
  height: 46px;
  line-height: 46px;
  color: #666;
  text-align: center;
  background: #f7f7f7;
  cursor: pointer;
  z-index: 100;
  &:hover {
    background: var(--f-hover-color);
  }
}
.code {
  border-top: 1px solid #efefef;
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
  .code__reference {
    overflow: hidden;
  }
  .copy_btn {
    color: var(--f-primary);
    float: right;
    margin-top: 12px;
    padding: 2px 8px;
    border-radius: var(--f-button-radius);
    cursor: pointer;
    &:hover {
      background: var(--f-hover-color);
    }
  }
}
.show_code {
  grid-template-rows: 1fr;
}
}

</style>
