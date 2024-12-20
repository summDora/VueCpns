<template>
  <button
    class="f-button"
    :class="[
      `${size && 'f-button--' + size}`,
      `f-button__${type}`,
      { 'f-button--icon': icon },
      { 'is-plain': plain },
      { 'is-disabled': disabled },
      { 'is-round': round },
    ]"
    :disabled="disabled"
  >
    <i v-if="icon" :class="['f-icon', `icon-${icon}`]"></i>
    <span>
      <slot>{{ type }}</slot>
    </span>
  </button>
</template>
<script setup>
import { Props } from "./button";
defineProps(Props);
</script>