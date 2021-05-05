import React from "react";
import {
    Button
} from '@material-ui/core';
import strings from '../localization/OrderDetails';
import customStyles from '../styles/customStyles';

function BottomContainer(props) {
    const classes = customStyles();
    return (
        <div className={classes.buttonContainer}>
            <Button variant="contained">{strings.button_name}</Button>
        </div>
    );
}
export default BottomContainer;