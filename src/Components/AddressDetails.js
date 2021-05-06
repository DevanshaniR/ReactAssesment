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

  const { countryDropDownData = [] } = props;

  return (
    <div>
      {FuncUtils.getArraySize(countryDropDownData) > 0 &&
        <div className={classes.dropDownContainer}>
          <Autocomplete
            defaultValue={countryDropDownData[0]}
            options={countryDropDownData}
            id='country-select'
            onChange={props.handleChangeCountryDropDown}
            onInputChange={props.onDropDownInputChange}
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
      <div className={classes.textFieldStyle}>
        <TextField 
        fullWidth 
        label={strings.address_search_text} 
        type="search"
        onChange = {props.onChangeAddressSearch} />
      </div>
      <div className={classes.textFieldStyle}>
        <TextField fullWidth required id="address-line-01" label={strings.address_line_1} />
        <TextField fullWidth required id="address-line-02" label={strings.address_line_2} />
      </div>
      <div className={classes.textFieldStyle}>
        <TextField fullWidth required id="town-city" label={strings.town_city} />
        <TextField fullWidth required id="country-state" label={strings.country_state} />
      </div>
      <div className={classes.textFieldStyle}>
        <TextField fullWidth required id="postal-code" label={strings.postal_code} />
      </div>
    </div>
  );
}
export default AddressDetails;