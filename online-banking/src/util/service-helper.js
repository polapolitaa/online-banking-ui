import {getDepositorURL, getAccountsURL} from './service-url';
import axios from 'axios';

const getDepositor = () => {
    return axios.get(getDepositorURL);
}

const getAccounts = () => {
    return axios.get(getAccountsURL);
}

export {
    getDepositor,
    getAccounts
}