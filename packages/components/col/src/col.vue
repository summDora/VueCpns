<template>
  <div class="f-col" :style="style">
    <slot />
  </div>
</template>

<script setup>
import { Props } from "./col";
defineOptions({
  name: "f-col",
});
const props = defineProps(Props);

const style = computed(() => {
  const { span } = props;
  const percent = span / 24;
  return {
    maxWidth: percent * 100 + "%",
    flex: `0 0 ${percent * 100 + "%"}`,
  };
});
</script>
