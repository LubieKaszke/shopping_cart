import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form/immutable';
import {
	formHasErrorsSelector,
	getFormErrorsSelector
} from './selectors';
import {
	formSubmitFailedAction,
	formSubmitSucceededAction
} from './actions';
import validate from './validate';
import { listFormErrors } from './helpers';
import { renderInputComponent } from './helpers';

const OrderForm = ({handleSubmit,errors,formHasErrors}) => (
    <form onSubmit ={handleSubmit(validate)}>
        <div className="">
        <Field
				name="name"
				type="text"
				component={renderInputComponent}
			/>
        <Field
				name="surname"
				type="text"
				component={renderInputComponent}
			/>
        <Field
				name="email"
				type="text"
				component={renderInputComponent}
			/>
        <Field
				name="city"
				type="text"
				component={renderInputComponent}
			/>
        <Field
				name="adress"
				type="text"
				component={renderInputComponent}
			/>
        <Field
				name="zipcode"
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

OrderForm.propTypes ={
    handleSubmit: PropTypes.func.isRequired,
    formHasErrors: PropTypes.bool.isRequired,
    errors: PropTypes.shape({
        name: PropTypes.string,
        surname: PropTypes.string,
        city: PropTypes.string,
        adress: PropTypes.string,
        zipcode: PropTypes.string,
        email: PropTypes.string

    })
};

OrderForm.defaultProps ={
    errors: {}
};

const mapStateToProps = state => ({
	formHasErrors: formHasErrorsSelector(state),
	errors: getFormErrorsSelector(state)
});

const OrderFormConnect = connect(mapStateToProps,null)(
    reduxForm({
        destroyOnUnmount: false,
        form: 'orderForm',
        onSubmitFail:(errors,dispatch) => dispatch(formSubmitFailedAction()),
        onSubmit: values => values,
        onSubmitSuccess:(values,dispatch) => dispatch(formSubmitSucceededAction(values))
    })(OrderForm));

export default OrderFormConnect;
