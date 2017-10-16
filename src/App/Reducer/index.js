import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import students from '../Component/Student/reducer';

export default combineReducers({
  students,
  form: formReducer,
});