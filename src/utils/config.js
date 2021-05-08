export const MOCK_URL = 'https://run.mocky.io/v3/3f083cb4-0fc5-457c-a5b5-b32b3c77f78e'; //TODO submit details same mock API URL used
export const COUNTRY_API = 'https://restcountries.eu/rest/v2/all';

const API_KEY = '4339a8357fe547f6a7fc36848fdb7d78';
export const ADDRESS_DATA_API = 'GET_ADDRESS_DATA'

export const getApiUrl = (search_text, api_name) => {
    switch (api_name) {
        case 'GET_ADDRESS_DATA':
            return `https://api.geoapify.com/v1/geocode/autocomplete?text=${search_text}&apiKey=${API_KEY}`;
        default:
            break;
    }
}