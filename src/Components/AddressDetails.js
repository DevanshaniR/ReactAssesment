import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl
} from '@material-ui/core';
import strings from '../localization/OrderDetails';
import customStyles from '../styles/customStyles';
import { drop_down_data } from '../UiData/uiManipulationData';

function AddressDetails(props) {
  const classes = customStyles();
  return (
    <div>
      <div className={classes.headerStyle}>
        <FormControl className={classes.dropDownContainer}>
          <Select
            labelId="country-select"
            id="country-select"
          >
            {drop_down_data.map((value, i) =>
              <MenuItem
                // key={value.key}
                value={value.key}>{value.label}</MenuItem>
            )}

          </Select>
        </FormControl>
      </div>
      <div className={classes.textFieldStyle}>
        <TextField fullWidth label={strings.address_search_text} type="search" />
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