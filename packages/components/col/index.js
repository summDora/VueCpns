import col from "./src/col.vue";

col.install = (app) => {
  app.components(col.name, col);
};
// 两种导入方式兼容
export const FCol = col;

export default FCol;
