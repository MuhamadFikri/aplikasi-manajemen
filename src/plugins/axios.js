import Vue from 'vue';
import axios from 'axios';

import config from '../config';


const apiconfig = {
    baseURL: config('apiurl'),
    timeout: 60 * 1000,
    // withCredentials: true, // Check cross-site Access-Control
};

const api = axios.create(apiconfig);

Plugin.install = (V) => {
    V.http = api;
    window.http = api;
    Object.defineProperties(V.prototype, {
        $http: {
            get() {
                return api;
            },
        },
    });
};

Vue.use(Plugin);

export default Plugin;