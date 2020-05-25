import axios from "axios";

const baseDomain = process.env.MIX_APP_URL,
    baseURL = `${baseDomain}`;

export default axios.create({
    baseURL
});
