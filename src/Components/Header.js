import React from "react";
import strings from '../localization/OrderDetails';
import customStyles from '../styles/customStyles';

function Header(props) {
    const classes = customStyles();
    return (
        <div className={classes.headerStyle}>
            <h1>{strings.header}</h1>
            <h3>{strings.sub_header}</h3>
        </div>
    );
}
export default Header;