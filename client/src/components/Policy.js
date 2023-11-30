import React, { useEffect, useState } from "react";
import {
  getListPolicies,
  addPolicy,
  deletePolicy,
  updatePolicy,
  getDetailPolicy,
} from "../actions/policyAction";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const Policy = () => {
  const {
    getListPoliciesResult,
    addPolicyResult,
    deletePolicyResult,
    updatePolicyResult,
    getDetailPolicyResult,
  } = useSelector((state) => state.PoliciesReducer);

  const dispatch = useDispatch();

  const [policy, setPolicy] = useState({
    poli_name: "",
    poli_description: "",
  });
  const [id, setId] = useState("");

  const handleAddPolicy = (e) => {
    e.preventDefault();
    dispatch(addPolicy(policy));
    dispatch(getListPolicies());
  };

  const handleEditPolicy = (e) => {
    e.preventDefault();
    dispatch(updatePolicy(+id, policy));
    dispatch(getListPolicies());
  };

  useEffect(() => {
    dispatch(getListPolicies());
  }, [dispatch]);

  useEffect(() => {
    if (addPolicyResult) {
      dispatch(getListPolicies());
      setPolicy({
        poli_name: "",
        poli_description: "",
      });
    }
  }, [addPolicyResult, dispatch]);

  useEffect(() => {
    if (deletePolicyResult) {
      dispatch(getListPolicies());
    }
  }, [deletePolicyResult, dispatch]);

  useEffect(() => {
    if (getDetailPolicyResult) {
      setPolicy({
        poli_name: getDetailPolicyResult.poli_name,
        poli_description: getDetailPolicyResult.poli_description,
      });
      setId(getDetailPolicyResult.poli_id);
    }
  }, [getDetailPolicyResult, dispatch]);

  useEffect(() => {
    if (updatePolicyResult) {
      dispatch(getListPolicies());
      setPolicy({
        poli_name: "",
        poli_description: "",
      });
      setId("");
    }
  }, [updatePolicyResult, dispatch]);

  const policies = [].concat(getListPoliciesResult);

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-12 text-start table-responsive">
            <h4>Table Policy</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">Policy Id</th>
                  <th scope="col">Policy Name</th>
                  <th scope="col"></th>
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
                      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="addModalLabel">
                              Add Policy
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-auto">
                              <label>Policy Name</label>
                            </div>
                            <div className="col-auto">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Name . . ."
                                onChange={(e) =>
                                  setPolicy({
                                    ...policy,
                                    poli_name: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="col-auto">
                              <label className="mt-3">Policy Description</label>
                            </div>
                            <div>
                              <textarea
                                className="form-control"
                                type="text"
                                placeholder="Description . . ."
                                onChange={(e) =>
                                  setPolicy({
                                    ...policy,
                                    poli_description: e.target.value,
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
                              onClick={(e) => handleAddPolicy(e)}
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
              {policies.map((policies, i) => {
                const { poli_id, poli_name } = policies;
                return (
                  <tbody className="text-start">
                    <tr>
                      <td>{i + 1}</td>
                      <td>{poli_name}</td>
                      <td>
                        <button
                          onClick={() => dispatch(getDetailPolicy(poli_id))}
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "black",
                          }}
                          type="button"
                          class="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#description"
                        >
                          <MdOutlineKeyboardDoubleArrowRight />
                        </button>

                        <div
                          class="modal fade"
                          id="description"
                          tabindex="-1"
                          aria-labelledby="descriptionLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                              <div class="modal-body">
                                {/* {poli_description} */}
                                <p>{getDetailPolicyResult.poli_description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="d-grid">
                          <button
                            onClick={() => dispatch(getDetailPolicy(poli_id))}
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#modalEditPolicy"
                            className="btn btn-warning"
                          >
                            <FaPencilAlt />
                          </button>
                        </div>
                        <div
                          class="modal fade"
                          id="modalEditPolicy"
                          tabindex="-1"
                          aria-labelledby="exampleModalEditPolicyLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1
                                  class="modal-title fs-5"
                                  id="exampleModalEditPolicyLabel"
                                >
                                  Edit Policy
                                </h1>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-auto">
                                  <label>Policy Name</label>
                                </div>
                                <div className="col-auto">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Name . . ."
                                    value={policy.poli_name}
                                    onChange={(e) =>
                                      setPolicy({
                                        ...policy,
                                        poli_name: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="col-auto">
                                  <label className="mt-3">
                                    Policy Description
                                  </label>
                                </div>
                                <div>
                                  <textarea
                                    className="form-control"
                                    type="text"
                                    placeholder="Description . . ."
                                    value={policy.poli_description}
                                    onChange={(e) =>
                                      setPolicy({
                                        ...policy,
                                        poli_description: e.target.value,
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
                                  onClick={(e) => handleEditPolicy(e)}
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
                        <div class="d-grid">
                          <button
                            onClick={() => dispatch(deletePolicy(poli_id))}
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

export default Policy;
