import button from "./src/button.vue";

button.install = (app) => {
  app.components(button.name, button);
};
// 两种导入方式兼容
export const FButton = button;
export default FButton;
