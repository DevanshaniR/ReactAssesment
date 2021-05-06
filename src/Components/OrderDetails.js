import React from "react";
import { TextField } from '@material-ui/core';
import strings from '../localization/OrderDetails';
import customStyles from '../styles/customStyles';
import FuncUtils from '../Config/FuncUtils';

function OrderDetails(props) {
  const classes = customStyles();
  const { firstNameValue = '', lastNameValue = '', emailAddressValue = '',
    phoneNumberValue = '', phoneNumberError = '', emailError = '' } = props;

  return (
    <div>
      <div className={classes.textFieldStyle}>
        <TextField
          id="first-name"
          fullWidth
          required
          label={strings.first_name}
          onChange={props.onChangeFirstName}
          value={firstNameValue}
        />
        <TextField
          id="last-name"
          fullWidth
          required
          label={strings.last_name}
          onChange={props.onChangeLastName}
          value={lastNameValue}
        />
      </div>
      <div className={classes.textFieldStyle}>
        <TextField
          required id="email"
          fullWidth
          label={strings.email}
          onChange={props.onChangeEmailAddress}
          value={emailAddressValue}
          error={FuncUtils.isEmpty(emailError) ? false : true}
          helperText={emailError}
        />
        <TextField
          id="telephone-number"
          fullWidth
          required
          label={strings.telephone_number}
          type="number"
          onChange={props.onChangePhoneNumber}
          value={phoneNumberValue}
          error={FuncUtils.isEmpty(phoneNumberError) ? false : true}
          helperText={phoneNumberError}
        />
      </div>
    </div>
  );
}
export default OrderDetails;