import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form/immutable';
import {
	productFormHasErrorsSelector,
	getProductFormErrorsSelector
} from './selectors';
import {
	productFormSubmitFailedAction,
	productFormSubmitSucceededAction
} from './actions';
import productValidate from './productValidate';
import { listFormErrors } from './helpers';
import { renderInputComponent } from './helpers';
import { createProduct } from '../product/productsReducer'

const ProductForm = ({handleSubmit,errors,formHasErrors}) => (
    <form onSubmit ={handleSubmit(productValidate)}>
        <div className="register-form">
            <Field
		    	name="name"
		    	type="text"
		    	component={renderInputComponent}
		    />
            <Field
			    name="description"
			    type="text"
			    component={renderInputComponent}
		    />
            <Field
			    name="keywords"
			    type="text"
			    component={renderInputComponent}
		    />
            <Field
			    name="price"
			    type="number"
			    component={renderInputComponent}
		    />
            <Field
			    name="age"
			    type="text"
			    component={renderInputComponent}
		    />

            <button type ="submit">Submit</button>
            {formHasErrors &&
				<div className="form-errors">{listFormErrors(errors)}</div>
            }
        </div>
    </form>
);

ProductForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    formHasErrors: PropTypes.bool.isRequired,
    errors: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        keywords: PropTypes.string,
        price: PropTypes.number,
        age: PropTypes.string
    })
};

ProductForm.defaultProps ={
    errors: {}
};

const mapStateToProps = state => ({
	formHasErrors: productFormHasErrorsSelector(state),
	errors: getProductFormErrorsSelector(state)
});

const ProductFormConnect = connect(mapStateToProps,null)(
    reduxForm({
        destroyOnUnmount: false,
        form: 'productForm',
        onSubmitFail:(errors,dispatch) => dispatch(productFormSubmitFailedAction()),
        onSubmit: values => values,
        onSubmitSuccess:(values,dispatch) => {
            dispatch(productFormSubmitSucceededAction(values));
            dispatch(createProduct(values));
        }
    })(ProductForm));


export default ProductFormConnect;