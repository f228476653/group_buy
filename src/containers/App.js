import React,{useState, useEffect, useCallback }  from 'react';
import Register from 'components/Register/Register'
import Login from 'components/Login/Login'
import HomePage from 'components/Pages/HomePage'
//import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from '../utils/history';
import { alertActions } from '../actions/alert.actions'

function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();
  useEffect(() => {
      history.listen((location, action) => {
        dispatch(alertActions.clear());
    });
}, []);

  return (
    <div className="App">
        {alert &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
        }        
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
