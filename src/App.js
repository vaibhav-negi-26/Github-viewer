import React, { useState } from "react"
import { UserContext } from "./Context/UserContext"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.min.css"
import "./App.css"

// import firebase
import firebase from "firebase/app"
import "firebase/auth"

// importing pages
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import PageNotFound from "./pages/PageNotFound"
import Footer from "./Layout/Footer"
import Header from "./Layout/Header"

// init firebase
import FireBaseConfig from "./Config/FireBaseConfig"
firebase.initializeApp(FireBaseConfig)

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </UserContext.Provider>
      <Footer />
    </Router>
  )
}

export default App
