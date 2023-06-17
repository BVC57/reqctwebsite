
import './Sidebar.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../pages/Aboutme';
import '../pages/Cont';
import '../pages/Feedback';


const Sidebar = ({childarn}) => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

      return (
        <div>
            <nav className={sidebar ? "sidebar active" : "sidebar"}>
                <button className="hamburger" type="button" onClick={showSidebar}>
                  <div></div>
                </button>
                <ul onClick={showSidebar}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/Aboutme">About</Link></li>
                  <li><Link to="/Cont">Contact</Link></li>
                  <li><Link to="/Feedback">Feedback</Link></li>
                </ul>
             </nav> 

            <main>{childarn}</main>
        </div>
        
      )
    }

export default Sidebar