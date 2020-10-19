import React, {useEffect}  from 'react';
import ErrorBoundry from 'components/Pages/ErrorBoundry';
import CarouselSlide from 'components/Operation/CarouselSlide';
import  Header from 'components/Navigation/Header';
import  Nav from 'components/Navigation/Nav';
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'components/Modal/Modal';
import Profile from 'components/Profile/Profile';
import Footer from 'components/Pages/Footer';
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
  return (
    <div className="App">
        <CarouselSlide/>
        <Footer/>
    </div>
  );
}

export default HomePage;