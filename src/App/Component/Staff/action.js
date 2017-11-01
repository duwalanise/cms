export const fetchStaffList = () =>
dispatch =>
  fetch('http://localhost:5000/staffs')
  .then(res =>res.json())
  .then(data=> {
    dispatch({
      type: 'FETCH_STAFF_LIST',
      staffList: data,
    });
  });

export const addStaff = (staff) =>
dispatch =>
  fetch('http://localhost:5000/staffs', {
    method: 'POST',
    body: JSON.stringify(staff),
    headers: {
      'Content-Type': 'Application/json'
    }
  })
  .then(res =>res.json())
  .then(data=> {
    dispatch({
      type: 'ADD_STAFF',
      staff: data,
    });
  });

export const updateStaff = (staff) =>
dispatch =>
  fetch(`http://localhost:5000/staffs/${staff.id}`, {
    method: 'PUT',
    body: JSON.stringify(staff),
    headers: {
      'Content-Type': 'Application/json'
    }
  })
  .then(res =>res.json())
  .then(data=> {
    dispatch({
      type: 'UPDATE_STAFF',
      staff: data,
    });
  });

export const removeStaff = (staff) =>
  dispatch =>
    fetch(`http://localhost:5000/staffs/${staff.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/json'
      }
    })
    .then(res =>res.json())
    .then(data=> {
      dispatch({
        type: 'REMOVE_STAFF',
        staff,
      });
    });