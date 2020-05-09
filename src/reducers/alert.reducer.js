import { alertConstants } from '../constants/alert.constants'

export function alertReducer(state = {},action){
    switch(action.type){
        case alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message    
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
}

// 請記住這些 reducer 每一個都管理它所擁有的全域 state 一部分。每個 reducer 的 state 參數都不一樣，並對應到它管理的部分 state。