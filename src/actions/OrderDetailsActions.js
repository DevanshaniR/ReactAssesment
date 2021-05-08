import FuncUtils from '../Config/FuncUtils';
import _ from 'lodash';
import validateFunctions from '../Functions/commonFunctions';
import * as actions from './index';
import ApiRequestUtils from '../utils/ApiRequestUtils';
import { MOCK_URL, COUNTRY_API, ADDRESS_DATA_API, getApiUrl } from '../utils/config';

/**
 * This function is use to get country data from API
 * 
 */
export const orderDetailsGetCountryData = () => {
  return (dispatch) => {
    try {
      const successCb = function (response) {
        console.log('Redux :: orderDetailsGetCountryData :: successCb ', response);
        if (response) {
          console.log('Redux :: orderDetailsGetCountryData - SUCCESS', response);
          dispatch(orderDetailsSetCountryData(response));
        } else {
          console.log('Redux :: orderDetailsGetCountryData - FAIL');
        }
      };
      const failureCb = function (response) {
        console.log('Redux :: orderDetailsGetCountryData :: failureCb ', response);
      };
      ApiRequestUtils.apiGet(COUNTRY_API, successCb, failureCb);
    } catch (e) {
      console.log('Redux :: orderDetailsGetCountryData :: EXCEPTION ', e);
    }
  };
};


/**
 * This function is use to set country drop down data
 * 
 */
export const orderDetailsSetCountryData = (data) => {
  return (dispatch) => {
    if (!FuncUtils.isNullOrUndefined(data)) {
      let country_name_array = _.toArray(_.mapValues(data, 'name'));
      console.log('orderDetailsSetCountryData :: country_name_array ', country_name_array);
      dispatch({ type: 'ORDER_DETAILS_COUNTRY_DATA', payLoad: country_name_array });
    }
  };
};


/**
 * This function is use to get address details from API based on search text
 * 
 */
export const orderDetailsGetAddressDetails = (search_text) => {

  let url = getApiUrl(search_text, ADDRESS_DATA_API);
  return (dispatch) => {
    try {
      const successCb = function (response) {
        console.log('Redux :: orderDetailsGetAddressDetails :: successCb ', response);
        if (response) {
          console.log('Redux :: orderDetailsGetAddressDetails - SUCCESS', response);
          if (!FuncUtils.isNullOrUndefined(response)) {
            const { features = [] } = response;
            let address_array = [];
            let i = 0;
            _.forEach(features, function (feature_item) {
              console.log('orderDetailsGetAddressDetails :: value', feature_item);
              let address_obj = validateFunctions.formatAddressDetails(feature_item);
              address_array.push(address_obj);
              i++;
              if (i > 5) {
                return false;
              }
            });
            dispatch(orderDetailsSetAddressData(address_array));
          }
        } else {
          console.log('Redux :: orderDetailsGetAddressDetails - FAIL');
        }
      };
      const failureCb = function (response) {
        console.log('Redux :: orderDetailsGetAddressDetails :: failureCb ', response);
      };
      ApiRequestUtils.apiGet(url, successCb, failureCb);
    } catch (e) {
      console.log('Redux :: orderDetailsGetAddressDetails :: EXCEPTION ', e);
    }
  };
};


/**
 * This function is use to set address data to the address fields
 * 
 */
export const orderDetailsSetAddressData = (data) => {
  return (dispatch) => {
    if (!FuncUtils.isNullOrUndefined(data)) {
      console.log('orderDetailsSetAddressData ::', data);
      dispatch({ type: 'ORDER_DETAILS_SET_ADDRESS_DATA', payLoad: data });
    }
  };
};


/**
 * This function is use to set check box data values from UI
 * 
 */
export const orderDetailsCheckBoxData = (checkbox_data) => {
  return (dispatch) => {
    if (FuncUtils.getArraySize(checkbox_data) > 0) {
      console.log('orderDetailsCheckBoxData ::', checkbox_data);
      dispatch({ type: 'ORDER_DETAILS_SET_CHECKBOX_DATA', payLoad: checkbox_data });
    }
  };
};


/**
 * This function is use to submit user details to the API
 * 
 */
export const orderDetailsSubmitUserDetails = (requestParams, addressRequestParams, interestRequestParams) => {
  return (dispatch) => {
    try {
      const successCb = function (response) {
        console.log('Redux :: orderDetailsSubmitUserDetails :: successCb ', response);
        if (response.success) {
          console.log('Redux :: orderDetailsSubmitUserDetails - SUCCESS', response);
          dispatch(actions.orderDetailsSubmitAddressDetails(addressRequestParams, interestRequestParams));
        } else {
          console.log('Redux :: orderDetailsSubmitUserDetails - FAIL');
        }
      };
      const failureCb = function (response) {
        console.log('Redux :: orderDetailsSubmitUserDetails :: failureCb ', response);
      };
      ApiRequestUtils.apiPost(MOCK_URL, successCb, requestParams, failureCb);
    } catch (e) {
      console.log('Redux :: orderDetailsSubmitUserDetails :: EXCEPTION ', e);
    }
  };
};


/**
 * This function is use to submit address details to the API
 * 
 */
export const orderDetailsSubmitAddressDetails = (requestParams, interestRequestParams) => {
  return (dispatch) => {
    try {
      const successCb = function (response) {
        console.log('Redux :: orderDetailsSubmitAddressDetails :: successCb ', response);
        if (response.success) {
          console.log('Redux :: orderDetailsSubmitAddressDetails - SUCCESS', response);
          if (FuncUtils.getArraySize(interestRequestParams.checked_item_list) > 0) {
            dispatch(actions.orderDetailsSubmitInterestDetails(interestRequestParams));
          }
        } else {
          console.log('Redux :: orderDetailsSubmitAddressDetails - FAIL');
        }
      };
      const failureCb = function (response) {
        console.log('Redux :: orderDetailsSubmitAddressDetails :: failureCb ', response);
      };
      ApiRequestUtils.apiPost(MOCK_URL, successCb, requestParams, failureCb);
    } catch (e) {
      console.log('Redux :: orderDetailsSubmitAddressDetails :: EXCEPTION ', e);

    }
  };
};


/**
 * This function is use to submit interest data to the API
 * 
 */
export const orderDetailsSubmitInterestDetails = (requestParams) => {
  return (dispatch) => {
    try {
      const successCb = function (response) {
        console.log('Redux :: orderDetailsSubmitInterestDetails :: successCb ', response);
        if (response.success) {
          console.log('Redux :: orderDetailsSubmitInterestDetails - SUCCESS', response);
        } else {
          console.log('Redux :: orderDetailsSubmitInterestDetails - FAIL');
        }
      };
      const failureCb = function (response) {
        console.log('Redux :: orderDetailsSubmitInterestDetails :: failureCb ', response);
      };
      ApiRequestUtils.apiPost(MOCK_URL, successCb, requestParams, failureCb);
    } catch (e) {
      console.log('Redux :: orderDetailsSubmitInterestDetails :: EXCEPTION ', e);

    }
  };
};




