import React  from 'react';

import ProfileIcon from 'components/Navigation/ProfileIcon';

const Header = (props) => {
    if (!props.isSignIn) {
        console.log(props)
        return (
            <nav className="flex justify-between bb b--white-10 bg-dark-gray">
                <a className="link black-70 hover-white no-underline flex items-center pa3" href={'/'} />
                <div className="flex-grow pa3 flex items-center">
                    <a id="register" className="f6 link dib white dim mr3 mr4-ns hover-blue" href={'/'}>About</a>
                    <a id="signIn" className="f6 link dib white dim mr3 mr4-ns hover-blue" href={'/login'}>Sign In</a>
                    <a className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href={'/register'}>Register</a>
                </div>
            </nav>
        );
    }else {
        return (
            <nav className="flex justify-between bb b--white-10 bg-dark-gray">
                <a className="link black-70 hover-white no-underline flex items-center pa3" href={'/'} />
                <div className="flex-grow pa3 flex items-center">
                    <label>Hi, {props.user.name}</label>
                </div>
                <div className="flex-grow pa3 flex items-center">
                    <a id="register" className="f6 link dib white dim mr3 mr4-ns hover-blue" href={'/'}>About</a>
                    <ProfileIcon toggleProfile={props.toggleProfile} />
                </div>
            </nav>
        );

    }
}

export default Header;