import React,{useState, useEffect, useCallback, createContext, useContext }  from 'react';
import Header from 'components/Navigation/Header';
import Scroll from 'components/Pages/Scroll';
import ErrorBoundry from 'components/Pages/ErrorBoundry';
import ItemCardLists from 'components/Items/ItemCardLists';
import Modal from 'components/Modal/Modal';
import Profile from 'components/Profile/Profile'


function App() {
  const [items, setItems] = useState([]);
  //const [user, setUser] = useState({});
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSignIn, setSignIn] = useState(true);
  // useEffect(() => {
  //   fetch('http://localhost:3000/products')
  //       .then( response => response.json() )
  //       .then( data => setItems(data))
  //       //.catch( error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
  // });
  const toggleProfile = useCallback(() => {
    setIsProfileOpen(!isProfileOpen);
    console.log(isProfileOpen);
  }, [isProfileOpen])

  return (
    <div className="App">
        <Header isSignIn={isSignIn} toggleProfile={toggleProfile} isProfileOpen={isProfileOpen}/>
          <Scroll>
            <ErrorBoundry>
              <ItemCardLists/>
              {isProfileOpen && 
                  <Modal>
                    <Profile toggleProfile={toggleProfile}/>
                  </Modal>
              }
            </ErrorBoundry>
          </Scroll>
    </div>
  );
}

export default App;
