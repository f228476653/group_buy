import { userConstants } from '../constants/user.constants';
import { userService } from '../services/userService'
import { alertActions } from './alert.actions'
import { history } from '../utils/history'

function login(email, password) {
    return dispatch=> {
        dispatch(request({ email }));
        userService.login(email,password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
            },
            //error怎樣？
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            
            );
    };
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(){
    userService.logout()
    return {
        type: userConstants.LOGOUT
    }
}

function register(user){
    return dispatch=> {
        dispatch(request(user))
        console.log(user)
        userService.register(user)
        .then(user => {
                dispatch(success());
                history.push('/login')
                dispatch(alertActions.success('Registration successful'))
            },
            error=>{
                dispatch(failure(error))
                dispatch(alertActions.error(error.toString()))
            })
    };
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
export const userActions = {
    login,
    logout,
    register
}