
const INITIAL_STATE = {
    country_data: [],
    address_data: []
};
const OrderDetails = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ORDER_DETAILS_COUNTRY_DATA':
            return {
                ...state,
                country_data: action.payLoad
            }
        case 'ORDER_DETAILS_SET_ADDRESS_DATA':
            return {
                ...state,
                address_data: action.payLoad
            }
        default:
            return state
    }
}

export default OrderDetails;