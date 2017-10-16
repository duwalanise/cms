export const fetchStudentList = () =>
  dispatch =>
    fetch('http://localhost:5000/students')
    .then(res =>res.json())
    .then(data=> {
      dispatch({
        type: 'FETCH_STUDENT_LIST',
        studentList: data,
      });
    });

export const addStudent = (student) =>
  dispatch =>
    fetch('http://localhost:5000/students', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'Application/json'
      }
    })
    .then(res =>res.json())
    .then(data=> {
      dispatch({
        type: 'ADD_STUDENT',
        student: data,
      });
    });

export const updateStudent = (student) =>
  dispatch =>
    fetch(`http://localhost:5000/students/${student.id}`, {
      method: 'PUT',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'Application/json'
      }
    })
    .then(res =>res.json())
    .then(data=> {
      dispatch({
        type: 'UPDATE_STUDENT',
        student: data,
      });
    });

  export const removeStudent = (student) =>
    dispatch =>
      fetch(`http://localhost:5000/students/${student.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'Application/json'
        }
      })
      .then(res =>res.json())
      .then(data=> {
        dispatch({
          type: 'REMOVE_STUDENT',
          student,
        });
      });