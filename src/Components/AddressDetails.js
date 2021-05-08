import React from "react";
import {
  TextField
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import strings from '../localization/OrderDetails';
import customStyles from '../styles/customStyles';
import FuncUtils from '../Config/FuncUtils';

function AddressDetails(props) {
  const classes = customStyles();

  const { countryDropDownData = [], addressSearchData = [], selected_address_item = {} } = props;
  console.log('AddressDetails :: addressSearchData', addressSearchData);

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
          getOptionLabel={option => option.address_comma_separated}
          id='address-select'
          onChange={(event, value) => props.onChangeAddressSearch(value)}
          onInputChange={props.onInputChangeAddressDropDown}
          renderInput={(params) =>
            <TextField
              fullWidth
              multiline
              {...params}
              label={strings.address_search_text}
            />
          }
        />
      </div>
      <div className={classes.textFieldStyle}>
        <TextField
          fullWidth
          multiline
          required
          id="address-line-01"
          label={strings.address_line_1}
          value={!FuncUtils.isEmpty(selected_address_item) ? selected_address_item.address_01 : ''}
        />
        <TextField
          fullWidth
          multiline
          id="address-line-02"
          label={strings.address_line_2}
          value={!FuncUtils.isEmpty(selected_address_item) ? selected_address_item.address_02 : ''}
        />
      </div>
      <div className={classes.textFieldStyle}>
        <TextField
          fullWidth
          multiline
          required
          id="town-city"
          label={strings.town_city}
          value={!FuncUtils.isEmpty(selected_address_item) ? selected_address_item.city : ''}
        />
        <TextField
          fullWidth
          multiline
          required
          id="country-state"
          label={strings.country_state}
          value={!FuncUtils.isEmpty(selected_address_item) ? selected_address_item.state : ''}
        />
      </div>
      <div className={classes.textFieldStyle}>
        <TextField
          fullWidth
          required
          id="postal-code"
          label={strings.postal_code}
          value={!FuncUtils.isEmpty(selected_address_item) ? selected_address_item.postal_code : ''}
        />
      </div>
    </div>
  );
}
export default AddressDetails;