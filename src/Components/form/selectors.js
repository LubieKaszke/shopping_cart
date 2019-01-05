export const formHasErrorsSelector = state => state.getIn(['reduxForm', 'formHasErrors']);
export const getFormErrorsSelector = state => state.getIn(['form', 'orderForm', 'submitErrors']);

export const productFormHasErrorsSelector = state => state.getIn(['reduxProductForm', 'formHasErrors']);
export const getProductFormErrorsSelector = state => state.getIn(['form', 'productForm', 'submitErrors']);