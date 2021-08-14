import React from "react"
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login"
import Home from './pages/Home'
import Movie from "./pages/movie";
import Aktor from "./pages/actor";

export default class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/actor" component={Aktor} />
      </Switch>
    )
  }
}
