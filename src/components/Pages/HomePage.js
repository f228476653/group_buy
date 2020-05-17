import React, {useEffect}  from 'react';
import Scroll from 'components/Pages/Scroll';
import ErrorBoundry from 'components/Pages/ErrorBoundry';
import ItemCardLists from 'components/Items/ItemCardLists';
import  Header from 'components/Navigation/Header';
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'components/Modal/Modal';
import Profile from 'components/Profile/Profile';
import { userActions } from '../../actions/user.actions';

function HomePage() {
  const dispatch = useDispatch();
  // reset login status
  useEffect(() => { 
      const token = window.sessionStorage.getItem('token');
      if(token){
          dispatch(userActions.authenticationLogin(token)); 
      }
  }, [])
  const isToggle = useSelector(state=>state.profileReducer.toggle)
  return (
    <div className="App">
        <Header/>
          <Scroll>
            <ErrorBoundry>
              {isToggle && 
                  <Modal>
                    <Profile/>
                  </Modal>
              }
              <ItemCardLists/>
            </ErrorBoundry>
          </Scroll>
    </div>
  );
}

export default HomePage;