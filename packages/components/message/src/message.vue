<template>
  <div class="f-message" :style="style">
    {{ message }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Props } from "./ message·";
defineOptions({
  name: "f-message",
});
const props = defineProps(Props);

// const style = computed(() => {
//   const { gutter, justify, align } = props;
//   return {
//     gap: gutter + "px",
//     justifyContent: justify ,
//     alignItem: align,
//   };
// });
</script>
