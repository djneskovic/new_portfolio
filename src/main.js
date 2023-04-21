import { createApp } from "vue";
import App from "./App.vue";
import Aos from "aos";

import store from "./store/index.js";

Aos.init();

const app = createApp(App);

app.use(store);
app.mount("#app");
