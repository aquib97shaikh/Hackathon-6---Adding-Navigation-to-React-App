import React, {Component, useState} from "react";
import '../styles/App.css';
import {
    BrowserRouter ,
    Switch,
    Route,
    NavLink,
    useLocation
  } from "react-router-dom";

  
class App extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        console.log("dde");
        

        return (
          <div id="main">
            <BrowserRouter>
              <LinkTemplate />
              <LocationDisplay />
              <Switch>
                <Route path="/about">
                  <>
                    <About />
                  </>
                </Route>
                <Route exact path="/">
                  <>
                    <Home />
                  </>
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        );
    }
} 
const LinkTemplate = () => {
  return (
    <div className="menu-div">
      
      <nav className="menu-nav">
        <ul className="menu">
          <li>
            <NavLink to="/" activeStyle={{ color: 'red', }}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/aa">not linked</NavLink>
          </li>
          <li>
            <NavLink to="/aae">bkl</NavLink>
          </li>
        </ul>
      </nav>
      
    </div>
  );
}
const  NoMatch=()=>{
    console.log("noMatch");
    return (
      <div>
        <h1>No match</h1>
      </div>
    );
}

const  Home=()=>{
    console.log("Home");
    return (
      <div>
       <h1> You are home.</h1>
      </div>
    );
}
const  About=()=>{
    console.log("About");
    return (
      <div>
        <h1>You are on the about page.</h1>
      </div>
    );
}

const LocationDisplay = () => {

    let location = useLocation();
    return <div data-testid="location-display"><h1>{location.pathname}</h1></div>;
}

export default App;
