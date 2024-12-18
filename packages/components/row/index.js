import row from "./src/row.vue";

row.install = (app) => {
  app.components(row.name, row);
};
// 两种导入方式兼容
export const FRow = row;

export default FRow;
