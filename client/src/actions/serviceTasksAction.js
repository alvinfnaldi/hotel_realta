import axios from "axios";
import Swal from "sweetalert2";

export const GET_LIST_SERVICETASK = "GET_LIST_SERVICETASK";
export const ADD_SERVICETASK = "ADD_SERVICETASK";
export const DELETE_SERVICETASK = "DELETE_SERVICETASK";
export const UPDATE_SERVICETASK = "UPDATE_SERVICETASK";
export const GET_DETAIL_SERVICETASK = "GET_DETAIL_SERVICETASK";

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

export const addService = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_SERVICETASK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "POST",
      url: "http://localhost:3000/servicetasks/add",
      data: data,
    })
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "ServiceTasks added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch({
          type: ADD_SERVICETASK,
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
          type: ADD_SERVICETASK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteService = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_SERVICETASK,
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
            url: "http://localhost:3000/servicetasks/delete/" + id,
            timeout: 120000,
          }).then((response) => {
            dispatch({
              type: DELETE_SERVICETASK,
              payload: {
                loading: false,
                data: response.data,
                errorMessage: false,
              },
            });
          });
          Swal.fire({
            title: "Deleted!",
            text: "ServiceTask has been deleted.",
            icon: "success",
          });
        }
      })

      .catch((error) => {
        dispatch({
          type: DELETE_SERVICETASK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const updateService = (id, data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_SERVICETASK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "PUT",
      url: "http://localhost:3000/servicetasks/update/" + id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "ServiceTasks updated",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch({
          type: UPDATE_SERVICETASK,
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
          type: UPDATE_SERVICETASK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getDetailService = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_DETAIL_SERVICETASK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/servicetasks/details/" + id,
      timeout: 10000,
    })
      .then((response) => {
        dispatch({
          type: GET_DETAIL_SERVICETASK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DETAIL_SERVICETASK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
