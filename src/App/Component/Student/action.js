import { BASE_URL } from '../../config';

export const fetchStudentList = () => dispatch =>
  fetch(`${BASE_URL}/mis/students`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'FETCH_STUDENT_LIST',
        studentList: data.student
      });
    });

export const addStudent = student => dispatch =>
  fetch(`${BASE_URL}/mis/students`, {
    method: 'POST',
    body: JSON.stringify(student),
    headers: {
      'Content-Type': 'Application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'ADD_STUDENT',
        student: data.data
      });
    });

export const updateStudent = student => dispatch =>
  fetch(`${BASE_URL}/mis/students/${student.id}`, {
    method: 'PUT',
    body: JSON.stringify(student),
    headers: {
      'Content-Type': 'Application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'UPDATE_STUDENT',
        student: data.data
      });
    });

export const removeStudent = student => dispatch =>
  fetch(`${BASE_URL}/mis/students/${student.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'REMOVE_STUDENT',
        student
      });
    });
