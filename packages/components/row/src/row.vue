<template>
  <div class="f-row" :style="style">
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Props } from "./row";
defineOptions({
  name: "f-row",
});
const props = defineProps(Props);

const style = computed(() => {
  const { gutter, justify, align } = props;
  console.log('🚀 ~ style ~ props:', props)
  return {
    gap: gutter + "px",
    justifyContent: justify || "start",
    alignItem: align || "flex-start",
  };
});
</script>
