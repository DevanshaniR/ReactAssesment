import FuncUtils from '../Config/FuncUtils';
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


export {
  formatAddressDetails
}