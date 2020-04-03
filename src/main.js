import Vue from "vue";
import App from "./App.vue";

import "@/assets/css/main.scss";
//import js

window.$ = window.jQuery = require("jquery");
import "popper.js";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false;

Vue.mixin({
	data() {
		return {};
	},
	methods: {
		getImage(icon) {
			let check = require("@/assets/img/" + icon);
			return check;
		}
	}
});
new Vue({
	render: h => h(App)
}).$mount("#app");
