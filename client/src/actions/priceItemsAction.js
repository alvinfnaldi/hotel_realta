import axios from "axios";
import Swal from "sweetalert2";

export const GET_LIST_PRICEITEMS = "GET_LIST_PRICEITEMS";
export const ADD_PRICEITEMS = "ADD_PRICEITEMS";
export const DELETE_PRICEITEMS = "DELETE_PRICEITEMS";
export const UPDATE_PRICEITEMS = "UPDATE_PRICEITEMS";
export const GET_DETAIL_PRICEITEMS = "GET_DETAIL_PRICEITEMS";

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

export const addPrice = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRICEITEMS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "POST",
      url: "http://localhost:3000/priceitems/add",
      data: data,
    })
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "PriceItems added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch({
          type: ADD_PRICEITEMS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.error,
        });
        dispatch({
          type: ADD_PRICEITEMS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deletePrice = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PRICEITEMS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios({
            method: "DELETE",
            url: "http://localhost:3000/priceitems/delete/" + id,
            timeout: 120000,
          }).then((response) => {
            dispatch({
              type: DELETE_PRICEITEMS,
              payload: {
                loading: false,
                data: response.data,
                errorMessage: false,
              },
            });
          });
          Swal.fire({
            title: "Deleted!",
            text: "PriceItems has been deleted.",
            icon: "success",
          });
        }
      })

      .catch((error) => {
        dispatch({
          type: DELETE_PRICEITEMS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const updatePrice = (id, data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_PRICEITEMS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "PUT",
      url: "http://localhost:3000/priceitems/update/" + id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "PriceItems updated",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch({
          type: UPDATE_PRICEITEMS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.error,
        });
        dispatch({
          type: UPDATE_PRICEITEMS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getDetailPrice = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_DETAIL_PRICEITEMS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/priceitems/details/" + id,
      timeout: 10000,
    })
      .then((response) => {
        dispatch({
          type: GET_DETAIL_PRICEITEMS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DETAIL_PRICEITEMS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
