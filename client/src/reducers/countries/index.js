import { GET_LIST_COUNTRY } from "../../actions/locationAction";

const initialState = {
  getListCountriesResult: false,
  getListRCountriesLoading: false,
  getLisCountriesError: false,
};

const countries = (state = initialState, action) => {
  switch (action.type) {

    case GET_LIST_COUNTRY:
      return {
        ...state,
        getListCountriesResult: action.payload.data,
        getListRCountriesLoading: action.payload.loading,
        getLisCountriesError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default countries