import React,{useState, useEffect, useCallback }  from 'react';
import Header from 'components/Navigation/Header';
import Scroll from 'components/Pages/Scroll';
import ErrorBoundry from 'components/Pages/ErrorBoundry';
import ItemCardLists from 'components/Items/ItemCardLists';
import Modal from 'components/Modal/Modal';
import Profile from 'components/Profile/Profile'
import { useLocation } from "react-router-dom";


function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSignIn, setSignIn] = useState(false);
  const location = useLocation();
  
  const [user, setUser] = useState(() =>{
    if(location && location.state && location.state.user){
      console.log(location);
      return location.state.user;
    }
    return {}
  });



  useEffect(() => {
    if(location.state){
      let user= location.state.user;
      setUser({user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phonenumber,
        joined: user.joined
      }})
      console.log('2323');
    }
  },[location]);

  const toggleProfile = useCallback(() => {
    setIsProfileOpen(!isProfileOpen);
    console.log(isProfileOpen);
  }, [isProfileOpen])

  return (
    <div className="App">
        <Header isSignIn={isSignIn} toggleProfile={toggleProfile} isProfileOpen={isProfileOpen} user={user}/>
          <Scroll>
            <ErrorBoundry>
              {isProfileOpen && 
                  <Modal>
                    <Profile toggleProfile={toggleProfile} user={user}/>
                  </Modal>
              }
              <ItemCardLists/>
            </ErrorBoundry>
          </Scroll>
    </div>
  );
}

export default App;
