import { createApp } from "vue";

import router from "./router";
import store from "./store";
import App from "./App.vue";

import "./assets/styles/index.scss";
import "element-plus/lib/theme-chalk/index.css";

// Vue.config -> app.config
// Vue.component -> app.componentVue.directive -> app.directiveVue.filter -> app.filter
// Vue.mixin -> app.mixinVue.use -> app.use

const app = createApp(App);
// 需要高版本来支持vue3的版本
import { ElButton, ElForm, ElFormItem, ElInput, ElMessage } from "element-plus";
app.component(ElButton.name, ElButton);
app.component(ElForm.name, ElForm);
app.component(ElFormItem.name, ElFormItem);
app.component(ElInput.name, ElInput);
app.component(ElMessage.name, ElMessage);

app.use(store);
app.use(router);
app.mount("#app", { username: "张沪生" });
