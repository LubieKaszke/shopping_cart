import axios from 'axios';
const apiUrl = "http://localhost:8081/";

const fetchProducts = (products) => {
  return {
    type: 'FETCH_PRODUCT',
    products
  }
};

export const getAllProducts = () => {
  return (dispatch) => {
    return axios.get(apiUrl + "products")
      .then(response => {
        dispatch(fetchProducts(response.data.products))
      })
      .catch(error => {
        throw(error);
      });
  };
};

const productReducer = (state = [], action)=>{
  switch (action.type) {
    case 'FETCH_PRODUCT':
      return action.products;
    default:
      return state;
  }
}

export default productReducer; 