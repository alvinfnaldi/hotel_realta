import { GET_LIST_SERVICETASK } from "../../actions/serviceTasksAction";

const initialState = {
  getListServiceResult: false,
  getListServiceLoading: false,
  getListServiceError: false,
};

const servicetasks = (state = initialState, action) => {
  switch (action.type) {

    case GET_LIST_SERVICETASK:
      return {
        ...state,
        getListServiceResult: action.payload.data,
        getListServiceLoading: action.payload.loading,
        getListServiceError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default servicetasks