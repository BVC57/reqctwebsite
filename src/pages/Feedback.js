import React from 'react'
import { Link } from 'react-router-dom'
import pdf from '../images/backend.png'
import Bottomfooter from '../componets/Bottomfooter'
import { Loginpage } from '../componets/Loginpage'
import { Forgotpass } from '../componets/Forgotpass'
import {Sendotp} from '../componets/Sendotp';



const Feedback = () => {
  return (
    <div>
        <h1>Feedback  Page</h1>
          
        <img src={pdf} height={300} width={500}/>
        <h1>Wellcome our website</h1>
       <Sendotp/>

        <Bottomfooter/>
    </div>
  )
}

export default Feedback