import {config} from '../config';

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
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
    }

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user){
    console.log('123123')
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

export const userService ={
    login,
    logout,
    register,
    update
};