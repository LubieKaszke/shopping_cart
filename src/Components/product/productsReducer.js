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
        dispatch(deleteProductSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}

export const createProduct = (values) => {
  let keywords = values.get('keywords');
  keywords = keywords.split(",");
  let age = values.get('age');
  age = age.split(",");
  var product = 
      {
        name: values.get('name'),
        description: values.get('description'),
        keywords: keywords,
        age: age,
        price: values.get('price')
      }
  return (dispatch) => {
    return axios.post(apiUrl + "/addProduct", {product: product})
      .then(response => {
        dispatch(createProductSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createProductSuccess = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: {
      product
    }
  }
};

const productReducer = (state = [], action)=>{
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload.product];
    case 'DELETE_PRODUCT':
      return state.filter(product => product.id !== action.payload.id);
    case 'FETCH_PRODUCT':
      return action.products;
    default:
      return state;
  }
}

export default productReducer; 