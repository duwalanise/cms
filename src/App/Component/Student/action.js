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