import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import Characters from './screen/Characters'
import Header from "./components/Header"
import Home from "./screen/Home"
import NoMatch from './screen/NoMatch'
import Profil from './screen/Profil'
import Signin from "./screen/Signin"


import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route exact path="/characters" component={Characters}/>
          <Route path="/characters/:id" component={Profil}/>

          <Route component={NoMatch}/>

        </Switch>
      </div>
    )
  }
}

export default App
