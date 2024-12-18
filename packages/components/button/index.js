import button from "./button.vue";

button.install = (app) => {
  app.components(button.name, button);
};
export const FButton = button;
