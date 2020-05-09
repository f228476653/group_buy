import { profileConstants } from 'constants/profile.constants';
function profileToggle(isToggle ){ return { type: profileConstants.TOGGLE, isToggle } }


export const profileAction = {profileToggle}