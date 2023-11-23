import { GET_LIST_REGION, ADD_REGION, DELETE_REGION, UPDATE_REGION, GET_DETAIL_REGION } from "../../actions/locationAction";

const initialState = {
  getListRegionsResult: false,
  getListRegionsLoading: false,
  getListRegionsError: false,

  addRegionResult: false,
  addRegionLoading: false,
  addRegionError: false,

  deleteRegionResult: false,
  deleteRegionLoading: false,
  deleteRegionError: false,

  updateRegionResult: false,
  updateRegionLoading: false,
  updateRegionError: false,

  getDetailRegionResult: false,
  getDetailRegionLoading: false,
  getDetailRegionError: false,
};

const regions = (state = initialState, action) => {
  switch (action.type) {

    case GET_LIST_REGION:
      return {
        ...state,
        getListRegionsResult: action.payload.data,
        getListRegionsLoading: action.payload.loading,
        getListRegionsError: action.payload.errorMessage,
      };

    case ADD_REGION:
      return {
        ...state,
        addRegionResult: action.payload.data,
        addRegionLoading: action.payload.loading,
        addRegionError: action.payload.errorMessage,
      };
    
      case DELETE_REGION:
        return {
          ...state,
          deleteRegionResult: action.payload.data,
          deleteRegionLoading: action.payload.loading,
          deleteRegionError: action.payload.errorMessage,
        };

        case UPDATE_REGION:
          return {
            ...state,
            updateRegionResult: action.payload.data,
            updateRegionLoading: action.payload.loading,
            updateRegionError: action.payload.errorMessage,
          };
        
          case GET_DETAIL_REGION:
            return {
              ...state,
              getDetailRegionResult: action.payload.data,
              getDetailRegionLoading: action.payload.loading,
              getDetailRegionError: action.payload.errorMessage,
            };

    default:
      return state;
  }
};

export default regions;
