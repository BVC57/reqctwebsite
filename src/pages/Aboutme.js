import React from 'react'
import { Link } from 'react-router-dom'
import Hearders from '../componets/Hearders'
import pa from '../images/fetch.png'
import Bottomfooter from '../componets/Bottomfooter'
import { Loginpage } from '../componets/Loginpage'



const Aboutme = () => {
  return (
    <div>
         {/* <Hearders/> */}
        <h1> About Page</h1>
        <img src={pa} height={300} width={500}/>
        <h1>Wellcome our website</h1>

        <Loginpage/>

        <Bottomfooter/>
    </div>
  )
}

export default Aboutme