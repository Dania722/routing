import React from   "react";

// import SignInOutDashContainer from './containers/indeex';
import Login from "./components/login"
import Signup from './components/signup';
import Dash from "./components/dashboard";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link , useHistory
  } from "react-router-dom";

export default function Approuting ()
{
    return(
        <Router>
            <Routes>
            <Route  path="/login" element={ <Login/> } />
            <Route  path="/signup" element={ <Signup/> } />
            <Route  path="/dashboard" element={ <Dash/> } />
            <Route path="*" return ={() => "404 not found!"} />
            </Routes>
        </Router>
    )
}
