/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
import BootstrapVue from "bootstrap-vue";
import {
    ValidationObserver,
    ValidationProvider,
    extend,
    localize
} from "vee-validate";
import fr from "vee-validate/dist/locale/fr.json";
import * as rules from "vee-validate/dist/rules";

Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

localize("fr", fr);

window.Vue = require("vue");

Vue.use(BootstrapVue);

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import store from "./store/index";

Vue.component(
    "form-component",
    require("./components/FormComponent.vue").default
);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    store
});
