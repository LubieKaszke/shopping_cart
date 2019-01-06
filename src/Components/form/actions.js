export const FORM_SUBMIT_SUCCEEDED = 'OrderForm/FORM_SUBMIT_SUCCEEDED';
export const formSubmitSucceededAction = value => ({
	type: FORM_SUBMIT_SUCCEEDED
});

export const FORM_SUBMIT_FAILED = 'OrderForm/FORM_SUBMIT_FAILED';
export const formSubmitFailedAction = value => ({
	type: FORM_SUBMIT_FAILED
});

export const PRODUCT_FORM_SUBMIT_SUCCEEDED = 'ProductForm/FORM_SUBMIT_SUCCEEDED';
export const productFormSubmitSucceededAction = values => ({
	type: PRODUCT_FORM_SUBMIT_SUCCEEDED
});

export const PRODUCT_FORM_SUBMIT_FAILED = 'ProductForm/FORM_SUBMIT_FAILED';
export const productFormSubmitFailedAction = value => ({
	type: PRODUCT_FORM_SUBMIT_FAILED
});