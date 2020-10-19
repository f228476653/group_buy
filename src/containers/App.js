import React,{ useEffect }  from 'react';
import Register from 'components/Register/Register'
import Login from 'components/Login/Login'
import Nav from 'components/Navigation/Nav'
import HomePage from 'components/Pages/HomePage'
import ItemCardList from 'components/Items/ItemCardList'
import  Header from 'components/Navigation/Header';
//import { useLocation } from "react-router-dom";
import ErrorBoundry from 'components/Pages/ErrorBoundry';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'components/Modal/Modal';
import Profile from 'components/Profile/Profile';
import { history } from '../utils/history';

import { alertActions } from '../actions/alert.actions'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  const alert = useSelector(state => state.alertReducer);
  const dispatch = useDispatch();
  useEffect(() => {
      history.listen((location, action) => {
        dispatch(alertActions.clear());
    });
}, []);
  const isToggle = useSelector(state=>state.profileReducer.toggle)

  return (
    <div className="App">

        <Router history={history}>
          {alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
        <div>
          <ErrorBoundry>
            <Header/>
            <Nav/>           
                {isToggle && 
                    <Modal>
                      <Profile/>
                    </Modal>
                }
            </ErrorBoundry>
          <hr />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/itemCardList" component={ItemCardList} />
            <Redirect from="*" to="/" />
          </Switch>
          
        </div>
      </Router>
    </div>
  
  );
}

export default App;
