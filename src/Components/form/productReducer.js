import { Map } from 'immutable';
import {
	PRODUCT_FORM_SUBMIT_FAILED,
	PRODUCT_FORM_SUBMIT_SUCCEEDED
} from './actions';

const initialState = new Map({
	formHasErrors: false
});


const reduxProductFormSampleReducer = (state = initialState, action) => {
	switch(action.type) {
		case PRODUCT_FORM_SUBMIT_FAILED:
			return state.set('formHasErrors', true);
		case PRODUCT_FORM_SUBMIT_SUCCEEDED:
			return state.set('formHasErrors', false);
		default:
			return state;
	}
};

export default reduxProductFormSampleReducer;