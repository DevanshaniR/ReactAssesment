import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { orderDetailsGetCountryData, orderDetailsGetAddressDetails } from './actions/OrderDetailsActions';
import strings from './localization/OrderDetails';
import customStyles from './styles/customStyles';
import OrderDetails from './Components/OrderDetails';
import AddressDetails from './Components/AddressDetails';
import CheckBoxContainer from './Components/CheckBoxContainer';
import Header from './Components/Header';
import BottomContainer from './Components/BottomContainer';
import FuncUtils from './Config/FuncUtils';


function App() {
  const classes = customStyles();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email_address, setEmailAddress] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [phone_number_error, setPhoneNumberError] = useState('');
  const [email_error, setEmailError] = useState('');
  const [country_name, setCountry] = useState('');
  const [selected_address_item, setSelectedAddress] = useState('');

  const orderDetails = useSelector(state => state.OrderDetails);

  const { country_data = [], address_data = [] } = orderDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderDetailsGetCountryData());
  }, [dispatch]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Header />
      <OrderDetails
        onChangeFirstName={onChangeFirstName}
        firstNameValue={first_name}
        onChangeLastName={onChangeLastName}
        lastNameValue={last_name}
        onChangeEmailAddress={onChangeEmailAddress}
        emailAddressValue={email_address}
        onChangePhoneNumber={onChangePhoneNumber}
        phoneNumberValue={phone_number}
        phoneNumberError={phone_number_error}
        emailError={email_error}
      />
      <FixedHeightSection />
      <AddressHeader />
      <AddressDetails
        countryDropDownData={country_data}
        onInputChangeCountryDropDown={onInputChangeCountryDropDown}
        onChangeAddressSearch={onChangeAddressSearch}
        onInputChangeAddressDropDown={onInputChangeAddressDropDown}
        addressSearchData={address_data}
        selected_address_item={selected_address_item}
      />
      <FixedHeightSection />
      <MoreDetailsHeader />
      <CheckBoxContainer />
      <FixedHeightSection />
      <BottomContainer />
      <FixedHeightSection />
    </form>
  );

  function onChangeFirstName(event) {
    setFirstName(event.target.value);
  }

  function onChangeLastName(event) {
    setLastName(event.target.value);
  }
  function onChangeEmailAddress(event) {
    setEmailAddress(event.target.value);
    if (FuncUtils.validateEmail(event.target.value) || FuncUtils.isEmpty(event.target.value)) {
      setEmailError('');
    } else {
      setEmailError(strings.email_error);
    }
  }
  function onChangePhoneNumber(event) {
    setPhoneNumber(event.target.value);
    console.log('onChangePhoneNumber :: 1', event.target.value);
    console.log('onChangePhoneNumber :: 2', FuncUtils.validateContactNumber(event.target.value));
    if (FuncUtils.validateContactNumber(event.target.value) || FuncUtils.isEmpty(event.target.value)) {
      setPhoneNumberError('');
    } else {
      setPhoneNumberError(strings.phone_number_error);
    }
  }

  function onInputChangeCountryDropDown(event, values) {
    console.log('onInputChangeCountryDropDown', event, values);
    setCountry(values);
  }

  function onChangeAddressSearch(event, values) {
    console.log('onChangeAddressSearch', event, values);
    if (!FuncUtils.isNullOrUndefined(values)) {
      let selected_item = _.find(address_data, { 'address_comma_separated': values });
      console.log('onChangeAddressSearch :: selected_address_item::', selected_item);
      setSelectedAddress(selected_item);
    }
  }

  function onInputChangeAddressDropDown(event, values) {
    console.log('onInputChangeAddressDropDown', event, values);
    if (!FuncUtils.isNullOrUndefined(values) && values.length > 3) {
      dispatch(orderDetailsGetAddressDetails(values));
    }
  }
}

const FixedHeightSection = () => {
  const classes = customStyles();
  return (
    <div className={classes.fixedHeight}></div>
  );
}

const AddressHeader = () => {
  const classes = customStyles();
  return (
    <div>
      <h3 className={classes.headerStyle}>{strings.address_header}</h3>
    </div>
  );
}

const MoreDetailsHeader = () => {
  const classes = customStyles();
  return (
    <div>
      <p className={classes.headerStyle}>{strings.more_details_text}</p>
    </div>
  );
}

export default App;
