import React, { useEffect, useState } from "react";
import {
  getListService,
  addService,
  deleteService,
  updateService,
  getDetailService,
} from "../actions/serviceTasksAction";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const ServiceTasks = () => {
  const {
    getListServiceResult,
    addServiceResult,
    deleteServiceResult,
    updateServiceResult,
    getDetailServiceResult,
  } = useSelector((state) => state.ServiceTasksReducer);

  const dispatch = useDispatch();

  const [servicetask, setServicetask] = useState({
    seta_name: "",
    seta_seq: 0,
  });
  const [id, setId] = useState("");

  const handleAddService = (e) => {
    e.preventDefault();
    dispatch(addService(servicetask));
    dispatch(getListService());
  };

  const handleEditService = (e) => {
    e.preventDefault();
    dispatch(updateService(+id, servicetask));
    dispatch(getListService());
  };

  useEffect(() => {
    dispatch(getListService());
  }, [dispatch]);

  useEffect(() => {
    if (addServiceResult) {
      dispatch(getListService());
      setServicetask({
        seta_name: "",
        seta_seq: "",
      });
    }
  }, [addServiceResult, dispatch]);

  useEffect(() => {
    if (deleteServiceResult) {
      dispatch(getListService());
    }
  }, [deleteServiceResult, dispatch]);

  useEffect(() => {
    if (getDetailServiceResult) {
      setServicetask({
        seta_name: getDetailServiceResult.seta_name,
        seta_seq: getDetailServiceResult.seta_seq,
      });
      setId(getDetailServiceResult.seta_id);
    }
  }, [getDetailServiceResult, dispatch]);

  useEffect(() => {
    if (updateServiceResult) {
      dispatch(getListService());
      setServicetask({
        seta_name: "",
        seta_seq: 0,
      });
    }
  }, [updateServiceResult, dispatch]);

  const servicetasks = [].concat(getListServiceResult);

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-12 text-start table-responsive">
            <h4>Table Service Tasks</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col" className="col-1">
                    No
                  </th>
                  <th scope="col" className="col-auto">
                    Task Name
                  </th>
                  <th scope="col" className="col-auto">
                    Sequence Order
                  </th>
                  <th scope="col" colSpan={2} className="col-1">
                    <div class="d-grid">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addModal"
                      >
                        <IoMdAdd />
                        Add
                      </button>
                    </div>
                    <div
                      class="modal fade"
                      id="addModal"
                      tabindex="-1"
                      aria-labelledby="addModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered ">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="addModalLabel">
                              Add Service Task
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Task Name</label>
                            </div>
                            <div className="col-6">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Name . . ."
                                onChange={(e) =>
                                  setServicetask({
                                    ...servicetask,
                                    seta_name: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Sequence Order</label>
                            </div>
                            <div className="col-4">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Sequence . . ."
                                onChange={(e) =>
                                  setServicetask({
                                    ...servicetask,
                                    seta_seq: parseInt(e.target.value),
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
                              onClick={(e) => handleAddService(e)}
                              type="submit"
                              class="btn btn-primary"
                              data-bs-dismiss="modal"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              {servicetasks.map((servicetasks, i) => {
                const { seta_id, seta_name, seta_seq } = servicetasks;
                return (
                  <tbody className="text-start">
                    <tr>
                      <td>{i + 1}</td>
                      <td>{seta_name}</td>
                      <td>{seta_seq}</td>
                      <td>
                        <div class="d-grid ">
                          <button
                            onClick={() => dispatch(getDetailService(seta_id))}
                            type="button"
                            class="btn btn-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#editModal"
                          >
                            <FaPencilAlt />
                          </button>
                        </div>
                        <div
                          class="modal fade"
                          id="editModal"
                          tabindex="-1"
                          aria-labelledby="editModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered ">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="editModalLabel"
                                >
                                  Edit Service Task
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Task Name</label>
                                </div>
                                <div className="col-6">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Name . . ."
                                    value={servicetask.seta_name}
                                    onChange={(e) =>
                                      setServicetask({
                                        ...servicetask,
                                        seta_name: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Sequence Order</label>
                                </div>
                                <div className="col-4">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Sequence . . ."
                                    value={servicetask.seta_seq}
                                    onChange={(e) =>
                                      setServicetask({
                                        ...servicetask,
                                        seta_seq: parseInt(e.target.value),
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
                                  onClick={(e) => handleEditService(e)}
                                  type="submit"
                                  class="btn btn-primary"
                                  data-bs-dismiss="modal"
                                >
                                  Edit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="d-grid ">
                          <button
                            onClick={(e) => dispatch(deleteService(seta_id))}
                            className="btn btn-danger"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTasks;
