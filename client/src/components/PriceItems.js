import React, { useEffect, useState } from "react";
import {
  getListPrice,
  addPrice,
  deletePrice,
  updatePrice,
  getDetailPrice,
} from "../actions/priceItemsAction";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const PriceItems = () => {
  const {
    getListPriceResult,
    addPriceResult,
    deletePriceResult,
    updatePriceResult,
    getDetailPriceResult,
  } = useSelector((state) => state.PriceItemsReducer);

  const dispatch = useDispatch();

  const [priceitem, setPriceitem] = useState({
    prit_name: "",
    prit_price: 0,
    prit_description: "",
    prit_type: "",
  });
  const [id, setId] = useState("");

  const handleAddPrice = (e) => {
    e.preventDefault();
    dispatch(addPrice(priceitem));
    dispatch(getListPrice());
  };

  const handleEditPrice = (e) => {
    e.preventDefault();
    dispatch(updatePrice(+id, priceitem));
    dispatch(getListPrice());
  };

  useEffect(() => {
    dispatch(getListPrice());
  }, [dispatch]);

  useEffect(() => {
    if (addPriceResult) {
      dispatch(getListPrice());
      setPriceitem({
        prit_name: "",
        prit_price: "",
        prit_description: "",
        prit_type: "",
      });
    }
  }, [addPriceResult, dispatch]);

  useEffect(() => {
    if (deletePriceResult) {
      dispatch(getListPrice());
    }
  }, [deletePriceResult, dispatch]);

  useEffect(() => {
    if (getDetailPriceResult) {
      setPriceitem({
        prit_name: getDetailPriceResult.prit_name,
        prit_price: getDetailPriceResult.prit_price,
        prit_description: getDetailPriceResult.prit_description,
        prit_type: getDetailPriceResult.prit_type,
      });
      setId(getDetailPriceResult.prit_id);
    }
  }, [getDetailPriceResult, dispatch]);

  useEffect(() => {
    if (updatePriceResult) {
      dispatch(getListPrice());
      setPriceitem({
        prit_name: "",
        prit_price: 0,
        prit_description: "",
        prit_type: "",
      });
    }
  }, [updatePriceResult, dispatch]);

  const priceitems = [].concat(getListPriceResult);

  let idr = (price) => {
    return Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const options = [
    { value: "Softdrink" },
    { value: "Snack" },
    { value: "Food" },
    { value: "Facility" },
    { value: "Service" },
  ];

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-12 text-start table-responsive">
            <h4>Table Price Items</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">Item Id</th>
                  <th scope="col">Item Name</th>
                  <th scope="col"></th>
                  <th scope="col">Price</th>
                  <th scope="col">Type</th>
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
                              Add Item Price
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
                              <label>Item Name</label>
                            </div>
                            <div className="col-6">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Name . . ."
                                onChange={(e) =>
                                  setPriceitem({
                                    ...priceitem,
                                    prit_name: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label className="mt-3">Type</label>
                            </div>
                            <div className="col-6">
                              <select
                                className="form-select"
                                onChange={(e) =>
                                  setPriceitem({
                                    ...priceitem,
                                    prit_type: e.target.value,
                                  })
                                }
                              >
                                {options.map((option) => {
                                  return (
                                    <option
                                      defaultValue={"Softdrink"}
                                      selected={
                                        priceitem.prit_type === option.value
                                      }
                                    >
                                      {option.value}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-4">
                              <label>Item Price</label>
                            </div>
                            <div className="col-6">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Price . . ."
                                onChange={(e) =>
                                  setPriceitem({
                                    ...priceitem,
                                    prit_price: parseInt(e.target.value),
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div className="col-7">
                              <label>Description</label>
                            </div>
                            <div>
                              <textarea
                                className="form-control"
                                type="text"
                                placeholder="Description . . ."
                                onChange={(e) =>
                                  setPriceitem({
                                    ...priceitem,
                                    prit_description: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div class="modal-body row align-items-center">
                            <div class="mb-3">
                              <label for="formFile" class="form-label">
                                Upload Icon
                              </label>
                              <input
                                class="form-control"
                                type="file"
                                id="formFile"
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
                              onClick={(e) => handleAddPrice(e)}
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
              {priceitems.map((priceitems, i) => {
                const { prit_id, prit_name, prit_price, prit_type } =
                  priceitems;
                return (
                  <tbody className="text-start">
                    <tr>
                      <td>{i + 1}</td>
                      <td>{prit_name}</td>
                      <td>
                        <button
                          onClick={() => dispatch(getDetailPrice(prit_id))}
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
                                <p>{getDetailPriceResult.prit_description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{idr(prit_price)}</td>
                      <td>{prit_type}</td>
                      <td>
                        <div class="d-grid ">
                          <button
                            onClick={(e) => dispatch(getDetailPrice(prit_id))}
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
                                  Edit Item Price
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
                                  <label>Item Name</label>
                                </div>
                                <div className="col-6">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Name . . ."
                                    value={priceitem.prit_name}
                                    onChange={(e) =>
                                      setPriceitem({
                                        ...priceitem,
                                        prit_name: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-4">
                                  <label className="mt-3">Type</label>
                                </div>
                                <div className="col-6">
                                  <select
                                    className="form-select"
                                    onChange={(e) =>
                                      setPriceitem({
                                        ...priceitem,
                                        prit_type: e.target.value,
                                      })
                                    }
                                  >
                                    {options.map((option) => {
                                      return (
                                        <option
                                          defaultValue={option[0]}
                                          selected={
                                            priceitem.prit_type === option.value
                                          }
                                        >
                                          {option.value}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Item Price</label>
                                </div>
                                <div className="col-6">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Price . . ."
                                    value={priceitem.prit_price}
                                    onChange={(e) =>
                                      setPriceitem({
                                        ...priceitem,
                                        prit_price: parseInt(e.target.value),
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-7">
                                  <label>Description</label>
                                </div>
                                <div>
                                  <textarea
                                    className="form-control"
                                    type="text"
                                    placeholder="Description . . ."
                                    value={priceitem.prit_description}
                                    onChange={(e) =>
                                      setPriceitem({
                                        ...priceitem,
                                        prit_description: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div class="mb-3">
                                  <label for="formFile" class="form-label">
                                    Upload Icon
                                  </label>
                                  <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
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
                                  onClick={(e) => handleEditPrice(e)}
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
                            onClick={(e) => dispatch(deletePrice(prit_id))}
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

export default PriceItems;
