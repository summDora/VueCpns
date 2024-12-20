<script setup lang="ts">
// 按需引用
// import { FButton } from "@fhlcpns/components/button";
</script>

<template>
  <div>
    <div>
      1
      <FButton></FButton>
      <FButton>AA</FButton>
    </div>
    <div class="divp">
      <div class="diva"></div>
      <div class="divd">
        <div class="divb">11112232312hhh11112232312hhh11112232312hhh11112232312hhhv11112232312hhh11112232312hhh11112232312hhh11112232312hhhv11112232312hhh11112232312hhh11112232312hhh11112232312hhhv11112232312hhh11112232312hhh11112232312hhh11112232312hhhv</div>
      </div>
      <!-- <div class="divc"></div> -->
    </div>
  </div>
</template>

<style lang="less" scoped>
.divp {
  background-color: rgb(231, 7, 15);
  .diva {
    width: auto;
    background-color: rgb(21, 232, 232);
    height: 30px;
    box-sizing: border-box;
  }
  .divb {
    width: 140%;
    background-color: palevioletred;
    height: 130px;
  }
  .divd {
    width: 100%;
    overflow-x: scroll;
  }
  .divc {
    height: 80px;
    background-color: transparent;
  }
}
</style>
