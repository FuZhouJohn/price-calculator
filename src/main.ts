import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/base.scss";
import Icon from "./components/Icon.vue";

const app = createApp(App);

app.use(router);

app.mount("#app");

app.component("icon", Icon);
