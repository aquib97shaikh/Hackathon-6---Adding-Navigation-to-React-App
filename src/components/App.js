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
      {/* <nav className="menu-nav">
        <ul className="menu">
          <li> */}
            <NavLink to="/">Home</NavLink>
          {/* </li>
          <li> */}
            <NavLink to="/about">About</NavLink>
          {/* </li> */}
          {/* <li>
            <NavLink to="/about/66">not linked</NavLink>
          </li>
          <li>
            <NavLink to="/aae">bkl</NavLink>
          </li> */}
        {/* </ul>
      </nav> */}
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
        {/* <Route path={`${props.match.path}/:id`} component = {AboutId} /> */}
      </div>
    );
}

const LocationDisplay = () => {

    let location = useLocation();
    return <h1 data-testid="location-display">{location.pathname}</h1>;
}
// const AboutId =(props)=>{
//   console.log("id is "+props.match.params.id);
//   return <div>
//     <h1>{props.match.params.id}</h1>
//   </div>
// }
export default App;
