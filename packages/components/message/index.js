import message from "./src/message.vue";

message.install = (app) => {
  app.components(message.name, message);
};
// 两种导入方式兼容
export const FMessage = message;

export default FMessage;
