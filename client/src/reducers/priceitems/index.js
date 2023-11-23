import { GET_LIST_PRICEITEMS } from "../../actions/priceItemsAction";

const initialState = {
  getListPriceResult: false,
  getListPriceLoading: false,
  getListPriceError: false,
};

const priceitems = (state = initialState, action) => {
  switch (action.type) {

    case GET_LIST_PRICEITEMS:
      return {
        ...state,
        getListPriceResult: action.payload.data,
        getListPriceLoading: action.payload.loading,
        getListPriceError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default priceitems