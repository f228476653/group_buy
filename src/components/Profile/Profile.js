import React from 'react';
import './Profile.css'

const Profile = ({toggleProfile},user) => {
    return(
        <div className="profile-modal">
            <div className="pa4 black-80">
                <div className="measure">
                    <fieldset id="profile" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">My profile</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input
                        className="pa2 input-reset ba bg-transparent w-100"
                        type="text"
                        name="name"
                        id="name"
                        placeholder={user.name}
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
                        placeholder={user.cellphone}
                        />
                    </div>

                    </fieldset>
                    <div className="mt4" style={{display:'flex',justifyContent: 'space-evenly'}}>
                        <button onClick={() => toggleProfile()}>Save</button>
                        <button onClick={() => toggleProfile()}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        );
}
    

export default Profile;