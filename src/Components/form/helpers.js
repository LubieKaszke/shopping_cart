import React from 'react';
import InputField from './input';

export const listFormErrors = (errors) => {
	if (typeof errors !== 'undefined' && errors.size > 0) {
		return Array.from(errors).map(v => <p key={v[0]}>{v[1]}</p>);
	}

	return [];
};

export const renderInputComponent = ({ input: {name,onChange,value}}) => {
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
        text = 'Adress: ';
        fieldName = 'adress';
        break;
    case 'description':
        text = 'Description: ';
        fieldName = 'description';
        break;
    case 'price':
        text = 'Price: ';
        fieldName = 'price';
        break;
    case 'keywords':
        text = 'Keywords: ';
        fieldName = 'keywords';
        break;
    case 'age':
        text = 'Age: ';
        fieldName = 'age';
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
