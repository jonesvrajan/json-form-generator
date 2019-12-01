import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import {RenderSelectInput, RenderMultiSelectInput, renderSelectList} from '../components/FormFields';
import DependentInput from '../components/DependentInput';
import axios from 'axios';

class Form extends React.Component {
  
  constructor(props) {
    super(props)

  }
  
  componentDidMount() {
    this.props.fetchData();
  }


  renderForm () {

   const {fieldChecked} = this.props;
  
    if (!this.props.data) {
      return null
    } else {
    return this.props.data.map(function(item) {
      switch (item.type) {
        case 'select' :
          return (
            <div key={item.id} className="form-field">
              <label className="label">{item.placeholder}</label>
              <Field name={item.name} component={RenderSelectInput} options={item.options}/>
            </div>
          )
          case 'multi-select' :
            return (
              <div key={item.id} className="form-field">
                <label className="label">{item.placeholder}</label>
                <Field name={item.name} component={RenderMultiSelectInput} data={item.options} />
              </div>
            )

            case 'radio' :
            return (
              <div key={item.id} className="form-field">
                <label className="label">{item.placeholder}</label>
                <Field name={item.name} component={renderSelectList} data={item.options} />
              </div>
            )
          case 'checkbox' :

            return (
              <div key={item.id} className="form-field">
              {item.dependent ? 
                <DependentInput name={item.name} placeholder={item.placeholder} fieldChecked={fieldChecked}/>: 
                <div>Component for non dependent field</div>
                }
                
              </div>
            )
        default: 
          return (
          <div key={item.id} className="form-field">
            <label className="label">{item.placeholder}</label>
            <Field
              name={item.name}
              component={item.component}
              type={item.type}
              placeholder={item.placeholder}
            />
          </div>
        )
      }
    })
    }
  }
  render() {

  

  const { handleSubmit, pristine, reset, submitting } = this.props;

  return (
    
    <form onSubmit={handleSubmit}>
      <div>{this.renderForm()}</div>
      
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
}
};

const submit = (values, dispatch) => {
  axios.post('https://enmzq6eaj9rj.x.pipedream.net/response/submit/?name=JonesRajan', values)
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
  console.log(values);
};

const selector = formValueSelector('primary'); 

const mapStateToProps = (state, props) => {
  const fieldChecked = selector(state, "hasEmail");
  return {
    data: state.data.formData,
    fieldChecked
  }
}

const connectedForm = connect(mapStateToProps, {fetchData})(Form)

export default reduxForm({
  form: 'primary', // a unique identifier for this form
  onSubmit: submit 
})(connectedForm);
