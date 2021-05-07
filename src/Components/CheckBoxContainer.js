import React from "react";
import {
  FormControl,
  Checkbox,
  FormControlLabel,
  FormGroup
} from '@material-ui/core';
import customStyles from '../styles/customStyles';
import Colors from '../Config/colors';

function CheckBoxContainer(props) {
  const classes = customStyles();
  const { ui_checkbox_data = [] } = props;
  return (
    <div className={classes.headerStyle}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup row>
          {ui_checkbox_data.map((value, i) =>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={e => props.handleOnChangeCheckBox(e, value.key)}
                  checked={value.checked}
                  name={value.key}
                  style={{
                    color: Colors.checkBoxColor,
                  }} />}
              label={value.label}
              key={i}
            />
          )}
        </FormGroup>
      </FormControl>
    </div>
  );
}
export default CheckBoxContainer;