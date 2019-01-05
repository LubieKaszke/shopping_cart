export const formHasErrorsSelector = state => state.getIn(['reduxForm', 'formHasErrors']);
export const getFormErrorsSelector = state => state.getIn(['form', 'orderForm', 'submitErrors']);

