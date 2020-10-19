import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
function Nav(){
    return(
        <header className="bg-white black-80 tc pv4 avenir">
        <a href="" className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
        </a>
        <h1 className="mt2 mb0 baskerville i fw1 f1">Title</h1>
        <h2 className="mt2 mb0 f6 fw4 ttu tracked">Your amazing subtitle</h2>
        <nav className="bt bb tc mw7 center mt4">
            <Link to="/" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">Home</Link>
            <Link to="/itemCardList" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">New !!</Link>
            <Link to="/itemCardList" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">All products</Link>
            <Link to="/about" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">About</Link>
            <Link to="/Contact" className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l">Contact</Link>
        </nav>
      </header>
    );
}


export default Nav;