import axios from "axios";
import Swal from "sweetalert2";

export const GET_LIST_POLICY = "GET_LIST_POLICY";
export const ADD_POLICY = "ADD_POLICY";
export const DELETE_POLICY = "DELETE_POLICY";
export const UPDATE_POLICY = "UPDATE_POLICY";
export const GET_DETAIL_POLICY = "GET_DETAIL_POLICY";

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

  export const addPolicy = (data) => {
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
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Policy added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
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
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });
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

  export const deletePolicy = (id) => {
    return (dispatch) => {
      dispatch({
        type: DELETE_POLICY,
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
              url: "http://localhost:3000/policy/delete/" + id,
              timeout: 120000,
            }).then((response) => {
              dispatch({
                type: DELETE_POLICY,
                payload: {
                  loading: false,
                  data: response.data,
                  errorMessage: false,
                },
              });
            });
            Swal.fire({
              title: "Deleted!",
              text: "Policy has been deleted.",
              icon: "success",
            });
          }
        })
  
        .catch((error) => {
          dispatch({
            type: DELETE_POLICY,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };

  export const updatePolicy = (id, data) => {
    return (dispatch) => {
      dispatch({
        type: UPDATE_POLICY,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });
  
      axios({
        method: "PUT",
        url: "http://localhost:3000/policy/update/" + id,
        timeout: 120000,
        data: data,
      })
        .then((response) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Policy updated",
            showConfirmButton: false,
            timer: 1500,
          });
          dispatch({
            type: UPDATE_POLICY,
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
            type: UPDATE_POLICY,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };
  
  export const getDetailPolicy = (id) => {
    return async (dispatch) => {
      dispatch({
        type: GET_DETAIL_POLICY,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });
  
      axios({
        method: "GET",
        url: "http://localhost:3000/policy/details/" + id,
        timeout: 10000,
      })
        .then((response) => {
          dispatch({
            type: GET_DETAIL_POLICY,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: GET_DETAIL_POLICY,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };