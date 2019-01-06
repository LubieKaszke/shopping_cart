import {SubmissionError} from 'redux-form/immutable';
import * as R from 'ramda';

const validate =(values) => {
    const stringPattern = /^[A-Za-z]+$/;
    const zipCodePattern = /[0-9]{2}-[0-9]{3}/;
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const errors ={};
    const name = values.get('name');
    const surname = values.get('surname');
    const email = values.get('email');
    const city = values.get('city');
    const adress = values.get('adress');
    const zipcode = values.get('zipcode');



    if (R.isNil(name)) {
		  errors.name = 'field "Name" can\'t be empty';
	  } else if (!stringPattern.test(name)) {
		  errors.name = 'field "Name" can have letters only';
    }
    
    if (R.isNil(surname)) {
		  errors.surname = 'field "Surname" can\'t be empty';
	  } else if (!stringPattern.test(surname)) {
		  errors.surname = 'field "Surname" can have letters only';
    }
    
    if (R.isNil(city)) {
		  errors.city = 'field "City" can\'t be empty';
	  } else if (!stringPattern.test(city)) {
		  errors.city = 'field "City" can have letters only';
    }
    
    if (R.isNil(adress)) {
		  errors.adress = 'field "Adress" can\'t be empty';
    } 
    
    
    if (R.isNil(zipcode)) {
		  errors.zipcode = 'field "Zip code" can\'t be empty';
	  } else if (!zipCodePattern.test(zipcode)) {
		  errors.zipcode = 'field "Zip code" have to be in "xx-xxx" format';
    }
  

    if (R.isNil(email)) {
		  errors.email = 'field "Email" can\'t be empty';
	  } else if (!emailPattern.test(email)) {
		  errors.email = 'field "Email" have to be in "xx@xxxx.xxx" format';
    }


    if(Object.keys(errors).length >0){
        throw new SubmissionError(errors);
    }

    return values;
    
};

export default validate;