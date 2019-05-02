import {getDepositorURL, getAccountsURL, getMerchantURL} from './service-url';
import axios from 'axios';

const getDepositor = () => {
    return axios.get(getDepositorURL);
}

const getAccounts = () => {
    return axios.get(getAccountsURL);
}

const getMerchants = () => {
    return axios.get(getMerchantURL);
}

export {
    getDepositor,
    getAccounts,
    getMerchants
}