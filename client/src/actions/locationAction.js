import axios from "axios";
import Swal from "sweetalert2";

export const GET_LIST_REGION = "GET_LIST_REGION";
export const ADD_REGION = "ADD_REGION";
export const DELETE_REGION = "DELETE_REGION";
export const UPDATE_REGION = "UPDATE_REGION";
export const GET_DETAIL_REGION = "GET_DETAIL_REGION";

export const GET_LIST_COUNTRY = "GET_LIST_COUNTRY";
export const GET_LIST_PROVINCE = "GET_LIST_PROVINCE";
export const GET_LIST_CITY = "GET_LIST_CITY";

// REGION
export const getListRegions = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_LIST_REGION",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/locations/regions",
    })
      .then((response) => {
        dispatch({
          type: GET_LIST_REGION,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_REGION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addRegion = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_REGION,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "POST",
      url: "http://localhost:3000/locations/regions/add",
      data: data,
    })
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Regions added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch({
          type: ADD_REGION,
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
          type: ADD_REGION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteRegion = (id) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: DELETE_REGION,
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
            url: "http://localhost:3000/locations/regions/delete/" + id,
            timeout: 120000,
          }).then((response) => {
            dispatch({
              type: DELETE_REGION,
              payload: {
                loading: false,
                data: response.data,
                errorMessage: false,
              },
            });
          });
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      })

      .catch((error) => {
        dispatch({
          type: DELETE_REGION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const updateRegion = (id, data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_REGION,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "PUT",
      url: "http://localhost:3000/locations/regions/update/" + id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Region updated",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch({
          type: UPDATE_REGION,
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
          type: UPDATE_REGION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getDetailRegion = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_DETAIL_REGION,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/locations/regions/details/" + id,
      timeout: 10000,
    })
      .then((response) => {
        dispatch({
          type: GET_DETAIL_REGION,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DETAIL_REGION,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// COUNTRY
export const getListCountries = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_COUNTRY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/locations/countries",
    })
      .then((response) => {
        dispatch({
          type: GET_LIST_COUNTRY,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_COUNTRY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// PROVINCE
export const getListProvinces = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_LIST_PROVINCE",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/locations/provinces",
    })
      .then((response) => {
        dispatch({
          type: GET_LIST_PROVINCE,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_PROVINCE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// CITY
export const getListCities = () => {
  return (dispatch) => {
    dispatch({
      type: "GET_LIST_CITY",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/locations/city",
    })
      .then((response) => {
        dispatch({
          type: GET_LIST_CITY,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_CITY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
