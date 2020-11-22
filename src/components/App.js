import React, {Component, useState} from "react";
import '../styles/App.css';
import {
    BrowserRouter ,
    Switch,
    Route,
    Link,
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
              <LocationDisplay />

              <Switch>
                <Route path="/about">
                  <>
                    <LinkTemplate />
                    <About />
                  </>
                </Route>
                <Route exact path="/">
                  <>
                    <LinkTemplate />
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
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/aa">not linked</Link>
          </li>
          <li>
            <Link to="/aae">bkl</Link>
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
