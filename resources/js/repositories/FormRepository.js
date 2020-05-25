import Repository from "./Repository";
import store from "../store";

const resource = "/post";

export default {
    sendMessage() {
        const state = store.getters.getStateValues;
        return Repository.post(`${resource}`, state);
    }
};
