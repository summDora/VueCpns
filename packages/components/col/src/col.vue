<template>
  <div class="f-col" :style="style">
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Props } from "./col";
defineOptions({
  name: "f-col",
});
const props = defineProps(Props);

const style = computed(() => {
  const { span,offset } = props;
  const percent = span / 24;
  const offpercent = offset / 24;
  return {
    maxWidth: percent * 100 + "%",
    flex: percent * 100 ,
    marginLeft:offpercent * 100 +"%"
  };
});
</script>
