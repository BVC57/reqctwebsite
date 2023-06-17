import React from 'react'
import './header.css'
import pdf from '../images/pdf.png'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

export const Hearders = () => {
  return (
    <div>
      <Sidebar/>
        <div className="header">
            <div className='himg'><img src={pdf} height={50} width={100}/></div> 
             <h1>Document Parsing System</h1>
                <nav>
                    <ul className="hul">
                    <li className="hli"><Link to="/" >Home</Link></li>
                    <li><Link to="/Aboutme" >About</Link></li>
                    <li><Link to="/cont" >Contact</Link></li>
                    <li><Link to="/Feedback" >Feedback</Link></li>
                    </ul>
                </nav>
                <div>
                    <button className='rbtn'><Link to="/Register">Register Here</Link></button>
                </div>

     </div>
</div>
  )
}
export default Hearders
