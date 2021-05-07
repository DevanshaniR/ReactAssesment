import React from "react";
import {
  TextField
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import strings from '../localization/OrderDetails';
import customStyles from '../styles/customStyles';
import FuncUtils from '../Config/FuncUtils';
import { getAddressSeparated } from '../Functions/commonFunctions';

function AddressDetails(props) {
  const classes = customStyles();

  const { countryDropDownData = [], addressSearchData = [], selected_address = '' } = props;

  let address_array = [];
  if (!FuncUtils.isEmpty(selected_address)) {
    address_array = getAddressSeparated(selected_address);
    console.log('address_array::', address_array);
  }


  return (
    <div>
      {FuncUtils.getArraySize(countryDropDownData) > 0 &&
        <div className={classes.dropDownContainer}>
          <Autocomplete
            defaultValue={countryDropDownData[0]}
            options={countryDropDownData}
            id='country-select'
            onChange={props.handleChangeCountryDropDown}
            onInputChange={props.onInputChangeCountryDropDown}
            renderInput={(params) =>
              <TextField
                required
                fullWidth
                {...params}
                label={strings.country}
              />
            }
          />
        </div>
      }
      <div className={classes.addressSearchContainer}>
        <Autocomplete
          freeSolo
          options={addressSearchData}
          id='address-select'
          onChange={props.onChangeAddressSearch}
          onInputChange={props.onInputChangeAddressDropDown}
          renderInput={(params) =>
            <TextField
              required
              fullWidth
              {...params}
              label={strings.address_search_text}
            />
          }
        />
      </div>
      <div className={classes.textFieldStyle}>
        <TextField
          fullWidth
          required
          id="address-line-01"
          label={strings.address_line_1}
          value={FuncUtils.getArraySize(address_array) > 0 ? address_array[0] : ''}
        />
        <TextField
          fullWidth
          required
          id="address-line-02"
          label={strings.address_line_2}
          value={FuncUtils.getArraySize(address_array) > 1 ? address_array[1] : ''}
        />
      </div>
      <div className={classes.textFieldStyle}>
        <TextField
          fullWidth
          required
          id="town-city"
          label={strings.town_city}
          value={FuncUtils.getArraySize(address_array) > 2 ? address_array[2] : ''}
        />
        <TextField
          fullWidth
          required id="country-state"
          label={strings.country_state}
          value={FuncUtils.getArraySize(address_array) > 3 ? address_array[3] : ''}
        />
      </div>
      <div className={classes.textFieldStyle}>
        <TextField
          fullWidth
          required
          id="postal-code"
          label={strings.postal_code}
          value={FuncUtils.getArraySize(address_array) > 4 ? address_array.splice(3, FuncUtils.getArraySize(address_array) + 1) : ''}
        />
      </div>
    </div>
  );
}
export default AddressDetails;