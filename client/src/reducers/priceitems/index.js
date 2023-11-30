import {
  GET_LIST_PRICEITEMS,
  ADD_PRICEITEMS,
  DELETE_PRICEITEMS,
  UPDATE_PRICEITEMS,
  GET_DETAIL_PRICEITEMS
} from "../../actions/priceItemsAction";

const initialState = {
  getListPriceResult: false,
  getListPriceLoading: false,
  getListPriceError: false,

  addPriceResult: false,
  addPriceLoading: false,
  addPriceError: false,

  deletePriceResult: false,
  deletePriceLoading: false,
  deletePriceError: false,

  updatePriceResult: false,
  updatePriceLoading: false,
  updatePriceError: false,

  getDetailPriceResult: false,
  getDetailPriceLoading: false,
  getDetailPriceError: false,
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

    case ADD_PRICEITEMS:
      return {
        ...state,
        addPriceResult: action.payload.data,
        addPriceLoading: action.payload.loading,
        addPriceError: action.payload.errorMessage,
      };

    case DELETE_PRICEITEMS:
      return {
        ...state,
        deletePriceResult: action.payload.data,
        deletePriceLoading: action.payload.loading,
        deletePriceError: action.payload.errorMessage,
      };
    
      case UPDATE_PRICEITEMS:
        return {
          ...state,
          updatePriceResult: action.payload.data,
          updatePriceLoading: action.payload.loading,
          updatePriceError: action.payload.errorMessage,
        };
      
        case GET_DETAIL_PRICEITEMS:
          return {
            ...state,
            getDetailPriceResult: action.payload.data,
            getDetailPriceLoading: action.payload.loading,
            getDetailPriceError: action.payload.errorMessage,
          };

    default:
      return state;
  }
};

export default priceitems;
