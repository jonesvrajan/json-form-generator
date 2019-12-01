import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import formDataReducer from './formDataReducer';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  data: formDataReducer
});

export default reducer;