import { userConstants } from '../constants/user.constants'

// state 它接收先前的 state 和一個 action，然後回傳下一個 state
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch(action.type){
        case userConstants.LOGIN_REQUEST:
            return { 
                loggedIn:true,
                user:action.user
            }
        case userConstants.LOGIN_SUCCESS:
            console.log('LOGIN_SUCCESS')
            console.log(state)
            return { 
                loggedIn:true,
                user:action.user
            }
        case userConstants.LOGIN_FAILURE:
            return { loggedIn:false };
        case userConstants.LOGOUT:
            return { loggedIn:false };
        default:
            return state
    }
}
 