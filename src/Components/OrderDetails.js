import React from "react";
import { TextField } from '@material-ui/core';
import strings from '../localization/OrderDetails';
import customStyles from '../styles/customStyles';

function OrderDetails(props) {
  const classes = customStyles();
  return (
    <div>
      <div className={classes.textFieldStyle}>
        <TextField fullWidth required id="first-name" label={strings.first_name} />
        <TextField fullWidth required id="last-name" label={strings.last_name} />
      </div>
      <div className={classes.textFieldStyle}>
        <TextField fullWidth required id="email" label={strings.email} />
        <TextField fullWidth required id="telephone-number" label={strings.telephone_number} type="number" />
      </div>
    </div>
  );
}
export default OrderDetails;