import React, { useEffect } from 'react'
import Menu from './Menu';
import { getListCategories } from "../actions/categoryAction"
import { useDispatch, useSelector } from 'react-redux';

const CategoryGroup = () => {

  const { getListCategoriesResult } = useSelector((state)=> state.CategoriesReducer)

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getListCategories())
  },[dispatch])
  
  const category = [].concat(getListCategoriesResult)
  
  return (
    <div>
      <div class="content text-center container">
        <div class="row justify-content-start">
          <div class="col-2 text-start">
          </div>
          <div class="col-9 text-start">
            <h4>Table Category</h4>
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col">Category Id</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">
                    <button className="btn btn-primary">Add</button>
                  </th>
                </tr>
              </thead>
              {category.map((region, i) => {
                return (
                  <tbody className="text-start">
                    <tr>
                      <td>{i + 1}</td>
                      <td>{region.cagro_name}</td>
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
  )
}

export default CategoryGroup