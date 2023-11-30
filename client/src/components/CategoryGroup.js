import React, { useEffect, useState } from "react";
import {
  getListCategories,
  addCategory,
  deleteCategory,
  updateCategory,
  getDetailCategory,
} from "../actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const CategoryGroup = () => {
  const {
    getListCategoriesResult,
    addCategoryResult,
    deleteCategoryResult,
    updateCategoryResult,
    getDetailCategoryResult,
  } = useSelector((state) => state.CategoriesReducer);

  const dispatch = useDispatch();

  const [category, setCategory] = useState({
    cagro_name: "",
    cagro_description: "",
    cagro_type: "",
    cagro_icon: "",
    cagro_icon_url: "",
  });
  const [id, setId] = useState("");

  const handleAddCategory = (e) => {
    e.preventDefault();
    dispatch(addCategory(category));
    dispatch(getListCategories());
  };

  const handleEditCategory = (e) => {
    e.preventDefault();
    dispatch(updateCategory(+id, category));
    dispatch(getListCategories());
  };

  useEffect(() => {
    dispatch(getListCategories());
  }, [dispatch]);

  useEffect(() => {
    if (addCategoryResult) {
      dispatch(getListCategories());
      setCategory({
        cagro_name: "",
        cagro_description: "",
        cagro_type: "",
        cagro_icon: "",
        cagro_icon_url: "",
      });
    }
  }, [addCategoryResult, dispatch]);

  useEffect(() => {
    if (deleteCategoryResult) {
      dispatch(getListCategories());
    }
  }, [deleteCategoryResult, dispatch]);

  useEffect(() => {
    if (getDetailCategoryResult) {
      setCategory({
        cagro_name: getDetailCategoryResult.cagro_name,
        cagro_description: getDetailCategoryResult.cagro_description,
        cagro_type: getDetailCategoryResult.cagro_type,
        cagro_icon: getDetailCategoryResult.cagro_icon,
        cagro_icon_url: getDetailCategoryResult.cagro_icon_url,
      });
      setId(getDetailCategoryResult.cagro_id);
    }
  }, [getDetailCategoryResult, dispatch]);

  useEffect(() => {
    if (updateCategoryResult) {
      dispatch(getListCategories());
      setCategory({
        cagro_name: "",
        cagro_description: "",
        cagro_type: "",
        cagro_icon: "",
        cagro_icon_url: "",
      });
      setId("");
    }
  }, [updateCategoryResult, dispatch]);

  const categories = [].concat(getListCategoriesResult);

  const options = [
    { value: "Facility" },
    { value: "Category" },
    { value: "Service" },
  ];

  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-12 text-start table-responsive">
            <h4>Table Category</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Category Id</th>
                  <th scope="col">Category Name</th>
                  <th scope="col"></th>
                  <th scope="col">Type</th>
                  <th scope="col" colSpan={2} className="col-1">
                    <div class="d-grid">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#addModal"
                      >
                        <IoMdAdd />Add
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
                              Add Category Group
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
                              <label>Group Name</label>
                            </div>
                            <div className="col-6">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Name . . ."
                                onChange={(e) =>
                                  setCategory({
                                    ...category,
                                    cagro_name: e.target.value,
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
                                  setCategory({
                                    ...category,
                                    cagro_type: e.target.value,
                                  })
                                }
                              >
                                {options.map((option) => {
                                  return (
                                    <option
                                      defaultValue={"Facility"}
                                      selected={
                                        category.cagro_type === option.value
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
                              <label>Policy Rules</label>
                            </div>
                            <div className="col-6">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Policy Rules"
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
                                  setCategory({
                                    ...category,
                                    cagro_description: e.target.value,
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
                              onClick={(e) => handleAddCategory(e)}
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
              {categories.map((categories, i) => {
                const {
                  cagro_id,
                  cagro_icon,
                  cagro_name,
                  cagro_type,
                } = categories;
                return (
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={cagro_icon}
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "30px",
                          }}
                          alt=""
                        />
                      </td>
                      <td>{i + 1}</td>
                      <td>{cagro_name}</td>
                      <td>
                        <button
                          onClick={() => dispatch(getDetailCategory(cagro_id))}
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
                                <p>
                                  {getDetailCategoryResult.cagro_description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{cagro_type}</td>
                      <td>
                      <div class="d-grid">
                        <button
                          onClick={() => dispatch(getDetailCategory(cagro_id))}
                          type="button"
                          class="btn btn-warning justify-content-center"
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
                                  Edit Category Group
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
                                  <label>Group Name</label>
                                </div>
                                <div className="col-6">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Name . . ."
                                    value={category.cagro_name}
                                    onChange={(e) =>
                                      setCategory({
                                        ...category,
                                        cagro_name: e.target.value,
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
                                    class="form-select type"
                                    aria-label="Default select example"
                                    value={category.cagro_type}
                                    onChange={(e) =>
                                      setCategory({
                                        ...category,
                                        cagro_type: e.target.value,
                                      })
                                    }
                                  >
                                    <option value="Facility">Facility</option>
                                    <option value="Category">Category</option>
                                    <option value="Service">Service</option>
                                  </select>
                                </div>
                              </div>
                              <div class="modal-body row align-items-center">
                                <div className="col-4">
                                  <label>Policy Rules</label>
                                </div>
                                <div className="col-6">
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Policy Rules"
                                    // onChange={(e) =>
                                    //   setPolicy({
                                    //     ...policy,
                                    //     poli_name: e.target.value,
                                    //   })
                                    // }
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
                                    value={category.cagro_description}
                                    onChange={(e) =>
                                      setCategory({
                                        ...category,
                                        cagro_description: e.target.value,
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
                                  onClick={(e) => handleEditCategory(e)}
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
                          onClick={() => dispatch(deleteCategory(cagro_id))}
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

export default CategoryGroup;
