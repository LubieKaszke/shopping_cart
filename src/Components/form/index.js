import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form/immutable';
import InputField from './input';
import {
	formHasErrorsSelector,
	getFormErrorsSelector
} from './selectors';
import {
	formSubmitFailedAction,
	formSubmitSucceededAction
} from './actions';
import validate from './validate';
import listFormErrors from './helpers';

const renderInputComponent = ({ input: {name,onChange,value}}) => {
    let text;
    let fieldName;

    switch(name){
    case 'name':
        text = 'Name:';
        fieldName = 'name';
        break;
    case 'surname':
        text = 'Surname:';
        fieldName = 'surname';
        break;
    case 'email':
        text = 'E-mail:';
        fieldName = 'email';
        break;
    case 'city':
        text = 'City:';
        fieldName = 'city';
        break;
    case 'zipcode':
        text = 'Zip Code:';
        fieldName = 'zipcode';
        break;
    case 'adress':
        text = 'Adress';
        fieldName = 'adress';
        break;
    default:
        text = '';
        fieldName = '';
    }
    return (
        <InputField
            value ={value}
            onChange={onChange}
            text={text}
            fieldName={fieldName}
            />
    );
};

const OrderForm = ({handleSubmit,errors,formHasErrors}) => (
    <form onSubmit ={handleSubmit(validate)}>
        <div className="register-form">
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
				<div className="register-form__form-errors">{listFormErrors(errors)}</div>
                }
        
        </div>
    </form>
);

OrderForm.PropTypes ={
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