import _ from 'lodash';
const validateContactNumber = (number) => {
    let status = false;
    const regex = /^(?=\d{10}$)(0)[1-9]{1}[\d]{8}|^(?=\d{9}$)[1-9]{1}[\d]{8}/;
    try {
        status = regex.test(number.toString());
    } catch (error) {
        console.log('### FuncUtils :: validateContactNumber - error', error);
    }
    return status;
};

const isEmpty = (value) => {
    let status = false;
    try {
        status = _.isEmpty(value);
    } catch (error) {
    }
    return status;
};

const validateEmail = (number) => {
    let status = false;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    try {
        status = regex.test(number.toString());
    } catch (error) {
        console.log('### FuncUtils :: validateEmail - error', error);
    }
    return status;
};

const isNullOrUndefined = (value) => {
    let status = false;
    try {
      status = _.isNil(value);
    } catch (error) {
      console.log('### FuncUtils :: isNullOrUndefined - error', error);
    }
    return status;
  };

  const getArraySize = (array) => {
    let array_size = 0;
    try {
      array_size = !_.isNil(array) ? array.length : 0;
    } catch (error) {
      console.log('### FuncUtils :: array_size - error', error);
    }
    return array_size;
  };

export default {
    validateContactNumber,
    isEmpty,
    validateEmail,
    isNullOrUndefined,
    getArraySize
}