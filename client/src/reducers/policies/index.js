import {
  GET_LIST_POLICY,
  ADD_POLICY,
  DELETE_POLICY,
  UPDATE_POLICY,
  GET_DETAIL_POLICY,
} from "../../actions/policyAction";

const initialState = {
  getListPoliciesResult: false,
  getListPoliciesLoading: false,
  getListPoliciesError: false,

  addPolicyResult: false,
  addPolicyLoading: false,
  addPolicyError: false,

  deletePolicyResult: false,
  deletePolicyLoading: false,
  deletePolicyError: false,

  updatePolicyResult: false,
  updatePolicyLoading: false,
  updatePolicyError: false,

  getDetailPolicyResult: false,
  getDetailPolicyLoading: false,
  getDetailPolicyError: false,
};

const policies = (state = initialState, action) => {
  switch (action.type) {
    
    case GET_LIST_POLICY:
      return {
        ...state,
        getListPoliciesResult: action.payload.data,
        getListPoliciesLoading: action.payload.loading,
        getListPoliciesError: action.payload.errorMessage,
      };

    case ADD_POLICY:
      return {
        ...state,
        addPolicyResult: action.payload.data,
        addPolicyLoading: action.payload.loading,
        addPolicyError: action.payload.errorMessage,
      };

    case DELETE_POLICY:
      return {
        ...state,
        deletePolicyResult: action.payload.data,
        deletePolicyLoading: action.payload.loading,
        deletePolicyError: action.payload.errorMessage,
      };

    case UPDATE_POLICY:
      return {
        ...state,
        updatePolicyResult: action.payload.data,
        updatePolicyLoading: action.payload.loading,
        updatePolicyError: action.payload.errorMessage,
      };

    case GET_DETAIL_POLICY:
      return {
        ...state,
        getDetailPolicyResult: action.payload.data,
        getDetailPolicyLoading: action.payload.loading,
        getDetailPolicyError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default policies;
