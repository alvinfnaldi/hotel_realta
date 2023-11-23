import { GET_LIST_PROVINCE } from "../../actions/locationAction";

const initialState = {
  getListProvincesResult: false,
  getListRProvincesLoading: false,
  getLisProvincesError: false,
};

const provinces = (state = initialState, action) => {
  switch (action.type) {

    case GET_LIST_PROVINCE:
      return {
        ...state,
        getListProvincesResult: action.payload.data,
        getListRProvincesLoading: action.payload.loading,
        getLisProvincesError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default provinces