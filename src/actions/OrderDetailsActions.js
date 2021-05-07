import FuncUtils from '../Config/FuncUtils';
import _ from 'lodash';
import { formatAddressDetails } from '../Functions/commonFunctions';

export const orderDetailsGetCountryData = () => {
  return (dispatch) => {
    try {
      let requestOptions = {
        method: 'GET',
      };
      fetch('https://restcountries.eu/rest/v2/all', requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
            dispatch(orderDetailsSetCountryData(result));
          },
          (error) => {
            console.log('orderDetailsGetCountryData::FAILED', error);
          }
        )
    } catch (e) {
      console.log('orderDetailsGetCountryData::EXCEPTION', e);
    }
  }
};

export const orderDetailsSetCountryData = (data) => {
  return (dispatch) => {
    if (!FuncUtils.isNullOrUndefined(data)) {
      let country_name_array = _.toArray(_.mapValues(data, 'name'));
      console.log('orderDetailsSetCountryData :: country_name_array ', country_name_array);
      dispatch({ type: 'ORDER_DETAILS_COUNTRY_DATA', payLoad: country_name_array });
    }
  };
};

export const orderDetailsGetAddressDetails = (text) => {
  return (dispatch) => {
    try {
      var requestOptions = {
        method: 'GET',
      };
      fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=4339a8357fe547f6a7fc36848fdb7d78`, requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
            console.log('orderDetailsGetAddressDetails', result);
            if (!FuncUtils.isNullOrUndefined(result)) {
              const { features = [] } = result;
              let address_array = [];
              let i = 0;
              _.forEach(features, function (feature_item) {
                console.log('orderDetailsGetAddressDetails :: value', feature_item);
                let full_address = formatAddressDetails(feature_item);
                address_array.push(full_address);
                i++;
                if (i > 5) {
                  return false;
                }
              });
              dispatch(orderDetailsSetAddressData(address_array));
            }
          },
          (error) => {
            console.log('orderDetailsGetAddressDetails::FAILED', error);
          }
        )
    } catch (e) {
      console.log('orderDetailsGetAddressDetails::EXCEPTION', e);
    }
  }
};

export const orderDetailsSetAddressData = (data) => {
  return (dispatch) => {
    if (!FuncUtils.isNullOrUndefined(data)) {
      console.log('orderDetailsSetAddressData ::', data);
      dispatch({ type: 'ORDER_DETAILS_SET_ADDRESS_DATA', payLoad: data });
    }
  };
};


