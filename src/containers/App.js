import React,{useState, useEffect }  from 'react';
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
  const [isSignIn, setSignIn] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/products')
        .then( response => response.json() )
        .then( data => setItems(data))
        //.catch( error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
  });
  return (
    <div className="App">
        <Header isSignIn={isSignIn} setIsProfileOpen={setIsProfileOpen}/>
          <Scroll>
            <ErrorBoundry>
              <ItemCardLists/>
              {isProfileOpen && 
                <Modal>
                  <Profile isProfileOpen={isProfileOpen} setIsProfileOpen={setIsProfileOpen}/>
                </Modal>
              }
            </ErrorBoundry>
          </Scroll>
    </div>
  );
}

export default App;
