import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import students from '../Component/Student/reducer';
import staffs from '../Component/Staff/reducer';
import currentUser from '../Component/Authentication/reducer';

export default combineReducers({
  students,
  staffs,
  currentUser,
  form: formReducer
});
