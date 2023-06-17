
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './pages/Aboutme'
import './pages/Feedback'
import { Hearders } from './componets/Hearders';
import Bottomfooter from './componets/Bottomfooter';
import Aboutme from './pages/Aboutme';
import Feedback from './pages/Feedback';
import { Home } from './pages/Home';
 import { Cont } from './pages/Cont';
import { Register } from './componets/Register';
import { Loginpage } from './componets/Loginpage';
import Sendotp from './componets/Sendotp';
import { Forgotpass } from './componets/Forgotpass';






function App() {
  return (
    <div className='App'>
         <Router>
          <Hearders/> 
            <Routes>
                        <Route exact path="/" element= { <Home/>}/>
                        <Route exact path="/Aboutme" element= { <Aboutme/>}/>
                        <Route exact path="/Feedback" element= { <Feedback/>}/> 
                        <Route exact path="/Loginpage" element= { <Loginpage/>}/> 
                        <Route exact path="/Sendotp" element= {<Sendotp/>}/>
                        <Route exact path="/Forgotpass" element= { <Forgotpass/>}/>  
                        <Route exact path="/Cont" element= { <Cont/>}/>
                        <Route exact path="/Register" element= {<Register/>}/>

            </Routes>

          </Router>
          
      </div>
  );
}

export default App;
