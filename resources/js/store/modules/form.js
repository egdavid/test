import axios from "axios";
import store from "..";
import { UPDATE_FORM, VALIDATE_FORM, SHOW_FORM } from "../mutation-types";

const state = {
    name: "",
    phone: "",
    type: null,
    message: "",
    show: true,
    validation: null
};

const getters = {
    getStateValues: state => {
        return state;
    },
    getName: state => {
        return state.name;
    },
    showForm: state => {
        return state.show;
    },
    validationMessage: state => {
        return state.validation;
    }
};

const mutations = {
    [UPDATE_FORM](state) {},
    [SHOW_FORM](state) {
        state.show = true;
        state.phone = "";
        state.message = "";
        state.type = null;
    },
    [VALIDATE_FORM](state, message) {
        state.show = false;
        state.validation = message;
    }
};

const actions = {
    setFormDisplay({ commit }) {
        commit("SHOW_FORM");
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
