import FuncUtils from '../Config/FuncUtils';
import strings from '../localization/OrderDetails';

/**
 * format address data from the API for search suggestions
 * @param {*} feature_item 
 * @returns 
 */
const formatAddressDetails = (feature_item = {}) => {
  const { properties = {} } = feature_item;
  let full_address = '';
  let address_obj = {
    id: '',
    address_comma_separated: '',
    address_01: '',
    address_02: '',
    city: '',
    state: '',
    postal_code: ''
  };

  const { address_line1 = '', address_line2 = '', city = '', postcode = '', state = '', place_id = '' } = properties;
  if (!FuncUtils.isEmpty(address_line1)) {
    full_address = `${address_line1}`;
    address_obj.address_01 = address_line1;
  }
  if (!FuncUtils.isEmpty(address_line2)) {
    full_address = `${full_address}, ${address_line2}`;
    address_obj.address_02 = address_line2;
  }
  if (!FuncUtils.isEmpty(city)) {
    full_address = `${full_address}, ${city}`;
    address_obj.city = city;
  }
  if (!FuncUtils.isEmpty(state)) {
    full_address = `${full_address}, ${state}`;
    address_obj.state = state;
  }
  if (!FuncUtils.isEmpty(postcode)) {
    full_address = `${full_address}, ${postcode}`;
    address_obj.postal_code = postcode;
  }

  address_obj.address_comma_separated = full_address;
  address_obj.id = place_id;
  console.log('formatAddressDetails ::address_obj ', address_obj);
  return address_obj;
};

export const validateInputFields = (userParams, addressParams) => {
  console.log('validateInputFields:: 1', userParams.address_line_one);
  let validate_obj = {
    msg: '',
    status: true
  }
  if (FuncUtils.isNullOrUndefined(userParams.first_name) || FuncUtils.isEmpty(userParams.first_name)) {
    console.log('validateInputFields:: 2');
    validate_obj.msg = strings.empty_first_name;
    validate_obj.status = false;
    return validate_obj;
  }

  if (FuncUtils.isNullOrUndefined(userParams.last_name) || FuncUtils.isEmpty(userParams.last_name)) {
    console.log('validateInputFields:: 3');
    validate_obj.msg = strings.empty_last_name;
    validate_obj.status = false;
    return validate_obj;
  }

  if (FuncUtils.isNullOrUndefined(userParams.email_address) || FuncUtils.isEmpty(userParams.email_address)) {
    console.log('validateInputFields:: 4');
    validate_obj.msg = strings.empty_email;
    validate_obj.status = false;
    return validate_obj;
  }

  if (FuncUtils.isNullOrUndefined(userParams.phone_number) || FuncUtils.isEmpty(userParams.phone_number)) {
    console.log('validateInputFields:: 5');
    validate_obj.msg = strings.empty_phone_number;
    validate_obj.status = false;
    return validate_obj;
  }

  if (FuncUtils.isNullOrUndefined(addressParams.country_name) || FuncUtils.isEmpty(addressParams.country_name)) {
    console.log('validateInputFields:: 6');
    validate_obj.msg = strings.empty_country;
    validate_obj.status = false;
    return validate_obj;
  }

  if (FuncUtils.isNullOrUndefined(addressParams.address_line_one) || FuncUtils.isEmpty(addressParams.address_line_one)) {
    console.log('validateInputFields:: 7');
    validate_obj.msg = strings.empty_address_line_one;
    validate_obj.status = false;
    return validate_obj;
  }

  if (FuncUtils.isNullOrUndefined(addressParams.city) || FuncUtils.isEmpty(addressParams.city)) {
    console.log('validateInputFields:: 8');
    validate_obj.msg = strings.empty_city;
    validate_obj.status = false;
    return validate_obj;
  }

  if (FuncUtils.isNullOrUndefined(addressParams.state) || FuncUtils.isEmpty(addressParams.state)) {
    console.log('validateInputFields:: 9');
    validate_obj.msg = strings.empty_state;
    validate_obj.status = false;
    return validate_obj;
  }

  
  if (FuncUtils.isNullOrUndefined(addressParams.postal_code) || FuncUtils.isEmpty(addressParams.postal_code)) {
    console.log('validateInputFields:: 10');
    validate_obj.msg = strings.empty_postal_code;
    validate_obj.status = false;
    return validate_obj;
  }

  return validate_obj;
};

const functionValidations = {
  formatAddressDetails,
  validateInputFields
}

export default functionValidations;