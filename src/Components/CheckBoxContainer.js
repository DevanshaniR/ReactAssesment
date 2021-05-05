import React from "react";
import {
  FormControl,
  Checkbox,
  FormControlLabel,
  FormGroup
} from '@material-ui/core';
import customStyles from '../styles/customStyles';
import { checkbox_data } from '../UiData/uiManipulationData';
import Colors from '../Config/colors';

function CheckBoxContainer(props) {
  const classes = customStyles();
  return (
    <div className={classes.headerStyle}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup row>
          {checkbox_data.map((value, i) =>
            <FormControlLabel
              control={<Checkbox checked={value.checked} name={value.key} style={{
                color: Colors.checkBoxColor,
              }} />}
              label={value.label}
            />
          )}
        </FormGroup>
      </FormControl>
    </div>
  );
}
export default CheckBoxContainer;