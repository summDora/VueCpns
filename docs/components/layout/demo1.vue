<template>
  <f-row>
    <f-col :span="24"><div class="grid-content bg-purple" /></f-col>
  </f-row>
  <f-row>
    <f-col :span="12"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="12"><div class="grid-content bg-purple-light" /></f-col>
  </f-row>
  <f-row>
    <f-col :span="8"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="8"><div class="grid-content bg-purple-light" /></f-col>
    <f-col :span="8"><div class="grid-content bg-purple" /></f-col>
  </f-row>
  <f-row>
    <f-col :span="6"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="6"><div class="grid-content bg-purple-light" /></f-col>
    <f-col :span="6"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="6"><div class="grid-content bg-purple-light" /></f-col>
  </f-row>
  <f-row>
    <f-col :span="4"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="4"><div class="grid-content bg-purple-light" /></f-col>
    <f-col :span="4"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="4"><div class="grid-content bg-purple-light" /></f-col>
    <f-col :span="4"><div class="grid-content bg-purple" /></f-col>
    <f-col :span="4"><div class="grid-content bg-purple-light" /></f-col>
  </f-row>
</template>

<style lang="less">
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
.bg-purple {
  background: #9fd7ff;
}
.bg-purple-light {
  background: #9fd7ff;
  filter: opacity(0.5);
}
</style>
