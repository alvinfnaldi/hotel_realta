import { GET_LIST_POLICY } from "../../actions/policyAction";

const initialState = {
  getListPoliciesResult: false,
  getListPoliciesLoading: false,
  getListPoliciesError: false,
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

    default:
      return state;
  }
};

export default policies