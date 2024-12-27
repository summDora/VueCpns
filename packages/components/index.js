import * as components from "./components";
export default {
  install(app) {
    Object.entries(components).forEach(([key, value]) => {
      app.component(key, value);
    });
    /*
    components:
      {
          "FButton": {
              "name": "f-button",
              "__name": "button",
              "__hmrId": "7b093ac2",
              "__file": "/Users/honglingfang/Documents/summerdora/code/VueCpns/packages/components/button/button.vue"
          }
      }
    */

    // components.forEach(comp => {
    //   app.component(comp.name,comp)
    // }) 
  },
};
