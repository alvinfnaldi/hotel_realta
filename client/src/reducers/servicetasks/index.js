import {
  GET_LIST_SERVICETASK,
  ADD_SERVICETASK,
  DELETE_SERVICETASK,
  UPDATE_SERVICETASK,
  GET_DETAIL_SERVICETASK,
} from "../../actions/serviceTasksAction";

const initialState = {
  getListServiceResult: false,
  getListServiceLoading: false,
  getListServiceError: false,

  addServiceResult: false,
  addServiceLoading: false,
  addServiceError: false,

  deleteServiceResult: false,
  deleteServiceLoading: false,
  deleteServiceError: false,

  updateServiceResult: false,
  updateServiceLoading: false,
  updateServiceError: false,

  detailServiceResult: false,
  detailServiceLoading: false,
  detailServiceError: false,
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

    case ADD_SERVICETASK:
      return {
        ...state,
        addServiceResult: action.payload.data,
        addServiceLoading: action.payload.loading,
        addServiceError: action.payload.errorMessage,
      };

    case DELETE_SERVICETASK:
      return {
        ...state,
        deleteServiceResult: action.payload.data,
        deleteServiceLoading: action.payload.loading,
        deleteServiceError: action.payload.errorMessage,
      };

    case UPDATE_SERVICETASK:
      return {
        ...state,
        updateServiceResult: action.payload.data,
        updateServiceLoading: action.payload.loading,
        updateServiceError: action.payload.errorMessage,
      };

    case GET_DETAIL_SERVICETASK:
      return {
        ...state,
        getDetailServiceResult: action.payload.data,
        getDetailServiceLoading: action.payload.loading,
        getDetailServiceError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default servicetasks;
