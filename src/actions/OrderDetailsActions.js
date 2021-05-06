import FuncUtils from '../Config/FuncUtils';
import _ from 'lodash';

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

export const orderDetailsGetAddressDetails = () => {
  return (dispatch) => {
    try {
      var requestOptions = {
        method: 'GET',
      };
      fetch("https://api.geoapify.com/v1/geocode/autocomplete?text=Mosco&apiKey=4339a8357fe547f6a7fc36848fdb7d78", requestOptions)
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    } catch (e) {
      console.log('orderDetailsGetCountryData::EXCEPTION', e);
    }
  }
};


