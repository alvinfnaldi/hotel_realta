import React, { useEffect } from "react";
import Menu from "./Menu";
import { getListPrice } from "../actions/priceItemsAction";
import { useDispatch, useSelector } from "react-redux";

const PriceItems = () => {
  const { getListPriceResult } = useSelector(
    (state) => state.PriceItemsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListPrice());
  }, [dispatch]);

  const priceitems = [].concat(getListPriceResult)
  console.log(priceitems)

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-2 text-start"></div>
          <div class="col-9 text-start">
            <h4>Table Price Items</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">Item Id</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">
                    <button className="btn btn-primary">Add</button>
                  </th>
                </tr>
              </thead>
              {priceitems.map((region, i) => {
                return (
                  <tbody className="text-start">
                    <tr>
                      <td>{i + 1}</td>
                      <td>{region.prit_name}</td>
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

export default PriceItems;
