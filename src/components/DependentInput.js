import React from 'react';
import { Field} from 'redux-form';

const DependentInput = props => {
  const {
    fieldChecked,
    name,
    placeholder
  } = props;
  return (
 

    <div>
      <div>
        <label htmlFor={name}>Has Email?</label>
       
          <Field
            name={name}
            id={name}
            component="input"
            type="checkbox"
          />
      
      </div>
      {fieldChecked ?
        <div className="form-field">
          <label className="label">Email</label>
          
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          
        </div>: null}
        </div>
  );
};


export default DependentInput;
