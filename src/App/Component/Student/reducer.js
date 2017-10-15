const initialState ={
  studentList: []
};

export default (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_STUDENT_LIST':
      return {...state, studentList: action.studentList};
    default: 
      return state;
  }
}