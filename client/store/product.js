
import axios from "axios";

/**
 * ACTION TYPES
 */
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_SINGLEPRODUCT = "SET_SINGLEPRODUCT";

/**
 * ACTION CREATORS
 */
const setProducts = (products) => ({ type: SET_PRODUCTS, products });
const setSingleProduct = (singleProduct) => ({
  type: SET_SINGLEPRODUCT,
  singleProduct,
});
/**
 * THUNK CREATORS
 */
export const fetchAllProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products");
    return dispatch(setProducts(res.data));
  } catch (err) {
    console.log(err);
  }
};
export const fetchSingleProduct = (productId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/products/${productId}`);
    return dispatch(setSingleProduct(res.data));
  } catch (err) {
    console.log(err);
  }
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case SET_SINGLEPRODUCT:
      console.log('reducer action!!!!', action)
      return { ...state, singleProduct: action.singleProduct };
    // return state.map((singleProduct) =>
    //   singleProduct.id === action.singleProduct.id
    //     ? action.singleProduct
    //     : singleProduct
    // );
    default:
      return state;
  }
}