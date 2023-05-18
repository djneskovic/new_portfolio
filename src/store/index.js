import { createStore } from "vuex";

import contactModule from "./contact/index.js";

const store = createStore({
	modules: {
		contact: contactModule,
	},
});

export default store;
