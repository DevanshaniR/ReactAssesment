import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import _ from 'lodash';
import * as actions from '../actions';
import strings from '../localization/OrderDetails';
import customStyles from '../styles/customStyles';
import OrderDetails from '../Components/OrderDetails';
import AddressDetails from '../Components/AddressDetails';
import CheckBoxContainer from '../Components/CheckBoxContainer';
import Header from '../Components/Header';
import BottomContainer from '../Components/BottomContainer';
import FuncUtils from '../Config/FuncUtils';
import { checkbox_data } from '../UiData/uiManipulationData';
import validateFunctions from '../Functions/commonFunctions';

function OrderSubmitView() {
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

  const { country_data = [], address_data = [], ui_checkbox_data = [] } = orderDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.orderDetailsGetCountryData());
    dispatch(actions.orderDetailsCheckBoxData(checkbox_data));
  }, [dispatch]);

  const history = useHistory();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Header
        header={strings.header}
        subHeader={strings.sub_header}
      />
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
        onChangeAddressSearch={(e, x) => onChangeAddressSearch(e, x)}
        onInputChangeAddressDropDown={onInputChangeAddressDropDown}
        addressSearchData={address_data}
        selected_address_item={selected_address_item}
      />
      <FixedHeightSection />
      <MoreDetailsHeader />
      <CheckBoxContainer
        ui_checkbox_data={ui_checkbox_data}
        handleOnChangeCheckBox={(e, x) => handleOnChangeCheckBox(e, x)}
      />
      <FixedHeightSection />
      <BottomContainer
        onClickSubmit={() => onClickSubmit()}
      />
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
    console.log('onChangeAddressSearch', event);
    if (!FuncUtils.isNullOrUndefined(event)) {
      let selected_item = _.find(address_data, { 'id': event.id });
      console.log('onChangeAddressSearch :: selected_address_item::', selected_item);
      setSelectedAddress(selected_item);
    }
  }
  function onInputChangeAddressDropDown(event, values) {
    console.log('onInputChangeAddressDropDown', event, values);
    if (!FuncUtils.isNullOrUndefined(values) && values.length > 3) {
      dispatch(actions.orderDetailsGetAddressDetails(values));
    } else {
      dispatch(actions.orderDetailsSetAddressData([]));
    }
  }

  function handleOnChangeCheckBox(event, values) {
    console.log('handleOnChangeCheckBox', event, values);
    let checkbox_item = _.find(ui_checkbox_data, { 'key': values });
    checkbox_item.checked = !checkbox_item.checked;
    dispatch(actions.orderDetailsCheckBoxData(ui_checkbox_data));
  }

  /**
   * submit order details information
   */
  function onClickSubmit() {
    console.log('onClickSubmit');
    let userRequestParams = {
      first_name: first_name,
      last_name: last_name,
      email_address: email_address,
      phone_number: phone_number
    };
    let addressRequestParams = {
      country_name: country_name,
      address_line_one: selected_address_item.address_01,
      address_line_two: selected_address_item.address_02,
      city: selected_address_item.city,
      state: selected_address_item.state,
      postal_code: selected_address_item.postal_code
    };

    let checked_item_list = [];
    let checked_items = _.filter(ui_checkbox_data, { 'checked': true });
    if (FuncUtils.getArraySize(checked_items) > 0) {
      checked_item_list = _.toArray(_.mapValues(checked_items, 'key'));
    }

    let interestRequestParams = {
      checked_item_list: checked_item_list
    };

    let validated_obj = validateFunctions.validateInputFields(userRequestParams, addressRequestParams);
    if (!validated_obj.status) {
      alert(validated_obj.msg);
    } else {
      dispatch(actions.orderDetailsSubmitUserDetails(userRequestParams, addressRequestParams, interestRequestParams, pushOrderVerifyView));
    }
  }

  function pushOrderVerifyView() {
    console.log('pushOrderVerifyView');
    let checked_items = _.filter(ui_checkbox_data, { 'checked': true });
    let checked_interest_list = [];
    if (FuncUtils.getArraySize(checked_items) > 0) {
      checked_interest_list = _.toArray(_.mapValues(checked_items, 'label'));
    }
    let submitted_data = {
      first_name: first_name,
      last_name: last_name,
      email_address: email_address,
      phone_number: phone_number,
      country_name: country_name,
      selected_address_item: selected_address_item,
      checked_interest_list: checked_interest_list
    };

    console.log('pushOrderVerifyView :: submitted_data', submitted_data);

    let format_order_data = validateFunctions.formatOrderSubmitDetails(submitted_data);

    history.push({
      pathname: '/orderVerify',
      state: {
        submitted_data: format_order_data
      },
    });
  }
}

/**
 * format UI using fixed height component
 * @returns 
 */
const FixedHeightSection = () => {
  const classes = customStyles();
  return (
    <div className={classes.fixedHeight}></div>
  );
}

/**
 * Address details text UI component
 * @returns 
 */
const AddressHeader = () => {
  const classes = customStyles();
  return (
    <div>
      <h3 className={classes.headerStyle}>{strings.address_header}</h3>
    </div>
  );
}

/**
 * more details text UI component
 * @returns 
 */
const MoreDetailsHeader = () => {
  const classes = customStyles();
  return (
    <div>
      <p className={classes.headerStyle}>{strings.more_details_text}</p>
    </div>
  );
}

export default OrderSubmitView;
