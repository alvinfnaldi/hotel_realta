import { GET_LIST_CITY} from "../../actions/locationAction";

const initialState = {
  getListCitiesResult: false,
  getListRCitiesLoading: false,
  getLisCitiesError: false,
};

const cities = (state = initialState, action) => {
  switch (action.type) {

    case GET_LIST_CITY:
      return {
        ...state,
        getListCitiesResult: action.payload.data,
        getListRCitiesLoading: action.payload.loading,
        getLisCitiesError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default cities