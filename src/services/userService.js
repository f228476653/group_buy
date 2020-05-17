import {config} from '../config';
export const userService ={
    login,
    logout,
    register,
    update,
    getUserById,
    authLogin
}
function login(signinEmail,signinPassword){
    // fetch('http://localhost:3000/signin', {
    //         method: 'post',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //         email: signinEmail,
    //         password: signinPassword
    //         })
    //     }).then(response => response.json())
    const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:signinEmail, password:signinPassword })
    };
    return fetch(`${config.ServerSettings.apiUrl}/signin`, requestOptions)
        //為什麼不用.then(res =>handleResponse(res))
        .then(handleResponse)
        .then(data => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            // localStorage.setItem('user', JSON.stringify(user));
            return data;
        });
    }

function authLogin(token){
    const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json', 'Authorization': token },
        body: JSON.stringify({ 'token':token })
    };
    return fetch(`${config.ServerSettings.apiUrl}/signin`, requestOptions)
        //為什麼不用.then(res =>handleResponse(res))
        .then(handleResponse)
        .then(data => {
            return data;
        })
    }

function getUserById(data){
    const requestOptions = {
        method: 'get',
        headers: { 'Content-Type': 'application/json' ,
                'Authorization': data.token }
    };
    return fetch(`${config.ServerSettings.apiUrl}/profile/${data.userId}`, requestOptions)
        //為什麼不用.then(res =>handleResponse(res))
        .then(handleResponse)
        .then(user => {
            return user;
        })
}

function logout() {
    window.sessionStorage.removeItem('token');
}

function register(user){
    const requestOptions = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user })
    };
    console.log(user)
    return fetch(`${config.ServerSettings.apiUrl}/register`, requestOptions)
    .then(handleResponse)
    .then(res =>{
        return res;
    });
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        //headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

function handleResponse(response){
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

