const initialState ={
  studentList: []
};

export default (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_STUDENT_LIST':
    return {...state, studentList: action.studentList};
    case 'ADD_STUDENT':
    return {...state, studentList: state.studentList.concat(action.student)};
    case 'UPDATE_STUDENT':
      debugger;
      return {...state, studentList: state.studentList.map(student => (student.id === action.student.id ? action.student : student))};
    case 'REMOVE_STUDENT':
      debugger;    
      return {...state, studentList: state.studentList.filter(student => (student.id !== action.student.id))};
    default: 
      return state;
  }
}