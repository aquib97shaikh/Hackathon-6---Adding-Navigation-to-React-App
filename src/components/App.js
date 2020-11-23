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
              
            </BrowserRouter>
          </div>
        );
    }
} 
const LinkTemplate = () => {
  return (
    <div className="menu-div">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
 
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NoMatch} />
      </Switch>
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
        <h1>You are home.</h1>
      </div>
    );
}
const  About=(props)=>{
    console.log("About");
    return (
      <div>
        <h1>You are on the about page.</h1>
      </div>
    );
}

export function LocationDisplay(){

  let {pathname} = useLocation();
    return <h1 data-testid="location-display">{pathname}</h1>;
}

export default App;
