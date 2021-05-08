import _ from 'lodash';
/**
 * validate contact number (mobile or land line number)
 * @param {*} number 
 * @returns 
 */
export const validateContactNumber = (number) => {
  let status = false;
  const regex = /^(?=\d{10}$)(0)[1-9]{1}[\d]{8}|^(?=\d{9}$)[1-9]{1}[\d]{8}/;
  try {
    status = regex.test(number.toString());
  } catch (error) {
    console.log('### FuncUtils :: validateContactNumber - error', error);
  }
  return status;
};

/**
 * common function check empty value
 * @param {*} value 
 * @returns 
 */
export const isEmpty = (value) => {
  let status = false;
  try {
    status = _.isEmpty(value);
  } catch (error) {
  }
  return status;
};

/**
 * validate email
 * @param {*} number 
 * @returns 
 */
export const validateEmail = (number) => {
  let status = false;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  try {
    status = regex.test(number.toString());
  } catch (error) {
    console.log('### FuncUtils :: validateEmail - error', error);
  }
  return status;
};

/**
 * common function to check value is undefined or null
 * @param {*} value 
 * @returns 
 */
export const isNullOrUndefined = (value) => {
  let status = false;
  try {
    status = _.isNil(value);
  } catch (error) {
    console.log('### FuncUtils :: isNullOrUndefined - error', error);
  }
  return status;
};

/**
 * common function to return array size
 * @param {*} array 
 * @returns 
 */
export const getArraySize = (array) => {
  let array_size = 0;
  try {
    array_size = !_.isNil(array) ? array.length : 0;
  } catch (error) {
    console.log('### FuncUtils :: array_size - error', error);
  }
  return array_size;
};

/**
 * create request params for API calls
 * @param {*} params 
 * @returns 
 */
export const createParams = async (params = {}) => {
  return await JSON.stringify(params);
};

const commonFunctions = {
  validateContactNumber,
  isEmpty,
  validateEmail,
  isNullOrUndefined,
  getArraySize,
  createParams
}

export default commonFunctions;