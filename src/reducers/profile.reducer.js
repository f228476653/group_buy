import { profileConstants } from '../constants/profile.constants'

export function profileReducer(initalstate = {},action){
    switch(action.type){
        case profileConstants.TOGGLE:
            return {
                type: 'profile-toggle',
                toggle: !action.isToggle
            };
        default:
            return initalstate
    }
}

// 請記住這些 reducer 每一個都管理它所擁有的全域 state 一部分。每個 reducer 的 state 參數都不一樣，並對應到它管理的部分 state。