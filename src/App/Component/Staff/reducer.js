const initialState ={
  staffList: []
};

export default (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_STAFF_LIST':
    return {...state, staffList: action.staffList};
    case 'ADD_STAFF':
    return {...state, staffList: state.staffList.concat(action.staff)};
    case 'UPDATE_STAFF':
      return {...state, staffList: state.staffList.map(staff => (staff.id === action.staff.id ? action.staff : staff))};
    case 'REMOVE_STAFF':
      return {...state, staffList: state.staffList.filter(staff => (staff.id !== action.staff.id))};
    default: 
      return state;
  }
}