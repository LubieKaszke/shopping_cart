export const FORM_SUBMIT_SUCCEEDED = 'OrderForm/FORM_SUBMIT_SUCCEEDED';
export const formSubmitSucceededAction = value => ({
	type: FORM_SUBMIT_SUCCEEDED
});

export const FORM_SUBMIT_FAILED = 'OrderForm/FORM_SUBMIT_FAILED';
export const formSubmitFailedAction = value => ({
	type: FORM_SUBMIT_FAILED
});