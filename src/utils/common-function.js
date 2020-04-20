//import cookie from 'js-cookie';

export const signin = async (email, password) =>
  fetch('http://localhost:3000/signin', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(data => {
      if (data.userId && data.success) {
        //cookie.set('token', data.token, { expires: 1 });
      }
    })
    .catch(console.log);