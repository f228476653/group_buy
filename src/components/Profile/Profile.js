import React from 'react';
import './Profile.css'

const Profile = React.memo(({toggle}) => {
    return(
        <div className="br3 ba b-black-10 mv4 w-100 w-50-m w-25-l mw6">
            <button onClick={toggle}> click</button>
        </div>
        );
});
    

export default Profile;