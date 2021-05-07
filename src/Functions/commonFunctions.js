import FuncUtils from '../Config/FuncUtils';
const formatAddressDetails = (feature_item) => {
    const { properties = {} } = feature_item;
    let full_address = '';
    const { address_line1 = '', address_line2 = '', city = '', postcode = '', state = '' } = properties;
    if (!FuncUtils.isEmpty(address_line1)) {
        full_address = `${address_line1}`
    }
    if (!FuncUtils.isEmpty(address_line2)) {
        full_address = `${full_address}, ${address_line2}`
    }
    if (!FuncUtils.isEmpty(city)) {
        full_address = `${full_address}, ${city}`
    }
    if (!FuncUtils.isEmpty(state)) {
        full_address = `${full_address}, ${state}`
    }
    if (!FuncUtils.isEmpty(postcode)) {
        full_address = `${full_address}, ${postcode}`
    }
    console.log('formatAddressDetails :: ', full_address);
    return full_address;
};

const getAddressSeparated = (selected_address) => {
    let address_array = selected_address.split(',');

    console.log('getAddressSeparated :: address_first', address_array);

    return address_array;
};

export {
    formatAddressDetails,
    getAddressSeparated
}