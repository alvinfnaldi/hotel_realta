import axios from "axios";

export const GET_LIST_POLICY = "GET_LIST_POLICY";
export const ADD_POLICY = "ADD_POLICY";

export const getListPolicies = () => {
    return (dispatch) => {
      dispatch({
        type: GET_LIST_POLICY,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });
  
      axios({
        method: "GET",
        url: "http://localhost:3000/policy",
      })
        .then((response) => {
          dispatch({
            type: GET_LIST_POLICY,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_LIST_POLICY,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };

  export const AddPolicy = (data) => {
    return (dispatch) => {
      dispatch({
        type: ADD_POLICY,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });
  
      axios({
        method: "POST",
        url: "http://localhost:3000/policy/add",
        data: data
      })
        .then((response) => {
          dispatch({
            type: ADD_POLICY,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: ADD_POLICY,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };