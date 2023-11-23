import React, { useEffect } from "react";
import Menu from "./Menu";
import { getListPolicies } from "../actions/policyAction";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Policy = () => {
  const { getListPoliciesResult } = useSelector(
    (state) => state.PoliciesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListPolicies());
  }, [dispatch]);

  const policy = [].concat(getListPoliciesResult);
  console.log(policy);

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-2 text-start"></div>
          <div class="col-9 text-start">
            <h4>Table Policy</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">Policy Id</th>
                  <th scope="col">Policy Name</th>
                  <th scope="col"></th>
                  <th scope="col">
                    <button className="btn btn-primary">Add</button>
                  </th>
                </tr>
              </thead>
              {policy.map((region, i) => {
                return (
                  <tbody className="text-start">
                    <tr>
                      <td>{i + 1}</td>
                      <td>{region.poli_name}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <MdOutlineKeyboardDoubleArrowRight />
                        </button>

                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                              <div class="modal-body">{region.poli_description}</div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-warning mx-1">Edit</button>
                        <button className="btn btn-danger">Delete</button>
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
