import axios from "axios";

export const GET_LIST_PRICEITEMS = "GET_LIST_PRICEITEMS";

export const getListPrice = () => {
    return (dispatch) => {
      dispatch({
        type: "GET_LIST_PRICEITEMS",
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });
  
      axios({
        method: "GET",
        url: "http://localhost:3000/priceitems",
      })
        .then((response) => {
          dispatch({
            type: GET_LIST_PRICEITEMS,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_LIST_PRICEITEMS,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };