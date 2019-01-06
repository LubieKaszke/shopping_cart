import {SubmissionError} from 'redux-form/immutable';
import * as R from 'ramda';

const productValidate =(values) => {
    console.log(values);
    const stringPattern = /^[A-Za-z]+$/;
    const agePattern = /^[0-9]+(,[0-9]+)/;
    const pricePattern =/(\d+\.\d{1,2})/;
    const errors ={};
    const productName = values.get('name');
    const description = values.get('description');
    const price = values.get('price');
    const keywords = values.get('keywords')
    const age = values.get('age');

    if (R.isNil(productName)) {
        errors.productName = 'field "Name" can\'t be empty';
    } else if (!stringPattern.test(productName)) {
        errors.productName = 'field "Name" can have letters only';
  }

  
  if (R.isNil(description)) {
    errors.description = 'field "Description" can\'t be empty';
  }

  if (R.isNil(price)) {
        errors.price = 'field "Price" can\'t be empty';
    } else if (!pricePattern.test(price)) {
        errors.price = 'field "Price" have to be number in format xx.xx';
  }

  if (R.isNil(age)) {
        errors.age = 'field "Age" can\'t be empty';
    } else if (!agePattern.test(age)) {
        errors.age = 'field "Age" have to be in "xx,xx" format';
  }

  if (R.isNil(keywords)) {
        errors.keywords = 'field "Keywords" can\'t be empty';
    }


    if(Object.keys(errors).length >0){
        throw new SubmissionError(errors);
    }

    return values;
    
};

export default productValidate;