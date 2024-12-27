<template>
  <f-row :gutter="20">
    <f-col :span="16"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="8"><div class="grid-content bg-purple" /></f-col>
  </f-row>
  <f-row :gutter="20">
    <f-col :span="8"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="8"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="4"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="4"><div class="grid-content bg-purple" /></f-col>
  </f-row>
  <f-row :gutter="20">
    <f-col :span="4"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="16"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="4"><div class="grid-content bg-purple" /></f-col>
  </f-row>
</template>

<style>
.f-row {
  margin-bottom: 20px;
}
.f-row:last-child {
  margin-bottom: 0;
}
.f-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
