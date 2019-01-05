export const formHasErrorsSelector = state => state.getIn(['form', 'formHasErrors']);
export const getFormErrorsSelector = state => state.getIn(['form', 'orderForm', 'submitErrors']);

