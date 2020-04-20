import React ,{useState, useEffect }from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const ProfileIcon = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    return (
        <div class="tc pa4">
            <img src="http://tachyons.io/img/logo.jpg" class="br-100 pa1 ba b--black-10 h3 w3" alt="avatar"/>
            <DropdownButton id="dropdown-basic-button" title="">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </div>

    );


}
export default ProfileIcon;