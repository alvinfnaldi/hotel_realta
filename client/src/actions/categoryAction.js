import axios from "axios";

export const GET_LIST_CATEGORY = "GET_LIST_CATEGORY";

export const getListCategories = () => {
    return (dispatch) => {
      dispatch({
        type: "GET_LIST_CATEGORY",
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });
  
      axios({
        method: "GET",
        url: "http://localhost:3000/category",
      })
        .then((response) => {
          dispatch({
            type: GET_LIST_CATEGORY,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_LIST_CATEGORY,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };