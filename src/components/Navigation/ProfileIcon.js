import React ,{useState, useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import { profileAction } from 'actions/profile.action'



function ProfileIcon() {
    const dispatch = useDispatch()
    const isToggle = useSelector(state=>state.profileReducer.toggle)
    const CustomToggle = React.forwardRef(({ children,onClick }, ref) => (
        <Button ref={ref} variant="link" style={{margin:'0', padding:'0'}}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}>
          {children}
        </Button>
      ));
    function toggleProfile(){
        dispatch(profileAction.profileToggle(isToggle))
    }
    return (
        <div className="tc pa0">
          <Dropdown alignRight>
            <Dropdown.Toggle className="bg-dark-gray" as={CustomToggle} >
                <img src="http://tachyons.io/img/logo.jpg" className="br-100 ba h3 w3 dib pa0 mr0" alt="avatar"/>
            </Dropdown.Toggle>
        
            <Dropdown.Menu className="b--transparent shadow-5">
                <Dropdown.Item eventKey="1">My orders</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={toggleProfile}>View Profile</Dropdown.Item>
                <Dropdown.Item eventKey="3" href="/login">Sign Out</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>

    );


}
export default ProfileIcon;