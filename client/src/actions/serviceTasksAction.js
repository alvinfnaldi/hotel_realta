import axios from "axios";

export const GET_LIST_SERVICETASK = "GET_LIST_SERVICETASK";

export const getListService = () => {
    return (dispatch) => {
      dispatch({
        type: "GET_LIST_SERVICETASK",
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });
  
      axios({
        method: "GET",
        url: "http://localhost:3000/servicetasks",
      })
        .then((response) => {
          dispatch({
            type: GET_LIST_SERVICETASK,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_LIST_SERVICETASK,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };