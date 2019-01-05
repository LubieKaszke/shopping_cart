import axios from 'axios';
const apiUrl = "http://localhost:8081";

const fetchProducts = (products) => {
  return {
    type: 'FETCH_PRODUCT',
    products
  }
};

export const getAllProducts = () => {
  return (dispatch) => {
    return axios.get(apiUrl + "/products")
      .then(response => {
        dispatch(fetchProducts(response.data.products))
      })
      .catch(error => {
        throw(error);
      });
  };
};

const deleteProductSuccess = id => {
  return {
    type: 'DELETE_PRODUCT',
    payload: {
      id
    }
  }
}

export const deleteProduct = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/deleteProduct/${id}`)
      .then(response => {
        dispatch(deleteProductSuccess(response.data.products))
      })
      .catch(error => {
        throw(error);
      });
  };
}

const productReducer = (state = [], action)=>{
  switch (action.type) {
    case 'DELETE_PRODUCT':
      return state.filter(product => product._id !== action.payload.id);
    case 'FETCH_PRODUCT':
      return action.products;
    default:
      return state;
  }
}

export default productReducer; 