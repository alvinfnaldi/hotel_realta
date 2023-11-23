import React, { useEffect } from "react";
import Menu from "./Menu";
import { getListService } from "../actions/serviceTasksAction";
import { useDispatch, useSelector } from "react-redux";

const ServiceTasks = () => {
  const { getListServiceResult } = useSelector(
    (state) => state.ServiceTasksReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListService());
  }, [dispatch]);

  const servicetasks = [].concat(getListServiceResult);
  console.log(servicetasks);

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-2 text-start"></div>
          <div class="col-9 text-start">
            <h4>Table Service Tasks</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Task Name</th>
                  <th scope="col">Sequence Order</th>
                  <th scope="col">
                    <button className="btn btn-primary">Add</button>
                  </th>
                </tr>
              </thead>
              {servicetasks.map((region, i) => {
                return (
                  <tbody className="text-start">
                    <tr>
                      <td>{i + 1}</td>
                      <td>{region.seta_name}</td>
                      <td>{region.seta_seq}</td>
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

export default ServiceTasks;
