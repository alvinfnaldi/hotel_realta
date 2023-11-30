import {
  GET_LIST_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
  GET_DETAIL_CATEGORY,
} from "../../actions/categoryAction";

const initialState = {
  getListCategoriesResult: false,
  getListCategoriesLoading: false,
  getListCategoriesError: false,

  addCategoryResult: false,
  addCategoryLoading: false,
  addCategoryError: false,

  deleteCategoryResult: false,
  deleteCategoryLoading: false,
  deleteCategoryError: false,

  updateCategoryResult: false,
  updateCategoryLoading: false,
  updateCategoryError: false,

  getDetailCategoryResult: false,
  getDetailCategoryLoading: false,
  getDetailCategoryError: false,
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CATEGORY:
      return {
        ...state,
        getListCategoriesResult: action.payload.data,
        getListCategoriesLoading: action.payload.loading,
        getListCategoriesError: action.payload.errorMessage,
      };

    case ADD_CATEGORY:
      return {
        ...state,
        addCategoryResult: action.payload.data,
        addCategoryLoading: action.payload.loading,
        addCategoryError: action.payload.errorMessage,
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        deleteCategoryResult: action.payload.data,
        deleteCategoryLoading: action.payload.loading,
        deleteCategoryError: action.payload.errorMessage,
      };

      case UPDATE_CATEGORY:
        return {
          ...state,
          updateCategoryResult: action.payload.data,
          updateCategoryLoading: action.payload.loading,
          updateCategoryError: action.payload.errorMessage,
        };

        case GET_DETAIL_CATEGORY:
          return {
            ...state,
            getDetailCategoryResult: action.payload.data,
            getDetailCategoryLoading: action.payload.loading,
            getDetailCategoryError: action.payload.errorMessage,
          };

    default:
      return state;
  }
};

export default categories;
