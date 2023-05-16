import { createApp } from "vue";
import App from "./App.vue";
import Aos from "aos";
import router from "./router";

import store from "./store/index.js";

Aos.init();

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
