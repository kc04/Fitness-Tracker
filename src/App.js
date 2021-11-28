import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import Tdee from './components/Tdee/Tdee'
import OneRepMax from './components/OneRepMax/OneRepMax'
import Macros from './components/Macros/Macros'
import TargetHeartRate from './components/TargetHeartRate/TargetHeartRate'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App(props){
  return(
    <BrowserRouter>
      <div>
        <nav className="navbar  navbar-default navbar-fixed-top">
          <div className="container-960">
            <div className="navbar-header">
              <Link to="/">Fitness Calculations</Link>
            </div>
            <ul className="pull-right">
              <li><Link to="/tdee-calculator">TDEE</Link></li>
              <li><Link to="/one-rep-max-calculator">One Rep Max</Link></li>
              <li><Link to="/macros-calculator">Macros</Link></li>
              <li><Link to="/target-heart-rate">Target Heart Rate</Link></li>
             
            </ul>
          </div>
        </nav>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/tdee-calculator" component={Tdee}/>
        <Route path="/one-rep-max-calculator" component={OneRepMax}/>
        <Route path="/macros-calculator" component={Macros}/>
        <Route path="/target-heart-rate" component={TargetHeartRate}/>
       
        
      </div>
    </BrowserRouter>
  )
}

export default App
