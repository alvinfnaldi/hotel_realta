import { combineReducers } from "redux";
import RegionsReducer from "./regions"
import CountriesReducer from "./countries"
import ProvincesReducer from "./provinces"
import CitiesReducer from "./cities"
import PoliciesReducer from "./policies"
import CategoriesReducer from "./categories"
import PriceItemsReducer from "./priceitems"
import ServiceTasksReducer from "./servicetasks"

export default combineReducers({
    RegionsReducer, CountriesReducer, ProvincesReducer, CitiesReducer, PoliciesReducer, CategoriesReducer, PriceItemsReducer, ServiceTasksReducer
})