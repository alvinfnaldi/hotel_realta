import React, { useEffect, useState } from "react";
import {
  getListRegions,
  // getListCountries,
  // getListProvinces,
  // getListCities,
  addRegion,
  deleteRegion,
  updateRegion,
  getDetailRegion,
} from "../actions/locationAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const {
    getListRegionsResult,
    addRegionResult,
    deleteRegionResult,
    updateRegionResult,
    getDetailRegionResult,
  } = useSelector((state) => state.RegionsReducer);

  const { getListCountriesResult } = useSelector(
    (state) => state.CountriesReducer
  );
  const { getListProvincesResult } = useSelector(
    (state) => state.ProvincesReducer
  );
  const { getListCitiesResult } = useSelector((state) => state.CitiesReducer);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const [region, setRegion] = useState({
    region_name: "",
  });
  const [id, setId] = useState("");

  const [radioValue, setRadioValue] = useState("")

  const handleSelect = (e) => {
    setRadioValue(e.target.value)
    console.log(e.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addRegion(region));
    dispatch(getListRegions());
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateRegion(+id, region));
    dispatch(getListRegions());
  };

  useEffect(() => {
    dispatch(getListRegions());
  }, [dispatch]);

  useEffect(() => {
    if (addRegionResult) {
      dispatch(getListRegions());
      setRegion({
        region_name: "",
      });
    }
  }, [addRegionResult, dispatch]);

  useEffect(() => {
    if (deleteRegionResult) {
      dispatch(getListRegions());
    }
  }, [deleteRegionResult, dispatch]);

  useEffect(() => {
    if (getDetailRegionResult) {
      setRegion({
        region_name: getDetailRegionResult.region_name,
      });
      setId(getDetailRegionResult.region_code);
    }
  }, [getDetailRegionResult, dispatch]);

  useEffect(() => {
    if (updateRegionResult) {
      dispatch(getListRegions());
      setRegion({
        region_name: "",
      });
      setId("");
    }
  }, [updateRegionResult, dispatch]);

  const regions = [].concat(getListRegionsResult);
  const country = [].concat(getListCountriesResult);
  const province = [].concat(getListProvincesResult);
  const city = [].concat(getListCitiesResult);

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-center">
          <div class="col-2 text-start"></div>
          <div class="col-9 text-start">
            <h4>Table Region</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Region Id</th>
                  <th scope="col">Region Name</th>
                  <th scope="col">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Add
                    </button>
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">
                              Add Region
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          {/* <form onSubmit={(e)=>handleAdd(e)}> */}
                          <div class="modal-body row align-items-center">
                            <div className="col-auto">
                              <label>Region Name</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="South East"
                                onChange={(e) =>
                                  setRegion({
                                    ...region,
                                    region_name: e.target.value,
                                  })
                                }
                                value={region.region_name}
                              />
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={(e) => handleAdd(e)}
                              type="submit"
                              class="btn btn-primary"
                              data-bs-dismiss="modal"
                            >
                              Add
                            </button>
                          </div>
                          {/* </form> */}
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              {regions.length > 0 ? (
                regions.map((regions, i) => {
                  const { region_code, region_name } = regions;
                  return (
                    <tbody className="text-start">
                      <tr key={region_code}>
                        <td>
                          <div class="form-check">
                            <input
                            onClick={(e)=> handleSelect(e)}
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                          </div>
                        </td>
                        <td>{i + 1}</td>
                        <td>{region_name}</td>
                        <td>
                          <button
                            onClick={() =>
                              dispatch(getDetailRegion(region_code))
                            }
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#modalEdit"
                            className="btn btn-warning mx-1"
                          >
                            Edit
                          </button>
                          <div
                            class="modal fade"
                            id="modalEdit"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1
                                    class="modal-title fs-5"
                                    id="exampleModalLabel"
                                  >
                                    Edit Region
                                  </h1>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                {/* <form onSubmit={(e)=>handleAdd(e)}> */}
                                <div class="modal-body row align-items-center">
                                  <div className="col-auto">
                                    <label>Region Name</label>
                                  </div>
                                  <div className="col-auto">
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="South East"
                                      value={region.region_name}
                                      onChange={(e) =>
                                        setRegion({
                                          ...region,
                                          region_name: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={(e) => handleEdit(e)}
                                    type="submit"
                                    class="btn btn-primary"
                                    data-bs-dismiss="modal"
                                  >
                                    Edit
                                  </button>
                                </div>
                                {/* </form> */}
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => dispatch(deleteRegion(region_code))}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })
              ) : (
                <Loading />
              )}
            </table>

            {}

            {/* <h4>Table Country</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">Country Id</th>
                  <th scope="col">Country Name</th>
                  <th scope="col">
                    <button className="btn btn-primary">Add</button>
                  </th>
                </tr>
              </thead>
              {country.map((region, i) => {
                return (
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{region?.country_name}</td>
                      <td>
                        <button className="btn btn-warning mx-1">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>

            <h4>Table Province</h4>
            <table class="table align middle">
              <thead>
                <tr>
                  <th scope="col">Province Id</th>
                  <th scope="col">Province Name</th>
                  <th scope="col">
                    <button className="btn btn-primary">Add</button>
                  </th>
                </tr>
              </thead>
              {province.map((region, i) => {
                return (
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{region?.prov_name}</td>
                      <td>
                        <button className="btn btn-warning mx-1">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>

            <h4>Table City</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">City Id</th>
                  <th scope="col">City Name</th>
                  <th scope="col">
                    <button className="btn btn-primary">Add</button>
                  </th>
                </tr>
              </thead>
              {city.map((region, i) => {
                return (
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{region?.addr_line1}</td>
                      <td>
                        <button className="btn btn-warning mx-1">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table> */}
          </div>
        </div>
      </div>
      {/* <Outlet/> */}
    </div>
  );
};

export default Content;
