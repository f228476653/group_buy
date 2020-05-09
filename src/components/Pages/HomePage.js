import React  from 'react';
import Scroll from 'components/Pages/Scroll';
import ErrorBoundry from 'components/Pages/ErrorBoundry';
import ItemCardLists from 'components/Items/ItemCardLists';
import  Header from 'components/Navigation/Header';
import { useSelector } from 'react-redux'
import Modal from 'components/Modal/Modal';
import Profile from 'components/Profile/Profile';


function HomePage() {
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