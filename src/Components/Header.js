import React from "react";
import customStyles from '../styles/customStyles';

function Header(props) {
    const { header = '', subHeader = '' } = props;
    const classes = customStyles();
    return (
        <div className={classes.headerStyle}>
            <h1>{header}</h1>
            <h3>{subHeader}</h3>
        </div>
    );
}
export default Header;