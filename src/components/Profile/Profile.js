import React from 'react';
import './Profile.css'
import { useSelector, useDispatch } from 'react-redux'
import { profileAction } from 'actions/profile.action'

function Profile() {
    const dispatch = useDispatch()
    function toggleProfile(){
        dispatch(profileAction.profileToggle(true))
    }
    const user = useSelector(state => state.authentication.user);
    return(
        <div className="profile-modal">
            <div className="pa4 black-80">
                <div className="measure">
                    <fieldset id="profile" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">My profile</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">First Name</label>
                        <input
                        className="pa2 input-reset ba bg-transparent w-100"
                        type="text"
                        name="name"
                        id="name"
                        placeholder={user.first_name}
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Last Name</label>
                        <input
                        className="pa2 input-reset ba bg-transparent w-100"
                        type="text"
                        name="name"
                        id="name"
                        placeholder={user.last_name}
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input
                        className="pa2 input-reset ba bg-transparent w-100"
                        type="email"
                        name="email-address"
                        id="email-address"
                        placeholder={user.email}
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Phone Number</label>
                        <input
                        className="pa2 input-reset ba bg-transparent w-100"
                        type="email"
                        name="email-address"
                        id="email-address"
                        placeholder={user.phoneNumber}
                        />
                    </div>

                    </fieldset>
                    <div className="mt4" style={{display:'flex',justifyContent: 'space-evenly'}}>
                        <button onClick={toggleProfile}>Save</button>
                        <button onClick={toggleProfile}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        );
}
    

export default Profile;