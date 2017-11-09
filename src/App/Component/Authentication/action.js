export const userLogin = credential => dispatch =>
  fetch('http://localhost:5000/authenticate', {
    method: 'POST',
    body: JSON.stringify(credential),
    headers: {
      'Content-Type': 'Application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: 'AUTHENTICATE_USER',
        staff: data
      });
    });
