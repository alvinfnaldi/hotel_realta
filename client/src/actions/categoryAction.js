import axios from "axios";
import Swal from "sweetalert2";

export const GET_LIST_CATEGORY = "GET_LIST_CATEGORY";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const GET_DETAIL_CATEGORY = "GET_DETAIL_CATEGORY";

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

export const addCategory = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CATEGORY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "POST",
      url: "http://localhost:3000/category/add",
      data: data,
    })
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Category added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch({
          type: ADD_CATEGORY,
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
          type: ADD_CATEGORY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteCategory = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_CATEGORY,
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
            url: "http://localhost:3000/category/delete/" + id,
            timeout: 120000,
          }).then((response) => {
            dispatch({
              type: DELETE_CATEGORY,
              payload: {
                loading: false,
                data: response.data,
                errorMessage: false,
              },
            });
          });
          Swal.fire({
            title: "Deleted!",
            text: "Category has been deleted.",
            icon: "success",
          });
        }
      })

      .catch((error) => {
        dispatch({
          type: DELETE_CATEGORY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const updateCategory = (id, data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_CATEGORY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "PUT",
      url: "http://localhost:3000/category/update/" + id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Category updated",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch({
          type: UPDATE_CATEGORY,
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
          type: UPDATE_CATEGORY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getDetailCategory = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_DETAIL_CATEGORY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/category/details/" + id,
      timeout: 10000,
    })
      .then((response) => {
        dispatch({
          type: GET_DETAIL_CATEGORY,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DETAIL_CATEGORY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
