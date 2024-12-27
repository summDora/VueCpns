<template>
  <f-row :gutter="20">
    <f-button :plain="true" type="primary" @click="open">Show message</f-button>
    <f-button :plain="true" type="danger" @click="openVn">VNode</f-button>
  </f-row>
</template>

<script lang="ts" setup>
// import { h } from 'vue'
// import { ElMessage } from 'element-plus'

const open = () => {
  // ElMessage('This is a message.')
};

const openVn = () => {
  //   ElMessage({
  //     message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
  //       h('span', null, 'Message can be '),
  //       h('i', { style: 'color: teal' }, 'VNode'),
  //     ]),
  //   })
};
</script>
